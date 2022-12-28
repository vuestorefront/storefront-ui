/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfLoaderCircularVue from "../../../frameworks/vue/components/VsfLoaderCircular/VsfLoaderCircular.vue";
import VsfLoaderCircularReact from "../../../frameworks/react/components/VsfLoaderCircular/VsfLoaderCircular";
import { VsfLoaderSizes } from "@sfui/shared/types";
import { mount } from '../../utils/mount';
import VsfLoaderCircularBaseObject from "./VsfLoaderCircular.PageObject";

describe("VsfLoaderCircular", () => {
  const page = () => new VsfLoaderCircularBaseObject('loader-circular');
  let size: VsfLoaderSizes;
  let screenReaderText: String;

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLoaderCircularVue,
        props: {
          size,
          screenReaderText,
        },
      },
      react: <VsfLoaderCircularReact size={size} screenReaderText={screenReaderText} />
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
