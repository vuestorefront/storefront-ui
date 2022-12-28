/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfLoaderLinearVue from "../../../frameworks/vue/components/VsfLoaderLinear/VsfLoaderLinear.vue";
import VsfLoaderLinearReact from "../../../frameworks/react/components/VsfLoaderLinear/VsfLoaderLinear";
import { VsfLoaderSizes } from "@sfui/shared/types";
import { mount } from '../../utils/mount';
import VsfLoaderLinearBaseObject from "./VsfLoaderLinear.PageObject";

describe("VsfLoaderLinear", () => {
  const page = () => new VsfLoaderLinearBaseObject('loader-linear');
  let size: VsfLoaderSizes;
  let screenReaderText: String;

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLoaderLinearVue,
        props: {
          size,
          screenReaderText,
        },
      },
      react: <VsfLoaderLinearReact size={size} screenReaderText={screenReaderText} />
    });
  }

  afterEach(() => {
    size = VsfLoaderSizes.lg;
    screenReaderText = 'loading';
  })

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot()
  });

  describe('when size is changed to ', () => {    
    Object.values(VsfLoaderSizes).forEach((componentSize) => {
      describe(componentSize, () => {
        it('should render proper loader size', () => {
          size = componentSize;
          initializeComponent();

          page()
            .hasSizeClass(componentSize)
            .makeSnapshot();
        })
      })
    });
  })

  describe('when screenReaderText is changed', () => {
    it('should render proper content', () => {
      screenReaderText = 'is loading';
      initializeComponent();

      page()
        .containScreenReaderText(screenReaderText)
        .makeSnapshot()
    })
  });
});
