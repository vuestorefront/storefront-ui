/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfCounterSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import VsfCounterBaseObject from './VsfCounter.PageObject';

const { vue: VsfCounterVue, react: VsfCounterReact } = useComponent('VsfCounter');

describe('VsfCounter', () => {
  const slotDefaultContent = '123';
  let pill: boolean;
  let size: VsfCounterSize;
  const page = () => new VsfCounterBaseObject('counter');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfCounterVue,
        global: {},
        props: {
          size,
          pill,
        },
        slots: {
          default: slotDefaultContent,
        },
      },
      react: (
        <VsfCounterReact size={size} pill={pill}>
          {slotDefaultContent}
        </VsfCounterReact>
      ),
    });
  };

  describe('When Pill is set to true', () => {
    it('pill should be visible', () => {
      pill = true;
      initializeComponent();

      page().isPill().makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfCounterSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when slots are loaded', () => {
    it('value is shown in the slots', () => {
      initializeComponent();

      page().hasValue(slotDefaultContent).makeSnapshot();
    });
  });
});
