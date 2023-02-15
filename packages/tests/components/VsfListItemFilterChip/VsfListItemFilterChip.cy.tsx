/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import {
  VsfListItemFilterChipSize,
  VsfListItemFilterChipVariant,
} from '@storefront-ui/vue/components/VsfListItemFilterChip/index';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfListItemFilterChipVue, react: VsfListItemFilterChipReact } = useComponent('VsfListItemFilterChip');
import VsfListItemFilterChipBaseObject from './VsfListItemFilterChip.PageObject';

describe('VsfListItemFilterChip', () => {
  let size: VsfListItemFilterChipSize;
  let variant: VsfListItemFilterChipVariant;
  let disabled: boolean;
  let label: string;
  let color: string;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 'value';
  let counter: string;
  let secondaryText: string;
  let truncate: boolean;

  const page = () => new VsfListItemFilterChipBaseObject('list-item-filter-chip');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemFilterChipVue,
        props: {
          size,
          variant,
          label,
          color,
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
        <VsfListItemFilterChipReact
          size={size}
          variant={variant}
          label={label}
          color={color}
          counter={Number(counter)}
          secondaryText={secondaryText}
          disabled={disabled}
          truncate={truncate}
          value={value}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    label = 'Label';
    value = 'value';
    color = 'red';
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfListItemFilterChipSize).forEach((componentSize) => {
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
    Object.values(VsfListItemFilterChipVariant).forEach((componentVariant) => {
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

  describe('when color is set to red', () => {
    it('should render with red color', () => {
      color = 'rgb(255, 0, 0)';
      initializeComponent();

      page().hasBackgroundColor('rgb(255, 0, 0)');
    });
  });

  describe('when color is set to gradient', () => {
    it('should render with gradient color', () => {
      color = 'linear-gradient(rgb(74, 222, 128) 0%, rgb(167, 139, 250) 100%)';
      initializeComponent();

      page().hasBackgroundImage('linear-gradient(rgb(74, 222, 128) 0%, rgb(167, 139, 250) 100%)');
    });
  });

  describe('when prop label is not filled in', () => {
    it(`should render without label`, () => {
      label = '';
      initializeComponent();

      page().doesNotHaveLabel().makeSnapshot();
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

  describe('when prop counter set to', () => {
    before(() => (counter = '123'));
    after(() => (counter = ''));
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
});
