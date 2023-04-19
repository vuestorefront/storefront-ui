import { Slot, component$ } from '@builder.io/qwik';
import { SfLinkProps, SfLinkVariant } from './types';

const defaultLinkTag = 'a';

export const SfLink = component$<SfLinkProps>(
  ({ as, ref, class: _class, variant = SfLinkVariant.primary, ...attributes }) => {
    const variantClasses = {
      [SfLinkVariant.primary]: 'text-primary-700 underline hover:text-primary-800 active:text-primary-900',
      [SfLinkVariant.secondary]: 'underline hover:text-primary-800 active:text-primary-900',
    };
    const Tag = as || defaultLinkTag;

    return (
      <Tag
        {...(ref ? { ref } : {})}
        className={[
          'focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm',
          variantClasses[variant],
          _class,
        ]}
        data-testid="link"
        {...attributes}
      >
        <Slot />
      </Tag>
    );
  },
);

export default SfLink;
