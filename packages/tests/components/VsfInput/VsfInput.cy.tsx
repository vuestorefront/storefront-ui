/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfInputVue, react: VsfInputReact } = useComponent('VsfInput');
import { VsfInputSize } from '../../../sfui/frameworks/vue/components/VsfInput/types';
import VsfInputBaseObject from './VsfInput.PageObject';

describe('VsfInput', () => {
  let disabled: boolean;
  let label: string;
  let size: VsfInputSize;
  let required: boolean;
  let placeholder: string;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
  let invalid: boolean;
  let characterLimit: number;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = '';
  let readonly;

  const page = () => new VsfInputBaseObject('input');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfInputVue,
        props: {
          disabled,
          label,
          size,
          required,
          placeholder,
          errorText,
          helpText,
          requiredText,
          invalid,
          readonly,
          characterLimit,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <VsfInputReact
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          errorText={errorText}
          helpText={helpText}
          characterLimit={characterLimit}
          requiredText={requiredText}
          required={required}
          invalid={invalid}
          label={label}
          size={size}
          readonly={readonly}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = VsfInputSize.base;
    (placeholder = 'Placeholder'), (readonly = undefined);
    characterLimit = 10;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfInputSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
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
    it(`should render without label`, () => {
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

      page().hasPlaceholder().makeSnapshot();
    });
  });

  describe('when prop readonly is provided', () => {
    before(() => {
      readonly = true;
    });
    it(`should render as readonly input`, () => {
      initializeComponent();

      page().hasReadonly();
      page().makeSnapshot();
    });
  });

  describe('when prop characterLimit is provided', () => {
    before(() => {
      characterLimit = 10;
    });
    it(`should render character limit of 10`, () => {
      initializeComponent();

      page().hasCharsCount(10);
      page().makeSnapshot();
    });
  });

  describe('when input value change', () => {
    before(() => {
      (characterLimit = 10), (value = 'abc');
    });
    it(`should render character limit difference`, () => {
      initializeComponent();

      page().hasCharsCount(7);
      page().makeSnapshot();
    });
  });
});
