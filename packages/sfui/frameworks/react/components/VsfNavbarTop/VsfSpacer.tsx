import classNames from 'classnames';

// eslint-disable-next-line react/require-default-props
export default function Spacer({ className }: { className?: string }) {
  return <div className={classNames('vsf-spacer', className)} />;
}
