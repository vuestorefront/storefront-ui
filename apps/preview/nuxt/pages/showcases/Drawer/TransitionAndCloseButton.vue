<template>
  <VsfButton type="button" @click="open = true"> Open Drawer </VsfButton>

  <transition
    enter-active-class="transition duration-500 ease-in-out"
    leave-active-class="transition duration-500 ease-in-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <VsfDrawer
      ref="drawerRef"
      v-model="open"
      :placement="placement"
      :class="[
        'bg-neutral-50',
        'border',
        'border-gray-300',
        { 'max-w-[370px]': placement === VsfDrawerPlacement.left || placement === VsfDrawerPlacement.right },
      ]"
    >
      <header className="bg-primary-700 flex justify-between py-6 px-10 items-center">
        <div className="flex items-center text-white"><VsfIconFavorite class="mr-2" /> Your favorite items</div>
        <VsfButton square variant="tertiary" class="text-white" @click="open = false">
          <VsfIconClose />
        </VsfButton>
      </header>
      <div class="p-5 px-10">
        <p className="mb-2">
          Focus is trapped inside this Drawer and <strong>tab</strong> button cycle through
          <a href="#" class="underline text-primary-700"> Focusable Element </a> and another
          <a href="#" class="underline text-primary-700"> Focusable Element </a>
        </p>
        <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
      </div>
    </VsfDrawer>
  </transition>
</template>

<script lang="ts" setup>
import {
  VsfDrawer,
  VsfDrawerPlacement,
  VsfButton,
  VsfIconFavorite,
  VsfIconClose,
  useTrapFocus,
} from '@storefront-ui/vue';
import { ref } from 'vue';

const placement = ref<`${VsfDrawerPlacement}`>('left');
const open = ref(false);
const drawerRef = ref();

useTrapFocus(drawerRef, { activeState: open });
</script>
