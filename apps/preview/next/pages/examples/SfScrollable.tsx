import classNames from 'classnames';
import {
  SfScrollable,
  SfScrollableDirection,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
} from '@storefront-ui/react';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'text',
        modelName: 'children',
        description: 'Only for demonstration purposes. Default slot, replaces example drawer content',
      },
      {
        type: 'text',
        modelName: 'activeIndex',
        propDefaultValue: '0',
        description: 'Controls index of active item',
      },
      {
        type: 'select',
        modelName: 'direction',
        options: Object.keys(SfScrollableDirection),
        propType: 'enum',
        propDefaultValue: SfScrollableDirection.horizontal,
        description: 'Direction of scrollable',
      },
      {
        type: 'text',
        modelName: 'as',
        propType: 'string',
        propDefaultValue: 'div',
        description: 'Tag of scrollable HTML element',
      },
      {
        type: 'boolean',
        modelName: 'drag',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Enables item dragging on desktop',
      },
      {
        type: 'boolean',
        modelName: 'snap',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Only for demonstration purposes. Enables item snapping',
      },
      {
        type: 'boolean',
        modelName: 'hideScrollbar',
        propType: 'boolean',
        propDefaultValue: false,
        description: 'Only for demonstration purposes. Hides scrollbar',
      },
      {
        type: 'select',
        modelName: 'buttons',
        options: ['floating', 'blocked', 'none'],
        propType: 'enum',
        propDefaultValue: 'none',
        description: 'Only for demonstration purposes. Type of prev/next buttons',
      },
      {
        type: 'text',
        modelName: 'totalItems',
        propDefaultValue: '10',
        description: 'Only for demonstration purposes. Total number of items',
      },
    ],
    {
      children: undefined,
      direction: SfScrollableDirection.horizontal,
      activeIndex: '0',
      as: undefined,
      drag: undefined,
      snap: undefined,
      hideScrollbar: false,
      buttons: 'floating',
      totalItems: '10',
    },
  );

  return (
    <ComponentExample controls={{ state, controls }}>
      <div className="flex items-center">
        {state.get.buttons === 'blocked' && (
          <SfButton
            variant="secondary"
            size="lg"
            className="!rounded-full mr-4"
            disabled={Number(state.get.activeIndex) === 0}
            square
            slotPrefix={<SfIconChevronLeft />}
            onClick={() => state.set({ activeIndex: String(Number(state.get.activeIndex) - 1) })}
          />
        )}
        <SfScrollable
          {...state.get}
          activeIndex={Number(state.get.activeIndex || '0')}
          className={classNames('w-full items-center', {
            'snap-x snap-mandatory': state.get.snap,
            'scrollbar-hide': state.get.hideScrollbar,
            'px-16': state.get.buttons === 'floating-with-snap-padding',
          })}
        >
          {state.get.buttons === 'floating' && (
            <SfButton
              variant="secondary"
              size="lg"
              className="absolute left-4 !rounded-full"
              disabled={Number(state.get.activeIndex) === 0}
              square
              slotPrefix={<SfIconChevronLeft />}
              onClick={() => state.set({ activeIndex: String(Number(state.get.activeIndex) - 1) })}
            />
          )}
          {state.get.children ||
            Array.from({ length: Number(state.get.totalItems || 10) }, (_, i) => (
              <div
                key={i}
                className={classNames('w-36 h-36 shrink-0 bg-neutral-100 border border-negative-300 border-dashed', {
                  'snap-center': state.get.snap,
                })}
              />
            ))}
          {state.get.buttons === 'floating' && (
            <SfButton
              variant="secondary"
              size="lg"
              square
              disabled={Number(state.get.activeIndex) === Number(state.get.totalItems) - 1}
              className="absolute right-4 !rounded-full"
              slotPrefix={<SfIconChevronRight />}
              onClick={() => state.set({ activeIndex: String(Number(state.get.activeIndex) + 1) })}
            />
          )}
        </SfScrollable>
        {state.get.buttons === 'blocked' && (
          <SfButton
            variant="secondary"
            size="lg"
            square
            disabled={Number(state.get.activeIndex) === Number(state.get.totalItems) - 1}
            className="!rounded-full ml-4"
            slotPrefix={<SfIconChevronRight />}
            onClick={() => state.set({ activeIndex: String(Number(state.get.activeIndex) + 1) })}
          />
        )}
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
