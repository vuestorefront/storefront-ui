/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { noop } from '@storefront-ui/shared';
import { mount, useComponent } from '../../utils/mount';
import VsfAccordionItemBaseObject from './VsfAccordionItem.PageObject';

const { vue: VsfAccordionItemVue, react: VsfAccordionItemReact } = useComponent('VsfAccordionItem');

describe('VsfAccordionItem', () => {
  const page = () => new VsfAccordionItemBaseObject('accordion-item');

  const initializeComponent = (props?: {
    open?: boolean;
    onToggle?: (open: boolean) => void;
    summary?: string;
    children?: string;
    className?: string;
    summaryClassName?: string;
  }) => {
    const {
      open = false,
      onToggle = noop,
      summary = 'Accordion title',
      children = 'This is some content inside accordion',
      className = '',
      summaryClassName = '',
    } = props || {};

    return mount({
      vue: {
        component: VsfAccordionItemVue,
        props: { modelValue: open, 'onUpdate:modelValue': onToggle, class: className, summaryClass: summaryClassName },
        slots: {
          default: () => children,
          summary: () => summary,
        },
      },
      react: (
        <VsfAccordionItemReact
          summary={summary}
          open={open}
          onToggle={onToggle}
          className={className}
          summaryClassName={summaryClassName}
        >
          {children}
        </VsfAccordionItemReact>
      ),
    });
  };

  describe('When prop open=true', () => {
    it('Should show content', () => {
      const props = { open: true, children: 'Content is visible' };
      initializeComponent(props);

      page().isOpen().hasContent(props.children).makeSnapshot();
    });

    it('Should show given summary', () => {
      const props = { open: true, summary: 'Header text' };
      initializeComponent(props);

      page().hasSummary(props.summary).makeSnapshot();
    });
  });

  describe('When prop open=false', () => {
    it('Should hide content', () => {
      const props = { open: false, children: 'Content is hidden' };
      initializeComponent(props);

      page().isNotOpen().hasContent(props.children).makeSnapshot();
    });

    it('Should show given summary', () => {
      const props = { open: false, summary: 'Header text' };
      initializeComponent(props);

      page().hasSummary(props.summary).makeSnapshot();
    });
  });

  describe('When summary has been clicked', () => {
    it('Should call toggle event handler', () => {
      const props = { onToggle: cy.spy(), open: false };
      initializeComponent(props);

      page().clickSummary(props.onToggle, !props.open);
    });
  });

  describe('When class prop is added', () => {
    it('Should apply given classes to <details> element', () => {
      const props = { className: 'custom-class' };
      initializeComponent(props);

      page().hasClassName(props.className);
    });
  });

  describe('When summaryClass prop is added', () => {
    it('Should apply given classes to <summary> element', () => {
      const props = { summaryClassName: 'custom-summary-class' };
      initializeComponent(props);

      page().hasSummaryClassName(props.summaryClassName);
    });
  });
});
