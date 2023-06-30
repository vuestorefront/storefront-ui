/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfCounterSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfCounterBaseObject from './SfCounter.PageObject';

const { vue: SfCounterVue, react: SfCounterReact } = useComponent('SfCounter');

describe('SfCounter', () => {
  const slotDefaultContent = '123';
  let pill: boolean;
  let size: SfCounterSize;
  const page = () => new SfCounterBaseObject('counter');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfCounterVue,
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
        <SfCounterReact size={size} pill={pill}>
          {slotDefaultContent}
        </SfCounterReact>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent();
    cy.matchImage();
    page().makeSnapshot();
  });

  describe('When pill is set to true', () => {
    it('pill should be visible', () => {
      pill = true;
      initializeComponent();
      cy.matchImage();
      page().isPill().makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(SfCounterSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();
          cy.matchImage();
          page().makeSnapshot();
        });
      });
    });
  });

  describe('when slots are loaded', () => {
    it('value is shown in the slots', () => {
      initializeComponent();
      cy.matchImage();
      page().hasValue(slotDefaultContent).makeSnapshot();
    });
  });
});
