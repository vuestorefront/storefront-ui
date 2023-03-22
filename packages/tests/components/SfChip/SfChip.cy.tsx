/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import type { InputHTMLAttributes } from 'react';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { SfChipSize } from '@storefront-ui/vue';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import SfChipObject from './SfChip.PageObject';

const { vue: SfChipVue, react: SfChipReact } = useComponent('SfChip');

describe('SfChip', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const slotContent = 'Label';
  const page = () => new SfChipObject('chip');

  const initializeComponent = ({
    modelValue = ref(false),
    size = SfChipSize.base,
    square = false,
    inputProps,
  }: {
    modelValue?: Ref<boolean>;
    size?: SfChipSize;
    square?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
  }) => {
    return mount({
      vue: {
        component: SfChipVue,
        props: {
          modelValue,
          size,
          inputProps,
          square,
          'onUpdate:modelValue': onChangeSpy,
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: (
        <Wrapper
          size={size}
          inputProps={{ ...inputProps, onChange: onChangeSpy }}
          square={square}
          component={SfChipReact}
        >
          {slotContent}
        </Wrapper>
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent({});

    page().makeSnapshot();
  });

  describe('when it is checked', () => {
    it(`should change value/modelValue`, () => {
      initializeComponent({ inputProps: { value: 'yellow' } });

      page().isNotDisabled().isSelected();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      });
    });
  });
  describe('when  is set', () => {
    it(`should have correct attribute value `, () => {
      initializeComponent({ inputProps: { value: 'yellow' } });

      page().isValueSet('yellow').makeSnapshot();
    });
  });
  describe('when prop disabled=true', () => {
    it(`should have correct attribute disabled `, () => {
      initializeComponent({ inputProps: { disabled: true } });

      page().isDisabled().makeSnapshot();
    });
  });
  describe('when prop size is set to ', () => {
    Object.values(SfChipSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });
  describe('when prop square=true', () => {
    it(`should render square chip`, () => {
      initializeComponent({ square: true });

      page().hasClass('px-2').hasClass('py-2').makeSnapshot();
    });
  });
});
