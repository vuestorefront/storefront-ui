import { useState, useEffect } from 'react';
import {
  VsfScrollable,
  VsfScrollableNavigation,
  VsfScrollableScrollbar,
  VsfScrollableDirection,
} from '@storefront-ui/react/components/VsfScrollable';
import classNames from 'classnames';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function NavigationPrev({ onClick, hasPrev }: { onClick: () => void; hasPrev: boolean }) {
  return (
    hasPrev && (
      <button
        type="button"
        onClick={onClick}
        className="p-2 text-white rounded-sm bg-secondary-400"
        aria-label="Previous"
      >
        prev
      </button>
    )
  );
}
function NavigationNext({ onClick, hasNext }: { onClick: () => void; hasNext: boolean }) {
  return (
    hasNext && (
      <button type="button" onClick={onClick} className="p-2 text-white rounded-sm bg-secondary-400" aria-label="Next">
        next
      </button>
    )
  );
}

function Example() {
  const [componentKey, setComponentKey] = useState(0);

  const { state, controls } = prepareControls(
    [
      {
        type: 'select',
        modelName: 'navigation',
        propType: 'VsfScrollableNavigation',
        propDefaultValue: 'block',
        options: Object.keys(VsfScrollableNavigation),
      },
      {
        type: 'select',
        modelName: 'scrollbar',
        propType: 'VsfScrollableScrollbar',
        propDefaultValue: 'hidden',
        options: Object.keys(VsfScrollableScrollbar),
        description:
          "`none` hide, `auto` hides scrollbar when content don't overflow container, `always` forces container to show scrollbar",
      },
      {
        type: 'select',
        modelName: 'direction',
        propType: 'VsfScrollableDirection',
        propDefaultValue: 'horizontal',
        options: Object.keys(VsfScrollableDirection),
        description: 'Determines whether scrollable component should be displayed vertically or horizontally',
      },
      {
        type: 'boolean',
        modelName: 'scrollSnap',
        propType: 'boolean',
        description: 'Enable native scroll snapping',
      },
      {
        type: 'boolean',
        modelName: 'draggable',
        propType: 'object | undefined',
        description: 'Enable mouse drag on container',
      },
      {
        type: 'boolean',
        modelName: 'ExampleCustomNav',
        propType: '---',
        description: 'Only for demonstration purposes',
      },
    ],
    {
      navigation: VsfScrollableNavigation.block,
      direction: VsfScrollableDirection.horizontal,
      scrollbar: VsfScrollableScrollbar.hidden,
      scrollSnap: undefined,
      draggable: undefined,
      ExampleCustomNav: false,
    },
  );

  useEffect(() => {
    // rerender component - 'draggable' prop is not reactive, as it should be declared only once per component
    setComponentKey((val) => val + 1);
  }, [state.get.draggable]);

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfScrollable
        key={componentKey}
        navigation={state.get.navigation}
        scrollbar={state.get.scrollbar}
        direction={state.get.direction}
        scrollSnap={state.get.scrollSnap}
        draggable={state.get.draggable ? { sensitivity: 3 } : undefined}
        slotPrevButton={state.get.ExampleCustomNav ? NavigationPrev : undefined}
        slotNextButton={state.get.ExampleCustomNav ? NavigationNext : undefined}
      >
        {Array.from(Array(4).keys()).map((item) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <div key={item} data-index={item + 1} tabIndex={0}>
            <div className="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{item + 1}</div>
          </div>
        ))}
        {Array.from(Array(4).keys()).map((item) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <div key={item} data-index={item + 5} tabIndex={0}>
            <div
              className={classNames(
                'bg-gray-300',
                state.get.direction === VsfScrollableDirection.horizontal ? 'w-[200px]' : 'w-[150px]',
                state.get.direction === VsfScrollableDirection.horizontal ? 'h-[150px]' : 'h-[200px]',
                'flex justify-center',
                'items-center',
              )}
            >
              {item + 5}
            </div>
          </div>
        ))}
        {Array.from(Array(4).keys()).map((item) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <div key={item} data-index={item + 9} tabIndex={0}>
            <div className="bg-gray-300 w-[150px] h-[150px] flex justify-center items-center">{item + 9}</div>
          </div>
        ))}
      </VsfScrollable>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
