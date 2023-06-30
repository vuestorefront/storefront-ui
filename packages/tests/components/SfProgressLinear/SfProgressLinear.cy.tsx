/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfProgressLinearSize, SfProgressSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfProgressLinearBaseObject from './SfProgressLinear.PageObject';

const { vue: SfProgressLinearVue, react: SfProgressLinearReact } = useComponent('SfProgressLinear');

describe('SfProgressLinear', () => {
  let size: SfProgressSize | SfProgressLinearSize;
  let value: number;
  let ariaLabel: string | undefined;

  const page = () => new SfProgressLinearBaseObject('progress-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfProgressLinearVue,
        props: {
          size,
          value,
          ariaLabel,
        },
      },
      react: <SfProgressLinearReact size={size} value={value} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = SfProgressSize.base;
    value = 0;
    ariaLabel = undefined;
  });

  it('initial state', () => {
    initializeComponent();
    
    page().hasAriaLabel('Progress element').makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    [...Object.values(SfProgressLinearSize), ...Object.values(SfProgressSize)].forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop value is 90', () => {
    before(() => {
      value = 90;
    });
    it('should render with 90%', () => {
      initializeComponent();

      page().hasValue(90).makeSnapshot();
    });
  });

  describe('when ariaLabel provided', () => {
    it('should render with 90%', () => {
      ariaLabel = 'some value';
      initializeComponent();

      page().hasAriaLabel('some value').makeSnapshot();
    });
  });
});
