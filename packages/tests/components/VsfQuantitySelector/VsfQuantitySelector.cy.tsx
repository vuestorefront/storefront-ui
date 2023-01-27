/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfQuantitySelectorSize } from '@storefront-ui/vue/components/VsfQuantitySelector/types';
import { mount, useComponent } from '../../utils/mount';
import VsfQuantitySelectorBaseObject from './VsfQuantitySelector.PageObject';
import VsfButtonBaseObject from '../VsfButton/VsfButton.PageObject';

const { vue: VsfQuantitySelectorVue, react: VsfQuantitySelectorReact } = useComponent('VsfQuantitySelector');

describe('VsfQuantitySelector', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 0;
  let minValue: number;
  let maxValue: number;
  let step: number;
  let disabled: boolean;
  let block: boolean;
  let size: VsfQuantitySelectorSize;
  let inputAriaLabel: string;
  let inputId: string;
  let decimal: number;
  const slotContent = 'label';

  const page = () => new VsfQuantitySelectorBaseObject('qty-selector');
  const decreaseButton = () => new VsfButtonBaseObject('decrease-button');
  const increaseButton = () => new VsfButtonBaseObject('increase-button');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfQuantitySelectorVue,
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
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: (
        <VsfQuantitySelectorReact
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
        >
          {slotContent}
        </VsfQuantitySelectorReact>
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = VsfQuantitySelectorSize.base;
    minValue = 1;
    maxValue = Infinity;
    value = 0;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when button increase is clicked', () => {
    it('should change value/modelValue + 1', () => {
      initializeComponent();

      decreaseButton().isDisabled();
      increaseButton().isNotDisabled().click();
      cy.then(() => {
        decreaseButton().isDisabled();
        increaseButton().isNotDisabled();
        expect(onChangeSpy).calledOnceWith(1);
        page().makeSnapshot();
      });
    });
  });

  describe('when maxValue=3 and value=2 and click increment button', () => {
    before(() => {
      maxValue = 3;
      value = 2;
    });
    it('should disable increment button', () => {
      initializeComponent();

      decreaseButton().isNotDisabled();
      increaseButton().isNotDisabled().click();
      cy.then(() => {
        decreaseButton().isNotDisabled();
        increaseButton().isDisabled();
        expect(onChangeSpy).calledOnceWith(3);
        page().makeSnapshot();
      });
    });
  });

  describe('when value=1 and click decrease button', () => {
    before(() => {
      value = 2;
    });
    it('should disable decrease button', () => {
      initializeComponent();

      decreaseButton().isNotDisabled();
      increaseButton().isNotDisabled();
      decreaseButton().click();
      cy.then(() => {
        decreaseButton().isDisabled();
        increaseButton().isNotDisabled();
        expect(onChangeSpy).calledOnceWith(1);
        page().makeSnapshot();
      });
    });
  });

  // TODO: tbd, refactor this component
});
