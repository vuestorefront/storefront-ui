/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfProgressLinearVue, react: VsfProgressLinearReact } = await useComponent('VsfProgressLinear');
import VsfProgressLinearBaseObject from "./VsfProgressLinear.PageObject";
import { VsfProgressLinearSizes } from '../../../sfui/frameworks/vue/components/VsfProgressLinear/types';

describe("VsfProgressLinear", () => {
  let size: VsfProgressLinearSizes;
  let value: number;
  let withValue: boolean;

  const page = () => new VsfProgressLinearBaseObject('progress');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfProgressLinearVue,
        props: {
          size,
          value,
          withValue
        },
      },
      react: <VsfProgressLinearReact
          size={size}
          value={value}
          withValue={withValue}
        />
    });
  }

  it('initial state', () => {
    initializeComponent();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfProgressLinearSizes).forEach((componentSize) => {
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
    before(() => { value = 90});
    it('should render with 90%', () => {
      initializeComponent();

      page()
        .hasValue(90)
        .makeSnapshot();
    });
  })

  describe('when prop withValue is false', () => {
    before(() => { withValue = false});
    it('should render without percentage value', () => {
      initializeComponent();

      page()
        .doesNotHaveValue()
        .makeSnapshot();
    });
  })
});
