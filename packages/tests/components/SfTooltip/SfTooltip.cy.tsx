/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { mount, useComponent } from '../../utils/mount';
import SfTooltipObject from './SfTooltip.PageObject';

const { vue: SfTooltipVue, react: SfTooltipReact } = useComponent('SfTooltip');

describe('SfTooltip', () => {
  const page = () => new SfTooltipObject('tooltip');

  const initializeComponent = (
    props: {
      label?: string;
      children?: string | React.ReactElement;
      className?: string;
      showArrow?: boolean;
    } = {},
  ) => {
    const { label = 'Tooltip text', children = 'Content', showArrow = false, className } = props;
    return mount({
      vue: {
        component: SfTooltipVue,
        props: {
          label,
          class: className,
          showArrow,
        },
        slots: {
          default: children,
        },
      },
      react: (
        <SfTooltipReact label={label} className={className} showArrow={showArrow}>
          {children}
        </SfTooltipReact>
      ),
    });
  };

  describe('When initailize', () => {
    it('Should not show the tooltip', () => {
      initializeComponent();

      page().isTooltipHidden().makeSnapshot();
    });
  });

  describe('When hover', () => {
    it('Should show the tooltip', () => {
      initializeComponent();

      page().mouseOver().isTooltipVisible().makeSnapshot();
    });

    it('Should show the tooltip on enter and close on leave', () => {
      initializeComponent();

      page().mouseOver().isTooltipVisible().mouseOut().isTooltipHidden();
    });
  });

  describe('When showArrow=true', () => {
    it('Should tooltip has arrow', () => {
      const props = { showArrow: true };
      initializeComponent(props);

      page().mouseOver().makeSnapshot();
    });
  });

  describe('When no label', () => {
    it('Should not show the tooltip', () => {
      const props = { label: '' };
      initializeComponent(props);

      page().mouseOver().isTooltipHidden();
    });
  });

  describe('When class prop is added', () => {
    it('Should apply given classes to outer element', () => {
      const props = { className: 'custom-class' };
      initializeComponent(props);

      page().hasClass(props.className);
    });
  });
});
