/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfLoaderLinearSize, VsfLoaderSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import VsfLoaderLinearBaseObject from './VsfLoaderLinear.PageObject';

const { vue: VsfLoaderLinearVue, react: VsfLoaderLinearReact } = useComponent('VsfLoaderLinear');

describe('VsfLoaderLinear', () => {
  let size: VsfLoaderLinearSize | VsfLoaderSize;
  let ariaLabel: string;

  const page = () => new VsfLoaderLinearBaseObject('loader-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLoaderLinearVue,
        props: {
          size,
          ariaLabel,
        },
        attrs: {
          style: 'width: 100px;',
        },
      },
      react: <VsfLoaderLinearReact style={{ width: '100px' }} size={size} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = VsfLoaderSize.lg;
    ariaLabel = 'loading';
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

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when ariaLabel is changed', () => {
    it('should render proper content', () => {
      ariaLabel = 'is loading';
      initializeComponent();

      page().hasAriaLabel(ariaLabel).makeSnapshot();
    });
  });
});
