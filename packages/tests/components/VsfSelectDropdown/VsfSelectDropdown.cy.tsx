/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: VsfSelectDropdownVue, react: VsfSelectDropdownReact } = await useComponent('VsfSelectDropdown');
import VsfSelectDropdownBaseObject from './VsfSelectDropdown.PageObject';
import { VsfSelectDropdownSize } from '../../../sfui/frameworks/vue/components/VsfSelectDropdown/types';
import VsfInputBaseObject from '../VsfInput/VsfInput.PageObject';

describe('VsfSelectDropdown', () => {
  enum options {
    't-shirt' = 't-shirt',
    'sweater' = 'sweater',
    'jacket' = 'jacket',
    'coat' = 'coat',
    'jeans' = 'jeans',
    'socks' = 'socks',
    'shorts' = 'shorts',
    'tracksuit' = 'tracksuit',
  }
  let disabled: boolean;
  let label: string;
  let size: VsfSelectDropdownSize;
  let required: boolean;
  let placeholder: string;
  let errorText: string;
  let helpText: string;
  let requiredText: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const value = '';
  const page = () => new VsfSelectDropdownBaseObject('select-dropdown');
  const inputPage = () => new VsfInputBaseObject('input');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfSelectDropdownVue,
        props: {
          disabled,
          label,
          options,
          required,
          size,
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
        <Wrapper
          value={value}
          disabled={disabled}
          size={size}
          options={options}
          placeholder={placeholder}
          errorText={errorText}
          helpText={helpText}
          requiredText={requiredText}
          required={required}
          invalid={invalid}
          label={label}
          component={VsfSelectDropdownReact}
        >
          {' '}
        </Wrapper>
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = VsfSelectDropdownSize.base;
    placeholder = 'Placeholder text';
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfSelectDropdownSize).forEach((componentSize) => {
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

      inputPage().isDisabled().makeSnapshot();
    });
  });

  describe('when prop label is filled in', () => {
    before(() => (label = 'Label'));
    after(() => (label = ''));
    it(`should render with label`, () => {
      initializeComponent();

      inputPage().hasLabel('Label').makeSnapshot();
    });
  });

  describe('when prop label is empty', () => {
    before(() => (label = ''));
    it(`should render without label`, () => {
      initializeComponent();

      inputPage().doesNotHaveLabel().makeSnapshot();
    });
  });
});
