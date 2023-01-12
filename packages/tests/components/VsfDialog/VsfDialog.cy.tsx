/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { ref } from 'vue';
import type { Ref } from "vue";
import { mount, useComponent, Wrapper } from '../../utils/mount';

const { vue: VsfDialogVue, react: VsfDialogReact } = await useComponent('VsfDialog');
import VsfDialogBaseObject from "./VsfDialog.PageObject";
import { waitForRerender } from "../../utils/waitForRerender";

describe("VsfDialog", () => {
  const dialogContent = "this is some dialog content";

  const page = () => new VsfDialogBaseObject('dialog');

  const initializeComponent = ({
    modelValue = ref(true),
    hideCloseButton = undefined,
    outsideClickClose = false,
  } : {
    modelValue?: Ref<boolean>,
    hideCloseButton?: boolean,
    outsideClickClose?: boolean,
  } = {}) => {
    return mount({
      vue: {
        component: VsfDialogVue,
        props: {
          modelValue,
          hideCloseButton,
          outsideClickClose,
          'onUpdate:modelValue': (e: boolean) => modelValue.value = e
        },
        slots: {
          default: () => dialogContent
        }
      },
      react: <Wrapper
        open={modelValue}
        onClose={isClosed => modelValue.value = isClosed}
        hideCloseButton={hideCloseButton}
        outsideClickClose={outsideClickClose}
        component={VsfDialogReact}
      >{dialogContent}</Wrapper>
    });
  }

  it('initial state', () => {
    initializeComponent({ modelValue: ref(false)});

    page().isClosed();
  });

  describe('when open', () => {
    it('should be opened', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page()
        .isOpened()
        .contains(dialogContent)
        .hasCloseButton()
        .makeSnapshot();

      cy.then(() => {
        modelValue.value = false;
        waitForRerender();
      }).then(() => {
        page().isClosed();
      });
    });
  });

  describe('when open and click close button', () => {
    it('should be opened and then close', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page()
        .isOpened()
        .clickCloseButton()

        cy.then(() => {
          modelValue.value = false;
          page().isClosed();
        });
    });
  });

  describe('when open and click outside', () => {
    it('should be opened and then close', () => {
      const modelValue = ref(true);
      const outsideClickClose = true;
      initializeComponent({ modelValue, outsideClickClose });

      page()
        .isOpened()
        .clickOutside();

        cy.then(() => {
          modelValue.value = false;
          page().isClosed();
        });
    });
  });

  describe('when hideCloseButton=true', () => {
    it("should not show close button", () => {
      initializeComponent({ hideCloseButton: true })

      page().haveNotCloseButton().makeSnapshot();
    });
  });
});
