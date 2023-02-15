/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import type { Ref } from 'vue';
import { ref, h } from 'vue';
import { VsfChipSize } from '@storefront-ui/vue/components/VsfChip/types';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import VsfChipObject from './VsfChip.PageObject';

const { vue: VsfChipVue, react: VsfChipReact } = useComponent('VsfChip');
const { vue: VsfIconCircleVue, react: VsfIconCircleReact } = useComponent('VsfIconCircle');

describe('VsfChip', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new VsfChipObject('chip');

  const initializeComponent = ({
    modelValue = ref(false),
    size = VsfChipSize.base,
    value = '',
    label = '',
    disabled = false,
    deletable = false,
  }: {
    modelValue?: Ref<boolean>;
    size?: VsfChipSize;
    value?: string;
    label?: string;
    disabled?: boolean;
    deletable?: boolean;
  }) => {
    return mount({
      vue: {
        component: VsfChipVue,
        props: {
          modelValue,
          size,
          value,
          label,
          disabled,
          deletable,
          'onUpdate:modelValue': onChangeSpy,
        },
        slots: {
          prefix: () => h(VsfIconCircleVue),
        },
      },
      react: (
        <Wrapper
          selected={modelValue}
          size={size}
          value={value}
          component={VsfChipReact}
          onSelected={onChangeSpy}
          label={label}
          disabled={disabled}
          deletable={deletable}
          slotPrefix={<VsfIconCircleReact />}
        />
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

  describe('when size is changed to ', () => {
    Object.values(VsfChipSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          const size = componentSize;
          initializeComponent({ size });

          page().hasSizeClass(componentSize).makeSnapshot();
        });
      });
    });
  });

  describe('when value is set', () => {
    it(`should have correct attribute value `, () => {
      initializeComponent({ value: 'yellow' });

      page().isValueSet('yellow').makeSnapshot();
    });
  });

  describe('when prop disabled=true', () => {
    it(`should render as disabled`, () => {
      initializeComponent({ disabled: true });

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when prop label is filled in', () => {
    it(`should render with label`, () => {
      initializeComponent({ label: 'Label' });

      page().hasLabel('Label').makeSnapshot();
    });
  });

  describe('when it is selected', () => {
    it('should change selected/modelValue', () => {
      initializeComponent({ label: 'Label' });

      page().isNotDisabled().isSelected();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      });
    });
  });
});
