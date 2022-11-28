/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfSideSheetVue from "../../../frameworks/vue/components/VsfSideSheet/VsfSideSheet.vue";
import VsfSideSheetReact from "../../../frameworks/react/components/VsfSideSheet/VsfSideSheet";
import { mount } from '../../utils/mount';
import VsfSideSheetBaseObject from "./VsfSideSheet.PageObject";

describe("VsfSideSheet", () => {
  let permanent: boolean;
  let withButton: boolean;
  let leftSide: boolean;
  let overlayVisible: boolean;
  let isOpen: boolean;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;

  const page = () => new VsfSideSheetBaseObject('side-sheet');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfSideSheetVue,
        props: {
          permanent,
          withButton,
          leftSide,
          overlayVisible,
          isOpen,
          onClose: onChangeSpy,
        },
      },
      react: 
        <VsfSideSheetReact
          permanent={permanent}
          withButton={withButton}
          leftSide={leftSide}
          overlayVisible={overlayVisible}
          isOpen={isOpen}
          onClick={onChangeSpy}
        > </VsfSideSheetReact>
    });
  }

  beforeEach(() => {
    cy.viewport(300, 300);
    onChangeSpy = cy.spy();
    isOpen = true;
    withButton = true;
    permanent = false;
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop permanent is set to true', () => {
    before(() => {permanent = true});
    after(() => {permanent = false});
    it('should render without close button and without additional fixed class', () => {
      initializeComponent();

      page().isPermanent()
      page().makeSnapshot();
    })
  })

  describe('when prop leftSide is false', () => {
    before(() => {leftSide = false});
    after(() => {leftSide = true});
    it('should render with class for right side', () => {
      initializeComponent();

      page().isOnRightSide()
      page().makeSnapshot()

    })
  })

  describe('when prop withButton is true', () => {
    it('should render with close button', () => {
      initializeComponent();

      page().hasCloseButton()
      page().makeSnapshot()

    })
  })

  describe('when prop overlayVisible is true', () => {
    before(() => {overlayVisible = true});
    after(() => {overlayVisible = false});
    it('should render with overlay', () => {
      initializeComponent();

      page().hasOverlay()
      page().makeSnapshot()

    })
  })

  describe('when close button is clicked', () => {
    it('should response on click', () => {
      initializeComponent();

      page().hasCloseButton()
      page().closeButtonIsClicked()
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith();
        page().makeSnapshot()
      })
    })
  })
});
