/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfLinkVariant } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfLinkBaseObject from './SfLink.PageObject';

const { vue: SfLinkVue, react: SfLinkReact } = useComponent('SfLink');

describe('SfLink', () => {
  const slotDefaultContent = 'link content';
  const page = () => new SfLinkBaseObject('link');

  type InitializeComponentParams = {
    variant?: SfLinkVariant;
    href?: string;
    className?: string;
    tag?: string;
    slotDefault?: boolean;
  };

  const initializeComponent = ({
    variant = SfLinkVariant.primary,
    href = '',
    className,
    tag,
    slotDefault = true,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: SfLinkVue,
        props: {
          href,
          tag,
          class: className,
          variant,
        },
        slots: {
          ...(slotDefault && { default: () => slotDefaultContent }),
        },
      },
      react: (
        <SfLinkReact as={tag} href={href} className={className} variant={variant}>
          {slotDefault ? slotDefaultContent : undefined}
        </SfLinkReact>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent({});
    cy.matchImage();
    page().contains(slotDefaultContent).makeSnapshot();
  });

  describe('when prop variant is set to ', () => {
    Object.values(SfLinkVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant });
          cy.matchImage();
          page().makeSnapshot();
        });
      });
    });
  });

  describe('when href prop has a value', () => {
    it('should has href with prop value', () => {
      const href = '/home';
      initializeComponent({ href });
      cy.matchImage();
      page().hasHref(href);
    });
  });

  describe('when no default slot', () => {
    it('should be without content', () => {
      initializeComponent({ slotDefault: false });
      cy.matchImage();
      page().haveNoContent();
    });
  });

  describe('when prop tag', () => {
    it('should render as <a> by default', () => {
      initializeComponent();
      cy.matchImage();
      page().hasTag('A');
    });

    it('should render as <div> tag', () => {
      initializeComponent({ tag: 'div' });
      cy.matchImage();
      page().hasTag('DIV');
    });
  });

  describe('when class prop has a value', () => {
    it('should attach class to component root element', () => {
      const className = 'custom-class';
      initializeComponent({ className });
      cy.matchImage();
      page().hasClass(className);
    });
  });
});
