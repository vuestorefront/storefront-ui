<template>
  <div class="e-page-examples">
    <div v-if="!isDocs" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
      <header class="sidebar-heading">
        <h2>StorefrontUI v2</h2>
        <h3>Vue showcases</h3>
      </header>
      <VsfButton
        class="sidebar-toggle"
        :variant="VsfButtonVariant.tertiary"
        :size="VsfButtonSize.sm"
        :aria-label="isOpen ? 'Hide sidebar' : 'Open sidebar'"
        @click="isOpen = !isOpen"
      >
        <template #prefix>
          <VsfIconChevronLeft v-if="isOpen" />
          <VsfIconChevronRight v-else />
        </template>
      </VsfButton>
      <ul class="sidebar-list">
        <template v-for="(groupValue, groupKey) in groups" :key="groupKey">
          <li
            class="bg-gray-200 px-2 py-1 cursor-pointer flex justify-between select-none"
            @click="groupValue.open = !groupValue.open"
          >
            {{ groupKey }}<VsfIconExpandMore :class="{ 'rotate-180': groupValue.open }" />
          </li>
          <li v-show="groupValue.open">
            <ul>
              <li v-for="showcaseName in groupValue.showcases" :key="groupKey + showcaseName">
                <NuxtLink :key="showcaseName" v-slot="{ navigate }" :to="groupItemHref(groupKey, showcaseName)" custom>
                  <VsfListItemMenu
                    :label="showcaseName"
                    :link="groupItemHref(groupKey, showcaseName)"
                    :selected="currentRoute.path === groupItemHref(groupKey, showcaseName)"
                    @click="navigate"
                  />
                </NuxtLink>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
    <div class="e-page">
      <div class="e-page-component">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { VsfButtonVariant, VsfButtonSize } from '@storefront-ui/vue/components/VsfButton/types';
import VsfListItemMenu from '@storefront-ui/vue/components/VsfListItemMenu/VsfListItemMenu.vue';
import {
  VsfIconChevronLeft,
  VsfIconChevronRight,
  VsfIconExpandMore,
} from '@storefront-ui/vue/components/VsfIcons/index';

const { currentRoute } = useRouter();

const REST_GROUP_NAME = 'Rest';
const files = import.meta.glob('./showcases/**');
const paths = Object.keys(files);
const groups = reactive(
  paths.reduce((prev, curr) => {
    if (!curr.includes('.vue')) return prev;
    const showcasePathArray = curr.replace('./showcases/', '').split('/');
    const showcaseName = showcasePathArray[showcasePathArray.length - 1].replace('.vue', '');
    const groupName = showcasePathArray.length === 2 ? showcasePathArray[0] : REST_GROUP_NAME;

    if (groupName in prev) {
      prev[groupName].showcases.push(showcaseName);
    } else {
      prev[groupName] = {
        showcases: [showcaseName],
        open: ref(true),
      };
    }

    return prev;
  }, {}),
);

const isOpen = ref(true);
const isDocs = computed(() => currentRoute.value.query.docs);

const groupItemHref = (groupName, showcaseName) => {
  return `/showcases/${groupName !== REST_GROUP_NAME ? `${groupName}/` : ''}${showcaseName}`;
};
</script>
