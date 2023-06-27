/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: SfTextareaVue, react: SfTextareaReact } = useComponent('SfTextarea');
import SfTextareaBaseObject from './SfTextarea.PageObject';

describe('SfTextarea', () => {
  const page = () => new SfTextareaBaseObject('');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfTextareaVue,
        props: {},
      },
      react: <Wrapper component={SfTextareaReact}> </Wrapper>,
    });
  };

  it('initial state', () => {
    initializeComponent();
  });
});
