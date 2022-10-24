/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfAccordionItemVue from "../../../frameworks/vue/components/VsfAccordionItem/VsfAccordionItem.vue";
import VsfAccordionItemReact from "../../../frameworks/react/components/VsfAccordionItem/VsfAccordionItem";
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

  describe('when accordion opened and filled', () => {
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

  describe('when chevronLeft=true', () => {
    it('should display chevron icon on left side', () => {
      chevronLeft = true;
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when clicked header', () => {
    it('should open/close accordion', () => {
      open = false;
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
