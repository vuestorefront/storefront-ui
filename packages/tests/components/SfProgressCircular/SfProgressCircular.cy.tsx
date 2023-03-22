/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfProgressSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfProgressCircularBaseObject from './SfProgressCircular.PageObject';

const { vue: SfProgressCircularVue, react: SfProgressCircularReact } = useComponent('SfProgressCircular');

describe('SfProgressCircular', () => {
  let size: SfProgressSize;
  let value: number;
  let ariaLabel: string;

  const page = () => new SfProgressCircularBaseObject('progress');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfProgressCircularVue,
        props: {
          size,
          value,
          ariaLabel,
        },
      },
      react: <SfProgressCircularReact size={size} value={value} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = SfProgressSize.base;
    value = 0;
    ariaLabel = '';
  });

  it('initial state', () => {
    initializeComponent();
    page().hasAriaLabel('Progress element').makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(SfProgressSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          value = 50;
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
