import Link from 'next/link';
import { useRouter } from 'next/router';
import { createElement, ReactElement, useState } from 'react';
import useSWR from 'swr';
import { VsfButton, VsfButtonVariants, VsfButtonSizes } from '@storefront-ui/react/components/VsfButton';
import { VsfListItemMenu } from '@storefront-ui/react/components/VsfListItemMenu';
import { VsfIconChevronLeft, VsfIconChevronRight } from '@storefront-ui/react/components/VsfIcons/index';

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
            variant={VsfButtonVariants.tertiary}
            size={VsfButtonSizes.sm}
            onClick={() => setIsOpen(!isOpen)}
            slotPrefix={isOpen ? <VsfIconChevronLeft /> : <VsfIconChevronRight />}
          />
          <ul className="sidebar-list">
            {components?.map((component) => (
              <li key={component} data-sidebar-component={component}>
                {/* TODO: Redo after VsfListItemMenu uses VsfLink internall */}
                {/* currently there is no way to use Next/Link & VsfListItemMenu together due to their onClick prop incompatibility */}
                <Link href={`/examples/${component}`} legacyBehavior>
                  {createElement(({ onClick }: { onClick: (e: Event) => void }) => (
                    <VsfListItemMenu
                      onClick={() => {
                        const event = new Event('click');
                        Object.defineProperty(event, 'currentTarget', {
                          writable: false,
                          value: document.querySelector(`li[data-sidebar-component="${component}"] a`),
                        });
                        onClick(event);
                      }}
                      label={component}
                      selected={router.pathname === `/examples/${component}`}
                      tag="a"
                    />
                  ))}
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
