/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfRatingButtonSize } from '@storefront-ui/shared';
import { type SfRatingButtonProps } from '@storefront-ui/react';
import { mount, useComponent } from '../../utils/mount';

const { vue: SfRatingButtonVue, react: SfRatingButtonReact } = useComponent('SfRatingButton');
import SfRatingButtonBaseObject from './SfRatingButton.PageObject';
import { isReact } from '../../utils/utils';

describe('SfRatingButton', () => {
  const page = () => new SfRatingButtonBaseObject('ratingbutton');

  const initializeComponent = (props: SfRatingButtonProps = {}) => {
    const { value, onChange, max, name, disabled, label, size, getLabelText, children } = props;
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

      // index 0 means click first empty icon
      page().clickEmptyIcon(0);
      cy.then(() => {
        // so expected value passed to onChange/modelValue should be +1 to the current value
        expect(props.onChange).calledOnceWith(props.value + 1);
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
    if (isReact) {
      it('should pass props to render function', () => {
        const props = { children: cy.spy(), max: 5, size: SfRatingButtonSize.base };
        initializeComponent(props);

        cy.then(() => {
          expect(props.children).to.be.callCount(props.max);
          expect(props.children).to.be.calledWith({ isFilled: false, max: props.max, iconSize: 'lg' });
        });
      });
    }
  });
});
