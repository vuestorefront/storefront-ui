/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { mount, useComponent, Wrapper } from '../../utils/mount';
import VsfDialogBaseObject from './VsfModal.PageObject';
import { waitForRerender } from '../../utils/waitForRerender';

const { vue: VsfModalVue, react: VsfModalReact } = useComponent('VsfModal');

describe('VsfDialog', () => {
  const dialogContent = 'this is some dialog content';

  const page = () => new VsfDialogBaseObject('modal');

  const initializeComponent = ({
    modelValue = ref(true),
    disableEsc = undefined,
    disableClickAway = false,
  }: {
    modelValue?: Ref<boolean>;
    disableEsc?: boolean;
    disableClickAway?: boolean;
  } = {}) => {
    return mount({
      vue: {
        component: VsfModalVue,
        props: {
          modelValue,
          disableEsc,
          disableClickAway,
          'onUpdate:modelValue': (e: boolean) => (modelValue.value = e),
        },
        slots: {
          default: () => dialogContent,
        },
      },
      react: (
        <Wrapper
          open={modelValue}
          onClose={(isClosed) => (modelValue.value = isClosed)}
          disableEsc={disableEsc}
          disableClickAway={disableClickAway}
          component={VsfModalReact}
        >
          {dialogContent}
        </Wrapper>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent({ modelValue: ref(false) });

    page().isNotVisible();
  });

  describe('when open', () => {
    it('should be opened', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page().isVisible().contains(dialogContent).makeSnapshot();

      cy.then(() => {
        modelValue.value = false;
        waitForRerender();
      }).then(() => {
        page().isNotVisible();
      });
    });
  });

  describe('when open and click outside', () => {
    it('should be opened and then close', () => {
      initializeComponent();

      page().isVisible().clickOutside();

      cy.then(() => {
        page().isNotVisible();
      });
    });
  });

  describe('when open and press escape', () => {
    it('should be opened and then close', () => {
      initializeComponent();

      page().isVisible().pressEsc();

      cy.then(() => {
        page().isNotVisible();
      });
    });
  });

  describe('when disableEsc=true', () => {
    describe('when open and press escape', () => {
      it('should be opened and then close', () => {
        initializeComponent({ disableEsc: true });

        page().isVisible().pressEsc();

        cy.then(() => {
          page().isVisible();
        });
      });
    });
  });

  describe('when disableClickAway=true', () => {
    describe('when open and click outside', () => {
      it('should be opened and then close', () => {
        initializeComponent({ disableClickAway: true });

        page().isVisible().clickOutside();

        cy.then(() => {
          page().isVisible();
        });
      });
    });
  });
});
