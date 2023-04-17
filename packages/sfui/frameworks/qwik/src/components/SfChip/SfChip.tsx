import { Slot, component$, useId } from '@builder.io/qwik';
import { SfChipProps, SfChipSize } from './types';

export const SfChip = component$<SfChipProps>(
  ({
    size = SfChipSize.base,
    class: _class,
    showSlotPrefix,
    showSlotSuffix,
    inputProps,
    square = false,
    ref,
    ...attributes
  }: SfChipProps) => {
    const chipId = useId();
    const paddingForSize = (size: `${SfChipSize}`, square: boolean, showSlotPrefix: boolean, slotSuffix: boolean) => {
      switch (size) {
        case SfChipSize.sm:
          return square ? 'px-1.5' : [showSlotPrefix ? 'pl-1.5' : 'pl-3', slotSuffix ? 'pr-1.5' : 'pr-3'];
        default:
          return square ? 'px-2' : [showSlotPrefix ? 'pl-2' : 'pl-4', slotSuffix ? 'pr-2' : 'pr-4'];
      }
    };
    const getSizeClasses = (size: SfChipProps['size']) => {
      switch (size) {
        case SfChipSize.sm:
          return `text-sm py-1.5 gap-1.5`;
        default:
          return 'text-base py-2 gap-2';
      }
    };
    return (
      <>
        <input
          id={chipId}
          {...(ref ? { ref } : {})}
          class="absolute w-0 outline-none appearance-none peer"
          type="checkbox"
          {...inputProps}
        />
        <label
          for={chipId}
          class={[
            'cursor-pointer ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-next-checked:ring-2 peer-next-checked:ring-primary-700 hover:bg-primary-100 peer-next-hover:ring-primary-200 active:bg-primary-200 peer-next-active:ring-primary-300 peer-next-disabled:cursor-not-allowed peer-next-disabled:bg-disabled-100 peer-next-disabled:opacity-50 peer-next-disabled:ring-1 peer-next-disabled:ring-disabled-200 peer-next-disabled:hover:ring-disabled-200 peer-next-checked:hover:ring-primary-700 peer-next-checked:active:ring-primary-700 peer-next-focus-visible:outline',
            getSizeClasses(size),
            paddingForSize(size, square, !!showSlotPrefix, !!showSlotSuffix),
            _class,
          ]}
          data-testid="chip"
          {...attributes}
        >
          <Slot name="prefix" />
          <Slot />
          <Slot name="suffix" />
        </label>
      </>
    );
  },
);
