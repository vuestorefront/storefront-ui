import classNames from 'classnames';
import { VsfDisplayContentProps } from './types';

export default function Display({
  children,
  title,
  titleAs = 'h1',
  subtitle,
  description,
  className,
}: VsfDisplayContentProps) {
  const TitleTag = titleAs as keyof JSX.IntrinsicElements;
  return (
    <div className={classNames('vsf-display-content', className)} data-testid="display-c">
      <p className="vsf-display-content__subtitle">{subtitle}</p>
      <TitleTag className="vsf-display-content__title">{title}</TitleTag>
      <p className="vsf-display-content__description">{description}</p>
      {children}
    </div>
  );
}
