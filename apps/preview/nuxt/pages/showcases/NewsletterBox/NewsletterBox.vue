<template>
  <div class="relative">
    <div class="bg-neutral-100 p-4 sm:p-10 text-center">
      <p class="typography-headline-4 sm:typography-headline-3 font-bold">
        Subscribe and get discount on your first purchase!
      </p>
      <p class="typography-text-sm sm:typography-text-base my-2 mb-4">
        Be aware of upcoming sales and events. Receive gifts and special offers!
      </p>
      <form
        class="mb-4 flex flex-col sm:flex-row gap-4 max-w-[688px] mx-auto"
        @submit.prevent="subscribeNewsletter(inputValue)"
      >
        <SfInput v-model="inputValue" type="email" wrapper-class="grow" placeholder="Type your email" />
        <SfButton type="submit" size="lg"> Subscribe to Newsletter </SfButton>
      </form>
      <div class="typography-text-xs text-neutral-600">
        To learn how we process your data, visit our <SfLink href="#" class="!text-neutral-600">Privacy Notice</SfLink>.
        You can <SfLink href="#" class="!text-neutral-600">unsubscribe</SfLink> at any time without costs.
      </div>
    </div>
    <div class="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
      <div
        v-if="showPositiveAlert"
        role="alert"
        class="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <SfIconCheckCircle class="mr-2 my-2 text-positive-700" />
        <p class="py-2 mr-2">Your email has been added to the newsletter subscription.</p>
        <button
          type="button"
          class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
          aria-label="Close positive alert"
          @click="showPositiveAlert = false"
        >
          <SfIconClose class="hidden md:block" />
          <SfIconClose size="sm" class="md:hidden block" />
        </button>
      </div>
      <div
        v-if="showErrorAlert"
        role="alert"
        class="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <p class="py-2 mr-2">This email is already subscribed for our newsletter.</p>
        <button
          type="button"
          class="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
          aria-label="Close error alert"
          @click="showErrorAlert = false"
        >
          <SfIconClose class="hidden md:block" />
          <SfIconClose size="sm" class="md:hidden block" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { SfButton, SfInput, SfLink, SfIconCheckCircle, SfIconClose } from '@storefront-ui/vue';

const inputValue = ref('');
const showPositiveAlert = ref(false);
const showErrorAlert = ref(false);
const emailDataBase: Ref<string[]> = ref([]);

const checkEmailDataBase = (email: string) => emailDataBase.value.find((element) => element === email);

const subscribeNewsletter = (email: string) => {
  if (!email) return;
  if (checkEmailDataBase(email)) {
    showErrorAlert.value = true;
    setTimeout(() => (showErrorAlert.value = false), 5000);
  } else {
    showPositiveAlert.value = true;
    emailDataBase.value.push(email);
    setTimeout(() => (showPositiveAlert.value = false), 5000);
  }
  console.log(email);
  inputValue.value = '';
};
</script>
