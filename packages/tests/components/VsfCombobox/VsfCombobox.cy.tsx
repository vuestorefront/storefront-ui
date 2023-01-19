/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfComboboxVue from "../../../sfui/frameworks/vue/components/VsfCombobox/VsfCombobox.vue";
// end import vue
// import react
import VsfComboboxReact from "../../../sfui/frameworks/react/components/VsfCombobox/VsfCombobox";
// end import react

import { mount } from '../../utils/mount';
import VsfComboboxBaseObject from "./VsfCombobox.PageObject";

describe("VsfCombobox", () => {
  let disabled: boolean;
  let label: string;
  let required: boolean;
  let placeholder: string;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = "";

  const page = () => new VsfComboboxBaseObject('combobox');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfComboboxVue,
        props: {
          disabled,
          label,
          required,
          placeholder,
          errorText,
          helpText,
          requiredText,
          invalid,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy
        },
      },
      react: <VsfComboboxReact
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        errorText={errorText}
        helpText={helpText}
        requiredText={requiredText}
        required={required}
        invalid={invalid}
        label={label}
        onChange={onChangeSpy}
    />
    })
  }

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    placeholder = 'Placeholder'
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });
});
