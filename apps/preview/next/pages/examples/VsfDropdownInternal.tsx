import {
  VsfDropdownInternalProps,
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '@storefront-ui/react/components/VsfDropdownInternal';
import VsfButton from '@storefront-ui/react/components/VsfButton/VsfButton';
import VsfDropdownMenu from '@storefront-ui/react/components/VsfDropdownMenu/VsfDropdownMenu';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const slotTriggerOptions = createControlsOptions({
  button: <VsfButton>Trigger for dropdown</VsfButton>,
});
const childrenOptions = createControlsOptions({
  menu: <VsfDropdownMenu className="w-80">Dropdown</VsfDropdownMenu>,
  text: 'Content',
});

interface DropdownInternalControls extends Omit<VsfDropdownInternalProps, 'slotTrigger' | 'children'> {
  slotTrigger: typeof slotTriggerOptions.defaultOption;
  children: typeof childrenOptions.defaultOption;
}

function Example() {
  const { state, controls } = prepareControls<DropdownInternalControls>(
    [
      {
        type: 'boolean',
        modelName: 'open',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Propery used for open/close dropdown',
      },
      {
        type: 'select',
        options: Object.keys(VsfDropdownInternalTriggerEvent),
        modelName: 'triggerEvent',
        propType: 'VsfDropdownInternalTriggerEvent',
        propDefaultValue: VsfDropdownInternalTriggerEvent.click,
        description: 'Determine whether dropdown will be open/close via click/hover',
      },
      {
        type: 'select',
        options: Object.keys(VsfDropdownInternalPlacement),
        modelName: 'placement',
        propType: 'VsfDropdownInternalPlacement',
        propDefaultValue: VsfDropdownInternalPlacement.bottom,
        description: 'Initial position of dropdown in reference to trigger',
      },
      {
        type: 'boolean',
        modelName: 'disabled',
        propDefaultValue: 'false',
        propType: 'boolean',
        description: 'Disable dropdown',
      },
      {
        type: 'select',
        modelName: 'slotTrigger',
        propType: 'ReactNode',
        description: 'Change content of trigger',
        options: slotTriggerOptions.controlsOptions,
      },
      {
        type: 'select',
        modelName: 'children',
        propType: 'ReactNode',
        description: 'Change content of dropdown',
        options: childrenOptions.controlsOptions,
      },
    ],
    {
      open: undefined,
      triggerEvent: undefined,
      placement: VsfDropdownInternalPlacement.bottom,
      disabled: undefined,
      slotTrigger: slotTriggerOptions.defaultOption,
      children: childrenOptions.defaultOption,
    },
  );
  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="flex justify-center items-center">
      <VsfDropdownInternal
        {...state.get}
        slotTrigger={slotTriggerOptions.getValue(state.get.slotTrigger)}
        onOpenUpdate={(open) => {
          state.set({ ...state.get, open });
        }}
      >
        {childrenOptions.getValue(state.get.children)}
      </VsfDropdownInternal>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
