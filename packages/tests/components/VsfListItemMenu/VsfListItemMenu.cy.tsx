/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfListItemMenuVue, react: VsfListItemMenuReact } = useComponent('VsfListItemMenu');
import { VsfListItemMenuSizes } from '../../../sfui/frameworks/vue/components/VsfListItemMenu/types';
import VsfListItemMenuBaseObject from "./VsfListItemMenu.PageObject";

describe("VsfListItemMenu", () => {
  let disabled: boolean;
  let counter: string;
  let label: string;
  let size: VsfListItemMenuSizes;
  let link: string;
  let truncate: boolean;
  let secondaryText: string;
  let selected: boolean;

  const page = () => new VsfListItemMenuBaseObject('list-item-menu');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemMenuVue,
        props: {
          disabled,
          label,
          size,
          secondaryText,
          link,
          truncate,
          selected,
          counter
        },
      },
      react: <VsfListItemMenuReact
        disabled={disabled}
        secondaryText={secondaryText}
        link={link}
        is-truncated={truncate}
        selected={selected}
        label={label}
        size={size}
        counter={counter}
    />
    })
  }

  beforeEach(() => {
    cy.viewport(300, 300)

  });

  afterEach(() => {
    size = VsfListItemMenuSizes.base;
    label = 'Label'
    secondaryText = 'Secondary text'
  });


  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop disabled=true', () => {
    before(() => disabled = true);
    after(() => disabled = false);
    it(`should render as disabled`, () => {
      initializeComponent();

      page().isDisabled()
      page().makeSnapshot();
    });
  });

  describe('when prop selected=true', () => {
    before(() => selected = true);
    after(() => selected = false);
    it(`should render as selected`, () => {
      initializeComponent();

      page().isSelected()
      page().makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfListItemMenuSizes).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop label is filled in', () => {
    before(() => label = 'Label');
    after(() => label = '');
    it(`should render with label`, () => {
      initializeComponent();

      page()
        .hasLabel('Label')
        .makeSnapshot();
    });
  });

  describe('when prop counter is filled in', () => {
    before(() => counter = '2');
    after(() => counter = '');
    it(`should render a correct counter value`, () => {
      initializeComponent();

      page()
        .hasCounter('2')
        .makeSnapshot();
    });
  });

  describe('when prop secondaryText is filled in', () => {
    before(() => secondaryText = 'Secondary text');
    after(() => secondaryText = '');
    it(`should render with secondary text`, () => {
      initializeComponent();

      page()
        .hasSecondaryText('Secondary text')
        .makeSnapshot();
    });
  });
  // TODO: adjust when Link component done
  describe('when prop link is set', () => {
    before(() => link = 'http://somelink.com');
    after(() => link = '');
    it(`should render as <a> element`, () => {
      initializeComponent();

      page()
        .hasTag('A')
        .makeSnapshot();
    });
  });
});
