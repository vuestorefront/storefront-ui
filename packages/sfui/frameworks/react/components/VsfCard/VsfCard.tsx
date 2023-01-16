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
  buttonText,
  rounded,
  className = '',
  slotImg,
  ...attributes
}: VsfCardProps): JSX.Element {
  return (
    <div
      data-testid="card"
      className={classNames('vsf-card group', `vsf-card--size-${size}`, { 'vsf-card--rounded': rounded }, className)}
      {...attributes}
    >
      {slotImg ||
        (imgSrc && (
          <a href={link} className="vsf-card__image-wrapper">
            {
              // eslint-disable-next-line jsx-a11y/alt-text
              <img className="vsf-card__image" src={imgSrc} data-testid="card-image" {...imgAttr} />
            }
          </a>
        ))}
      <div className="vsf-card__content-wrapper">
        <a href={link} className="vsf-card__title" data-testid="card-title">
          {title}
        </a>
        {description && !rounded && (
          <p className="vsf-card__description" data-testid="card-description">
            {description}
          </p>
        )}
        {buttonText && !rounded && (
          <VsfButton
            className="vsf-card__button"
            variant={VsfButtonVariants.tertiary}
            size={VsfButtonSizes.sm}
            link={link}
            onClick={onClick}
            data-testid="card-button"
          >
            {buttonText}
          </VsfButton>
        )}
      </div>
    </div>
  );
}
