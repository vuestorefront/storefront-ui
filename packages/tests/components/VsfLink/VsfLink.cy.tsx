/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfLinkVue from "../../../sfui/frameworks/vue/components/VsfLink/VsfLink.vue";
import VsfLinkReact from "../../../sfui/frameworks/react/components/VsfLink/VsfLink";
import { VsfLinkVariant } from '../../../sfui/frameworks/vue/components/VsfLink/types';
import { mount } from '../../utils/mount';
import VsfLinkBaseObject from "./VsfLink.PageObject";

describe("VsfLink", () => {

  let variant: VsfLinkVariant;
  let link: string;
  let tag: string;
  let slotContent = 'Link'

  const page = () => new VsfLinkBaseObject('link');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLinkVue,
        props: {
          variant,
          tag,
          link
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: <VsfLinkReact
        variant={variant}
        tag={tag}
        link={link}
      > {slotContent}</VsfLinkReact>
    });
  }

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop variant is set to ', () => {
    Object.values(VsfLinkVariant).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          variant = componentVariant;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('a tag with link prop has a value', () => {
    before(() => {tag = "a", link = '/home'})
    it('should has href with link prop value', () => {
      initializeComponent();

      page().hasHref('/home')
    })
  })

  describe('tag has content inside', () => {
    before(() => {tag = "a", link = '/home'})
    it('should has Link as content', () => {
      initializeComponent();

      page().hasContent('Link')
    })
  })

});
