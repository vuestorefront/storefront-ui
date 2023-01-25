/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfCheckboxVue, react: VsfCheckboxReact } = useComponent('VsfCheckbox');
import { VsfCheckboxAlignment } from '../../../sfui/frameworks/vue/components/VsfCheckbox/types';
import VsfCheckboxBaseObject from './VsfCheckbox.PageObject';

describe('VsfCheckbox', () => {
  let alignment: VsfCheckboxAlignment;
  let disabled: boolean;
  let label: string;
  let required: boolean;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
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
          alignment,
          label,
          required,
          errorText,
          helpText,
          requiredText,
          invalid,
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <VsfCheckboxReact
          disabled={disabled}
          alignment={alignment}
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
    label = 'Label';
    value = 'value';
    onChangeSpy = cy.spy();
    alignment = VsfCheckboxAlignment.leading;
  });

  it('initial state', () => {
    initializeComponent({ invalid: true });

    page().makeSnapshot();
  });

  describe('when prop alignment is set to ', () => {
    Object.values(VsfCheckboxAlignment).forEach((componentAlignment) => {
      describe(`${componentAlignment}`, () => {
        it(`should render correct ${componentAlignment} alignment`, () => {
          alignment = componentAlignment;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when prop required=true', () => {
    before(() => (required = true));
    after(() => (required = false));
    it(`should render as required`, () => {
      initializeComponent();

      page().isRequired().makeSnapshot();
    });
  });

  describe('when prop label is filled in', () => {
    it(`should render with label`, () => {
      initializeComponent();

      page().hasLabel('Label').makeSnapshot();
    });
  });

  describe('when prop requiredText is filled out', () => {
    before(() => {
      (required = true), (requiredText = '*Required');
    });
    after(() => {
      (required = false), (requiredText = '');
    });
    it('should render with required text', () => {
      initializeComponent();

      page().hasRequiredText('*Required').makeSnapshot();
    });
  });

  describe('when prop helpText is visible', () => {
    before(() => {
      helpText = 'Help';
    });
    after(() => {
      helpText = '';
    });
    it('should render with help text', () => {
      initializeComponent();

      page().hasHelpText('Help').makeSnapshot();
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

  describe('when prop errorText is filled out and invalid=true', () => {
    before(() => {
      (invalid = true), (errorText = 'Error');
    });
    after(() => {
      (invalid = false), (errorText = '');
    });
    it('should render with invalid text', () => {
      initializeComponent();

      page().hasInvalidText('Error').makeSnapshot();
    });
  });
});
