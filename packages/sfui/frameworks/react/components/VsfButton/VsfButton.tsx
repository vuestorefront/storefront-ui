import { forwardRef } from 'react';
import classNames from 'classnames';
import { VsfButtonSizes, VsfButtonVariants } from './types';
import type { VsfButtonProps } from './types';

const VsfButton = forwardRef<unknown, VsfButtonProps>(
  (
    {
      size = VsfButtonSizes.base,
      variant = VsfButtonVariants.primary,
      rounded,
      disabled,
      tile,
      icon,
      block,
      tag: Tag = 'button',
      onClick,
      children,
      slotPrefix,
      slotSuffix,
      link,
      className,
      ...attributes
    },
    ref,
  ) => {
    let TagInternal = Tag;
    if (link && Tag === 'button') {
      TagInternal = 'a';
    }
    const buttonClasses = classNames(
      'vsf-button',
      {
        'vsf-button--disabled': disabled,
        'vsf-button--rounded': rounded,
        'vsf-button--tile': tile,
        'vsf-button--icon': icon,
        'vsf-button--block': block,

        'vsf-button--base': size === 'base',
        'vsf-button--sm': size === 'sm',
        'vsf-button--lg': size === 'lg',

        'vsf-button--variant-primary': variant === 'primary',
        'vsf-button--variant-secondary': variant === 'secondary',
        'vsf-button--variant-tertiary': variant === 'tertiary',
      },
      className,
    );

    return (
      <TagInternal
        className={buttonClasses}
        onClick={onClick}
        ref={ref}
        role={Tag === 'a' ? 'button' : undefined}
        disabled={disabled}
        {...(link ? { href: link } : {})}
        {...attributes}
      >
        {slotPrefix && <span className="vsf-button__prefix">{slotPrefix}</span>}
        {children}
        {slotSuffix && <span className="vsf-button__suffix">{slotSuffix}</span>}
      </TagInternal>
    );
  },
);

export default VsfButton;
