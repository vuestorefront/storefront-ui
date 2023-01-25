/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfLoaderSize } from '@storefront-ui/shared';
import { mount, useComponent } from '../../utils/mount';

const { vue: VsfLoaderCircularVue, react: VsfLoaderCircularReact } = useComponent('VsfLoaderCircular');
import VsfLoaderCircularBaseObject from './VsfLoaderCircular.PageObject';

describe('VsfLoaderCircular', () => {
  const page = () => new VsfLoaderCircularBaseObject('loader-circular');
  let size: VsfLoaderSize;
  let screenReaderText: string;

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLoaderCircularVue,
        props: {
          size,
          screenReaderText,
        },
      },
      react: <VsfLoaderCircularReact size={size} screenReaderText={screenReaderText} />,
    });
  };

  afterEach(() => {
    size = VsfLoaderSize.lg;
    screenReaderText = 'loading';
  });

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when size is changed to ', () => {
    Object.values(VsfLoaderSize).forEach((componentSize) => {
      describe(componentSize, () => {
        it('should render proper loader size', () => {
          size = componentSize;

          initializeComponent();

          page().hasSizeClass(componentSize).makeSnapshot();
        });
      });
    });
  });

  describe('when screenReaderText is changed', () => {
    it('should render proper content', () => {
      screenReaderText = 'is loading';
      initializeComponent();

      page().containScreenReaderText(screenReaderText).makeSnapshot();
    });
  });
});
