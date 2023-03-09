/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { VsfThumbnailSize } from '@storefront-ui/vue/components/VsfThumbnail/types';
import { mount, useComponent } from '../../utils/mount';
const { vue: VsfThumbnailVue, react: VsfThumbnailReact } = await useComponent('VsfThumbnail');
import VsfThumbnailBaseObject from './VsfThumbnail.PageObject';

const { vue: VsfIconCheckCircleVue, react: VsfIconCheckCircleReact } = useComponent('VsfIconCheckCircle');

describe('VsfThumbnail', () => {
  type InitializeComponentParams = {
    size?: VsfThumbnailSize;
    slotDefault?: boolean;
  };

  const page = () => new VsfThumbnailBaseObject('thumbnail');

  const initializeComponent = ({
    size = VsfThumbnailSize.base,
    slotDefault = false,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: VsfThumbnailVue,
        props: {
          size,
        },
        slots: {
          ...(slotDefault && { default: () => <VsfIconCheckCircleVue /> }),
        },
        global: {
          components: {
            VsfIconCheckCircleVue,
          },
        },
      },
      react: <VsfThumbnailReact size={size}>{slotDefault && VsfIconCheckCircleReact}</VsfThumbnailReact>,
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfThumbnailSize).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          initializeComponent({ size: componentSize });

          page().makeSnapshot();
        });
      });
    });
  });
  describe('when icon is passed via slot', () => {
    it(`should render thumbnail with icon`, () => {
      initializeComponent({ slotDefault: true });

      page().makeSnapshot();
    });
  });
});
