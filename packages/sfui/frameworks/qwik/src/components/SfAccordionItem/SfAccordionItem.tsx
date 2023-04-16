import { $, Slot, component$ } from '@builder.io/qwik';
import { SfAccordionItemProps } from './types';

export const SfAccordionItem = component$<SfAccordionItemProps>(
  ({ ref, open, onToggle, summaryClass, ...attributes }) => {
    const handleClick = $(() => {
      onToggle?.(!open);
    });

    return (
      <details {...(ref ? { ref } : {})} open={open} {...attributes} data-testid="accordion-item">
        <summary
          preventdefault:click
          onClick$={handleClick}
          class={[
            summaryClass,
            'list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm',
          ]}
        >
          <Slot />
        </summary>
        <Slot name="detail" />
      </details>
    );
  },
);

export default SfAccordionItem;
