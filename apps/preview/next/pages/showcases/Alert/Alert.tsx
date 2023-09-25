import { ShowcasePageLayout } from '../../showcases';
// #region source
import type { PropsWithStyle } from '@storefront-ui/react';
import { type PropsWithChildren, forwardRef } from 'react';
import classNames from 'classnames';

const sizeClasses = {
  sm: 'typography-text-sm',
  base: 'typography-text-base',
};
const variantClasses = {
  primary: 'border-primary-200 bg-primary-100',
  secondary: 'border-secondary-200 bg-secondary-100',
  positive: 'border-positive-200 bg-positive-100',
  warning: 'border-warning-200 bg-warning-100',
  negative: 'border-negative-200 bg-negative-100',
  neutral: 'border-neutral-200 bg-neutral-100',
};

export interface AlertProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, PropsWithStyle, PropsWithChildren {
  size?: keyof typeof sizeClasses;
  variant?: keyof typeof variantClasses;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { className, size = 'base', variant = 'neutral', children, ...attributes } = props;

  return (
    <div
      ref={ref}
      role="alert"
      className={classNames([
        'border inline-flex items-start py-1 ps-4 pe-2 gap-2 rounded-md shadow-md',
        sizeClasses[size],
        variantClasses[variant],
        className,
      ])}
      {...attributes}
    >
      {children}
    </div>
  );
});

export default Alert;
// #endregion source
Alert.getLayout = ShowcasePageLayout;
