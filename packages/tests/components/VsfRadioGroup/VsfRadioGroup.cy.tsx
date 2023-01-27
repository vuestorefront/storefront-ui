/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfRadioGroupDirection } from '@storefront-ui/vue/components/VsfRadio/types';
import { mount, useComponent } from '../../utils/mount';
import VsfRadioGroupBaseObject from './VsfRadioGroup.PageObject';

const { vue: VsfRadioGroupVue, react: VsfRadioGroupReact } = useComponent('VsfRadioGroup');

describe('VsfRadioGroup', () => {
  const slotContent = 'radios';

  const page = () => new VsfRadioGroupBaseObject('radio-group');
  const initializeComponent = ({
    legend,
    direction,
    invalid,
    required,
    errorText,
    helpText,
    requiredText,
  }: {
    legend?: string;
    direction?: VsfRadioGroupDirection;
    invalid?: boolean;
    required?: boolean;
    errorText?: string;
    helpText?: string;
    requiredText?: string;
  }) => {
    return mount({
      vue: {
        component: VsfRadioGroupVue,
        props: {
          legend,
          direction,
          invalid,
          required,
          errorText,
          helpText,
          requiredText,
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: (
        <VsfRadioGroupReact
          legend={legend}
          direction={direction}
          invalid={invalid}
          required={required}
          errorText={errorText}
          helpText={helpText}
          requiredText={requiredText}
        >
          {slotContent}
        </VsfRadioGroupReact>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent({});

    page().makeSnapshot();
  });

  describe('when direction prop is set to', () => {
    Object.values(VsfRadioGroupDirection).forEach((direction) => {
      describe(`${direction}`, () => {
        it(`should render correct ${direction} direction`, () => {
          initializeComponent({ direction });

          page().makeSnapshot();
        });

        describe('when prop legend is filled', () => {
          it(`should render with legend`, () => {
            const legend = 'Legend';
            initializeComponent({ direction, legend });

            page().hasLegend(legend).makeSnapshot();
          });
        });

        describe('when prop required=true', () => {
          it(`should render as required`, () => {
            initializeComponent({ direction, required: true });

            page().isRequired().makeSnapshot();
          });
        });

        describe('when prop requiredText is filled', () => {
          it('should render with required text', () => {
            const requiredText = 'Required';
            initializeComponent({ direction, required: true, requiredText });

            page().hasRequiredText(`*${requiredText}`).makeSnapshot();
          });
        });

        describe('when prop helpText is visible', () => {
          it('should render with help text', () => {
            const helpText = 'Help';
            initializeComponent({ direction, helpText });

            page().hasHelpText(helpText).makeSnapshot();
          });
        });

        describe('when prop errorText is filled and invalid=true', () => {
          it('should render with error text', () => {
            const invalid = true;
            const errorText = 'Error';
            initializeComponent({ direction, invalid, errorText });

            page().hasErrorText(errorText).makeSnapshot();
          });
        });
      });
    });
  });
});
