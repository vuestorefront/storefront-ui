/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import VsfListItemFilterRadioBaseObject from './VsfListItemFilterRadio.PageObject';

const { vue: VsfListItemFilterRadioVue, react: VsfListItemFilterRadioReact } = useComponent('VsfListItemFilterRadio');

describe('VsfListItemFilterRadio', () => {
  const page = () => new VsfListItemFilterRadioBaseObject('');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemFilterRadioVue,
        props: {},
      },
      react: <VsfListItemFilterRadioReact> </VsfListItemFilterRadioReact>,
    });
  };

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });
});
