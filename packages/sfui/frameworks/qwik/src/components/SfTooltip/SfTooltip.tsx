import { Slot, component$, useSignal } from '@builder.io/qwik';
import { SfTooltipProps } from './types';

export const SfTooltip = component$<SfTooltipProps>(
  ({ children, label, class: _class, style, showArrow, ...tooltipOptions }) => {
    const isOpen = useSignal(false);
    // TODO
    // const { isOpen, getTriggerProps, getTooltipProps, getArrowProps } = useTooltip(tooltipOptions);

    return (
      <span /*{...getTriggerProps({ _class, style })}*/ data-testid="tooltip">
        <Slot />
        {label && isOpen && (
          <div
            // {...getTooltipProps({
            role="tooltip"
            class="bg-black px-2 py-1.5 rounded-md text-white text-xs w-max max-w-[360px] drop-shadow"
            // })}
          >
            {label}
            {showArrow && <span class="bg-black rotate-45" /*{...getArrowProps({ class: 'bg-black rotate-45' })}*/ />}
          </div>
        )}
      </span>
    );
  },
);
