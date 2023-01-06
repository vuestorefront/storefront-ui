/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfAccordionItemVue from "../../../sfui/frameworks/vue/components/VsfAccordionItem/VsfAccordionItem.vue";
// end import vue
// import react
import VsfAccordionItemReact from "../../../sfui/frameworks/react/components/VsfAccordionItem/VsfAccordionItem";
// end import react

import { mount } from '../../utils/mount';
import VsfAccordionItemBaseObject from "./VsfAccordionItem.PageObject";

describe("VsfAccordionItem", () => {
  let title: string;
  let open: boolean;
  let chevronLeft: boolean;
  let slotContent: string;

  const page = () => new VsfAccordionItemBaseObject('accordion-item');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfAccordionItemVue,
        props: {
          open,
          title,
          chevronLeft
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: <VsfAccordionItemReact
        title={title}
        open={open}
        chevronLeft={chevronLeft}
      >{slotContent}</VsfAccordionItemReact>
    });
  }

  afterEach(() => {
    title = 'Accordion title';
    slotContent = 'This is some content inside accordion';
    open = false;
    chevronLeft = false;
  });

  it('initial state', () => {
    title = '';
    slotContent = ''
    initializeComponent();

    page()
      .doesNotHaveHeader()
      .doesNotHaveContent()
      .isNotOpen()
      .makeSnapshot();
  });

  describe('when accordion prop open=true and filled', () => {
    it('should render correctly', () => {
      open = true;
      initializeComponent();

      page()
        .hasHeader(title)
        .hasContent(slotContent)
        .isOpen()
        .makeSnapshot();
    })
  });

  describe('when prop chevronLeft=true', () => {
    it('should display chevron icon on left side', () => {
      chevronLeft = true;
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when header is clicked', () => {
    it('should open/close accordion', () => {
      initializeComponent();

      page()
        .isNotOpen()
        .clickHeader()
        .isOpen()
        .clickHeader()
        .isNotOpen()
        .makeSnapshot();
    });
  });
});
