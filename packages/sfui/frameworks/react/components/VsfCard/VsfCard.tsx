import classNames from 'classnames';
import { VsfCardSize, VsfCardProps } from './types';
import VsfButton from '../VsfButton/VsfButton';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton/types';

export default function VsfCard({
  onClick,
  title,
  size = VsfCardSize.base,
  link,
  imgSrc,
  imgAttr = {},
  description,
  buttonText,
  className = '',
  slotImg,
  ...attributes
}: VsfCardProps): JSX.Element {
  return (
    <div
      data-testid="card"
      className={classNames('vsf-card group', `vsf-card--size-${size}`, className)}
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
        {description && (
          <p className="vsf-card__description" data-testid="card-description">
            {description}
          </p>
        )}
        {buttonText && (
          <VsfButton
            className="vsf-card__button"
            variant={VsfButtonVariant.tertiary}
            size={VsfButtonSize.sm}
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
