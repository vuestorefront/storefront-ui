/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfPaginationVue, react: VsfPaginationReact } = useComponent('VsfPagination');
import VsfPaginationBaseObject from "./VsfPagination.PageObject";

describe("VsfPagination", () => {
  let totalItems: number;
  let currentPage: number;
  let itemsPerPage: number;
  let maxVisiblePages: number;
  let onChangeSpy: Cypress.Agent<sinon.SinonSpy>;
  const page = () => new VsfPaginationBaseObject('pagination');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfPaginationVue,
        props: {
          totalItems,
          currentPage,
          itemsPerPage,
          maxVisiblePages,
          'onUpdate:current-page': onChangeSpy
        },
      },
      react: <VsfPaginationReact
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        maxVisiblePages={maxVisiblePages}
        handlePageUpdate={onChangeSpy}
      ></VsfPaginationReact>
    });
  }

  beforeEach(() => {
    cy.viewport(641, 300);
    onChangeSpy = cy.spy();
  });

  afterEach(() => {
    totalItems = 100;
    currentPage = 1;
    itemsPerPage = 10;
    maxVisiblePages = 3;
  });

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when clicked on pages', () => {
    it(`should emit correct number page`, () => {
      initializeComponent();
      page().pageElements.each(($el) => {
        cy.wrap($el).click()
        .then(() => {
          expect(onChangeSpy).calledWith(Number($el.text()));
        })
        page().makeSnapshot();
      });
    })
  });

  describe('when clicked on previous button ', () => {
    it('should emit previous page value', () => {
      currentPage = 2;
      initializeComponent();

      page().previousClick();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith(1);
        page().makeSnapshot();
      })
    })
  })

  describe('when clicked on next button ', () => {
    it('should emit next page value', () => {
      initializeComponent();
      page().nextClick();
      cy.then(() => {
        expect(onChangeSpy).calledOnceWith(2);
        page().makeSnapshot();
      })
    })
  })

  describe('when the first page is opened', () => {
    it('should only right ellipsis appear', () => {
      initializeComponent();
      page().leftEllipsisNotExist();
      page().rightEllipsisExists();
      page().makeSnapshot();
    })
  })

  describe('when the last page is opened', () => {
    it('should only left ellipsis appear', () => {
      currentPage = 10;
      initializeComponent();

      page()
        .rightEllipsisNotExist()
        .leftEllipsisExists()
        .makeSnapshot();
    })
  })

  describe('when the totalItems prop is changed', () => {
    it('should number of pages change', () => {
      totalItems = 150;
      initializeComponent();

      page().pageLastButton.contains(totalItems/itemsPerPage);
      page().makeSnapshot();
    })
  })

  describe('when the itemsPerPage prop is changed', () => {
    it('should number of pages change', () => {
      itemsPerPage = 20;
      initializeComponent();

      page().lastButtonContains(totalItems, itemsPerPage);
      page().makeSnapshot();
    })
  })

  describe('when the maxVisiblePages prop is changed', () => {
    it('should number of pages visible change', () => {
      maxVisiblePages = 5;
      initializeComponent();

      page().pageElementsLength(maxVisiblePages);
      page().makeSnapshot();
    })
  })
});
