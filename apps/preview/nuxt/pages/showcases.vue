<template>
  <div class="e-page-examples">
    <div v-if="!isDocs" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
      <header class="sidebar-heading">
        <h2>StorefrontUI v2</h2>
        <h3>Vue Blocks</h3>
      </header>
      <SfButton
        class="sidebar-toggle"
        :variant="SfButtonVariant.tertiary"
        :size="SfButtonSize.sm"
        :aria-label="isOpen ? 'Hide sidebar' : 'Open sidebar'"
        @click="isOpen = !isOpen"
      >
        <template #prefix>
          <SfIconChevronLeft v-if="isOpen" />
          <SfIconChevronRight v-else />
        </template>
      </SfButton>
      <ul class="sidebar-list">
        <template v-for="(groupValue, groupKey) in groups" :key="groupKey">
          <li
            class="flex justify-between px-2 py-1 bg-gray-200 cursor-pointer select-none"
            @click="groupValue.open = !groupValue.open"
          >
            {{ groupKey }}<SfIconExpandMore :class="{ 'rotate-180': groupValue.open }" />
          </li>
          <li v-show="groupValue.open">
            <ul>
              <li v-for="showcaseName in groupValue.showcases" :key="groupKey + showcaseName">
                <NuxtLink :key="showcaseName" v-slot="{ navigate }" :to="groupItemHref(groupKey, showcaseName)" custom>
                  <SfListItem
                    tag="span"
                    :selected="currentRoute.path === groupItemHref(groupKey, showcaseName)"
                    :class="{ 'font-medium': currentRoute.path === groupItemHref(groupKey, showcaseName) }"
                    @click="navigate"
                  >
                    {{ showcaseName }}
                  </SfListItem>
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
import {
  SfButton,
  SfButtonVariant,
  SfButtonSize,
  SfListItem,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfIconExpandMore,
} from '@storefront-ui/vue';

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
