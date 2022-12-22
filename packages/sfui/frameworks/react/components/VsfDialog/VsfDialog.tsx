import { useRef, useEffect } from 'react';
import classNames from 'classnames';
import type { VsfDialogProps } from './types';
import VsfButton, { VsfButtonVariants } from '../VsfButton';
import VsfIconClose from '../VsfIcons/VsfIconClose';

export default function VsfDialog({
  open,
  onClose,
  hideCloseButton,
  className,
  children,
  ...attributes
}: VsfDialogProps): JSX.Element {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleCloseDialog = () => {
    dialogRef.current?.close();
    onClose?.(false);
  };

  const onClick = (event: MouseEvent) => {
    if (event.target === dialogRef.current) {
      handleCloseDialog();
    }
  };

  useEffect(() => {
    if (!dialogRef.current) return;
    if (open && dialogRef?.current.getAttribute('open') === null) {
      dialogRef.current?.showModal();
    } else if (!open) {
      dialogRef.current?.close();
    }
  }, [open, dialogRef]);

  useEffect(() => {
    // There is no onClick event on dialogElement in JSX
    dialogRef.current?.addEventListener('click', onClick, true);

    return () => {
      dialogRef.current?.removeEventListener('click', onClick);
    };
  });

  return (
    <dialog ref={dialogRef} className="vsf-dialog" data-testid="dialog">
      <div {...attributes} className={classNames('vsf-dialog__inner', className)}>
        {hideCloseButton ? null : (
          <VsfButton
            className="vsf-dialog__btn-close"
            onClick={handleCloseDialog}
            variant={VsfButtonVariants.tertiary}
            slotPrefix={<VsfIconClose />}
          />
        )}
        {children}
      </div>
    </dialog>
  );
}
