/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfLoaderLinearSize, VsfLoaderSize } from '@storefront-ui/react/components/VsfLoaderLinear/types';
import { mount, useComponent } from '../../utils/mount';
import VsfLoaderLinearBaseObject from './VsfLoaderLinear.PageObject';

const { vue: VsfLoaderLinearVue, react: VsfLoaderLinearReact } = useComponent('VsfLoaderLinear');

describe('VsfLoaderLinear', () => {
  let size: VsfLoaderLinearSize | VsfLoaderSize;
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
          style: 'width: 100px;',
        },
      },
      react: <VsfLoaderLinearReact style={{ width: '100px' }} size={size} screenReaderText={screenReaderText} />,
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
    [...Object.values(VsfLoaderLinearSize), ...Object.values(VsfLoaderSize)].forEach((componentSize) => {
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
