import { Slot, component$ } from '@builder.io/qwik';
import { SfDropdownProps } from './types';

export const SfDropdown = component$<SfDropdownProps>((props) => {
  const { ref, open: isOpen = false, class: _class, style: containerStyle, ...dropdownOptions } = props;

  //TODO
  // const { refs, style: dropdownStyle } = useDropdown({ isOpen, ...dropdownOptions });
  const dropdownStyle = '';

  return (
    <div {...(ref ? { ref } : {})} class={['w-max', _class]} style={containerStyle} data-testid="dropdown">
      <Slot name="trigger" />
      {isOpen && (
        <div {...(ref ? { ref } : {})} style={dropdownStyle} aria-hidden={!isOpen} data-testid="dropdown-content">
          <Slot />
        </div>
      )}
    </div>
  );
});
