import classNames from 'classnames';
import { VsfDisplayDirection, VsfDisplayProps } from './types';

export default function Display({
  children,
  slotMedia,
  className,
  direction = VsfDisplayDirection.horizontal,
}: VsfDisplayProps) {
  return (
    <div className={classNames('vsf-display', className)} data-testid="display">
      <div className={classNames('vsf-display__container', `vsf-display__container--${direction}`)}>
        <div className="vsf-display__media">{slotMedia}</div>
        <div className="vsf-display__content">{children}</div>
      </div>
    </div>
  );
}
