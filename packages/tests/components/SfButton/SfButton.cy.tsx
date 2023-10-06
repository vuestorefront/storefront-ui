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
    tag?: string;
  };
  const initializeComponent = ({
    size,
    variant,
    disabled,
    square,
    slotPrefix,
    slotSuffix,
    slotDefault = true,
    tag,
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
          tag,
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
          as={tag}
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

  const squarePaddingsToSize = {
    [SfButtonSize.sm]: 'p-1.5',
    [SfButtonSize.lg]: 'p-3',
    [SfButtonSize.base]: 'p-2',
  };

  describe('when prop square=true and size is set to ', () => {
    Object.values(SfButtonSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct square ${componentSize} size`, () => {
          initializeComponent({ size: componentSize, square: true });

          page().hasClass(squarePaddingsToSize[componentSize]).makeSnapshot();
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
  });

  describe('when no size specified via props', () => {
    it(`should init with SfButtonSize.base size`, () => {
      initializeComponent();

      page().hasClass('py-2').hasClass('leading-6').hasClass('px-4').hasClass('gap-2').makeSnapshot();
    });
  });

  describe('when no variant specified via props', () => {
    it(`should init with SfButtonVariant.primary variant`, () => {
      initializeComponent();

      page()
        .hasClass('bg-primary-700')
        .hasClass('hover:bg-primary-800')
        .hasClass('active:bg-primary-900')
        .hasClass('disabled:bg-disabled-300')
        .makeSnapshot();
    });
  });

  describe('when prop disabled=true', () => {
    it(`should render as disabled`, () => {
      initializeComponent({ disabled: true });

      page().isDisabled().makeSnapshot();
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

  describe('when tag is different than button', () => {
    it(`should render tag without type attribute`, () => {
      initializeComponent({ tag: 'div' });

      page().doesNotHaveType().makeSnapshot();
    });
  });
});
