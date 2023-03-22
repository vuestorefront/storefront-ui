/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfLoaderLinearSize, SfLoaderSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfLoaderLinearBaseObject from './SfLoaderLinear.PageObject';

const { vue: SfLoaderLinearVue, react: SfLoaderLinearReact } = useComponent('SfLoaderLinear');

describe('SfLoaderLinear', () => {
  let size: SfLoaderLinearSize | SfLoaderSize;
  let ariaLabel: string;

  const page = () => new SfLoaderLinearBaseObject('loader-linear');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfLoaderLinearVue,
        props: {
          size,
          ariaLabel,
        },
        attrs: {
          style: 'width: 100px;',
        },
      },
      react: <SfLoaderLinearReact style={{ width: '100px' }} size={size} ariaLabel={ariaLabel} />,
    });
  };

  afterEach(() => {
    size = SfLoaderSize.lg;
    ariaLabel = 'loading';
  });

  it('initial state', () => {
    initializeComponent();
    page().makeSnapshot();
  });

  describe('when size is changed to ', () => {
    [...Object.values(SfLoaderLinearSize), ...Object.values(SfLoaderSize)].forEach((componentSize) => {
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
