<script lang="ts" setup>
import { computed, onMounted, onUnmounted, PropType, ref, toRefs, watch } from 'vue';
import { VsfIconSizeEnum } from '../VsfIconBase/types';
import VsfIconMoreHorizontal from '../VsfIcons/VsfIconMoreHorizontal.vue';
import VsfIconHome from '../VsfIcons/VsfIconHome.vue';
import type { VsfBreadcrumbType, VsfBreadcrumbHomeType } from './types';
import type { TagOrComponent } from '../../shared/types';

const props = defineProps({
    breadcrumbs: {
        type: Array as PropType<VsfBreadcrumbType[]>,
        default: () => []
    },
    withIcon: {
        type: Boolean,
        default: false
    },
    homeItem: {
        type: Object as PropType<VsfBreadcrumbHomeType>,
        default: () => ({
            bindings: {
                href: '/'
            }
        })
    }
});

const { breadcrumbs } = toRefs(props);

/* TODO: use css-variable when tokens migrated */
const padding = 40;

const navRef = ref<HTMLElement>();
const dropdownRef = ref<HTMLElement>();

const dropdownOpened = ref(false);
const newWindowWidth = ref(0);
const dropdownLength = ref(0);
const visibleBreadcrumbs = computed(() =>
    breadcrumbs.value.slice(0, breadcrumbs.value.length - dropdownLength.value)
)
const drpodownBreadcrumbs = computed(() =>
    breadcrumbs.value.slice(breadcrumbs.value.length - dropdownLength.value, breadcrumbs.value.length)
)

const handleButtonClick = (): void => { dropdownOpened.value = !dropdownOpened.value };
const onWindowResize = (): void => { newWindowWidth.value = window.innerWidth };
const linkTag = (tag: TagOrComponent | undefined) => tag ?? 'a';

// TODO: use click outside
onMounted(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize);
});

watch(
    [newWindowWidth, () => props.breadcrumbs] as const,
    ([newWindowWidth]) => {
        if(!newWindowWidth) return;
        const breadcrumbsWidthVal = navRef.value?.offsetWidth || 0;
        const firstElementWidth = navRef.value?.children[0]?.children[1]?.clientWidth || 0;
        const offsetLeftVal = navRef.value?.offsetLeft || 0;
        if (newWindowWidth <= breadcrumbsWidthVal + padding + offsetLeftVal) {
            dropdownLength.value = dropdownLength.value += 1;
        }
        if (newWindowWidth - padding > breadcrumbsWidthVal + firstElementWidth + padding + offsetLeftVal) {
            dropdownLength.value = dropdownLength.value <= 0 ? 0 : dropdownLength.value - 1;
        }
}, {immediate: true})
</script>

<template>
    <nav class="vsf-breadcrumbs" ref="navRef">
        <ol class="vsf-breadcrumbs__ol">
            <li class="vsf-breadcrumbs__item">
                <template v-if="dropdownLength">
                    <button
                        class="vsf-breadcrumbs__dropdown-button peer"
                        aria-label="Show previous categories"
                        @click.stop="handleButtonClick()"
                    >
                        <VsfIconMoreHorizontal :size="VsfIconSizeEnum.sm" class="hvsf-breadcrumbs__item-button-icon"/>
                    </button>
                    <ul
                        v-if="dropdownOpened"
                        ref="dropdownRef"
                        class="vsf-breadcrumbs__dropdown-list"
                    >
                        <li
                            class="vsf-breadcrumbs__dropdown-list-item"
                            :aria-label="item.name" :key="index"
                            v-for="(item, index) in drpodownBreadcrumbs"
                        >
                            <component :is="linkTag(item.linkTag)"
                                v-if="index < dropdownLength"
                                v-bind="item.bindings"
                                class="vsf-breadcrumbs__dropdown-list-button"
                            >{{item.name}}</component>
                        </li>
                    </ul>
                </template>
            </li>
            <li
                v-if="!dropdownLength && withIcon"
                aria-label="Home"
                class="vsf-breadcrumbs__item"
            >
                <component
                    :is="linkTag(homeItem.linkTag)"
                    v-bind="homeItem.bindings"
                    class="vsf-breadcrumbs__item-button--home"
                >
                    <slot name="homeButtonIcon" />
                    <span
                        class="vsf-breadcrumbs__item-button-icon--home"
                        v-if="!$slots.icon"
                    >
                        <VsfIconHome />
                    </span>
                </component>
            </li>
            <li
                class="vsf-breadcrumbs__item"
                :aria-label="item.name"
                :key="index" v-for="(item, index) in visibleBreadcrumbs"
            >
                <component
                    :is="linkTag(item.linkTag)"
                    v-bind="item.bindings"
                    class="vsf-breadcrumbs__item-button"
                >{{item.name}}</component>
            </li>
        </ol>
    </nav>
</template>

