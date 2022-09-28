import { forwardRef, useCallback } from 'react';
import type { VsfButtonProps } from './types';
import { VsfButtonSizes } from './types';
import classNames from 'classnames';

const VsfButton = forwardRef<unknown, VsfButtonProps>(
  (
    {
      size = 'base',
      variant = 'primary',
      circle,
      disabled,
      tile,
      icon,
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
      'vsf-button--circle': circle,
      'vsf-button--tile': tile,
      'vsf-button--icon': icon,

      'vsf-button--base': size === 'base',
      'vsf-button--sm': size === 'sm',
      'vsf-button--lg': size === 'lg',

      'vsf-button--primary': variant === 'primary',
      'vsf-button--secondary': variant === 'secondary',
      'vsf-button--tertiary': variant === 'tertiary',
      'vsf-button--destroy-primary': variant === 'destroy-primary',
      'vsf-button--destroy-secondary': variant === 'destroy-secondary',
      'vsf-button--destroy-tertiary': variant === 'destroy-tertiary',
    });
    const onCLickHandler = (e: MouseEvent) => {
      if (disabled) {
        e.preventDefault();
      } else {
        onClick(e);
      }
    };
    return (
      <Tag
        className={buttonClasses}
        onClick={onCLickHandler}
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
