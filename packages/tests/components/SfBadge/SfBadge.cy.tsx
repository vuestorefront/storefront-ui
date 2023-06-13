/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfBadgeVariant, SfBadgePlacement } from '@storefront-ui/react';
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: SfBadgeVue, react: SfBadgeReact } = useComponent('SfBadge');
import SfBadgeBaseObject from './SfBadge.PageObject';

describe('SfBadge', () => {
  const page = () => new SfBadgeBaseObject('badge');

  type InitializeComponentParams = {
    content?: string | number;
    variant?: SfBadgeVariant;
    max?: number;
    placement?: SfBadgePlacement;
  };

  const initializeComponent = ({
    content,
    variant = SfBadgeVariant.standard,
    max = 99,
    placement = SfBadgePlacement['top-left'],
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: SfBadgeVue,
        props: {
          content,
          variant,
          max,
          placement,
        },
      },
      react: <Wrapper component={SfBadgeReact} content={content} variant={variant} max={max} placement={placement} />,
    });
  };

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when prop variant is set to ', () => {
    Object.values(SfBadgeVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop placement is set to ', () => {
    Object.values(SfBadgePlacement).forEach((componentPlacement) => {
      describe(`${componentPlacement}`, () => {
        it(`should render correct ${componentPlacement} variant`, () => {
          initializeComponent({ placement: componentPlacement });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop max is set to', () => {
    const maxValue = Math.floor(Math.random() * (99 - 20) + 22);
    it(`should render content within ${maxValue}`, () => {
      initializeComponent({ max: maxValue, content: 10 });

      page().hasContent(10).makeSnapshot();
    });
  });

  describe('when prop content is bigger than max value', () => {
    const maxValue = Math.floor(Math.random() * 20);
    it(`should render max value: ${maxValue}`, () => {
      initializeComponent({ max: maxValue, content: 40 });

      page().hasContent(maxValue).makeSnapshot();
    });
  });

  describe('when prop content is set to string', () => {
    it(`should render the passed string content `, () => {
      initializeComponent({ content: 'test' });

      page().hasContent('test').makeSnapshot();
    });
  });

  describe('when prop content is set to number', () => {
    it(`should render the passed number content `, () => {
      initializeComponent({ content: 10 });

      page().hasContent(10).makeSnapshot();
    });
  });

  describe('when prop variant is set to dot', () => {
    it(`should not render any content`, () => {
      initializeComponent({ variant: SfBadgeVariant.dot, content: 10 });

      page().hasNoContent().makeSnapshot();
    });
  });
});
