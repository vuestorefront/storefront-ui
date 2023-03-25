<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfButton type="button" @click="state.modelValue = !state.modelValue"> Open Drawer </SfButton>

    <SfDrawer
      v-bind="state"
      v-model="modelValue"
      :class="[
        'bg-neutral-50',
        'p-3',
        { 'max-w-[370px]': placement === SfDrawerPlacement.left || placement === SfDrawerPlacement.right },
      ]"
    >
      <template v-if="SlotDefault">{{ SlotDefault }}</template>
      <div v-else>
        <p class="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur repellat, odit voluptatibus
          deserunt eligendi nemo perspiciatis tenetur vero repellendus facere? Dolores sit maiores ut labore facilis
          minima debitis dolore.
        </p>
        <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
      </div>
    </SfDrawer>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { SfDrawer, SfButton, SfDrawerPlacement } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfSideSheetExample',
  components: {
    ComponentExample,
    SfDrawer,
    SfButton,
  },
  setup() {
    return {
      SfDrawerPlacement,
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'SlotDefault',
            description: 'Only for demonstration purposes. Default slot, replaces example drawer content',
          },
          {
            type: 'boolean',
            modelName: 'modelValue',
            propType: 'boolean',
            propDefaultValue: false,
            description: 'If true drawer is visible',
          },
          {
            type: 'select',
            modelName: 'placement',
            options: Object.keys(SfDrawerPlacement),
            propType: 'enum',
            propDefaultValue: SfDrawerPlacement.left,
            description: 'Placement of drawer',
          },
          {
            type: 'text',
            modelName: 'tag',
            propType: 'string',
            propDefaultValue: 'aside',
            description: 'Tag of drawer HTML element',
          },
          {
            type: 'boolean',
            modelName: 'disableClickAway',
            propType: 'boolean',
            propDefaultValue: false,
            description: "If true can't close drawer when clicking outside drawer",
          },
          {
            type: 'boolean',
            modelName: 'disableEsc',
            propType: 'boolean',
            propDefaultValue: false,
            description: "If true can't close drawer when using ESC keyboard button",
          },
        ],
        {
          SlotDefault: ref(),
          modelValue: ref(),
          placement: ref(SfDrawerPlacement.left),
          tag: ref(),
          disableClickAway: ref(),
          disableEsc: ref(),
        },
      ),
    };
  },
};
</script>
