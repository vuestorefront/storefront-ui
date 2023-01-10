/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfDropdownInternalVue from "../../../sfui/frameworks/vue/components/VsfDropdownInternal/VsfDropdownInternal.vue";
// end import vue
// import react
import VsfDropdownInternalReact from "../../../sfui/frameworks/react/components/VsfDropdownInternal/VsfDropdownInternal";
// end import react

import { mount, Wrapper } from '../../utils/mount';
import VsfDropdownInternalBaseObject from "./VsfDropdownInternal.PageObject";
import type { Ref } from 'vue';
import { ref } from 'vue';
import { VsfDropdownInternalPlacement, VsfDropdownInternalTriggerEvent } from '../../../sfui/frameworks/vue/components/VsfDropdownInternal';

describe("VsfDropdownInternal", () => {
  const defaultSlotContent = 'Content';
  const page = () => new VsfDropdownInternalBaseObject('dropdown');

  const initializeComponent = ({
    modelValue = ref(),
    triggerEvent,
    placement,
    showDefaultSlot = true
  } : {
    modelValue?: Ref<boolean | undefined>;
    triggerEvent?: VsfDropdownInternalTriggerEvent;
    placement?: VsfDropdownInternalPlacement;
    showDefaultSlot?: boolean;
  }) => {
    return mount({
      vue: {
        component: VsfDropdownInternalVue,
        props: {
          modelValue,
          triggerEvent,
          placement,
          'onUpdate:modelValue': (isOpen: boolean) => modelValue.value = isOpen
        },
        slots: {
          trigger: '<button class="border-prmiary border">Trigger for dropdown</button>',
          ...(showDefaultSlot && { default: () => defaultSlotContent})
        }
      },
      react: <Wrapper
        open={modelValue}
        triggerEvent={triggerEvent}
        placement={placement}
        onOpenUpdate={isOpen => modelValue.value = isOpen}
        slotTrigger={<button className="border-prmiary border">Trigger for dropdown</button>}
        component={VsfDropdownInternalReact}
      >{showDefaultSlot ? defaultSlotContent : ''}</Wrapper>
    });
  }

  beforeEach(() => {
    cy.viewport(400, 300);
    page().cyRoot.then((el) => el[0].style.padding = '120px');
  });

  it('initial state', () => {
    initializeComponent({});
  });

  describe('when prop placement is set to ', () => {
    Object.values(VsfDropdownInternalPlacement).forEach((placement) => {
      describe(`${placement}`, () => {
        it(`should render correct ${placement} placement of dropdown`, () => {
          initializeComponent({ modelValue: ref(true), placement });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when triggerEvent=click', () => {
    it('should open/close on trigger click', () => {
      const modelValue = ref();
      initializeComponent({ modelValue });

      page()
        .dropdownIsClose()
        .clickTrigger();

      cy.then(() => {
        expect(modelValue.value).to.be.true;
        page().dropdownIsOpen();
        page().clickTrigger();
      }).then(() => {
        expect(modelValue.value).to.be.false;
        page().dropdownIsClose();
      })
    });
  });

  describe('when triggerEvent=hover', () => {
    it('should open/close on trigger mouseenter/mouseleave', () => {
      const modelValue = ref();
      initializeComponent({ modelValue, triggerEvent: VsfDropdownInternalTriggerEvent.hover });

      page()
        .dropdownIsClose()
        .hoverTriggerElement();

      cy.then(() => {
        expect(modelValue.value).to.be.true;
        page()
          .dropdownIsOpen()
          .hoverOutTriggerElement();
      }).then(() => {
        expect(modelValue.value).to.be.false;
        page().dropdownIsClose();
      })
    });
  });

  describe('when opened and clicked outside', () => {
    it('should close dropdown', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page()
        .dropdownIsOpen()
        .clickOutside();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
        page().dropdownIsClose();
      });
    });
  });

  describe('when opened and "Escape" button clicked', () => {
    it('should close dropdown', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page()
        .dropdownIsOpen()
        .clickEsc();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
        page().dropdownIsClose();
      });
    });
  });
});
