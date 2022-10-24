/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfButtonVue from "../../../frameworks/vue/components/VsfQuantitySelector/VsfQuantitySelector.vue";
import { VsfQuantitySelectorSizes } from '../../../frameworks/vue/components/VsfQuantitySelector/types';
import VsfButtonReact from "../../../frameworks/react/components/VsfQuantitySelector/VsfQuantitySelector";
import { mount } from '../../utils/mount';
import VsfQuantitySelectorBaseObject from "./VsfQuantitySelector.PageObject";
import VsfButtonBaseObject from "../VsfButton/VsfButton.PageObject";
import { isReact } from "../../utils/utils";

describe("VsfQuantitySelector", () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 0;
  let minValue: number;
  let maxValue: number;
  let step: number;
  let disabled: boolean;
  let block: boolean;
  let size: VsfQuantitySelectorSizes;
  let inputAriaLabel: string;
  let inputId: string;
  let decimal: number;
  let slotContent = 'label';

  const page = () => new VsfQuantitySelectorBaseObject('qty-selector');
  const decreaseButton = () => new VsfButtonBaseObject('decrease-button');
  const increaseButton = () => new VsfButtonBaseObject('increase-button');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfButtonVue,
        props: {
          minValue,
          maxValue,
          step,
          disabled,
          block,
          size,
          inputAriaLabel,
          inputId,
          decimal,
          onChange: onChangeSpy
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: <VsfButtonReact
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        step={step}
        disabled={disabled}
        block={block}
        size={size}
        inputAriaLabel={inputAriaLabel}
        inputId={inputId}
        decimal={decimal}
        onChange={onChangeSpy}
      >{slotContent}</VsfButtonReact>
    });
  }

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = VsfQuantitySelectorSizes.base;
    minValue = 1;
    maxValue = Infinity;
    value = 0;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when clicked increase', () => {
    it('should change value/modelValue + 1', () => {
      initializeComponent();

      decreaseButton().isDisabled();
      increaseButton().isNotDisabled().click();
      cy.then(() => {
        decreaseButton().isDisabled();
        increaseButton().isNotDisabled()
        expect(onChangeSpy).calledOnceWith(1);
        page().makeSnapshot();
      });
    });
  });

  describe('when maxValue=3 and value=2 and click increment', () => {
    before(() => {
      maxValue = 3;
      value = 2;
    });
    it('should disable increment button', () => {
      initializeComponent();

      decreaseButton().isNotDisabled();
      increaseButton().isNotDisabled()
      increaseButton().click();
      cy.then(() => {
        decreaseButton().isNotDisabled();
        increaseButton().isDisabled()
        expect(onChangeSpy).calledOnceWith(3);
        page().makeSnapshot();
      });
    });
  });

  describe('when value=1 and click decrease', () => {
    before(() => {
      value = 2;
    });
    it('should disable decrease button', () => {
      initializeComponent();

      decreaseButton().isNotDisabled();
      increaseButton().isNotDisabled()
      decreaseButton().click();
      cy.then(() => {
        decreaseButton().isDisabled();
        increaseButton().isNotDisabled()
        expect(onChangeSpy).calledOnceWith(1);
        page().makeSnapshot();
      });
    });
  });

  // TODO: tbd, refactor component
});
