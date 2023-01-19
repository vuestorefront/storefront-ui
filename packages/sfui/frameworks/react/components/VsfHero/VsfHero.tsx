import classNames from 'classnames';
import { VsfHeroDirection, VsfHeroProps } from './types';

export default function Hero({
  children,
  slotMedia,
  className,
  style,
  bgImgMobileSrc,
  bgImgDesktopSrc,
  direction = VsfHeroDirection.horizontal,
}: VsfHeroProps) {
  const variables = {
    '--vsf-hero-bg-img-mobile': bgImgMobileSrc && `url(${bgImgMobileSrc})`,
    '--vsf-hero-bg-img-desktop': bgImgDesktopSrc && `url(${bgImgDesktopSrc})`,
    ...style,
  } as React.CSSProperties;

  return (
    <div style={variables} className={classNames('vsf-hero', className)} data-testid="hero">
      <div
        className={classNames('vsf-hero__container', {
          'vsf-hero__container--horizontal': direction === VsfHeroDirection.horizontal,
          'vsf-hero__container--horizontal-reverse': direction === VsfHeroDirection.horizontalReverse,
        })}
      >
        <div className="vsf-hero__media">{slotMedia}</div>
        <div className="vsf-hero__content">{children}</div>
      </div>
    </div>
  );
}
