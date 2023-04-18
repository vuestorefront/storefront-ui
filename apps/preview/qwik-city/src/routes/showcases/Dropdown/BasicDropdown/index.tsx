import { component$, useSignal } from '@builder.io/qwik';
import { SfButton, SfDropdown } from '@storefront-ui/qwik';

export default component$(() => {
  const openSignal = useSignal(false);

  // TODO
  // const { isOpen, toggle, close } = useDisclosure();
  return (
    <SfDropdown
      open={openSignal.value}
      onClose$={() => {
        openSignal.value = false;
      }}
    >
      <div q:slot="trigger">
        <SfButton onClick$={() => (openSignal.value = !openSignal.value)}>Toggle</SfButton>
      </div>
      <ul class="p-2 rounded bg-gray-100">
        <li>More</li>
        <li>About</li>
        <li>Settings</li>
      </ul>
    </SfDropdown>
  );
});
