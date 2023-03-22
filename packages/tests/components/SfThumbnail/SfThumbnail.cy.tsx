/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { SfThumbnailSize } from '@storefront-ui/vue';
import { mount, useComponent } from '../../utils/mount';
const { vue: SfThumbnailVue, react: SfThumbnailReact } = useComponent('SfThumbnail');
import SfThumbnailBaseObject from './SfThumbnail.PageObject';

const { vue: SfIconCheckCircleVue, react: SfIconCheckCircleReact } = useComponent('SfIconCheckCircle');

describe('SfThumbnail', () => {
  type InitializeComponentParams = {
    size?: SfThumbnailSize;
    slotDefault?: boolean;
  };

  const page = () => new SfThumbnailBaseObject('thumbnail');

  const initializeComponent = ({
    size = SfThumbnailSize.base,
    slotDefault = false,
  }: InitializeComponentParams = {}) => {
    return mount({
      vue: {
        component: SfThumbnailVue,
        props: {
          size,
        },
        slots: {
          ...(slotDefault && { default: () => <SfIconCheckCircleVue /> }),
        },
        global: {
          components: {
            SfIconCheckCircleVue,
          },
        },
      },
      react: <SfThumbnailReact size={size}>{slotDefault && SfIconCheckCircleReact}</SfThumbnailReact>,
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(SfThumbnailSize).forEach((componentSize) => {
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
