import { useEffect } from 'react';
import { useTimeoutFn } from 'react-use';
import classNames from 'classnames';
import {
  VsfIconClose,
  VsfIconInfo,
  VsfIconError,
  VsfIconWarning,
  VsfIconCheckCircle,
} from '@sfui/sfui/frameworks/react/components/VsfIcons/index';
import VsfButton, { VsfButtonVariants } from '@sfui/sfui/frameworks/react/components/VsfButton/index';
import { VsfAlertProps, VsfAlertVariants, VsfAlertTypes } from './types';

const defaultPrefixComponent = (variant?: VsfAlertVariants) => {
  switch (variant) {
    case VsfAlertVariants.positive:
      return <VsfIconCheckCircle />;
    case VsfAlertVariants.error:
      return <VsfIconError />;
    case VsfAlertVariants.warning:
      return <VsfIconWarning />;
    default:
      return <VsfIconInfo />;
  }
};

export default function VsfAlert({
  open = false,
  onOpenChange = () => undefined,
  variant = VsfAlertVariants.gray,
  type = VsfAlertTypes.temporary,
  header,
  text,
  children,
  withShadow = false,
  hidePrefix,
  prefix,
  suffix,
  ...attributes
}: VsfAlertProps): JSX.Element | null {
  const [, cancel, reset] = useTimeoutFn(() => {
    onOpenChange(false);
  }, 5000);

  useEffect(() => {
    cancel();

    if (open && type === VsfAlertTypes.temporary) {
      reset();
    }
  }, [type, open, cancel, reset]);

  return open ? (
    <div
      role="alert"
      className={classNames(`vsf-alert vsf-alert--${variant}`, { 'vsf-alert--with-shadow': withShadow })}
      data-testid="alert"
      {...attributes}
    >
      {!hidePrefix && <div className="vsf-alert__prefix">{prefix || defaultPrefixComponent(variant)}</div>}
      <div className="vsf-alert__content">
        <div className="vsf-alert__header">{header}</div>
        {children || text}
      </div>
      <div className="vsf-alert__suffix">
        {suffix ||
          (type === VsfAlertTypes.permanent && (
            <VsfButton variant={VsfButtonVariants.tertiary} onClick={() => onOpenChange(false)}>
              <VsfIconClose />
            </VsfButton>
          ))}
      </div>
    </div>
  ) : null;
}
