/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import type { Ref } from 'vue';
import { ref, h } from 'vue';
// import vue
import VsfTabsVue from "../../../sfui/frameworks/vue/components/VsfTabs/VsfTabs.vue";
import VsfTabsItemVue from '../../../sfui/frameworks/vue/components/VsfTabs/VsfTabsItem.vue';
import VsfCounterVue from '../../../sfui/frameworks/vue/components/VsfCounter/VsfCounter.vue'
import VsfIconDotVue from '../../../sfui/frameworks/vue/components/VsfIcons/VsfIconDot.vue';
// end import vue
// import react
import VsfTabsReact from "../../../sfui/frameworks/react/components/VsfTabs/VsfTabs";
import VsfTabsItemReact from '../../../sfui/frameworks/react/components/VsfTabs/VsfTabsItem';
import VsfIconDotReact from '../../../sfui/frameworks/react/components/VsfIcons/VsfIconDot';
import VsfCounterReact from '../../../sfui/frameworks/react/components/VsfCounter/VsfCounter';
// end import react
import { mount, Wrapper } from '../../utils/mount';
import VsfTabsBaseObject from "./VsfTabs.PageObject";
import { VsfButtonSizes } from '../../../sfui/frameworks/vue/components/VsfButton/types';

describe("VsfTabs", () => {
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
  let onChangeSpy = Cypress.Agent<sinon.SinonSpy>;

  const initializeComponent = ({
    modelValue = ref(''),
    size = ref(VsfButtonSizes.base),
  }: {
    modelValue?: Ref<number | string | symbol>,
    size?: VsfButtonSizes,
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
            tabs.map(
              ({ label, counter }) => {
                return h(
                  VsfTabsItemVue, {
                  key: label,
                  uid: label,
                  disabled: label === disabledItem,
                },
                {
                  prefix: () => h(VsfIconDotVue), 
                  default: () => label, 
                  suffix: () => h(VsfCounterVue, { pill: true },  { default: () => counter })
                }
              )
              }
            )
        }
      },
        react: <Wrapper
          active={modelValue}
          size={size}
          onChange={onChangeSpy}
          component={VsfTabsReact}
        >
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
    });
  }

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
        cy.wrap($el).click()
          .then(() => {
            expect(onChangeSpy).calledWith($el.clone().children().remove().end().text());
          })
        page().makeSnapshot();
      });
    });
  });

  describe('when size is changed to ', () => {
    [...Object.values(VsfButtonSizes)].forEach((componentSize) => {
      describe(componentSize, () => {
        it('should render proper tab size', () => {
          const size = componentSize;
          initializeComponent({ size });

          page()
            .hasSizeClass(componentSize)
            .makeSnapshot();
        })
      })
    });
  })

  describe('when disabled prop is set', () => {
    [...tabs].forEach((tab, index) => {
      describe(tab.label, () => {
        it('should tab be disabled', () => {
          disabledItem = tab.label;
          initializeComponent();

          page()
            .isTabDisabled(index)
            .makeSnapshot();
        })
      })
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
