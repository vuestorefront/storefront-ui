/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfProgressLinearSize, VsfProgressSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import VsfProgressLinearBaseObject from './VsfProgressLinear.PageObject';

const { vue: VsfProgressLinearVue, react: VsfProgressLinearReact } = useComponent('VsfProgressLinear');

describe('VsfProgressLinear', () => {
  let size: VsfProgressSize | VsfProgressLinearSize;
  let value: number;
  let ariaLabel: string | undefined;

  const page = () => new VsfProgressLinearBaseObject('progress-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfProgressLinearVue,
        props: {
          size,
          value,
          ariaLabel,
        },
      },
      react: <VsfProgressLinearReact size={size} value={value} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = VsfProgressSize.base;
    value = 0;
    ariaLabel = undefined;
  });

  it('initial state', () => {
    initializeComponent();
    page().hasAriaLabel('Progress element').makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    [...Object.values(VsfProgressLinearSize), ...Object.values(VsfProgressSize)].forEach((componentSize) => {
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
