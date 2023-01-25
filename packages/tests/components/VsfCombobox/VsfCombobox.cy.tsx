/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { ref } from 'vue';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfComboboxVue, react: VsfComboboxReact } = useComponent('VsfCombobox');
import VsfComboboxBaseObject from './VsfCombobox.PageObject';

describe('VsfCombobox', () => {
  let disabled: boolean;
  let label: string;
  let required: boolean;
  let placeholder: string;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const value = '';

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
          modelValue: ref(value),
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <VsfComboboxReact
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
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });
});
