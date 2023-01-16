/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, useComponent } from '../../utils/mount';

const {vue: VsfSwitchVue, react: VsfSwitchReact} = useComponent('VsfSwitch');
import { VsfSwitchAlignments } from '../../../sfui/frameworks/vue/components/VsfSwitch/types';
import VsfSwitchBaseObject from "./VsfSwitch.PageObject";

describe("VsfSwitch", () => {
  let alignment: VsfSwitchAlignments;
  let disabled: boolean;
  let label: string;
  let helpText: string;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  let value = "value";

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
          'onUpdate:modelValue': onChangeSpy
        },
      },
      react: <VsfSwitchReact
        disabled={disabled}
        alignment={alignment}
        helpText={helpText}
        label={label}
        onChange={onChangeSpy}
    />
    })
  }

  beforeEach(() => {
    label = 'Label';
    value = 'value';
    onChangeSpy = cy.spy();
    alignment = VsfSwitchAlignments.prefix;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop alignment is set to ', () => {
    Object.values(VsfSwitchAlignments).forEach((componentAlignment) => {
      describe(`${componentAlignment}`, () => {
        it(`should render correct ${componentAlignment} alignment`, () => {
          alignment = componentAlignment;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop disabled=true', () => {
    before(() => disabled = true);
    after(() => disabled = false);
    it(`should render as disabled`, () => {
      initializeComponent();

      page()
        .isDisabled()
        .makeSnapshot();
    });
  });

  describe('when prop label is filled in', () => {
    it(`should render with label`, () => {
      initializeComponent();

      page()
        .hasLabel('Label')
        .makeSnapshot();
    });
  });

  describe('when prop helpText is visible', () => {
    before(() => { helpText = 'Help'});
    after(() =>{ helpText = ''});
    it('should render with help text', () => {
      initializeComponent();

      page()
        .hasHelpText("Help")
        .makeSnapshot();
    });
  });

  describe('when it is checked', () => {
    it('should change value/modelValue', () => {
      initializeComponent();

      page().isNotDisabled().isChecked();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot();
      })
    });
  });
});
