/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { VsfDrawerPlacement } from '@storefront-ui/vue';
import { mount, useComponent, Wrapper } from '../../utils/mount';
import VsfDrawerBaseObject from './VsfDrawer.PageObject';

const { vue: VsfDrawerVue, react: VsfDrawerReact } = useComponent('VsfDrawer');

describe('VsfDrawer', () => {
  const page = () => new VsfDrawerBaseObject('drawer');
  const defaultSlotContent = 'some drawer content';

  const initializeComponent = ({
    modelValue = ref(true),
    placement,
    tag,
    disableClickAway,
    disableEsc,
  }: {
    modelValue?: Ref<boolean>;
    placement?: VsfDrawerPlacement;
    tag?: string;
    disableClickAway?: Ref<boolean>;
    disableEsc?: Ref<boolean>;
  } = {}) => {
    return mount({
      vue: {
        component: VsfDrawerVue,
        props: {
          modelValue,
          placement,
          tag,
          disableClickAway,
          disableEsc,
          'onUpdate:modelValue': (isOpen: boolean) => (modelValue.value = isOpen),
        },
        slots: {
          default: () => defaultSlotContent,
        },
      },
      react: (
        <Wrapper
          open={modelValue}
          placement={placement}
          as={tag}
          disableClickAway={disableClickAway}
          disableEsc={disableEsc}
          component={VsfDrawerReact}
          propCallbackPair={{ open: 'onClose' }}
        >
          {defaultSlotContent}
        </Wrapper>
      ),
    });
  };

  it('initial state', () => {
    const modelValue = ref(false);
    initializeComponent({ modelValue });

    page().isClosed();
  });

  describe('when open/close', () => {
    it('should render properly closed and opened', () => {
      const modelValue = ref(false);
      initializeComponent({ modelValue });

      page().isClosed();

      cy.then(() => {
        modelValue.value = true;
        page().isOpened().makeSnapshot();
      }).then(() => {
        modelValue.value = false;
        page().isClosed();
      });
    });
  });

  Object.values(VsfDrawerPlacement).forEach((placement) => {
    describe(`when placement is: ${placement}`, () => {
      it(`should render correct ${placement} placement`, () => {
        initializeComponent({ placement });

        page().makeSnapshot();
      });
    });
  });

  describe('when prop tag is given', () => {
    it('should change drawer tag', () => {
      const tag = 'section';
      initializeComponent({ tag });

      page().hasTag(tag.toUpperCase());
    });
  });

  describe('when disableClickAway prop is true', () => {
    it('should not close on click outside', () => {
      const modelValue = ref(true);
      const disableClickAway = ref();
      initializeComponent({ modelValue, placement: VsfDrawerPlacement.top, disableClickAway });

      page().isOpened().clickOutside().isClosed();

      cy.then(() => {
        modelValue.value = true;
        disableClickAway.value = true;
        page().isOpened().clickOutside().isOpened();
      });
    });
  });

  describe('when disableClickAway prop is true', () => {
    it('should not close on click outside', () => {
      const modelValue = ref(true);
      const disableEsc = ref();
      initializeComponent({ modelValue, disableEsc });

      page().isOpened().pressEsc().isClosed();

      cy.then(() => {
        modelValue.value = true;
        disableEsc.value = true;
        page().isOpened().pressEsc().isOpened();
      });
    });
  });
});
