/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from 'react';
import { h, ref } from 'vue';
import type { Ref } from 'vue';
import { mount, useComponent, Wrapper } from '../../utils/mount';
import VsfDropdownMenuBaseObject from './VsfDropdownMenu.PageObject';

const { vue: VsfDropdownMenuVue, react: VsfDropdownMenuReact } = useComponent('VsfDropdownMenu');
const { vue: VsfListItemMenuVue, react: VsfListItemMenuReact } = useComponent('VsfListItemMenu');
const { vue: VsfIconCircleVue, react: VsfIconCircleReact } = useComponent('VsfIconCircle');

describe('VsfDropdownMenu', () => {
  const page = () => new VsfDropdownMenuBaseObject('dropdown-menu');
  const items = [
    {
      label: 'item1',
      secondaryText: 'item description',
    },
    {
      label: 'item2',
      secondaryText: 'item description',
    },
    {
      label: 'item3',
      secondaryText: 'item description',
    },
    {
      label: 'item4',
      secondaryText: 'item description',
    },
    {
      label: 'item5',
      secondaryText: 'item description',
    },
  ];

  const initializeComponent = ({
    loading = ref(false),
  }: {
    loading?: Ref<boolean>;
  } = {}) => {
    return mount({
      vue: {
        component: VsfDropdownMenuVue,
        props: {
          loading,
        },
        slots: {
          default: () =>
            items.map(({ label, secondaryText }) => {
              return h(
                VsfListItemMenuVue,
                {
                  key: label,
                  label: label,
                  ['secondary-text']: secondaryText,
                },
                { prefix: () => h(VsfIconCircleVue) },
              );
            }),
        },
      },
      react: (
        <Wrapper loading={loading} component={VsfDropdownMenuReact}>
          {items.map((item) => (
            <VsfListItemMenuReact
              key={item.label}
              label={item.label}
              secondary-text={item.secondaryText}
              slotPrefix={<VsfIconCircleReact />}
            />
          ))}
        </Wrapper>
      ),
    });
  };

  it('initial state', () => {
    initializeComponent();
  });

  describe('when loading is changing value', () => {
    it('should change content to loader component', () => {
      const loading = ref(false);
      initializeComponent({ loading });

      page().hasListItemMenu().makeSnapshot();
      cy.then(() => {
        loading.value = true;
      }).then(() => {
        page().hasLoader();
      });
    });
  });
});
