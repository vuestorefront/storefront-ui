/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfLoaderSize } from '@storefront-ui/shared';
import { mount, useComponent } from '../../utils/mount';
import VsfLoaderCircularBaseObject from './VsfLoaderCircular.PageObject';

const { vue: VsfLoaderCircularVue, react: VsfLoaderCircularReact } = useComponent('VsfLoaderCircular');

describe('VsfLoaderCircular', () => {
  const page = () => new VsfLoaderCircularBaseObject('loader-circular');
  let size: VsfLoaderSize;
  let ariaLabel: string;

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfLoaderCircularVue,
        props: {
          size,
          ariaLabel,
        },
      },
      react: <VsfLoaderCircularReact size={size} ariaLabel={ariaLabel} />,
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
    Object.values(VsfLoaderSize).forEach((componentSize) => {
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
