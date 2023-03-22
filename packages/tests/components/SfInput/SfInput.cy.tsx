/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfInputSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfInputBaseObject from './SfInput.PageObject';

const { vue: SfInputVue, react: SfInputReact } = useComponent('SfInput');

describe('SfInput', () => {
  let disabled: boolean;
  let size: SfInputSize;
  let placeholder: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = '';
  let readonly;

  const page = () => new SfInputBaseObject('input');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfInputVue,
        props: {
          disabled,
          size,
          placeholder,
          invalid,
          readonly,
          modelValue: value,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <SfInputReact
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          invalid={invalid}
          size={size}
          readOnly={readonly}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = SfInputSize.base;
    (placeholder = 'Placeholder'), (readonly = undefined);
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(SfInputSize).forEach((componentSize) => {
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

  describe('when input value change', () => {
    before(() => {
      value = 'abc';
    });
    it(`should render proper value`, () => {
      initializeComponent();

      page().hasValue(value);
      page().makeSnapshot();
    });
  });
});
