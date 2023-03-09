/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfProgressSize } from '@storefront-ui/vue/components/VsfProgressCircular/types';
import { mount, useComponent } from '../../utils/mount';
import VsfProgressCircularBaseObject from './VsfProgressCircular.PageObject';

const { vue: VsfProgressCircularVue, react: VsfProgressCircularReact } = useComponent('VsfProgressCircular');

describe('VsfProgressCircular', () => {
  let size: VsfProgressSize;
  let value: number;
  let ariaLabel: string;

  const page = () => new VsfProgressCircularBaseObject('progress');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfProgressCircularVue,
        props: {
          size,
          value,
          ariaLabel,
        },
      },
      react: <VsfProgressCircularReact size={size} value={value} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = VsfProgressSize.base;
    value = 0;
    ariaLabel = '';
  });

  it('initial state', () => {
    initializeComponent();
    page().hasAriaLabel('Progress element').makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfProgressSize).forEach((componentSize) => {
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
