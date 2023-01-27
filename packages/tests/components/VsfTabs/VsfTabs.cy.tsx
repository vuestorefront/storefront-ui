/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import type { Ref } from 'vue';
import { ref, h } from 'vue';
import { VsfButtonSize } from '@storefront-ui/vue/components/VsfButton/types';
import { mount, Wrapper, useComponent } from '../../utils/mount';
import VsfTabsBaseObject from './VsfTabs.PageObject';

const { vue: VsfTabsVue, react: VsfTabsReact } = useComponent('VsfTabs');
const { vue: VsfTabsItemVue, react: VsfTabsItemReact } = useComponent('VsfTabsItem');
const { vue: VsfCounterVue, react: VsfCounterReact } = useComponent('VsfCounter');
const { vue: VsfIconDotVue, react: VsfIconDotReact } = useComponent('VsfIconDot');

describe('VsfTabs', () => {
  const page = () => new VsfTabsBaseObject('tabs');
  const tabs = [
    {
      label: 'Label 1',
      counter: '123',
    },
    {
      label: 'Label 2',
      counter: '234',
    },
    {
      label: 'Label 3',
      counter: '345',
    },
  ];

  let disabledItem = '';
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const initializeComponent = ({
    modelValue = ref(''),
    size = ref(VsfButtonSize.base),
  }: {
    modelValue?: Ref<number | string | symbol>;
    size?: Ref<VsfButtonSize>;
  } = {}) => {
    return mount({
      vue: {
        component: VsfTabsVue,
        props: {
          modelValue,
          size,
          'onUpdate:modelValue': onChangeSpy,
        },
        slots: {
          default: () =>
            tabs.map(({ label, counter }) => {
              return h(
                VsfTabsItemVue,
                {
                  key: label,
                  uid: label,
                  disabled: label === disabledItem,
                },
                {
                  prefix: () => h(VsfIconDotVue),
                  default: () => label,
                  suffix: () => h(VsfCounterVue, { pill: true }, { default: () => counter }),
                },
              );
            }),
        },
      },
      react: (
        <Wrapper active={modelValue} size={size} onChange={onChangeSpy} component={VsfTabsReact}>
          {tabs.map((tab) => (
            <VsfTabsItemReact
              key={tab.label}
              uid={tab.label}
              disabled={tab.label === disabledItem}
              slotPrefix={<VsfIconDotReact />}
              slotSuffix={<VsfCounterReact pill>{tab.counter}</VsfCounterReact>}
            >
              {tab.label}
            </VsfTabsItemReact>
          ))}
        </Wrapper>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(700, 300);
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when click on tab', () => {
    it('should emit label of active one', () => {
      initializeComponent();

      page().buttonElements.each(($el) => {
        cy.wrap($el)
          .click()
          .then(() => {
            expect(onChangeSpy).calledWith($el.clone().children().remove().end().text());
          });
        page().makeSnapshot();
      });
    });
  });

  describe('when size is changed to ', () => {
    [...Object.values(VsfButtonSize)].forEach((componentSize) => {
      describe(componentSize, () => {
        it('should render proper tab size', () => {
          initializeComponent({ size: ref(componentSize) });

          page().hasSizeClass(componentSize).makeSnapshot();
        });
      });
    });
  });

  describe('when disabled prop is set', () => {
    [...tabs].forEach((tab, index) => {
      describe(tab.label, () => {
        it('should tab be disabled', () => {
          disabledItem = tab.label;
          initializeComponent();

          page().isTabDisabled(index).makeSnapshot();
        });
      });
    });
  });

  describe('when prefix slot is filled ', () => {
    it('should content be visible', () => {
      initializeComponent();

      page().buttonElements.each(($el) => {
        cy.wrap($el).find('.vsf-icon').should('be.visible');
        page().makeSnapshot();
      });
    });
  });

  describe('when default slot is filled ', () => {
    it('should label content be visible', () => {
      initializeComponent();

      page().buttonElements.each(($el, index) => {
        cy.wrap($el).contains(tabs[index].label);
        page().makeSnapshot();
      });
    });
  });

  describe('when suffix slot is filled ', () => {
    it('should content be visible', () => {
      initializeComponent();

      page().buttonElements.each(($el, index) => {
        cy.wrap($el).find('.vsf-counter').should('be.visible');
        cy.wrap($el).contains(tabs[index].counter);
        page().makeSnapshot();
      });
    });
  });
});
