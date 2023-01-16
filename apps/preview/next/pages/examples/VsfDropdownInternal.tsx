import {
  VsfDropdownInternalProps,
  VsfDropdownInternal,
  VsfDropdownInternalTriggerEvent,
  VsfDropdownInternalPlacement,
} from '@storefront-ui/react/components/VsfDropdownInternal';
import VsfButton from '@storefront-ui/react/components/VsfButton/VsfButton';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls<VsfDropdownInternalProps>(
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
        type: 'text',
        modelName: 'slotTrigger',
        propType: 'slot',
        description: 'Change content of trigger',
      },
      {
        type: 'text',
        modelName: 'children',
        propType: 'slot',
        description: 'Change content of dropdown',
      },
    ],
    {
      open: undefined,
      triggerEvent: undefined,
      placement: VsfDropdownInternalPlacement.bottom,
      disabled: undefined,
      slotTrigger: 'Trigger for dropdown',
      children: 'content',
    },
  );
  return (
    <ComponentExample controls={{ state, controls }} componentContainerClassName="flex justify-center items-center">
      <VsfDropdownInternal
        {...state.get}
        slotTrigger={<VsfButton>{state.get.slotTrigger}</VsfButton>}
        onOpenUpdate={(open) => {
          state.set({ ...state.set, open });
        }}
      >
        {state.get.children}
      </VsfDropdownInternal>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
