/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import type { InputHTMLAttributes } from 'react';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { VsfChipSize } from '@storefront-ui/vue/components/VsfChip/types';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import VsfChipObject from './VsfChip.PageObject';

const { vue: VsfChipVue, react: VsfChipReact } = useComponent('VsfChip');

describe.skip('VsfChip', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const slotContent = 'Label';
  const page = () => new VsfChipObject('chip');

  const initializeComponent = ({
    modelValue = ref(false),
    size = VsfChipSize.base,
    square = false,
    inputProps,
  }: {
    modelValue?: Ref<boolean>;
    size?: VsfChipSize;
    square?: boolean;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
  }) => {
    return mount({
      vue: {
        component: VsfChipVue,
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
          component={VsfChipReact}
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
    Object.values(VsfChipSize).forEach((componentSize) => {
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

      page().isSquare('p-2').makeSnapshot();
    });
  });
});
