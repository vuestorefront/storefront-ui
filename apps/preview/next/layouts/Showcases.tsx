import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, createElement, ReactElement, useState } from 'react';
import useSWR from 'swr';
import { VsfButton, VsfButtonVariant, VsfButtonSize } from '@storefront-ui/react/components/VsfButton';
import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import {
  VsfIconChevronLeft,
  VsfIconChevronRight,
  VsfIconExpandMore,
} from '@storefront-ui/react/components/VsfIcons/index';
import classNames from 'classnames';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function ShowcaseLayout({ children }: { children: ReactElement }) {
  const [isOpen, setIsOpen] = useState(true);
  const [groupsOpen, onChangeGroupsOpen] = useState<Record<string, boolean>>({});

  const router = useRouter();
  const { data: showcases } = useSWR<string[]>(`${router.basePath}/api/getShowcases`, fetcher);

  const REST_GROUP_NAME = 'Rest';
  type GroupsInterface = {
    [key: string]: {
      showcases: string[];
    };
  };
  const groups: GroupsInterface = (showcases || []).reduce((prev, curr) => {
    const showcasePathArray = curr.split('/');
    const showcaseName = showcasePathArray[showcasePathArray.length - 1].replace('.tsx', '');
    const groupName = showcasePathArray.length === 2 ? showcasePathArray[0] : REST_GROUP_NAME;

    if (groupName in prev) {
      prev[groupName].showcases.push(showcaseName);
    } else {
      // eslint-disable-next-line no-param-reassign
      prev[groupName] = {
        showcases: [showcaseName],
      };
    }
    return prev;
  }, {} as GroupsInterface);

  const groupItemHref = (groupName: string, showcaseName: string) =>
    `/showcases/${groupName !== REST_GROUP_NAME ? `${groupName}/` : ''}${showcaseName}`;
  const onGroupClick = (groupName: string) => {
    onChangeGroupsOpen({ [groupName]: !groupsOpen[groupName] });
  };

  const isDocsRoute = !router.query.docs;
  return (
    <div className="e-page-examples">
      {isDocsRoute ? (
        <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
          <header className="sidebar-heading">
            <h2>StorefrontUI v2</h2>
            <h3>React showcases</h3>
          </header>
          <VsfButton
            className="sidebar-toggle"
            variant={VsfButtonVariant.tertiary}
            size={VsfButtonSize.sm}
            onClick={() => setIsOpen(!isOpen)}
            slotPrefix={isOpen ? <VsfIconChevronLeft /> : <VsfIconChevronRight />}
            aria-label={isOpen ? 'Hide sidebar' : 'Open sidebar'}
          />
          <ul className="sidebar-list">
            {Object.keys(groups).map((group) => (
              <Fragment key={group}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
                <li
                  className="flex justify-between px-2 py-1 bg-gray-200 cursor-pointer select-none"
                  onClick={() => onGroupClick(group)}
                >
                  {group}
                  <VsfIconExpandMore className={`${!groupsOpen[group] ? 'rotate-180' : ''}`} />
                </li>
                {!groupsOpen[group] ? (
                  <li>
                    <ul>
                      {groups[group].showcases.map((showcaseName) => (
                        <li key={showcaseName} data-sidebar-component={showcaseName}>
                          {/* TODO: Redo after VsfListItemMenu uses VsfLink internall */}
                          {/* currently there is no way to use Next/Link & VsfListItemMenu together due to their onClick prop incompatibility */}
                          <Link href={groupItemHref(group, showcaseName)} legacyBehavior>
                            {createElement(({ onClick }: { onClick: (e: Event) => void }) => (
                              <VsfListItemMenu
                                onClick={() => {
                                  const event = new Event('click');
                                  Object.defineProperty(event, 'currentTarget', {
                                    writable: false,
                                    value: document.querySelector(`li[data-sidebar-component="${showcaseName}"] a`),
                                  });
                                  onClick(event);
                                }}
                                active={router.pathname === groupItemHref(group, showcaseName)}
                                className={classNames({
                                  'font-medium': router.pathname === groupItemHref(group, showcaseName),
                                })}
                                as="a"
                              >
                                {showcaseName}
                              </VsfListItemMenu>
                            ))}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : undefined}
              </Fragment>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="e-page">
        <div className="e-page-component">{children}</div>
      </div>
    </div>
  );
}
