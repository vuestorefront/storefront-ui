/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import VsfBadgeBaseObject from './VsfBadge.PageObject';

const { vue: VsfBadgeVue, react: VsfBadgeReact } = useComponent('VsfBadge');

describe('VsfBadge', () => {
  const slotDefaultContent = '123';
  let bordered: boolean;
  let dot: boolean;
  let invisible: boolean;
  let value: string | undefined;
  const page = () => new VsfBadgeBaseObject('badge');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfBadgeVue,
        global: {},
        props: {
          bordered,
          dot,
          invisible,
          value,
        },
        slots: {
          default: slotDefaultContent,
        },
      },
      react: (
        <VsfBadgeReact bordered={bordered} dot={dot} invisible={invisible}>
          {slotDefaultContent}
        </VsfBadgeReact>
      ),
    });
  };

  describe('When bordered is set to true', () => {
    before(() => {
      bordered = true;
    });
    after(() => {
      bordered = false;
    });
    it('bordered should be visible', () => {
      initializeComponent();

      page().isBordered().hasValue(slotDefaultContent).makeSnapshot();
    });
  });

  describe('when dot is set to true ', () => {
    before(() => {
      dot = true;
    });
    after(() => {
      dot = false;
    });
    it(`dot should be visible on the badge`, () => {
      initializeComponent();

      page().isDot().hasValue(slotDefaultContent).makeSnapshot();
    });
  });

  describe('when invisible is set to true', () => {
    before(() => {
      value = 'some value';
      invisible = true;
    });
    after(() => {
      value = undefined;
      invisible = false;
    });
    it('value should not be shown', () => {
      initializeComponent();

      page().hasValue(slotDefaultContent).isInvisible().makeSnapshot();
    });
  });
});
