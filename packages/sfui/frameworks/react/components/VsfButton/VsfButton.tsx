import type { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { VsfButtonSizes, VsfButtonVariants } from './types';
import type { VsfButtonProps } from './types';

export default function VsfButton<
  T extends HTMLAnchorElement | HTMLButtonElement,
  D extends VsfButtonProps<T> = VsfButtonProps<T>,
>({
  size = VsfButtonSizes.base,
  variant = VsfButtonVariants.primary,
  rounded,
  disabled,
  greyscale,
  truncate,
  tile,
  block,
  children,
  slotPrefix,
  slotSuffix,
  link,
  type = 'button',
  className,
  onClick,
  ...attributes
}: D): JSX.Element {
  const TagInternal = (link ? 'a' : 'button') as 'button';

  return (
    <TagInternal
      className={classNames(
        'vsf-button',
        `vsf-button--${size}`,
        `vsf-button--${variant}`,
        {
          'vsf-button--disabled': disabled,
          'vsf-button--rounded': rounded,
          'vsf-button--tile': tile,
          'vsf-button--block': block,
          'vsf-button--greyscale': greyscale,
          'vsf-button--has-prefix': slotPrefix,
          'vsf-button--has-suffix': slotSuffix,
          'vsf-button--no-content': !children,
        },
        className,
      )}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      type={TagInternal === 'button' ? type : undefined}
      data-testid="button"
      {...(link ? { href: link } : { disabled })}
      {...attributes}
    >
      {slotPrefix && <span className="vsf-button__prefix">{slotPrefix}</span>}
      {truncate ? <span className={classNames({ 'vsf-button--truncate': truncate })}>{children}</span> : children}
      {slotSuffix && <span className="vsf-button__suffix">{slotSuffix}</span>}
    </TagInternal>
  );
}
