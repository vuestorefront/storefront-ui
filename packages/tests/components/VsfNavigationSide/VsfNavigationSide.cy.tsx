/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { mount, useComponent, Wrapper } from '../../utils/mount';
import VsfNavigationSideBaseObject from './VsfNavigationSide.PageObject';

const { vue: VsfNavigationSideVue, react: VsfNavigationSideReact } = useComponent('VsfNavigationSide');

describe('VsfNavigationSide', () => {
  let permanent: boolean;
  let leftSide: boolean;
  let overlayVisible: boolean;
  let logoAriaLabel: string;
  let closeAriaLabel: string;
  let logoLink: string;

  const page = () => new VsfNavigationSideBaseObject('navigation-side');

  const initializeComponent = ({
    modelValue = ref(false),
    slotBanner = ref(),
  }: {
    modelValue?: Ref<boolean>;
    slotBanner?: Ref<string | undefined>;
  }) => {
    return mount({
      vue: {
        component: VsfNavigationSideVue,
        props: {
          modelValue,
          permanent,
          leftSide,
          overlayVisible,
          logoAriaLabel,
          logoLink,
          closeAriaLabel,
          'onUpdate:modelValue': (e: boolean) => (modelValue.value = e),
        },
        slots: {
          default: `<div>I am a default slot</div>`,
          banner: `<div>I am a banner slot</div>`,
        },
      },
      react: (
        <Wrapper
          permanent={permanent}
          leftSide={leftSide}
          overlayVisible={overlayVisible}
          logoAriaLabel={logoAriaLabel}
          logoLink={logoLink}
          closeAriaLabel={closeAriaLabel}
          open={modelValue}
          slotBanner={slotBanner}
          onOpenChange={(e: boolean) => (modelValue.value = e)}
          component={VsfNavigationSideReact}
        >
          <div>I am a default slot for accordion content</div>
        </Wrapper>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(800, 200);
    permanent = false;
  });

  it('initial state', () => {
    initializeComponent({});

    page().makeSnapshot();
  });

  describe('when close button is clicked', () => {
    it('should close the modal', () => {
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page().clickCloseButton().isClosed();

      cy.then(() => {
        expect(modelValue.value).to.be.false;
      });
    });
  });

  describe('when prop logoAriaLabel is filled in', () => {
    const modelValue = ref(true);
    logoAriaLabel = 'Logo test label';
    it(`should render logo with aria label`, () => {
      initializeComponent({ modelValue });

      page().hasLogoAriaLabel().makeSnapshot();
    });
  });

  describe('when prop closeAriaLabel is filled in', () => {
    const modelValue = ref(true);
    closeAriaLabel = 'Close test label';
    it(`should render close button with aria label`, () => {
      initializeComponent({ modelValue });

      page().hasCloseAriaLabel().makeSnapshot();
    });
  });

  describe('when permanent set to true', () => {
    it('should hide the close button', () => {
      permanent = true;
      const modelValue = ref(true);
      initializeComponent({ modelValue });

      page().closeButtonHidden();
    });
  });
});
