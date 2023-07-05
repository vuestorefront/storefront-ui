import React from 'react';
import { SfTextareaSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';

const { vue: SfTextareaVue, react: SfTextareaReact } = useComponent('SfTextarea');
import SfTextareaBaseObject from './SfTextarea.PageObject';

describe('SfTextarea', () => {
  let disabled: boolean;
  let size: SfTextareaSize;
  let placeholder: string;
  let invalid: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = '';
  let readonly;

  const page = () => new SfTextareaBaseObject('textarea');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfTextareaVue,
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
        <SfTextareaReact
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

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(SfTextareaSize).forEach((componentSize) => {
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

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when prop placeholder is filled in', () => {
    before(() => {
      placeholder = 'Select value';
    });
    it('should render with set placeholder value', () => {
      initializeComponent();

      page().hasPlaceholderValue(placeholder).makeSnapshot();
    });
  });

  describe('when prop readonly is provided', () => {
    before(() => {
      readonly = true;
    });
    it(`should render as readonly textarea`, () => {
      initializeComponent();

      page().hasReadonly().makeSnapshot();
    });
  });

  describe('when textarea value change', () => {
    before(() => {
      value = 'abc';
    });
    it(`should render proper value`, () => {
      initializeComponent();

      page().hasValue(value).makeSnapshot();
    });
  });
});
