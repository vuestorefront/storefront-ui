/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfChipThumbnailSize } from '@storefront-ui/vue/components/VsfChipThumbnail/types';
import { mount, useComponent } from '../../utils/mount';
const { vue: VsfChipThumbnailVue, react: VsfChipThumbnailReact } = await useComponent('VsfChipThumbnail');
import VsfChipThumbnailBaseObject from './VsfChipThumbnail.PageObject';

describe.skip('VsfChipThumbnail', () => {
  let size: VsfChipThumbnailSize;
  let color: string;

  const page = () => new VsfChipThumbnailBaseObject('chip-thumbnail');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfChipThumbnailVue,
        props: {
          color,
          size,
        },
      },
      react: <VsfChipThumbnailReact color={color} size={size} />,
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when color is set to red', () => {
    it('should render with red color', () => {
      color = 'rgb(255, 0, 0)';
      initializeComponent();

      page().hasBackgroundColor('rgb(255, 0, 0)');
    });
  });

  describe('when color is set to gradient', () => {
    it('should render with gradient color', () => {
      color = 'linear-gradient(rgb(74, 222, 128) 0%, rgb(167, 139, 250) 100%)';
      initializeComponent();

      page().hasBackgroundImage('linear-gradient(rgb(74, 222, 128) 0%, rgb(167, 139, 250) 100%)');
    });
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfChipThumbnailSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });
});
