import { forwardRef } from 'react';
import type { VsfButtonProps } from './types';
import classNames from 'classnames';

const VsfButton = forwardRef<unknown, VsfButtonProps>(
  (
    {
      size = 'base',
      variant = 'contained',
      color = 'primary',
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
      href,
      ...attributes
    },
    ref,
  ) => {
    if (href && Tag === 'button') {
      Tag = 'a';
    }
    const buttonClasses = classNames('vsf-button', {
      'vsf-button--disabled': disabled,
      'vsf-button--link': Tag === 'a',
      'vsf-button--rounded': rounded,
      'vsf-button--tile': tile,
      'vsf-button--icon': icon,
      'vsf-button--block': block,

      'vsf-button--base': size === 'base',
      'vsf-button--sm': size === 'sm',
      'vsf-button--lg': size === 'lg',

      'vsf-button--primary': color === 'primary',
      'vsf-button--negative': color === 'negative',
      'vsf-button--warning': color === 'warning',
      'vsf-button--gray': color === 'gray',
      'vsf-button--secondary': color === 'secondary',
      'vsf-button--positive': color === 'positive',

      'vsf-button--contained': variant === 'contained',
      'vsf-button--outlined': variant === 'outlined',
      'vsf-button--plain': variant === 'plain',
    });

    return (
      <Tag
        className={buttonClasses}
        onClick={onClick}
        ref={ref}
        role={Tag === 'a' ? 'button' : undefined}
        disabled={disabled}
        {...(href ? { href } : {})}
        {...attributes}
      >
        {slotPrefix}
        {children}
        {slotSuffix}
      </Tag>
    );
  },
);

export default VsfButton;
