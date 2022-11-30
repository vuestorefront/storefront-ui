import classNames from 'classnames';
import { VsfCardSizes, VsfCardProps } from './types';
import VsfButton from '../VsfButton/VsfButton';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton/types';

export default function VsfCard({
  onClick,
  title,
  size = VsfCardSizes.base,
  link,
  imgSrc,
  imgAttr = {},
  description,
  withButton,
  buttonText,
  rounded,
  className = '',
  slotImg,
  ...attributes
}: VsfCardProps): JSX.Element {
  return (
    <div
      className={classNames('vsf-card group', `vsf-card--size-${size}`, { 'vsf-card--rounded': rounded }, className)}
      {...attributes}
    >
      {slotImg ||
        (imgSrc && (
          <a href={link} className="vsf-card__image-wrapper">
            {
              // eslint-disable-next-line jsx-a11y/alt-text
              <img className="vsf-card__image" src={imgSrc} {...imgAttr} />
            }
          </a>
        ))}
      <div className="vsf-card__content-wrapper">
        <a href={link} className="vsf-card__title">
          {title}
        </a>
        {description && !rounded && <p className="vsf-card__description">{description}</p>}
        {withButton && !rounded && (
          <VsfButton
            className="vsf-card__button"
            variant={VsfButtonVariants.tertiary}
            size={VsfButtonSizes.sm}
            link={link}
            onClick={onClick}
          >
            {buttonText}
          </VsfButton>
        )}
      </div>
    </div>
  );
}
