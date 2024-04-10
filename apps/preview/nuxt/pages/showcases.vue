<template>
  <div class="e-page-examples">
    <ClientOnly>
      <div v-if="isNotIframe" class="sidebar" :class="!isOpen && 'sidebar-collapsed'">
        <header class="sidebar-heading">
          <h2>StorefrontUI v2</h2>
          <h3>Vue Blocks</h3>
        </header>
        <SfButton
          class="sidebar-toggle"
          :variant="SfButtonVariant.tertiary"
          :size="SfButtonSize.sm"
          :aria-label="isOpen ? 'Hide sidebar' : 'Open sidebar'"
          square
          @click="isOpen = !isOpen"
        >
          <template #prefix>
            <SfIconChevronLeft v-if="isOpen" />
            <SfIconChevronRight v-else />
          </template>
        </SfButton>
        <label class="sidebar-search">
          <SfInput v-model="searchModelValue" placeholder="Search" />
          <button type="button" class="sidebar-search__button" @click="searchModelValue = ''">
            <SfIconCloseSm v-if="searchModelValue" class="sidebar-search__button-icon" />
          </button>
        </label>
        <ul class="sidebar-list">
          <template v-for="(groupValue, groupKey) in groups" :key="groupKey">
            <li v-if="groupValue.visible" class="flex flex-col select-none">
              <button
                type="button"
                class="text-left bg-gray-200 px-2 py-1 justify-between cursor-pointer"
                @click="groupValue.open = !groupValue.open"
              >
                {{ groupKey }}<SfIconExpandMore :class="{ 'rotate-180': groupValue.open }" />
              </button>
              <ul v-if="groupValue.open">
                <li v-for="showcaseName in groupValue.showcases" :key="groupKey + showcaseName">
                  <NuxtLink
                    :key="showcaseName"
                    v-slot="{ navigate }"
                    :to="groupItemHref(groupKey, showcaseName)"
                    custom
                    no-prefetch
                  >
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
    </ClientOnly>
    <div class="e-page">
      <div
        class="e-page-component"
        :class="[
          arePaddingsDisabled && 'e-page-component--no-paddings',
          areScaleDisabled && 'e-page-component--no-scale',
        ]"
      >
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
  SfInput,
  SfIconCloseSm,
} from '@storefront-ui/vue';
import { ref, watch, reactive, onBeforeMount } from 'vue';
import { useControlsSearchParams } from '~/composables/utils/useControlsSearchParams';

const { currentRoute, ...router } = useRouter();

const REST_GROUP_NAME = 'Rest';
const paths = router
  .getRoutes()
  .filter((route) => route.path.includes('showcases/'))
  .map((route) => route.path);
const groupItemHref = (groupName, showcaseName) => {
  return `/showcases/${groupName !== REST_GROUP_NAME ? `${groupName}/` : ''}${showcaseName}`;
};
const groups = reactive(
  paths.reduce((prev, curr) => {
    const showcasePathArray = curr.replace('/showcases/', '').split('/');
    const showcaseName = showcasePathArray[showcasePathArray.length - 1];
    const groupName = showcasePathArray.length === 2 ? showcasePathArray[0] : REST_GROUP_NAME;

    const isInUrl = currentRoute.value.href === groupItemHref(groupName, showcaseName);
    if (groupName in prev) {
      prev[groupName].showcases.push(showcaseName);
      if (!prev[groupName].open) prev[groupName].open = isInUrl;
    } else {
      prev[groupName] = {
        showcases: [showcaseName],
        open: ref(isInUrl),
        visible: ref(true),
      };
    }

    return prev;
  }, {}),
);
const isOpen = ref(true);
const isNotIframe = ref(false);
const arePaddingsDisabled = ref(false);
const areScaleDisabled = ref(false);
const searchModelValue = ref('');

const findGroup = (groups, currentRouteHref) =>
  Object.entries(groups).find((group) => {
    return group[1].showcases.find((showcaseName) => {
      return groupItemHref(group[0], showcaseName) === currentRouteHref;
    });
  });

watch(
  [currentRoute, groups],
  ([currentRoute, groups]) => {
    if (!currentRoute || !groups) return;
    const currentGroup = findGroup(groups, currentRoute.path);
    if (!currentGroup) return;
    groups[currentGroup[0]].open = true;
  },
  { immediate: true },
);

watch(
  searchModelValue,
  (searchModelValue) => {
    for (let group in groups) {
      if (searchModelValue) {
        const searchMatch = group.toLowerCase().startsWith(searchModelValue.toLowerCase());
        groups[group].visible = searchMatch;
        groups[group].open = searchMatch;
      } else {
        groups[group].visible = true;
        groups[group].open = false;
      }
    }
  },
  { immediate: true },
);
useControlsSearchParams(reactive({ s: searchModelValue }));

onBeforeMount(() => {
  if (window.self === window.top) {
    isNotIframe.value = true;
  } else {
    window.parent.postMessage('loaded', '*');
    window.addEventListener(
      'message',
      (e) => {
        if (e.data === 'no-paddings') arePaddingsDisabled.value = true;
        else if (e.data === 'no-scale') areScaleDisabled.value = true;
      },
      false,
    );
  }
});
</script>
