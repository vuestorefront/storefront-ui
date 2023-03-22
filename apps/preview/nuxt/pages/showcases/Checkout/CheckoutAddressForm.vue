<template>
  <form class="p-4 flex gap-4 flex-wrap text-neutral-900" @submit.prevent="onSubmit">
    <h2 class="w-full typography-headline-4 md:typography-headline-3 font-bold">Billing address</h2>
    <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
      <span class="typography-text-sm font-medium">First Name</span>
      <SfInput name="firstName" autocomplete="given-name" required />
    </label>
    <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Last Name</span>
      <SfInput name="lastName" autocomplete="family-name" required />
    </label>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Phone</span>
      <SfInput name="phone" type="tel" autocomplete="tel" required />
    </label>
    <label class="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Country</span>
      <SfSelect name="country" placeholder="-- Select --" autocomplete="country-name" required>
        <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
      </SfSelect>
    </label>
    <div class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
      <label>
        <span class="typography-text-sm font-medium">Street</span>
        <SfInput
          name="street"
          autocomplete="address-line1"
          class="mt-.05"
          required
          :invalid="!streetIsValid"
          @blur="streetIsValid = !!$event.target.value"
          @update:model-value="streetIsValid = !!$event"
        />
      </label>
      <strong v-if="!streetIsValid" class="typography-error-sm text-negative-700 font-medium">
        Please provide a valid street name
      </strong>
      <small class="typography-text-xs text-neutral-500">Street address or P.O. Box</small>
    </div>
    <div class="w-full flex flex-col gap-0.5 md:w-[120px]">
      <label>
        <span class="typography-text-sm font-medium">Apt#, Suite, etc</span>
        <SfInput name="aptNo" class="mt-0.5" />
      </label>
      <small class="typography-text-xs text-neutral-500">Optional</small>
    </div>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">City</span>
      <SfInput name="city" autocomplete="address-level2" required />
    </label>
    <label class="w-full md:w-auto flex flex-col gap-0.5 flex-grow">
      <span class="typography-text-sm font-medium">State</span>
      <SfSelect name="state" placeholder="-- Select --" autocomplete="address-level1" required>
        <option v-for="stateName in states" :key="stateName">{{ stateName }}</option>
      </SfSelect>
    </label>
    <label class="w-full flex flex-col gap-0.5 md:w-[120px]">
      <span class="typography-text-sm font-medium">ZIP Code</span>
      <SfInput name="zipCode" placeholder="eg. 12345" autocomplete="postal-code" required />
    </label>

    <label class="w-full flex items-center gap-2">
      <SfCheckbox name="useAsShippingAddress" />
      Use as shipping address
    </label>

    <div class="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
      <SfButton type="reset" variant="secondary" class="w-full md:w-auto">Clear all</SfButton>
      <SfButton class="w-full md:w-auto">Save</SfButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfSelect, SfInput, SfCheckbox, SfButton } from '@storefront-ui/vue';

// Here you should provide a list of countries you want to support
// or use an up-to-date country list like: https://www.npmjs.com/package/country-list
const countries = ['Germany', 'Great Britain', 'Poland', 'United States of America'] as const;
const states = ['California', 'Florida', 'New York', 'Texas'] as const;

const streetIsValid = ref(true);

const onSubmit = (e: Event) => {
  /* your submit handler, e.g.: */
  const form = e.target as HTMLFormElement;

  // data can be accessed in form of FormData
  const formData = new FormData(form);
  // or JSON object
  const formJSON = Object.fromEntries(formData.entries());
  console.log(formJSON);
};
</script>
