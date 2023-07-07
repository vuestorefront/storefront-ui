<template>
  <fieldset>
    <label v-for="{ label, value } in options" :key="value" class="flex items-center my-4 cursor-pointer">
      <SfRadio v-model="placement" class="flex items-center" name="placement" :value="value" />
      <span class="ml-2">{{ label }}</span>
    </label>
  </fieldset>
  <SfButton type="button" @click="open = true"> Open Drawer </SfButton>

  <transition
    enter-active-class="transition duration-500 ease-in-out"
    leave-active-class="transition duration-500 ease-in-out"
    :enter-from-class="placement === 'left' ? '-translate-x-full' : 'translate-x-full'"
    :enter-to-class="placement === 'left' ? 'translate-x-0' : 'translate-x-0'"
    :leave-from-class="placement === 'left' ? 'translate-x-0' : 'translate-x-0'"
    :leave-to-class="placement === 'left' ? '-translate-x-full' : 'translate-x-full'"
  >
    <SfDrawer
      ref="drawerRef"
      v-model="open"
      :placement="placement"
      :class="[
        'bg-neutral-50',
        'border',
        'border-gray-300',
        { 'max-w-[370px]': placement === 'left' || placement === 'right' },
      ]"
    >
      <header class="flex items-center justify-between px-10 py-6 bg-primary-700">
        <div class="flex items-center text-white"><SfIconFavorite class="mr-2" /> Your favorite items</div>
        <SfButton square variant="tertiary" class="text-white" @click="open = false">
          <SfIconClose />
        </SfButton>
      </header>
      <div class="p-5 px-10">
        <p class="mb-2">
          Focus is trapped inside this Drawer and <strong>tab</strong> button cycle through
          <a href="#" class="underline text-primary-700"> Focusable Element </a> and another
          <a href="#" class="underline text-primary-700"> Focusable Element </a>
        </p>
        <strong>You can close Drawer by clicking outside or focus and use ESC button</strong>
      </div>
    </SfDrawer>
  </transition>
</template>

<script lang="ts" setup>
import {
  SfDrawer,
  SfDrawerPlacement,
  SfButton,
  SfRadio,
  SfIconFavorite,
  SfIconClose,
  useTrapFocus,
} from '@storefront-ui/vue';
import { ref } from 'vue';

const placement = ref<`${SfDrawerPlacement}`>('left');
const open = ref(false);
const drawerRef = ref();

const options = ref([
  { label: 'Slide from left', value: 'left' },
  { label: 'Slide from right', value: 'right' },
]);

useTrapFocus(drawerRef, { activeState: open });
</script>
