<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDropdownMenu :loading="loading" class="w-80" role="listbox" aria-label="Items choice">
        <VsfListItemMenu
          v-for="item of items"
          :key="`item-${item}`"
          :label="item.label"
          :secondary-text="item.secondaryText"
          role="option"
        >
          <template #prefix>
            <VsfIconCircle />
          </template>
        </VsfListItemMenu>
        <VsfDivider />
        <VsfListItemMenu
          v-for="item of items"
          :key="`item-${item}`"
          :label="item.label"
          :secondary-text="item.secondaryText"
          role="option"
        >
          <template #prefix>
            <VsfIconCircle />
          </template>
        </VsfListItemMenu>
      </VsfDropdownMenu>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import VsfDropdownMenu from '@storefront-ui/vue/components/VsfDropdownMenu/VsfDropdownMenu.vue';
import VsfListItemMenu from '@storefront-ui/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import VsfIconCircle from '@storefront-ui/vue/components/VsfIcons/VsfIconCircle.vue';
import VsfDivider from '@storefront-ui/vue/components/VsfDivider/VsfDivider.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfDropdownMenuExample',
  components: {
    Controls,
    VsfDropdownMenu,
    VsfListItemMenu,
    VsfIconCircle,
    VsfDivider,
  },
  setup() {
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
    let loadingState = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loadingState.value = false;
      }, 3000);
    });
    return {
      ...prepareControls(
        [
          {
            type: 'boolean',
            modelName: 'loading',
            description: 'sets displaying loader when loading content',
            propDefaultValue: 'false',
          },
        ],
        {
          loading: loadingState,
          items: items,
        },
      ),
    };
  },
};
</script>
