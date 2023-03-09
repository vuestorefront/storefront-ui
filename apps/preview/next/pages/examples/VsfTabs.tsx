import VsfTabs from '@storefront-ui/react/components/VsfTabs/VsfTabs';
import VsfTabsItem from '@storefront-ui/react/components/VsfTabs/VsfTabsItem';
import VsfIconCircle from '@storefront-ui/react/components/VsfIcons/VsfIconCircle';
import VsfCounter from '@storefront-ui/react/components/VsfCounter/VsfCounter';
import { VsfButtonSize } from '@storefront-ui/react/components/VsfButton';
import classNames from 'classnames';
import { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';
import ComponentExample from '../../components/utils/ComponentExample';

function Example() {
  const tabs = [
    {
      label: 'Label 1',
      counter: '123',
    },
    {
      label: 'Label 2',
      counter: '234',
    },
    {
      label: 'Label 3',
      counter: '345',
    },
  ];
  let active: string | number | symbol | undefined;

  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'size',
        propType: 'VsfButtonSize',
        propDefaultValue: VsfButtonSize.base,
        options: Object.keys(VsfButtonSize),
        description: 'Sets size value of all tabs',
      },
      {
        type: 'text',
        modelName: 'active',
        propType: 'string | number | symbol',
        description: 'Sets active tab',
      },
      {
        type: 'text',
        propType: 'ReactNode',
        modelName: 'slotPrefix',
        description: 'Slot can be filled with any html element. Fills the space before label',
      },
      {
        type: 'text',
        propType: 'ReactNode',
        modelName: 'slotSuffix',
        description: 'Slot can be filled with any html element. Fills the space following label',
      },
      {
        type: 'select',
        modelName: 'disabled',
        propType: 'boolean',
        options: ['all tabs enabled', 'Label 1', 'Label 2', 'Label 3'],
        propDefaultValue: 'false',
        description: "Sets tab as disabled, similar as button. It's VsfTabsItem prop.",
      },
    ],
    {
      size: VsfButtonSize.base,
      active: '' as typeof active,
      slotSuffix: '',
      slotPrefix: '',
      disabled: 'all tabs enabled',
    },
  );

  const changeHandle = (uid: number | string | symbol): void => {
    state.set({ active: uid });
  };
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfTabs size={state.get.size} active={state.get.active} onChange={changeHandle}>
        {tabs.map((tab) => (
          <VsfTabsItem
            slotPrefix={state.get.slotPrefix || <VsfIconCircle />}
            slotSuffix={
              state.get.slotSuffix || (
                <VsfCounter pill className="bg-white">
                  {tab.counter}
                </VsfCounter>
              )
            }
            key={tab.label}
            uid={tab.label}
            disabled={state.get.disabled === tab.label}
            className={classNames({ 'opacity-50': state.get.disabled === tab.label })}
          >
            {tab.label}
          </VsfTabsItem>
        ))}
      </VsfTabs>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
