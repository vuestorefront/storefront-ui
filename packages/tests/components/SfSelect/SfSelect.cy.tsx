/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfSelectSize } from '@storefront-ui/vue';
import { h } from 'vue';
import { mount, useComponent } from '../../utils/mount';
import SfSelectBaseObject from './SfSelect.PageObject';

const { vue: SfSelectVue, react: SfSelectReact } = useComponent('SfSelect');

describe('SfSelect', () => {
  const options = [
    { label: 'red', value: 'red' },
    { label: 'blue', value: 'blue' },
    { label: 'yellow', value: 'yellow' },
    { label: 'green', value: 'green' },
    { label: 'gray', value: 'gray' },
    { label: 'black', value: 'black' },
    { label: 'brown', value: 'brown' },
  ];
  let disabled: boolean;
  let size: SfSelectSize;
  let required: boolean;
  let placeholder: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = '';

  const page = () => new SfSelectBaseObject('select');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfSelectVue,
        props: {
          options: Object.values(options),
          disabled,
          size,
          required,
          placeholder,
          invalid,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
        slots: {
          default: () => options.map((option) => h('option', { value: option.value }, option.label)),
        },
      },
      react: (
        <SfSelectReact
          options={Object.values(options)}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          invalid={invalid}
          size={size}
          onChange={onChangeSpy}
        >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelectReact>
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = SfSelectSize.base;
    placeholder = '--Select--';
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(SfSelectSize).forEach((componentSize) => {
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

      page().isNotDisabled().hasSelectedOption('red');
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
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
