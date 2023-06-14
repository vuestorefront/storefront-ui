/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfRatingButtonSize, noop } from '@storefront-ui/shared';
import { mount, useComponent } from '../../utils/mount';

const { vue: SfRatingButtonVue, react: SfRatingButtonReact } = useComponent('SfRatingButton');
import SfRatingButtonBaseObject from './SfRatingButton.PageObject';
import { isVue } from '../../utils/utils';

describe('SfRatingButton', () => {
  const page = () => new SfRatingButtonBaseObject('ratingbutton');

  const initializeComponent = (
    props: {
      value?: number;
      onChange?: (value: number) => void;
      max?: number;
      name?: string;
      disabled?: boolean;
      label?: string;
      size?: SfRatingButtonSize;
      getLabelText?: (value: number) => string;
      children?: () => JSX.Element;
    } = {},
  ) => {
    const {
      value = 0,
      onChange = noop,
      max = 5,
      name = 'sf-rating-button',
      disabled = false,
      label = 'Rating',
      size = SfRatingButtonSize.base,
      getLabelText = (value) => `${value} star`,
      children,
    } = props;
    return mount({
      vue: {
        component: SfRatingButtonVue,
        props: {
          modelValue: value,
          'onUpdate:modelValue': onChange,
          max,
          name,
          disabled,
          label,
          size,
          getLabelText,
        },
        slots: {
          default: () => children?.(),
        },
      },
      react: (
        <SfRatingButtonReact
          value={value}
          onChange={onChange}
          max={max}
          name={name}
          disabled={disabled}
          label={label}
          size={size}
          getLabelText={getLabelText}
        >
          {children}
        </SfRatingButtonReact>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when value prop', () => {
    it('should trigger onChange/emit modelValue when click on icon', () => {
      const props = { value: 6, max: 9, onChange: cy.spy() };
      initializeComponent(props);

      page().clickEmptyIcon();
      cy.then(() => {
        expect(props.onChange).to.be.calledOnce;
      });
    });
  });

  describe('when value and max is set', () => {
    it('should display number of icons same as max value', () => {
      const props = { value: 6, max: 9 };
      initializeComponent(props);

      page().hasIconsByValue(props.value, props.max);
    });
  });

  describe('when prop name is set', () => {
    it('should pass given name to all inputs', () => {
      const props = { name: 'custom-name', max: 5 };
      initializeComponent(props);

      page().allInputsHaveAttr({ attr: 'name', expectedValue: props.name, max: props.max });
    });
  });

  describe('when prop label is set', () => {
    it('should pass given label', () => {
      const props = { label: 'rating button label' };
      initializeComponent(props);

      page().hasLabel(props.label);
    });
  });

  describe('when prop disabled=true', () => {
    it('should not change value on click', () => {
      const props = { disabled: true, value: 1, onChange: cy.spy() };
      initializeComponent(props);

      page().hasValue(props.value).clickFilledIcon().hasValue(props.value);
      cy.then(() => {
        expect(props.onChange).not.to.be.called;
      });
      page().clickEmptyIcon().hasValue(props.value);
      cy.then(() => {
        expect(props.onChange).not.to.be.called;
      });
    });

    it('should be grey', () => {
      const props = { disabled: true };
      initializeComponent(props);

      page().makeSnapshot();
    });

    it('should be grey with filled icons', () => {
      const props = { disabled: true, value: 4, max: 5 };
      initializeComponent(props);

      page().makeSnapshot();
    });
  });

  describe('when prop getLabelText is set', () => {
    it('should pass given label to each input', () => {
      const props = { getLabelText: (value) => `${value} heart${value !== 1 ? 's' : ''}`, max: 5 };
      initializeComponent(props);

      page().allInputsHaveAttr({ attr: 'aria-label', expectedValue: props.getLabelText, max: props.max });
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(SfRatingButtonSize).forEach((size) => {
      describe(`${size}`, () => {
        it(`should render correct ${size} size`, () => {
          initializeComponent({ size });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when custom icon', () => {
    it('should render custom icons', () => {
      const props = { children: isVue ? () => <p>star</p> : () => <p>star</p> };
      initializeComponent(props);

      page().makeSnapshot();
    });
  });
});
