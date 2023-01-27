/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfAccordionItemSize } from '@storefront-ui/vue/components/VsfAccordionItem/types';
import { mount, useComponent } from '../../utils/mount';
import VsfAccordionItemBaseObject from './VsfAccordionItem.PageObject';

const { vue: VsfAccordionItemVue, react: VsfAccordionItemReact } = useComponent('VsfAccordionItem');

describe('VsfAccordionItem', () => {
  let title: string;
  let open: boolean;
  let chevronLeft: boolean;
  let slotContent: string;
  let size: VsfAccordionItemSize;

  const page = () => new VsfAccordionItemBaseObject('accordion-item');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfAccordionItemVue,
        props: {
          open,
          title,
          size,
          chevronLeft,
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: (
        <VsfAccordionItemReact title={title} open={open} size={size} chevronLeft={chevronLeft}>
          {slotContent}
        </VsfAccordionItemReact>
      ),
    });
  };

  afterEach(() => {
    title = 'Accordion title';
    slotContent = 'This is some content inside accordion';
    open = false;
    chevronLeft = false;
  });

  it('initial state', () => {
    title = '';
    slotContent = '';
    initializeComponent();

    page().doesNotHaveHeader().doesNotHaveContent().isNotOpen().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfAccordionItemSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;

          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when accordion prop open=true and filled', () => {
    it('should render correctly', () => {
      open = true;
      initializeComponent();

      page().hasHeader(title).hasContent(slotContent).isOpen().makeSnapshot();
    });
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

      page().isNotOpen().clickHeader().isOpen().clickHeader().isNotOpen().makeSnapshot();
    });
  });
});
