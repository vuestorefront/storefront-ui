import { component$, useSignal } from '@builder.io/qwik';
import { SfInput } from '@storefront-ui/qwik';

export default component$(() => {
  const valueSignal = useSignal('value');
  return (
    <>
      <label>
        <span class="text-sm font-medium">Label</span>
        <SfInput
          value={valueSignal.value}
          onChange$={(event) => {
            valueSignal.value = event.target.value;
          }}
          wrapperClass="!bg-disabled-100 !ring-disabled-300 !ring-1"
          readOnly
        />
      </label>
      <div class="flex justify-between">
        <div>
          <p class="text-xs text-neutral-500 mt-0.5">Help Text</p>
        </div>
      </div>
    </>
  );
});
