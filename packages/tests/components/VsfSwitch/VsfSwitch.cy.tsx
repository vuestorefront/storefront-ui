/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import VsfSwitchBaseObject from './VsfSwitch.PageObject';

const { vue: VsfSwitchVue, react: VsfSwitchReact } = useComponent('VsfSwitch');

describe('VsfSwitch', () => {
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const value = 'value';

  const page = () => new VsfSwitchBaseObject('switch');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfSwitchVue,
        props: {
          value,
          modelValue: false,
          'onUpdate:modelValue': onChangeSpy,
        },
      },
      react: <VsfSwitchReact onChange={onChangeSpy} />,
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
