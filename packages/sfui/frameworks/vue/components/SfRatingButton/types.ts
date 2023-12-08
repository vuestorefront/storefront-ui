import { SfIconSize } from '@storefront-ui/shared';

export { SfRatingButtonSize } from '@storefront-ui/shared';

export type SfRatingButtonIconSize = Extract<`${SfIconSize}`, 'base' | 'lg' | 'xl'>;
