/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfNavigationTopVue from "../../../frameworks/vue/components/VsfNavigationTop/VsfNavigationTop.vue";
import VsfNavigationTopReact from "../../../frameworks/react/components/VsfNavigationTop/VsfNavigationTop";
import { mount, Wrapper } from '../../utils/mount';
import VsfNavigationTopBaseObject from "./VsfNavigationTop.PageObject";
import { VsfNavigationTopVariant } from "../../../frameworks/react/components/VsfNavigationTop/types";
import { ref } from "vue";
import type { Ref } from "vue";

describe("VsfNavigationTop", () => {
  const page = () => new VsfNavigationTopBaseObject("navigation-top");

  const initializeComponent = ({
    modelValue = ref(false),
    variant
  }: {
    modelValue?: Ref<boolean>;
    variant?: VsfNavigationTopVariant,
  }) => {
    return mount({
      vue: {
        component: VsfNavigationTopVue,
        props: {
          modelValue,
          variant,
          'onUpdate:modelValue': (e: boolean) => modelValue.value = e
        },
        slots: {
          default: `<div>Column 1 longer text</div><div>Column 2</div><div>Column 3</div><div>Column 4</div>`
       }
      },
      react: <Wrapper
        open={modelValue}
        variant={variant}
        onOpenChange={(e: boolean) => modelValue.value = e}
        component={VsfNavigationTopReact}
      >
        <div>Column 1 longer text</div><div>Column 2</div><div>Column 3</div><div>Column 4</div>
      </Wrapper>
    });
  }

  beforeEach(() => {
    cy.viewport(800, 200);
  })

  it('initial state', () => {
    initializeComponent({});

    page().isNotVisible();
  });

  describe('when opened and click close button', () => {
    it('should modelValue = false and notBeVisible', () => {
      const modelValue = ref(true);
      initializeComponent({modelValue});

      page()
        .isVisible()
        .clickCloseButton();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
      });
    });
  });

  describe('when opened and click outside navigation', () => {
    it('should modelValue = false and notBeVisible', () => {
      const modelValue = ref(true);
      initializeComponent({modelValue});

      page()
        .isVisible()
        .clickOutside()
        .isNotVisible();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(VsfNavigationTopVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({modelValue: ref(true), variant: componentVariant});

          page().makeSnapshot();
        });
      });
    });
  });
});
