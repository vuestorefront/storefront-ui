import React from 'react';
import { h } from 'vue';
import { mount, useComponent } from '../../utils/mount';
import SfScrollablePageObject from './SfScrollable.PageObject';

const { vue: SfScrollableVue, react: SfScrollableReact } = useComponent('SfScrollable');

describe('SfScrollable', () => {
  const page = () => new SfScrollablePageObject('scrollable');
  // inline so the scroll box does not depend on the test app's stylesheet
  const containerStyle = {
    display: 'flex',
    width: '100px',
    height: '100px',
    overflowX: 'auto',
    scrollBehavior: 'auto',
  } as const;
  const itemStyle = { width: '80px', flexShrink: 0, pointerEvents: 'none' } as const;
  const items = [...Array(10).keys()];

  const initializeComponent = ({ drag }: { drag: { containerWidth?: boolean; sensitivity?: number } | boolean }) => {
    return mount({
      vue: {
        component: SfScrollableVue,
        props: {
          reduceMotion: true,
          drag,
        },
        attrs: {
          'data-testid': 'scrollable',
          style: containerStyle,
        },
        slots: {
          default: () => items.map((item) => h('div', { key: item, style: itemStyle }, `${item}`)),
        },
      },
      react: (
        <SfScrollableReact reduceMotion drag={drag} data-testid="scrollable" style={containerStyle}>
          {items.map((item) => (
            <div key={item} style={itemStyle}>
              {item}
            </div>
          ))}
        </SfScrollableReact>
      ),
    });
  };

  describe('when drag scrolls by one container width', () => {
    it('should not scroll again when the user presses without dragging after a drag', () => {
      initializeComponent({ drag: { containerWidth: true } });

      page().isReady().dragHorizontally(90, 10).hasScrollLeftGreaterThan(0).saveScrollLeft('afterDrag');
      page().pressWithoutMoving(50).hasScrollLeftEqualTo('afterDrag');
    });
  });
});
