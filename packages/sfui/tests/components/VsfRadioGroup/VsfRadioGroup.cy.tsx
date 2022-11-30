/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfRadioGroupVue from "../../../frameworks/vue/components/VsfRadio/VsfRadioGroup.vue";
import VsfRadioGroupReact from "../../../frameworks/react/components/VsfRadio/VsfRadioGroup";
import { mount } from '../../utils/mount';
import { VsfRadioGroupDirections } from '../../../frameworks/vue/components/VsfRadio/types';
import VsfRadioGroupBaseObject from "./VsfRadioGroup.PageObject";

describe("VsfRadioGroup", () => {
  let id: string;
  let legend: string;
  let direction: VsfRadioGroupDirections;
  let label: string;
  let required: boolean;
  let invalid: boolean;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = "";
  let slotContent = 'radios';

  const page = () => new VsfRadioGroupBaseObject('radio-group');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfRadioGroupVue,
        props: {
          id,
          legend,
          direction: VsfRadioGroupDirections,
          invalid,
          label,
          required,
          errorText,
          helpText,
          requiredText,
          'change:radio': onChangeSpy
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: <VsfRadioGroupReact
        id={id}
        legend={legend}
        direction={direction}
        errorText={errorText}
        helpText={helpText}
        requiredText={requiredText}
        required={required}
    >
      {slotContent}
    </VsfRadioGroupReact>
    })
  }

  beforeEach(() => {
    cy.viewport(300, 300)
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop label is filled in', () => {
    before(() => label = 'Label');
    after(() => label = '');
    it(`should render with label`, () => {
      initializeComponent();

      page()
        .hasLabel('Label')
        .makeSnapshot();
    });
  });

  describe('when prop legend is filled in', () => {
    before(() => legend = 'Legend');
    after(() => legend = '');
    it(`should render with legend`, () => {
      initializeComponent();

      page()
        .hasLabel('Legend')
        .makeSnapshot();
    });
  });

  describe('when prop required=true', () => {
    before(() => required = true);
    after(() => required = false);
    it(`should render as required`, () => {
      initializeComponent();

      page()
        .isRequired()
      page().makeSnapshot();
    });
  });

  describe('when prop requiredText is filled out', () => {
    before(() => {required = true, requiredText = 'Required'});
    after(() =>{ required = false, requiredText = ''});
    it('should render with required text', () => {
      initializeComponent();

      page()
        .hasRequiredText("*Required")
        .makeSnapshot();
    });
  });

  describe('when prop helpText is visible', () => {
    before(() => { helpText = 'Help'});
    after(() =>{ helpText = ''});
    it('should render with help text', () => {
      initializeComponent();

      page()
        .hasHelpText("Help")
        .makeSnapshot();
    });
  });

  describe('when prop errorText is filled out and invalid=true', () => {
    before(() => {invalid = true, errorText = 'Error'});
    after(() =>{ invalid = false, errorText = ''});
    it('should render with invalid text', () => {
      initializeComponent();

      page()
        .hasInvalidText("Error")
        .makeSnapshot();
    });
  });
});
