import * as React from 'react';
import classNames from 'classnames';
import { SfListItem, useDisclosure, useDropdown, useVirtualFocus } from '@storefront-ui/react';

type SelectOption = {
  label: string;
  value: string;
};

const options: SelectOption[] = [
  { label: 'Pizza', value: 'pizza' },
  { label: 'Burger', value: 'burger' },
  { label: 'Sushi', value: 'sushi' },
  { label: 'Pasta', value: 'pasta' },
  { label: 'Coffee', value: 'coffee' },
];

function VirtualFocusSelect() {
  const { open, close, toggle, isOpen } = useDisclosure({ initialValue: false });
  const id = React.useId();
  const listboxId = React.useId();
  const [selectedOption, setSelectedOption] = React.useState<SelectOption>();
  const selectTriggerRef = React.useRef<HTMLDivElement>(null);
  const { refs, style: dropdownStyle } = useDropdown({ isOpen, onClose: close });

  const selectOption = (option: SelectOption) => {
    setSelectedOption(option);
    close();
    selectTriggerRef.current?.focus();
  };

  const { onKeyDown, virtualFocus } = useVirtualFocus({
    container: refs.floating.current,
    itemSelector: '[role="option"]',
    onKeyDown: (vf, event) => {
      if (!isOpen) {
        open();

        // Possible way of restoring virtual focus on currently selected option:
        // vf.setItem(selectedOption?.value)
      }

      switch (event.key) {
        case 'Escape': {
          close();
          break;
        }
        case ' ':
        case 'Enter': {
          if (!isOpen) {
            vf.first();
          } else {
            const option = options[vf.index];
            selectOption(option);
          }
          break;
        }
        case 'ArrowUp': {
          if (!isOpen) {
            vf.first();
          }
          break;
        }
        case 'Tab': {
          close();
          break;
        }
        default:
          break;
      }
    },
  });

  React.useEffect(() => {
    if (!isOpen) {
      virtualFocus.reset();
    }
  }, [isOpen, virtualFocus]);

  return (
    <div>
      <label className="font-medium typography-label-sm" htmlFor={id}>
        Delivery
      </label>
      <div ref={refs.setReference} className="relative">
        <div
          className="mt-0.5 flex items-center gap-8 relative font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer"
          ref={selectTriggerRef}
          role="combobox"
          aria-controls={listboxId}
          aria-expanded={isOpen}
          aria-label="Select one option"
          aria-activedescendant={selectedOption ? `${listboxId}-${selectedOption.value}` : undefined}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onClick={toggle}
        >
          {selectedOption ? selectedOption.label : <span className="text-neutral-500">Choose from the list</span>}
        </div>
        <ul
          id={listboxId}
          ref={refs.setFloating}
          role="listbox"
          aria-label="Select one option"
          className={classNames('w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10', {
            hidden: !isOpen,
          })}
          style={dropdownStyle}
        >
          {options.map((option, index) => (
            <SfListItem
              id={`${listboxId}-${option.value}`}
              key={option.value}
              role="option"
              as="button"
              tabIndex={-1}
              onClick={() => selectOption(option)}
              disabled={index === 1}
              aria-selected={option.value === selectedOption?.value}
              className={classNames('block', {
                'font-medium': option.value === selectedOption?.value,
                'outline outline-offset': virtualFocus.index === index,
              })}
            >
              {option.label}
            </SfListItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

const tabs = ['Gallery', 'Message', 'Settings'];

function VitrualFocusTabs() {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  /**
   * Putting a ref in a state makes sure that the container we pass to the useVirtualFocus exists.
   * Standard useRef resutls in error due to initailly undefined container ref.
   */
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);

  const { onKeyDown } = useVirtualFocus({
    container: ref,
    itemSelector: '[role="tab"]',
    useFocus: true,
    activateOnFocus: true,
    loop: true,
    orientation: 'horizontal',
  });

  return (
    <div className="mt-6">
      <div ref={(node) => setRef(node)} role="tablist" className="flex justify-between gap-2">
        {tabs.map((label) => (
          <button
            key={label}
            type="button"
            role="tab"
            tabIndex={activeTab === label ? 0 : -1}
            className={classNames('py-1 px-2 rounded focus-visible:outline focus-visible:outline-offset', {
              'bg-primary-700 text-white': activeTab === label,
            })}
            onClick={() => setActiveTab(label)}
            onKeyDown={onKeyDown}
          >
            {label}
          </button>
        ))}
      </div>
      <hr className="my-1" />
      <div role="tabpanel" className="p-2">
        {activeTab}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="max-w-md mx-auto p-6">
      <input className="mb-6 border border-grey-800 rounded focus-visible:outline focus-visible:outline-offset" />
      <VirtualFocusSelect />
      <button
        type="button"
        className="mt-6 bg-gray-300 py-1 px-3 rounded focus-visible:outline focus-visible:outline-offset"
      >
        Placeholder
      </button>
      <VitrualFocusTabs />
    </div>
  );
}
