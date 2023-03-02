/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import VsfCheckboxBaseObject from './VsfCheckbox.PageObject';

const { vue: VsfCheckboxVue, react: VsfCheckboxReact } = useComponent('VsfCheckbox');

describe('VsfCheckbox', () => {
  let disabled: boolean;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 'value';

  const page = () => new VsfCheckboxBaseObject('checkbox');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfCheckboxVue,
        props: {
          disabled,
          invalid,
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: <VsfCheckboxReact disabled={disabled} invalid={invalid} onChange={onChangeSpy} />,
    });
  };

  beforeEach(() => {
    value = 'value';
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent({ invalid: true });

    page().makeSnapshot();
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when it is checked', () => {
    it('should change value/modelValue', () => {
      initializeComponent();

      page().isNotDisabled().isChecked();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      });
    });
  });

  describe('when invalid=true', () => {
    before(() => (invalid = true));
    after(() => (invalid = false));
    it('should render with "invalid" style', () => {
      initializeComponent();

      page().hasInvalidStyle().makeSnapshot();
    });
  });
});
