/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfLoaderLinearVue from "../../../sfui/frameworks/vue/components/VsfLoaderLinear/VsfLoaderLinear.vue";
import VsfLoaderLinearReact from "../../../sfui/frameworks/react/components/VsfLoaderLinear/VsfLoaderLinear";
import { VsfLoaderLinearSize, VsfLoaderSizes } from '../../../sfui/frameworks/react/components/VsfLoaderLinear/types';
import { mount } from '../../utils/mount';
import VsfLoaderLinearBaseObject from "./VsfLoaderLinear.PageObject";

describe("VsfLoaderLinear", () => {
  let size: VsfLoaderLinearSize | VsfLoaderSizes;
  let screenReaderText: string;

  const page = () => new VsfLoaderLinearBaseObject('loader-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLoaderLinearVue,
        props: {
          size,
          screenReaderText,
        },
        attrs: {
          style: "width: 100px;"
        }
      },
      react: <VsfLoaderLinearReact style={{width: '100px'}} size={size} screenReaderText={screenReaderText} />
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
    [...Object.values(VsfLoaderLinearSize), ...Object.values(VsfLoaderSizes)].forEach((componentSize) => {
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
