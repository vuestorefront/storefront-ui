import React from 'react';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Wrapper, mount, useComponent } from '../../utils/mount';
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
      id?: string;
      'data-testid'?: string;
      modelValue?: Ref<boolean>;
    } = {},
  ) => {
    const {
      label = 'Tooltip text',
      children = 'Content',
      showArrow = false,
      className,
      id,
      'data-testid': dataTestid,
      modelValue,
    } = props;
    return mount({
      vue: {
        component: SfTooltipVue,
        props: {
          label,
          class: className,
          showArrow,
          modelValue,
          id,
          dataTestid,
        },
        slots: {
          default: children,
        },
      },
      react: (
        <Wrapper
          component={SfTooltipReact}
          open={modelValue}
          label={label}
          className={className}
          showArrow={showArrow}
          id={id}
          data-testid={dataTestid}
        >
          {children}
        </Wrapper>
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

  describe('When id prop is added', () => {
    it('Should apply given id to tooltip element', () => {
      const props = { id: 'custom-id', modelValue: ref(true), label: 'Tooltip text' };
      initializeComponent(props);

      page().hasTooltipId(props.id);
    });
  });

  describe('When open modelValue changes', () => {
    it('Should react to the changes', () => {
      const modelValue = ref(false);
      initializeComponent({ modelValue });

      page().isTooltipHidden();

      cy.then(() => {
        modelValue.value = true;
        page().isTooltipVisible();
      }).then(() => {
        modelValue.value = false;
        page().isTooltipHidden();
      });
    });
  });
});
