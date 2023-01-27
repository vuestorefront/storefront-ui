/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { h } from 'vue';
import { VsfDisplayDirection } from '@storefront-ui/react/components/VsfDisplay/types';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import VsfDisplayBaseObject from './VsfDisplay.PageObject';

const { vue: VsfDisplayVue, react: VsfDisplayReact } = useComponent('VsfDisplay');

describe('VsfDisplay', () => {
  const page = () => new VsfDisplayBaseObject('display');

  const initializeComponent = ({ direction = VsfDisplayDirection.horizontal, ...props } = {}) => {
    return mount({
      vue: {
        component: VsfDisplayVue,
        props: { direction, ...props },
        slots: {
          default: () => h('div', [h('h1', 'Title'), h('p', 'Description')]),
        },
      },
      react: (
        <Wrapper direction={direction} {...props} component={VsfDisplayReact}>
          <div>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </Wrapper>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(1200, 800);
  });

  describe('When direction: horizontal', () => {
    it('should render image on the right side on desktop', () => {
      initializeComponent({ direction: VsfDisplayDirection.horizontal });

      page().makeSnapshot();
    });
  });

  describe('When direction: horizontal reversed', () => {
    it('should render image on the left side on desktop', () => {
      initializeComponent({ direction: VsfDisplayDirection.horizontalReverse });

      page().makeSnapshot();
    });
  });

  describe('When direction: vertical', () => {
    it('should render image on the top on desktop', () => {
      initializeComponent({ direction: VsfDisplayDirection.vertical });

      page().makeSnapshot();
    });
  });
});
