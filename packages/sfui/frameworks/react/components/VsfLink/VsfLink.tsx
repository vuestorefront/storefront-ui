import { Fragment, lazy, Suspense } from 'react';
import classNames from 'classnames';
import { VsfLinkVariant } from './types';
import type { LinkComponent, VsfLinkProps } from './types';
import { VsfConfigContext } from '../VsfConfig';

let DynamicLink: VsfLinkProps['tag'];
// eslint-disable-next-line consistent-return
const loadDynamic = async () => {
  try {
    const dynamic = await import('next/link');
    return dynamic.default;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Next env is not available');
  }
};

loadDynamic().then((dynamic) => {
  if (!dynamic) DynamicLink = Fragment;
  else DynamicLink = lazy(() => import('next/link'));
});

export default function VsfLink({
  tag,
  link = '',
  children,
  variant = VsfLinkVariant.primary,
  className = '',
  ...attributes
}: VsfLinkProps) {
  function isString(element?: string | LinkComponent) {
    if (!element) return true;
    return typeof element === 'string';
  }

  const AnchorElement = (
    <a
      href={link}
      className={classNames('vsf-link', `vsf-link--${variant}`, className)}
      data-testid="link"
      {...attributes}
    >
      {children}
    </a>
  );

  return (
    <VsfConfigContext.Consumer>
      {({ linkTag }) => {
        const LinkElement = tag || linkTag || DynamicLink || 'a';

        if (isString(LinkElement)) return AnchorElement;
        return (
          <Suspense>
            <LinkElement legacyBehavior href={link}>
              {AnchorElement}
            </LinkElement>
          </Suspense>
        );
      }}
    </VsfConfigContext.Consumer>
  );
}
