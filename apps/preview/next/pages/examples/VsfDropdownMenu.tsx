import VsfDropdownMenu from '@storefront-ui/react/components/VsfDropdownMenu/VsfDropdownMenu';
import VsfListItemMenu from '@storefront-ui/react/components/VsfListItemMenu/VsfListItemMenu';
import VsfIconDot from '@storefront-ui/react/components/VsfIcons/VsfIconDot';
import VsfDivider from '@storefront-ui/react/components/VsfDivider/VsfDivider';
import { useEffect, useState } from 'react';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const items = [
    {
      label: 'item1',
      secondaryText: 'item description 1',
    },
    {
      label: 'item2',
      secondaryText: 'item description 2',
    },
    {
      label: 'item3',
      secondaryText: 'item description 3',
    },
    {
      label: 'item4',
      secondaryText: 'item description 4',
    },
    {
      label: 'item5',
      secondaryText: 'item description 5',
    },
  ];

  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'loading',
        description: 'sets displaying loader when loading content',
        propDefaultValue: 'false',
      },
    ],
    {
      loading: false,
    },
  );

  const [loadingState, setLoadingState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingState(state.get.loading);
    }, 3000);
  }, []);

  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfDropdownMenu
          loading={loadingState || state.get.loading}
          className="w-80"
          role="listbox"
          aria-label="Items choice"
        >
          {items.map((item) => (
            <VsfListItemMenu
              key={item.label}
              label={item.label}
              secondaryText={item.secondaryText}
              slotPrefix={<VsfIconDot />}
              role="option"
            />
          ))}
          <VsfDivider />
          {items.map((item) => (
            <VsfListItemMenu
              key={item.label}
              label={item.label}
              secondaryText={item.secondaryText}
              slotPrefix={<VsfIconDot />}
              role="option"
            />
          ))}
        </VsfDropdownMenu>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
