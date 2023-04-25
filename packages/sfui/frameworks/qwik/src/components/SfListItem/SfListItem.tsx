import { Slot, component$ } from '@builder.io/qwik';
import { SfListItemProps, SfListItemSize } from './types';

const sizeClasses = {
  [SfListItemSize.sm]: 'text-sm px-4 py-1',
  [SfListItemSize.base]: 'px-4 py-2',
  [SfListItemSize.lg]: 'p-4',
};

const defaultListItemTag = 'li';

export const SfListItem = component$<SfListItemProps>(
  ({
    size = SfListItemSize.base,
    disabled,
    selected,
    class: _class,
    slotPrefix,
    slotSuffix,
    as,
    ref,
    showSlotPrefix,
    showSlotSuffix,
    ...attributes
  }) => {
    const Tag = as || defaultListItemTag;

    return (
      <Tag
        {...(ref ? { ref } : {})}
        class={`
          inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer 
          ${disabled ? 'cursor-not-allowed pointer-events-none text-disabled-900' : ''} 
          ${selected ? 'font-medium' : ''} 
          ${sizeClasses[size]}
          ${_class}
        `}
        disabled={disabled}
        data-testid="list-item"
        {...attributes}
      >
        {showSlotPrefix && (
          <span class={disabled ? 'text-disabled-500' : 'text-neutral-500'}>
            <Slot name="prefix" />
          </span>
        )}
        <span class="flex flex-col w-full min-w-0">
          <Slot />
        </span>
        {showSlotSuffix && (
          <span class={disabled ? 'text-disabled-500' : 'text-neutral-500'}>
            <Slot name="suffix" />
          </span>
        )}
      </Tag>
    );
  },
);
