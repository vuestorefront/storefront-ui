/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { h } from 'vue';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import { VsfHeroDirection } from '../../../sfui/frameworks/react/components/VsfHero/types';
import type { VsfHeroProps } from '../../../sfui/frameworks/react/components/VsfHero/types';

const { vue: VsfHeroVue, react: VsfHeroReact } = await useComponent('VsfHero');
import VsfHeroBaseObject from './VsfHero.PageObject';

describe('VsfHero', () => {
  const page = () => new VsfHeroBaseObject('hero');

  const initializeComponent = ({ direction = VsfHeroDirection.horizontal, ...props }: VsfHeroProps = {}) => {
    return mount({
      vue: {
        component: VsfHeroVue,
        props: { direction, ...props },
        slots: {
          default: () => h('div', [h('h1', 'Title'), h('p', 'Description')]),
        },
      },
      react: (
        <Wrapper direction={direction} {...props} component={VsfHeroReact}>
          <div>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </Wrapper>
      ),
    });
  };

  describe('When direction: horizontal', () => {
    it('should render image above the content on mobile', () => {
      cy.viewport(370, 700);
      initializeComponent({ direction: VsfHeroDirection.horizontal });

      page().makeSnapshot();
    });
    it('should render image on the right side on desktop', () => {
      cy.viewport(1200, 800);
      initializeComponent({ direction: VsfHeroDirection.horizontal });

      page().makeSnapshot();
    });
  });

  describe('When direction: horizontal reversed', () => {
    it('should render image above the content on mobile', () => {
      cy.viewport(370, 700);
      initializeComponent({ direction: VsfHeroDirection.horizontalReverse });

      page().makeSnapshot();
    });
    it('should render image on the left side on desktop', () => {
      cy.viewport(1200, 800);
      initializeComponent({ direction: VsfHeroDirection.horizontalReverse });

      page().makeSnapshot();
    });
  });
});
