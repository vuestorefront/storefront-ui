import { useEffect } from 'react';
import { useTimeoutFn } from 'react-use';
import classNames from 'classnames';
import {
  VsfIconClose,
  VsfIconInfo,
  VsfIconError,
  VsfIconWarning,
  VsfIconCheckCircle,
} from '@storefront-ui/react/components/VsfIcons/index';
import { VsfButton, VsfButtonVariant } from '@storefront-ui/react/components/VsfButton/index';
import { VsfAlertVariant, VsfAlertType } from './types';
import type { VsfAlertProps } from './types';

const defaultPrefixComponent = (variant?: `${VsfAlertVariant}`) => {
  switch (variant) {
    case VsfAlertVariant.positive:
      return <VsfIconCheckCircle />;
    case VsfAlertVariant.error:
      return <VsfIconError />;
    case VsfAlertVariant.warning:
      return <VsfIconWarning />;
    default:
      return <VsfIconInfo />;
  }
};

export default function VsfAlert({
  open = false,
  onOpenChange = () => undefined,
  variant = VsfAlertVariant.gray,
  type = VsfAlertType.temporary,
  header,
  text,
  children,
  withShadow = false,
  hidePrefix,
  slotPrefix,
  slotSuffix,
  className,
  ...attributes
}: VsfAlertProps): JSX.Element | null {
  const [, cancel, reset] = useTimeoutFn(() => {
    onOpenChange(false);
  }, 5000);

  useEffect(() => {
    cancel();

    if (open && type === VsfAlertType.temporary) {
      reset();
    }
  }, [type, open, cancel, reset]);

  return open ? (
    <div
      role="alert"
      className={classNames(`vsf-alert vsf-alert--${variant}`, { 'vsf-alert--with-shadow': withShadow }, className)}
      data-testid="alert"
      {...attributes}
    >
      {!hidePrefix && <div className="vsf-alert__prefix">{slotPrefix || defaultPrefixComponent(variant)}</div>}
      <div className="vsf-alert__content">
        <div className="vsf-alert__header" data-testid="alert-header">
          {header}
        </div>
        {children || text}
      </div>
      <div className="vsf-alert__suffix">
        {slotSuffix ||
          (type === VsfAlertType.persistent && (
            <VsfButton
              variant={VsfButtonVariant.tertiary}
              onClick={() => onOpenChange(false)}
              slotPrefix={<VsfIconClose />}
              data-testid="alert-close-button"
            />
          ))}
      </div>
    </div>
  ) : null;
}
