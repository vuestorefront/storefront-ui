/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfListItemSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfListItemBaseObject from './SfListItem.PageObject';

const { vue: SfListItemVue, react: SfListItemReact } = useComponent('SfListItem');
const { vue: SfIconCheckCircleVue, react: SfIconCheckCircleReact } = useComponent('SfIconCheckCircle');
const { vue: SfIconCircleVue, react: SfIconCircleReact } = useComponent('SfIconCircle');

const defaultSlotContent = 'Label';

describe('SfListItem', () => {
  let disabled: boolean;
  let size: SfListItemSize;
  let selected: boolean;
  let slotPrefix: boolean;
  let slotSuffix: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new SfListItemBaseObject('list-item');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfListItemVue,
        global: {
          components: {
            SfIconCheckCircleVue,
            SfIconCircleVue,
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
          ...(slotPrefix && { prefix: '<SfIconCheckCircleVue/>' }),
          ...(slotSuffix && { suffix: '<SfIconCircleVue/>' }),
        },
      },
      react: (
        <SfListItemReact
          disabled={disabled}
          selected={selected}
          size={size}
          slotPrefix={slotPrefix && <SfIconCheckCircleReact />}
          slotSuffix={slotSuffix && <SfIconCircleReact />}
          onClick={onChangeSpy}
        >
          {defaultSlotContent}
        </SfListItemReact>
      ),
    });
  };

  beforeEach(() => {
    cy.viewport(300, 300);
  });

  afterEach(() => {
    size = SfListItemSize.base;
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
    Object.values(SfListItemSize).forEach((componentSize) => {
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
