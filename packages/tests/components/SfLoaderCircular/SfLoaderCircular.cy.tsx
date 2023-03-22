/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfLoaderSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
import SfLoaderCircularBaseObject from './SfLoaderCircular.PageObject';

const { vue: SfLoaderCircularVue, react: SfLoaderCircularReact } = useComponent('SfLoaderCircular');

describe('SfLoaderCircular', () => {
  const page = () => new SfLoaderCircularBaseObject('loader-circular');
  let size: SfLoaderSize;
  let ariaLabel: string;

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfLoaderCircularVue,
        props: {
          size,
          ariaLabel,
        },
      },
      react: <SfLoaderCircularReact size={size} ariaLabel={ariaLabel} />,
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
    Object.values(SfLoaderSize).forEach((componentSize) => {
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
