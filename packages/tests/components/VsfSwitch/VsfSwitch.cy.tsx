/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfSwitchAlignment } from '@storefront-ui/vue/components/VsfSwitch/types';
import { mount, useComponent } from '../../utils/mount';
import VsfSwitchBaseObject from './VsfSwitch.PageObject';

const { vue: VsfSwitchVue, react: VsfSwitchReact } = useComponent('VsfSwitch');

describe('VsfSwitch', () => {
  let alignment: VsfSwitchAlignment;
  let disabled: boolean;
  let label: string;
  let helpText: string;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = 'value';

  const page = () => new VsfSwitchBaseObject('checkbox');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfSwitchVue,
        props: {
          disabled,
          alignment,
          label,
          helpText,
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: (
        <VsfSwitchReact
          disabled={disabled}
          alignment={alignment}
          helpText={helpText}
          label={label}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    label = 'Label';
    value = 'value';
    onChangeSpy = cy.spy();
    alignment = VsfSwitchAlignment.prefix;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop alignment is set to ', () => {
    Object.values(VsfSwitchAlignment).forEach((componentAlignment) => {
      describe(`${componentAlignment}`, () => {
        it(`should render correct ${componentAlignment} alignment`, () => {
          alignment = componentAlignment;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });
});
