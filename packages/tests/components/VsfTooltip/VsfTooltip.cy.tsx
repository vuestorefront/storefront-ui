/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: VsfTooltipVue, react: VsfTooltipReact } = useComponent('VsfTooltip');
const { vue: VsfButtonVue, react: VsfButtonReact } = useComponent('VsfButton');
import VsfTooltipBaseObject from './VsfTooltip.PageObject';
import { VsfTooltipPlacement } from '../../../sfui/frameworks/vue/components/VsfTooltip';
import VsfDropdownInternalBaseObject from '../VsfDropdownInternal/VsfDropdownInternal.PageObject';

describe('VsfTooltip', () => {
  const page = () => new VsfTooltipBaseObject('tooltip');
  const dropdownPage = () => new VsfDropdownInternalBaseObject('tooltip');

  const initializeComponent = ({
    modelValue = ref(),
    label,
    placement,
    hidePointer,
  }: {
    label?: string;
    placement?: VsfTooltipPlacement;
    hidePointer?: boolean;
    modelValue?: Ref<boolean | undefined>;
  }) => {
    return mount({
      vue: {
        component: VsfTooltipVue,
        global: {
          components: {
            VsfButtonVue,
          },
        },
        props: {
          label,
          hidePointer,
          placement,
          modelValue,
          'onUpdate:modelValue': (isOpen: boolean) => (modelValue.value = isOpen),
        },
        slots: {
          default: '<VsfButtonVue data-testid="tooltip-trigger">Button with tooltip</VsfButtonVue>',
        },
      },
      react: (
        <Wrapper
          open={modelValue}
          label={label}
          placement={placement}
          hidePointer={hidePointer}
          onOpenUpdate={(isOpen: boolean) => (modelValue.value = isOpen)}
          component={VsfTooltipReact}
        >
          <VsfButtonReact data-testid="tooltip-trigger">Button with tooltip</VsfButtonReact>
        </Wrapper>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(400, 280);
    page().cyRoot.then((el) => (el[0].style.padding = '120px'));
  });

  it('initial state', () => {
    initializeComponent({});
  });

  describe('when prop label is set to Tooltip label', () => {
    it(`should render without pointer`, () => {
      initializeComponent({ label: 'Tooltip label', modelValue: ref(true) });

      page().hasLabel('Tooltip label').makeSnapshot();
    });
  });

  describe('when prop hidePointer is set to true', () => {
    it(`should render without pointer`, () => {
      initializeComponent({ hidePointer: true, label: 'Tooltip label', modelValue: ref(true) });

      page().doesNotHavePointer().makeSnapshot();
    });
  });

  describe('when prop hidePointer is set to false', () => {
    it(`should render with pointer`, () => {
      initializeComponent({ hidePointer: false, label: 'Tooltip label', modelValue: ref(true) });

      page().hasPointer().makeSnapshot();
    });
  });

  describe('when prop placement is set to ', () => {
    Object.values(VsfTooltipPlacement).forEach((placement) => {
      describe(`${placement}`, () => {
        it(`should render correct ${placement} placement of dropdown`, () => {
          initializeComponent({ modelValue: ref(true), placement });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when hover on trigger element', () => {
    it('should open/close on trigger mouseenter/mouseleave', () => {
      const modelValue = ref(false);
      initializeComponent({ modelValue, label: 'Tooltip label' });

      dropdownPage().dropdownIsClose().hoverTriggerElement();

      cy.then(() => {
        expect(modelValue.value).to.be.true;
        dropdownPage().dropdownIsOpen().hoverOutTriggerElement();
      }).then(() => {
        expect(modelValue.value).to.be.false;
        dropdownPage().dropdownIsClose();
      });
    });
  });
});
