/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
// import vue
import VsfDropdownMenuVue from "../../../sfui/frameworks/vue/components/VsfDropdownMenu/VsfDropdownMenu.vue";
import VsfListItemMenuVue from '../../../sfui/frameworks/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import VsfIconDotVue from '../../../sfui/frameworks/vue/components/VsfIcons/VsfIconDot.vue';
// end import vue
// import react
import VsfDropdownMenuReact from "../../../sfui/frameworks/react/components/VsfDropdownMenu/VsfDropdownMenu";
import VsfListItemMenuReact from '../../../sfui/frameworks/react/components/VsfListItemMenu/VsfListItemMenu';
import VsfIconDotReact from '../../../sfui/frameworks/react/components/VsfIcons/VsfIconDot';
// end import react

import { mount, Wrapper } from '../../utils/mount';
import { h, ref } from 'vue';
import type { Ref } from "vue";
import { waitForRerender } from "../../utils/waitForRerender";
import VsfDropdownMenuBaseObject from "./VsfDropdownMenu.PageObject";

describe("VsfDropdownMenu", () => {
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
    loading?: Ref<boolean>,
  } = {}) => {
    return mount({
      vue: {
        component: VsfDropdownMenuVue,
        props: {
          loading
        },
        slots: {
          default: () =>
            items.map(
              ({ label, secondaryText })  => {
                return h(
                  VsfListItemMenuVue, {
                    key: label,
                    label: label,
                    ['secondary-text']: secondaryText
                  },
                  { prefix: () => h(VsfIconDotVue) }
                )
              }
            )
        }
      },
      react:
      <Wrapper
        loading={loading}
        component={VsfDropdownMenuReact}
      >
        {items.map((item) => (
          <VsfListItemMenuReact
            key={item.label}
            label={item.label}
            secondary-text={item.secondaryText}
            slotPrefix={<VsfIconDotReact />}
          />
        ))}
        </Wrapper>
    });
  }

  it('initial state', () => {
    initializeComponent();
  });

  describe('when loading is changing value', () => {
    it('should change content to loader component', () => {
      initializeComponent({ loading: false });

      page()
        .hasListItemMenu()
        .makeSnapshot();

      cy.then(() => {
        initializeComponent({ loading: true });
        waitForRerender();
      }).then(() => {
        page().hasLoader();
      });
    });
  });
});
