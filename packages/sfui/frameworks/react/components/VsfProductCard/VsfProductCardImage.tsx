import type { VsfProductCardImageProps } from './types';
import { VsfProductCardSize } from './types';

export default function VsfProductCardImage({
  size = VsfProductCardSize.responsive,
  imageSrc,
  vertical = true,
  className,
  ...attributes
}: VsfProductCardImageProps) {
  const imageDimensionsVertical = () => {
    switch (size) {
      case VsfProductCardSize.sm:
        return 192;

      default:
        return 320;
    }
  };

  const imageDimensionsHorizontal = () => {
    switch (size) {
      case VsfProductCardSize.sm:
        return 128;

      default:
        return 192;
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={imageSrc}
      width={vertical ? imageDimensionsVertical() : imageDimensionsHorizontal()}
      height={vertical ? imageDimensionsVertical() : imageDimensionsHorizontal()}
      className={className}
      {...attributes}
    />
  );
}
