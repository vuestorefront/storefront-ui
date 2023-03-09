/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import {
  VsfListItemFilterSwitchSize,
  VsfListItemFilterSwitchVariant,
} from '@storefront-ui/vue/components/VsfListItemFilterSwitch/index';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfListItemFilterSwitchVue, react: VsfListItemFilterSwitchReact } =
  useComponent('VsfListItemFilterSwitch');
import VsfListItemFilterSwitchBaseObject from './VsfListItemFilterSwitch.PageObject';

describe('VsfListItemFilterSwitch', () => {
  let size: VsfListItemFilterSwitchSize;
  let variant: VsfListItemFilterSwitchVariant;
  let disabled: boolean;
  let label: string;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 'value';
  let counter: number | undefined;
  let secondaryText: string;
  let truncate: boolean;

  const page = () => new VsfListItemFilterSwitchBaseObject('list-item-filter-switch');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemFilterSwitchVue,
        props: {
          size,
          variant,
          label,
          counter,
          secondaryText,
          disabled,
          value,
          truncate,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <VsfListItemFilterSwitchReact
          size={size}
          variant={variant}
          label={label}
          counter={counter}
          secondaryText={secondaryText}
          disabled={disabled}
          truncate={truncate}
          value={value}
          onChange={onChangeSpy}
        ></VsfListItemFilterSwitchReact>
      ),
    });
  };

  beforeEach(() => {
    label = 'Label';
    value = 'value';
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfListItemFilterSwitchSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(VsfListItemFilterSwitchVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          variant = componentVariant;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop label is filled in', () => {
    it(`should render with label`, () => {
      initializeComponent();

      page().hasLabel('Label').makeSnapshot();
    });
  });

  describe('when prop disabled=true', () => {
    before(() => (disabled = true));
    after(() => (disabled = false));
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled().makeSnapshot();
    });
  });

  describe('when prop label is not filled in', () => {
    it(`should render without label`, () => {
      label = '';
      initializeComponent();

      page().doesNotHaveLabel().makeSnapshot();
    });
  });

  describe('when prop counter set to', () => {
    before(() => (counter = 123));
    after(() => (counter = undefined));
    it(`should render with counter`, () => {
      initializeComponent();
      page().hasCounter('123').makeSnapshot();
    });
  });

  describe('when prop counter is not filled in', () => {
    it(`should render without counter`, () => {
      initializeComponent();

      page().doesNotHaveCounter().makeSnapshot();
    });
  });

  describe('when prop secondaryText set to', () => {
    before(() => (secondaryText = 'Secondary text'));
    after(() => (secondaryText = ''));
    it(`should render as with secondary text`, () => {
      initializeComponent();

      page().hasSecondaryText('Secondary text').makeSnapshot();
    });
  });

  describe('when prop counter is not filled in', () => {
    it(`should render without secondary text`, () => {
      initializeComponent();

      page().doesNotHaveSecondaryText().makeSnapshot();
    });
  });

  describe('when prop secondaryText it to long and truncate is set to true', () => {
    before(() => {
      (secondaryText = 'Secondary text is too long to display on a small screen'), (truncate = true);
    });
    after(() => (secondaryText = ''));
    it(`should render as with secondary text`, () => {
      initializeComponent();

      page().hasTruncateOn().makeSnapshot();
    });
  });

  describe('when it is checked', () => {
    it('should change value/modelValue', () => {
      initializeComponent();

      page().isChecked();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      });
    });
  });
});
