/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfListItemMenuSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import VsfListItemMenuBaseObject from './VsfListItemMenu.PageObject';

const { vue: VsfListItemMenuVue, react: VsfListItemMenuReact } = useComponent('VsfListItemMenu');
const { vue: VsfIconCheckCircleVue, react: VsfIconCheckCircleReact } = useComponent('VsfIconCheckCircle');
const { vue: VsfIconCircleVue, react: VsfIconCircleReact } = useComponent('VsfIconCircle');

const defaultSlotContent = 'Label';

describe('VsfListItemMenu', () => {
  let disabled: boolean;
  let size: VsfListItemMenuSize;
  let selected: boolean;
  let slotPrefix: boolean;
  let slotSuffix: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new VsfListItemMenuBaseObject('list-item-menu');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemMenuVue,
        global: {
          components: {
            VsfIconCheckCircleVue,
            VsfIconCircleVue,
          },
        },
        props: {
          disabled,
          size,
          selected,
          onClick: onChangeSpy,
        },
        slots: {
          default: defaultSlotContent,
          ...(slotPrefix && { prefix: '<VsfIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<VsfIconCircleVue/>' }),
        },
      },
      react: (
        <VsfListItemMenuReact
          disabled={disabled}
          selected={selected}
          size={size}
          slotPrefix={slotPrefix && <VsfIconCheckCircleReact />}
          slotSuffix={slotSuffix && <VsfIconCircleReact />}
          onClick={onChangeSpy}
        >
          {defaultSlotContent}
        </VsfListItemMenuReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(300, 300);
  });

  afterEach(() => {
    size = VsfListItemMenuSize.base;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled();
      page().makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfListItemMenuSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when default slot/children is filled in', () => {
    it(`should render with label`, () => {
      initializeComponent();

      page().hasContent('Label').makeSnapshot();
    });
  });

  describe('when only prefix', () => {
    before(() => (slotPrefix = true));
    after(() => (slotPrefix = false));
    it(`should render icon in prefix slot`, () => {
      initializeComponent();

      page().hasPrefix().makeSnapshot();
    });
  });

  describe('when only suffix', () => {
    before(() => (slotSuffix = true));
    after(() => (slotSuffix = false));
    it(`should render icon in suffix slot`, () => {
      initializeComponent();

      page().hasSuffix().makeSnapshot();
    });
  });

  describe('when component is clicked', () => {
    before(() => (onChangeSpy = cy.spy()));

    it('should invoke onChangeSpy', () => {
      initializeComponent();

      page().click();
      cy.then(() => {
        expect(onChangeSpy);
        page().makeSnapshot();
      });
    });
  });
});
