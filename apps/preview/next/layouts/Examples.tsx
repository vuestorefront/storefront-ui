import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState, createElement } from 'react';
import useSWR from 'swr';
import {
  VsfButton,
  VsfButtonVariant,
  VsfButtonSize,
  VsfListItemMenu,
  VsfIconChevronLeft,
  VsfIconChevronRight,
} from '@storefront-ui/react';
import classNames from 'classnames';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function ExampleLayout({ children }: { children: ReactElement }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const { data: components } = useSWR<string[]>(`${router.basePath}/api/getExamples`, fetcher);

  const isDocsRoute = !router.query.docs;
  return (
    <div className="e-page-examples">
      {isDocsRoute ? (
        <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
          <header className="sidebar-heading">
            <h2>StorefrontUI v2</h2>
            <h3>React components</h3>
          </header>
          <VsfButton
            className="sidebar-toggle"
            variant={VsfButtonVariant.tertiary}
            size={VsfButtonSize.sm}
            onClick={() => setIsOpen(!isOpen)}
            slotPrefix={isOpen ? <VsfIconChevronLeft /> : <VsfIconChevronRight />}
            aria-label={isOpen ? 'Hide sidebar' : 'Open sidebar'}
            square
          />
          <ul className="sidebar-list">
            {components?.map((component) => (
              <li key={component} data-sidebar-component={component}>
                <Link href={`/examples/${component}`} legacyBehavior>
                  <VsfListItemMenu
                    className={classNames({ 'font-medium': router.pathname === `/examples/${component}` })}
                    active={router.pathname === `/examples/${component}`}
                    as="a"
                  >
                    {component}
                  </VsfListItemMenu>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {children}
    </div>
  );
}
