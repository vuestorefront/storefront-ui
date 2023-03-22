/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import SfSwitchBaseObject from './SfSwitch.PageObject';

const { vue: SfSwitchVue, react: SfSwitchReact } = useComponent('SfSwitch');

describe('SfSwitch', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const value = 'value';

  const page = () => new SfSwitchBaseObject('switch');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfSwitchVue,
        props: {
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: <SfSwitchReact onChange={onChangeSpy} />,
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
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
