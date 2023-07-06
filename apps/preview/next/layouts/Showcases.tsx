import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, type ReactElement, useEffect, useState } from 'react';
import useSWR from 'swr';
import {
  SfButton,
  SfButtonVariant,
  SfButtonSize,
  SfListItem,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfIconExpandMore,
  SfInput,
  SfIconCloseSm,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useControlsSearchParams } from '../composables/utils/useControlsSearchParams';

type GroupsInterface = {
  [key: string]: {
    showcases: string[];
    open: boolean;
    visible: boolean;
  };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function ShowcaseLayout({ children }: { children: ReactElement }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isNotIframe, setIsNotIframe] = useState(false);
  const [noPaddings, setNoPaddings] = useState(false);
  const [noScale, setNoScale] = useState(false);
  const [groups, setGroups] = useState<GroupsInterface>({});
  const [search, setSearch] = useState('');

  const router = useRouter();
  const { data: showcases } = useSWR<string[]>(`${router.basePath}/api/getShowcases`, fetcher);

  const REST_GROUP_NAME = 'Rest';

  const groupItemHref = (groupName: string, showcaseName: string) =>
    `/showcases/${groupName !== REST_GROUP_NAME ? `${groupName}/` : ''}${showcaseName}`;

  useEffect(() => {
    const newGroups = (showcases || []).reduce((prev, curr) => {
      const showcasePathArray = curr.split('/');
      const showcaseName = showcasePathArray[showcasePathArray.length - 1].replace('.tsx', '');
      const groupName = showcasePathArray.length === 2 ? showcasePathArray[0] : REST_GROUP_NAME;

      const isInUrl = router.asPath === groupItemHref(groupName, showcaseName);
      if (groupName in prev) {
        prev[groupName].showcases.push(showcaseName);
        // eslint-disable-next-line no-param-reassign
        if (!prev[groupName].open) prev[groupName].open = isInUrl;
      } else {
        // eslint-disable-next-line no-param-reassign
        prev[groupName] = {
          showcases: [showcaseName],
          open: isInUrl,
          visible: true,
        };
      }
      return prev;
    }, {} as GroupsInterface);
    setGroups(newGroups);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showcases]);

  useEffect(() => {
    setGroups((currentGroups) => {
      const newState = structuredClone(currentGroups);
      // eslint-disable-next-line no-restricted-syntax
      for (const group in groups) {
        if (search) {
          const searchMatch = group.toLowerCase().startsWith(search.toLowerCase());
          newState[group].visible = searchMatch;
          newState[group].open = searchMatch;
        } else {
          newState[group].visible = true;
          newState[group].open = router.asPath.includes(groupItemHref(group, ''));
        }
      }
      return newState;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useControlsSearchParams({
    get: { s: search as any },
    set: (state) => setSearch((state as any).s),
  });

  useEffect(() => {
    if (window.self === window.top) {
      setIsNotIframe(true);
    } else {
      window.parent.postMessage('loaded', '*');

      window.addEventListener(
        'message',
        (e) => {
          if (e.data === 'no-paddings') setNoPaddings(true);
          else if (e.data === 'no-scale') setNoScale(true);
        },
        false,
      );
    }
  }, []);

  return (
    <div className="e-page-examples">
      {isNotIframe ? (
        <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
          <header className="sidebar-heading">
            <h2>StorefrontUI v2</h2>
            <h3>React Blocks</h3>
          </header>
          <SfButton
            className="sidebar-toggle"
            variant={SfButtonVariant.tertiary}
            size={SfButtonSize.sm}
            square
            onClick={() => setIsOpen(!isOpen)}
            slotPrefix={isOpen ? <SfIconChevronLeft /> : <SfIconChevronRight />}
            aria-label={isOpen ? 'Hide sidebar' : 'Open sidebar'}
          />
          <label className="sidebar-search">
            <SfInput value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search" />
            <button type="button" className="sidebar-search__button" onClick={() => setSearch('')}>
              {search ? <SfIconCloseSm className="sidebar-search__button-icon" /> : undefined}
            </button>
          </label>
          <ul className="sidebar-list">
            {Object.keys(groups).map((group) => (
              <Fragment key={group}>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
                {groups[group].visible && (
                  <li className="flex flex-col select-none">
                    <button
                      type="button"
                      className="text-left bg-gray-200 px-2 py-1 justify-between cursor-pointer"
                      onClick={() =>
                        setGroups((currentGroups) => {
                          const newState = { ...currentGroups, [group]: { ...currentGroups[group] } };
                          newState[group].open = !newState[group].open;
                          return newState;
                        })
                      }
                    >
                      {group}
                      <SfIconExpandMore className={`${groups[group].open ? 'rotate-180' : ''}`} />
                    </button>
                    {groups[group].open ? (
                      <ul>
                        {groups[group].showcases.map((showcaseName) => (
                          <li key={showcaseName} data-sidebar-component={showcaseName}>
                            <Link href={groupItemHref(group, showcaseName)} legacyBehavior>
                              <SfListItem
                                selected={router.pathname === groupItemHref(group, showcaseName)}
                                className={classNames({
                                  'font-medium': router.pathname === groupItemHref(group, showcaseName),
                                })}
                                as="a"
                              >
                                {showcaseName}
                              </SfListItem>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : undefined}
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="e-page">
        <div
          className={classNames('e-page-component', {
            'e-page-component--no-paddings': noPaddings,
            'e-page-component--no-scale': noScale,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
