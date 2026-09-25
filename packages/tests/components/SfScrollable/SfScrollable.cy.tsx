import React from 'react';
import { h } from 'vue';
import { mount, useComponent } from '../../utils/mount';
import SfScrollablePageObject from './SfScrollable.PageObject';

const { vue: SfScrollableVue, react: SfScrollableReact } = useComponent('SfScrollable');

describe('SfScrollable', () => {
  const page = () => new SfScrollablePageObject('scrollable');
  // inline so the scroll box does not depend on the test app's stylesheet
  const containerStyle = { height: '100px', width: '100px', overflowY: 'auto', scrollBehavior: 'auto' } as const;
  const itemStyle = { height: '80px', flexShrink: 0, pointerEvents: 'none' } as const;
  const items = [...Array(10).keys()];

  const initializeComponent = ({ drag }: { drag: { containerWidth?: boolean; sensitivity?: number } | boolean }) => {
    return mount({
      vue: {
        component: SfScrollableVue,
        props: {
          direction: 'vertical',
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
        <SfScrollableReact
          direction="vertical"
          reduceMotion
          drag={drag}
          data-testid="scrollable"
          style={containerStyle}
        >
          {items.map((item) => (
            <div key={item} style={itemStyle}>
              {item}
            </div>
          ))}
        </SfScrollableReact>
      ),
    });
  };

  describe('when direction is vertical and drag scrolls by one container height', () => {
    it('should scroll down when the user drags up', () => {
      initializeComponent({ drag: { containerWidth: true } });

      page().isReady().dragVertically(90, 10).hasScrollTopGreaterThan(0).hasScrollLeft(0);
    });
  });
});
