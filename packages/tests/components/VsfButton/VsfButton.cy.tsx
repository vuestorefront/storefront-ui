/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfButtonSize, VsfButtonVariant } from '@storefront-ui/vue/index';
import { mount, useComponent } from '../../utils/mount';
import VsfButtonBaseObject from './VsfButton.PageObject';

const { vue: VsfButtonVue, react: VsfButtonReact } = useComponent('VsfButton');
const { vue: VsfIconCheckCircleVue, react: VsfIconCheckCircleReact } = useComponent('VsfIconCheckCircle');
const { vue: VsfIconIndeterminateCheckBoxVue, react: VsfIconIndeterminateCheckBoxReact } =
  useComponent('VsfIconIndeterminateCheckBox');

describe('VsfButton', () => {
  const slotDefaultContent = 'button content';

  const page = () => new VsfButtonBaseObject('button');

  type InitializeComponentParams = {
    size?: VsfButtonSize;
    variant?: VsfButtonVariant;
    disabled?: boolean;
    square?: boolean;
    slotPrefix?: boolean;
    slotSuffix?: boolean;
    slotDefault?: boolean;
  };
  const initializeComponent = ({
    size = VsfButtonSize.base,
    variant = VsfButtonVariant.primary,
    disabled,
    square,
    slotPrefix,
    slotSuffix,
    slotDefault = true,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: VsfButtonVue,
        global: {
          components: {
            VsfIconCheckCircleVue,
            VsfIconIndeterminateCheckBoxVue,
          },
        },
        props: {
          size,
          variant,
          disabled,
          square,
        },
        slots: {
          ...(slotPrefix && { prefix: '<VsfIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<VsfIconIndeterminateCheckBoxVue/>' }),
          ...(slotDefault && { default: () => slotDefaultContent }),
        },
      },
      react: (
        <VsfButtonReact
          size={size}
          variant={variant}
          disabled={disabled}
          square={square}
          slotPrefix={slotPrefix && <VsfIconCheckCircleReact />}
          slotSuffix={slotSuffix && <VsfIconIndeterminateCheckBoxReact />}
        >
          {slotDefault ? slotDefaultContent : undefined}
        </VsfButtonReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(200, 200);
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfButtonSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(VsfButtonVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant });

          page().makeSnapshot();
        });
      });
    });

    describe('when prop disabled=true', () => {
      it(`should render as disabled`, () => {
        initializeComponent({ disabled: true });

        page().isDisabled().makeSnapshot();
      });
    });

    describe('when prop square=true', () => {
      it(`should render as square button`, () => {
        initializeComponent({ square: true, size: VsfButtonSize.base });

        page().isSquare('p-2').makeSnapshot();
      });
    });

    describe('when only prefix', () => {
      it(`should render square button`, () => {
        initializeComponent({ slotPrefix: true, slotDefault: false });

        page().makeSnapshot();
      });
    });

    describe('when only suffix', () => {
      it(`should render square button`, () => {
        initializeComponent({ slotSuffix: true, slotDefault: false });

        page().makeSnapshot();
      });
    });

    describe('when suffix and prefix', () => {
      it(`should render button with same gaps`, () => {
        initializeComponent({ slotPrefix: true, slotSuffix: true, slotDefault: false });

        page().makeSnapshot();
      });
    });

    describe('when suffix, content and prefix', () => {
      it(`should render button with same gaps`, () => {
        initializeComponent({ slotPrefix: true, slotSuffix: true, slotDefault: true });

        page().makeSnapshot();
      });
    });

    describe('when prefix and content', () => {
      it(`should render button with prefix and content with correct gaps`, () => {
        initializeComponent({ slotPrefix: true, slotDefault: true });

        page().makeSnapshot();
      });
    });

    describe('when content and suffix', () => {
      it(`should render button with content and suffix with correct gaps`, () => {
        initializeComponent({ slotSuffix: true, slotDefault: true });

        page().makeSnapshot();
      });
    });
  });
});
