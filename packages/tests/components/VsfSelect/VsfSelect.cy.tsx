/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfSelectSize } from '@storefront-ui/vue/components/VsfSelect/types';
import { mount, useComponent } from '../../utils/mount';
import VsfSelectBaseObject from './VsfSelect.PageObject';

const { vue: VsfSelectVue, react: VsfSelectReact } = useComponent('VsfSelect');

describe('VsfSelect', () => {
  enum options {
    red = 'red',
    blue = 'blue',
    yellow = 'yellow',
    green = 'green',
    gray = 'gray',
    black = 'black',
    brown = 'brown',
  }
  let disabled: boolean;
  let label: string;
  let size: VsfSelectSize;
  let required: boolean;
  let placeholder: string;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = '';

  const page = () => new VsfSelectBaseObject('select');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfSelectVue,
        props: {
          options: Object.values(options),
          disabled,
          label,
          size,
          required,
          placeholder,
          errorText,
          helpText,
          requiredText,
          invalid,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <VsfSelectReact
          options={Object.values(options)}
          disabled={disabled}
          placeholder={placeholder}
          errorText={errorText}
          helpText={helpText}
          requiredText={requiredText}
          required={required}
          invalid={invalid}
          label={label}
          size={size}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = VsfSelectSize.base;
    placeholder = '--Select--';
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfSelectSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when an option is selected', () => {
    after(() => {
      value = '';
    });
    it('should change value/modelValue', () => {
      initializeComponent();

      page().isNotDisabled().hasSelectedOption(options.red);
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith(options.red);
        page().makeSnapshot();
      });
    });
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled();
      page().makeSnapshot();
    });
  });

  describe('when prop label is filled in', () => {
    before(() => (label = 'Label'));
    after(() => (label = ''));
    it(`should render with label`, () => {
      initializeComponent();

      page().hasLabel('Label').makeSnapshot();
    });
  });

  describe('when prop label is empty', () => {
    before(() => (label = ''));
    it(`should render with label`, () => {
      initializeComponent();

      page().doesNotHaveLabel().makeSnapshot();
    });
  });

  describe('when prop required=true', () => {
    before(() => (required = true));
    after(() => (required = false));
    it(`should render as required`, () => {
      initializeComponent();

      page().isRequired();
      page().makeSnapshot();
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

  describe('when prop placeholder is filled in', () => {
    before(() => {
      placeholder = 'Select value';
    });
    it('should render with no placeholder', () => {
      initializeComponent();

      page().hasPlaceholder('Select value').makeSnapshot();
    });
  });
});
