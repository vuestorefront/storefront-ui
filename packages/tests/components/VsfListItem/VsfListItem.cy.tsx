/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfListItemSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import VsfListItemBaseObject from './VsfListItem.PageObject';

const { vue: VsfListItemVue, react: VsfListItemReact } = useComponent('VsfListItem');
const { vue: VsfIconCheckCircleVue, react: VsfIconCheckCircleReact } = useComponent('VsfIconCheckCircle');
const { vue: VsfIconCircleVue, react: VsfIconCircleReact } = useComponent('VsfIconCircle');

const defaultSlotContent = 'Label';

describe('VsfListItem', () => {
  let disabled: boolean;
  let size: VsfListItemSize;
  let selected: boolean;
  let slotPrefix: boolean;
  let slotSuffix: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new VsfListItemBaseObject('list-item');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemVue,
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
        <VsfListItemReact
          disabled={disabled}
          selected={selected}
          size={size}
          slotPrefix={slotPrefix && <VsfIconCheckCircleReact />}
          slotSuffix={slotSuffix && <VsfIconCircleReact />}
          onClick={onChangeSpy}
        >
          {defaultSlotContent}
        </VsfListItemReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(300, 300);
  });

  afterEach(() => {
    size = VsfListItemSize.base;
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
    Object.values(VsfListItemSize).forEach((componentSize) => {
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
