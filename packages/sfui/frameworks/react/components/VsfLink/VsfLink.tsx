import { createElement, Fragment } from 'react';
import classNames from 'classnames';
import { VsfLinkVariant } from './types';
import type { LinkComponent, VsfLinkProps } from './types';
import { VsfConfigContext } from '../VsfConfig';

let DynamicLink: VsfLinkProps['tag'];
// eslint-disable-next-line consistent-return
const loadDynamic = async () => {
  try {
    const dynamic = await import('next/dynamic');
    return dynamic.default;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('Next env is not available');
  }
};

loadDynamic().then((dynamic) => {
  if (!dynamic) DynamicLink = Fragment;
  else DynamicLink = dynamic(() => import('next/link'), { suspense: true }) as LinkComponent;
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

  function createElementTypeAndProps(element: NonNullable<VsfLinkProps['tag']>) {
    if (isString(element)) return { type: Fragment, props: {} };
    return {
      type: element,
      props: {
        href: link,
        legacyBehavior: true,
        ...attributes,
      },
    };
  }

  return (
    <VsfConfigContext.Consumer>
      {({ linkTag }) => {
        const typesAndProps = createElementTypeAndProps(tag || linkTag || DynamicLink || 'a');

        return createElement(
          typesAndProps.type,
          // tuple type does not work correctly
          typesAndProps.props as any,
          <a
            href={link}
            className={classNames('vsf-link', `vsf-link--${variant}`, className)}
            data-testid="link"
            {...attributes}
          >
            {children}
          </a>,
        );
      }}
    </VsfConfigContext.Consumer>
  );
}
