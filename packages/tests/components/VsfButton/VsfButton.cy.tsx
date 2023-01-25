/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfButtonVue, react: VsfButtonReact } = useComponent('VsfButton');
const { vue: VsfIconCheckCircleVue, react: VsfIconCheckCircleReact } = useComponent('VsfIconCheckCircle');
const { vue: VsfIconCheckboxIndeterminateVue, react: VsfIconCheckboxIndeterminateReact } =
  useComponent('VsfIconCheckboxIndeterminate');
import { VsfButtonSize, VsfButtonVariant } from '../../../sfui/frameworks/vue/components/VsfButton/types';
import VsfButtonBaseObject from './VsfButton.PageObject';

describe('VsfButton', () => {
  const slotDefaultContent = 'button content';
  enum ButtonTypes {
    button = 'button',
    submit = 'submit',
    reset = 'reset',
  }

  const page = () => new VsfButtonBaseObject('button');

  type InitializeComponentParams = {
    size?: VsfButtonSize;
    variant?: VsfButtonVariant;
    rounded?: boolean;
    disabled?: boolean;
    tile?: boolean;
    block?: boolean;
    greyscale?: boolean;
    truncate?: boolean;
    link?: string;
    slotPrefix?: boolean;
    slotSuffix?: boolean;
    slotDefault?: boolean;
    type?: ButtonTypes;
  };
  const initializeComponent = ({
    size = VsfButtonSize.base,
    variant = VsfButtonVariant.primary,
    rounded,
    disabled,
    tile,
    block,
    greyscale,
    truncate,
    link = '',
    slotPrefix,
    slotSuffix,
    slotDefault = true,
    type = undefined,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: VsfButtonVue,
        global: {
          components: {
            VsfIconCheckCircleVue,
            VsfIconCheckboxIndeterminateVue,
          },
        },
        props: {
          size,
          variant,
          rounded,
          disabled,
          greyscale,
          truncate,
          tile,
          block,
          link,
          type,
        },
        attrs: {
          ...(truncate && { style: 'max-width: 100px;' }),
        },
        slots: {
          ...(slotPrefix && { prefix: '<VsfIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<VsfIconCheckboxIndeterminateVue/>' }),
          ...(slotDefault && { default: () => slotDefaultContent }),
        },
      },
      react: (
        <VsfButtonReact
          size={size}
          variant={variant}
          rounded={rounded}
          disabled={disabled}
          tile={tile}
          block={block}
          link={link}
          greyscale={greyscale}
          truncate={truncate}
          style={{ ...(truncate && { maxWidth: '100px' }) }}
          type={type}
          slotPrefix={slotPrefix && <VsfIconCheckCircleReact />}
          slotSuffix={slotSuffix && <VsfIconCheckboxIndeterminateReact />}
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

    page().doesNotHaveHref().hasTypeOnButton(ButtonTypes.button).makeSnapshot();
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

      describe(`${componentVariant} and greyscale=true`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          initializeComponent({ variant: componentVariant, greyscale: true });

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop type is set to ', () => {
    Object.values(ButtonTypes).forEach((buttonType) => {
      describe(`${buttonType}`, () => {
        it(`should render correct ${buttonType} button type attr`, () => {
          initializeComponent({ type: buttonType });

          page().hasTypeOnButton(buttonType);
        });
      });
    });
  });

  describe('when prop rounded=true', () => {
    it(`should render with rounded borders`, () => {
      initializeComponent({ rounded: true });

      page().makeSnapshot();
    });
  });

  describe('when prop disabled=true', () => {
    it(`should render as disabled`, () => {
      initializeComponent({ disabled: true });

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when prop tile=true', () => {
    it(`should render as tile`, () => {
      initializeComponent({ tile: true });

      page().makeSnapshot();
    });
  });

  describe('when prop type=true', () => {
    it(`should render as tile`, () => {
      initializeComponent({ tile: true });

      page().makeSnapshot();
    });
  });

  describe('when prop block=true', () => {
    it(`should render full with`, () => {
      initializeComponent({ block: true });

      page().makeSnapshot();
    });
  });

  describe('when prop link is set', () => {
    const link = 'http://somelink.com';
    it(`should render as <a> element`, () => {
      initializeComponent({ link });

      page().hasTag('A').hasHref(link).makeSnapshot();
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

  describe('when truncate=true', () => {
    it(`should truncate text inside button`, () => {
      initializeComponent({ truncate: true });

      page().makeSnapshot();
    });
  });
});
