/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Wrapper, mount, useComponent } from '../../utils/mount';
import SfDropdownObject from './SfDropdown.PageObject';
import { isVue } from '../../utils/utils';

const { vue: SfDropdownVue, react: SfDropdownReact } = useComponent('SfDropdown');

describe('SfDropdown', () => {
  const page = () => new SfDropdownObject('dropdown');

  const initializeComponent = (
    props: {
      onClose?: () => void;
      modelValue?: Ref<boolean>;
      trigger?: string | React.ReactElement;
      children?: string | React.ReactElement;
      className?: string;
    } = {},
  ) => {
    const { modelValue = ref(false), children = 'Content', trigger = 'Click', className, onClose } = props;
    return mount({
      vue: {
        component: SfDropdownVue,
        props: {
          modelValue,
          'onUpdate:modelValue': onClose || ((isOpen: boolean) => (modelValue.value = isOpen)),
          class: className,
        },
        slots: {
          trigger: trigger,
          default: children,
        },
      },
      react: (
        <Wrapper
          component={SfDropdownReact}
          open={modelValue}
          trigger={trigger}
          className={className}
          onClose={onClose}
          propCallbackPair={{ open: 'onClose' }}
        >
          {children}
        </Wrapper>
      ),
    });
  };

  describe('When prop open=true', () => {
    it('Should show dropdown children', () => {
      const props = { modelValue: ref(true), children: 'Visible' };
      initializeComponent(props);

      page().isDropdownVisible().contains(props.children).makeSnapshot();
    });

    it('Should show trigger', () => {
      const props = { modelValue: ref(true), trigger: isVue ? '<button>Click</button>' : <button>Click</button> };
      initializeComponent(props);

      page().hasTriggerButton();
    });
  });

  describe('When prop open=false', () => {
    it('Should hide dropdown children', () => {
      const props = { modelValue: ref(false), children: 'Hidden' };
      initializeComponent(props);

      page().isDropdownHidden().makeSnapshot();
    });

    it('Should show trigger', () => {
      const props = { modelValue: ref(false), trigger: isVue ? '<button>Click</button>' : <button>Click</button> };
      initializeComponent(props);

      page().hasTriggerButton();
    });
  });

  describe('When class prop is added', () => {
    it('Should apply given classes to outer element', () => {
      const props = { className: 'custom-class' };
      initializeComponent(props);

      page().hasClass(props.className);
    });
  });

  describe('When click away', () => {
    it('Should call onClose', () => {
      const props = { onClose: cy.spy() };
      initializeComponent(props);

      page().clickAway(props.onClose);
    });
  });

  describe('When press Escape key', () => {
    it('Should call onClose', () => {
      const props = { onClose: cy.spy(), trigger: isVue ? '<button>Mock</button>' : <button>Mock</button> };
      initializeComponent(props);

      page().clickEscape(props.onClose);
    });
  });

  describe('When open modelValue changes', () => {
    it('Should react to the changes', () => {
      const modelValue = ref(false);
      initializeComponent({ modelValue });

      page().isDropdownHidden();

      cy.then(() => {
        modelValue.value = true;
        page().isDropdownVisible();
      }).then(() => {
        modelValue.value = false;
        page().isDropdownHidden();
      });
    });
  });
});
