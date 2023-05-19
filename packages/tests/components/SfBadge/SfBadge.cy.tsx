/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import { mount, Wrapper, useComponent } from '../../utils/mount';

const { vue: SfBadgeVue, react: SfBadgeReact } = useComponent('SfBadge');
import SfBadgeBaseObject from "./SfBadge.PageObject";

describe("SfBadge", () => {
  const page = () => new SfBadgeBaseObject('');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: SfBadgeVue,
        props: {

        },
      },
      react: <Wrapper
        component={SfBadgeReact}
      > </Wrapper>
    });
  }

  it('initial state', () => {
    initializeComponent();
  });
});
