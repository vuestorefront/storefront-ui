/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { h } from 'vue';
import { VsfRatingButtonSize } from '@storefront-ui/vue/components/VsfRatingButton/types';
import { VsfIconSize } from '@storefront-ui/vue/components/VsfIconBase/types';
import { mount, useComponent } from '../../utils/mount';
import VsfRatingButtonBaseObject from './VsfRatingButton.PageObject';

const { vue: VsfRatingButtonVue, react: VsfRatingButtonReact } = useComponent('VsfRatingButton');
const { vue: VsfIconStarFilledVue, react: VsfIconStarFilledReact } = useComponent('VsfIconStarFilled');
const { vue: VsfIconStarVue, react: VsfIconStarReact } = useComponent('VsfIconStar');

describe('VsfRatingButton', () => {
  let size: VsfRatingButtonSize;
  let max: number;
  let disabled: boolean;
  let value: number;
  let name: string;
  let ariaLabel: string;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new VsfRatingButtonBaseObject('rating-button');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfRatingButtonVue,
        props: {
          max,
          size,
          disabled,
          modelValue: value,
          name,
          ariaLabel,
          'onUpdate:modelValue': onChangeSpy,
        },
        slots: {
          iconFilled: () => h(VsfIconStarFilledVue, { size }),
          iconEmpty: () => h(VsfIconStarVue, { size }),
        },
      },
      react: (
        <VsfRatingButtonReact
          max={max}
          size={size}
          disabled={disabled}
          value={value}
          name={name}
          ariaLabel={ariaLabel}
          renderIconFilled={(size?: VsfIconSize) => <VsfIconStarFilledReact size={size} />}
          renderIconEmpty={(size?: VsfIconSize) => <VsfIconStarReact size={size} />}
          onChange={onChangeSpy}
        />
      ),
    });
  };

  beforeEach(() => {
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    size = VsfRatingButtonSize.base;
    (max = 5), (disabled = false), (value = 0), (name = 'rating'), (ariaLabel = 'rating item');
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when iconFilled and iconEmpty slots are given', () => {
    it(`should render icons`, () => {
      value = 1;
      initializeComponent();

      page().hasIcons('star-filled', 0).hasIcons('star', 1).makeSnapshot();
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfRatingButtonSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop max is set', () => {
    it(`should render correct rating items`, () => {
      initializeComponent();
      page().hasMaxItems(max).makeSnapshot();
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

  describe('when value prop is set to 3', () => {
    it(`should have 3 filled icons`, () => {
      value = 3;
      initializeComponent();

      page().hasFilledIcons(value).makeSnapshot();
    });
  });

  describe('when item 3 is clicked', () => {
    it(`should have value 3 emitted`, () => {
      initializeComponent();
      page().itemClick(3);
      cy.then(() => {
        expect(onChangeSpy).to.be.calledWith(3);

        page().makeSnapshot();
      });
    });
  });

  describe('when name props set', () => {
    it(`should render legend element with name`, () => {
      initializeComponent();

      page().hasLegendName(name).makeSnapshot();
    });
  });

  describe('when ariaLabel prop is set', () => {
    it(`should render ariaLabel attribute set`, () => {
      initializeComponent();

      page().hasAriaLabel(ariaLabel).makeSnapshot();
    });
  });
});
