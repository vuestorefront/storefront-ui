/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfButtonSize, SfButtonVariant } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfButtonBaseObject from './SfButton.PageObject';

const { vue: SfButtonVue, react: SfButtonReact } = useComponent('SfButton');
const { vue: SfIconCheckCircleVue, react: SfIconCheckCircleReact } = useComponent('SfIconCheckCircle');
const { vue: SfIconIndeterminateCheckBoxVue, react: SfIconIndeterminateCheckBoxReact } =
  useComponent('SfIconIndeterminateCheckBox');

describe('SfButton', () => {
  const slotDefaultContent = 'button content';

  const page = () => new SfButtonBaseObject('button');

  type InitializeComponentParams = {
    size?: SfButtonSize;
    variant?: SfButtonVariant;
    disabled?: boolean;
    square?: boolean;
    slotPrefix?: boolean;
    slotSuffix?: boolean;
    slotDefault?: boolean;
  };
  const initializeComponent = ({
    size = SfButtonSize.base,
    variant = SfButtonVariant.primary,
    disabled,
    square,
    slotPrefix,
    slotSuffix,
    slotDefault = true,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: SfButtonVue,
        global: {
          components: {
            SfIconCheckCircleVue,
            SfIconIndeterminateCheckBoxVue,
          },
        },
        props: {
          size,
          variant,
          disabled,
          square,
        },
        slots: {
          ...(slotPrefix && { prefix: '<SfIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<SfIconIndeterminateCheckBoxVue/>' }),
          ...(slotDefault && { default: () => slotDefaultContent }),
        },
      },
      react: (
        <SfButtonReact
          size={size}
          variant={variant}
          disabled={disabled}
          square={square}
          slotPrefix={slotPrefix && <SfIconCheckCircleReact />}
          slotSuffix={slotSuffix && <SfIconIndeterminateCheckBoxReact />}
        >
          {slotDefault ? slotDefaultContent : undefined}
        </SfButtonReact>
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
    Object.values(SfButtonSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(SfButtonVariant).forEach((componentVariant) => {
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
        initializeComponent({ square: true, size: SfButtonSize.base });

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
