<template>
  <div class="px-4">
    <h1 class="mb-4 typography-headline-4 font-bold">Personal information</h1>
    <form @submit.prevent="sendForm">
      <label class="flex justify-between cursor-pointer mb-4 gap-2">
        Don’t display my personal information on a public profile
        <SfSwitch v-model="personalInformationModelValue" />
      </label>
      <label>
        <span class="typography-label-sm font-medium">Username *</span>
        <SfInput
          v-model="usernameModelValue"
          required
          :invalid="usernameIsInvalid"
          @update:model-value="usernameIsInvalid = !usernameModelValue"
        />
        <p v-if="usernameIsInvalid" class="mt-0.5 text-negative-700 typography-text-sm font-medium">
          The field cannot be empty
        </p>
      </label>
      <label class="block my-4">
        <span class="typography-label-sm font-medium">Email *</span>
        <SfInput
          v-model="emailModelValue"
          type="email"
          :invalid="emailIsInvalid"
          required
          @update:model-value="emailIsInvalid = !emailModelValue"
        >
          <template #prefix>
            <SfIconEmail />
          </template>
        </SfInput>
        <p v-if="emailIsInvalid" class="mt-0.5 text-negative-700 typography-text-sm font-medium">
          The field cannot be empty
        </p>
      </label>
      <label>
        <span class="typography-label-sm font-medium">Website</span>
        <SfInput v-model="websiteModelValue">
          <template #prefix>
            <span>https://</span>
          </template>
        </SfInput>
      </label>
      <fieldset class="flex flex-wrap my-4">
        <legend class="hidden">Phone number</legend>
        <label class="typography-label-sm font-medium flex-[100%]" for="select-area-code">Phone *</label>
        <span class="w-full md:w-[122px] md:mr-4">
          <SfSelect
            id="select-area-code"
            v-model="areaCode"
            required
            placeholder="--"
            :invalid="areaCodeIsInvalid"
            @update:model-value="areaCodeIsInvalid = !areaCode"
          >
            <option v-for="({ value, label }, index) in areaCodes" :key="`${value}-${index}`" :value="value">
              {{ label }}
            </option>
          </SfSelect>
          <p v-if="areaCodeIsInvalid" class="mt-0.5 text-negative-700 typography-text-sm font-medium">
            No option selected
          </p>
        </span>
        <span class="mt-4 md:mt-0 grow">
          <SfInput
            id="phone-number"
            v-model="phoneNumberModelValue"
            type="tel"
            required
            :invalid="phoneNumberIsInvalid"
            placeholder="eg. 123 456 7890"
            wrapper-class="w-full"
            class="placeholder:text-neutral-500"
            @update:model-value="phoneNumberIsInvalid = !phoneNumberModelValue"
          />
          <p v-if="phoneNumberIsInvalid" class="mt-0.5 text-negative-700 typography-text-sm font-medium">
            The field cannot be empty
          </p>
        </span>
        <label for="phone-number" class="hidden"> Phone number </label>
      </fieldset>
      <div ref="referenceRef" class="relative">
        <label :class="['font-medium typography-label-sm', { 'text-disabled-900': isDisabled }]" :for="id">
          Country
        </label>
        <SfInput
          :id="id"
          ref="inputRef"
          v-model="countryModelValue"
          role="combobox"
          aria-label="Select from the list"
          placeholder="Select from the list"
          :aria-controls="listId"
          aria-autocomplete="list"
          :aria-disabled="isDisabled"
          :aria-expanded="isOpen"
          :aria-activedescendant="currentFocus?.id"
          :invalid="isValid === false && !isOpen"
          :disabled="isDisabled"
          :class="[
            'cursor-pointer placeholder:text-neutral-500',
            {
              '!text-disabled-500': isDisabled,
            },
          ]"
          :wrapper-class="{
            '!bg-disabled-100 !ring-disabled-300 !hover:ring-disabled-300 !ring-1': isDisabled,
          }"
          @focus="isValid = undefined"
          @click="toggle()"
          @keydown="handleInputKeyDown"
          ><template #suffix>
            <SfIconExpandMore
              :class="[
                'ml-auto text-neutral-500 transition-transform ease-in-out duration-300',
                {
                  'rotate-180': isOpen,
                  '!text-disabled-500 cursor-not-allowed': isDisabled,
                },
              ]"
              @click="!isDisabled && toggle()"
            />
          </template>
        </SfInput>
        <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0 z-10">
          <ul
            :id="listId"
            ref="dropdownRef"
            role="listbox"
            aria-label="Country list"
            class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
          >
            <template v-if="snippets.length > 0">
              <li v-for="option in snippets" :key="option.value">
                <SfListItem
                  :id="`${listId}-${option.value}`"
                  tag="button"
                  type="button"
                  class="flex justify-start"
                  :aria-selected="option.value === countryModelValue"
                  @click="selectOption(option.label)"
                  @keydown.enter.space.prevent="selectOption(option.label)"
                  @keydown.esc="handleFocusInput"
                >
                  <p class="text-left">
                    <span>
                      {{ option.label }}
                    </span>
                  </p>
                </SfListItem>
              </li>
            </template>
            <p v-else-if="countryModelValue" class="inline-flex px-4 py-2 w-full text-left" aria-label="No options">
              <span>No options</span>
            </p>
            <template v-else>
              <li v-for="option in options" :key="option.value">
                <SfListItem
                  :id="`${listId}-${option.value}`"
                  tag="button"
                  type="button"
                  class="flex justify-start"
                  :aria-selected="option.value === countryModelValue"
                  @click="selectOption(option.label)"
                  @keydown.enter.space.prevent="selectOption(option.label)"
                  @keydown.esc="handleFocusInput"
                >
                  <p class="text-left">
                    <span>{{ option.label }}</span>
                  </p>
                </SfListItem>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <p v-if="!isDisabled && isValid === false" class="text-negative-700 typography-text-sm font-medium mt-0.5">
        No option selected
      </p>
      <label class="font-medium typography-label-sm block mt-4" :for="dropdownID">Your Interests</label>
      <div ref="dropdownReferenceRef" class="relative mb-4">
        <div
          :id="dropdownID"
          ref="selectTriggerRef"
          role="combobox"
          :aria-controls="listboxId"
          :aria-expanded="dropdownOpen"
          aria-label="Select one option"
          :aria-activedescendant="selectedOption ? `${listboxId}-${selectedOption.value}` : undefined"
          class="mt-0.5 flex items-center gap-8 font-normal typography-text-base ring-1 ring-neutral-300 ring-inset rounded-md py-2 px-4 hover:ring-primary-700 active:ring-primary-700 active:ring-2 focus:ring-primary-700 focus:ring-2 focus-visible:outline focus-visible:outline-offset cursor-pointer"
          tabindex="0"
          @keydown.space="dropdownToggle()"
          @click="dropdownToggle()"
        >
          <template v-if="selectedOption">{{ selectedOption.label }}</template>
          <span v-else class="text-neutral-500">Select from the list</span>
          <SfIconExpandMore
            class="ml-auto text-neutral-500 transition-transform ease-in-out duration-300"
            :class="{ 'rotate-180': dropdownOpen }"
          />
        </div>
        <ul
          v-show="dropdownOpen"
          :id="listboxId"
          ref="dropdownFloatingRef"
          role="listbox"
          aria-label="Select one option"
          class="w-full py-2 rounded-md shadow-md border border-neutral-100 bg-white z-10"
          :style="dropdownStyle"
        >
          <SfListItem
            v-for="option in dropdownOptions"
            :id="`${listboxId}-${option.value}`"
            :key="option.value"
            role="option"
            tabindex="0"
            :aria-selected="option.value === selectedOption?.value"
            class="block"
            :class="{ 'font-medium': option.value === selectedOption?.value }"
            @click="dropdownSelectOption(option)"
            @keydown.enter="dropdownSelectOption(option)"
            @keydown.space="dropdownSelectOption(option)"
          >
            {{ option.label }}
            <template #suffix>
              <SfIconCheck v-if="option.value === selectedOption?.value" class="text-primary-700" />
            </template>
          </SfListItem>
        </ul>
      </div>
      <label>
        <span class="typography-label-sm font-medium">Description</span>
        <textarea
          :value="descriptionValue"
          placeholder="Write something about yourself..."
          class="block w-full py-2 pl-4 pr-7 rounded-md border border-neutral-300 placeholder:text-neutral-500"
        ></textarea>
      </label>
      <h2 class="typography-headline-4 font-bold mt-14 mb-4">Notifications</h2>
      <fieldset>
        <legend class="mb-0.5 typography-text-sm font-medium">By Email</legend>
        <label
          v-for="({ label, value, hint, disabled }, index) in emailNotificationOptions"
          :key="`${value}-${index}`"
          :class="[
            'flex items-start mb-4 mr-6 rounded first-of-type:mt-2 last-of-type:mb-6',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          ]"
        >
          <SfCheckbox v-model="emailNotificationsModelValue" :disabled="disabled" :value="value" class="m-0.5" />
          <span class="ml-2">
            <span :class="['typography-text-base font-normal leading-6 font-body', { 'text-disabled-900': disabled }]">
              {{ label }}
            </span>
            <span :class="['typography-text-xs block', { 'text-disabled-500': disabled }]">{{ hint }}</span>
          </span>
        </label>
      </fieldset>
      <fieldset role="radiogroup">
        <legend class="mt-4 mb-0.5 typography-text-sm font-medium">Push Notifications *</legend>
        <label
          v-for="{ label, name, value } in radioOptions"
          :key="`${value}-${name}`"
          class="flex items-center mb-4 mr-6 rounded cursor-pointer first-of-type:mt-2 last-of-type:mb-2"
        >
          <SfRadio
            v-model="pushNotificationsModelValue"
            :invalid="pushNotificationIsInvalid"
            required
            :value="value"
            :name="name"
          />
          <span class="ml-2 text-base font-normal leading-6 font-body">{{ label }}</span>
        </label>
      </fieldset>
      <p class="text-neutral-500 typography-text-sm mt-8">* marked fields are required</p>
      <div class="flex gap-x-4 md:justify-end mt-6">
        <SfButton type="button" variant="secondary" class="flex-grow md:flex-grow-0"> Clear all </SfButton>
        <SfButton type="submit" class="flex-grow md:flex-grow-0"> Submit </SfButton>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref, watch } from 'vue';
import {
  SfSwitch,
  SfInput,
  SfSelect,
  SfCheckbox,
  SfRadio,
  SfButton,
  SfIconEmail,
  useDropdown,
  useDisclosure,
  SfIconExpandMore,
  SfListItem,
  SfIconCheck,
  useId,
  useTrapFocus,
} from '@storefront-ui/vue';
import { unrefElement } from '@vueuse/core';
import { offset } from '@floating-ui/vue';

type SelectOption = {
  label: string;
  value: string;
};

const personalInformationModelValue = ref(true);
const usernameModelValue = ref('');
const emailModelValue = ref('');
const websiteModelValue = ref('');
const phoneNumberModelValue = ref('');
const areaCode = ref('');
const descriptionValue = ref('');
const emailNotificationsModelValue = ref(['safety-alerts']);
const pushNotificationsModelValue = ref('');
const usernameIsInvalid = ref(false);
const emailIsInvalid = ref(false);
const areaCodeIsInvalid = ref(false);
const phoneNumberIsInvalid = ref(false);
const pushNotificationIsInvalid = ref(false);

const emailNotificationOptions = [
  {
    label: 'Safety Alerts and Messages *',
    value: 'safety-alerts',
    hint: 'Get notified when something goes wrong on your profile',
    disabled: true,
  },
  {
    label: 'Deals and Offers',
    value: 'deals-and-offers',
    hint: 'Once a week you will receive information about upcoming offers',
  },
  {
    label: 'Company Information',
    value: 'company-information',
    hint: 'Reports and information about planned changes',
  },
];
const radioOptions = [
  {
    label: 'Everything',
    value: 'everything',
    name: 'radio-1',
  },
  {
    label: 'Same as email',
    value: 'same-as-email',
    name: 'radio-1',
  },
  {
    label: 'No push notifications',
    value: 'no-push',
    name: 'radio-1',
  },
];

const dropdownOptions: SelectOption[] = [
  {
    label: 'Fashion and Apparel',
    value: 'Fashion and Apparel',
  },
  {
    label: 'Health and Wellness',
    value: 'Health and Wellness',
  },
  {
    label: 'Home Decor',
    value: 'Home Decor',
  },
  {
    label: 'Technology and Gadgets',
    value: 'Technology and Gadgets',
  },
  {
    label: 'Beauty and Cosmetics',
    value: 'Beauty and Cosmetics',
  },
  {
    label: 'Outdoor and Adventure',
    value: 'Outdoor and Adventure',
  },
  {
    label: 'Parenting and Baby Products',
    value: 'Parenting and Baby Products',
  },
  {
    label: 'Books and Literature',
    value: 'Books and Literature',
  },
  {
    label: 'Sports and Fitness',
    value: 'Sports and Fitness',
  },
  {
    label: 'Food and Cooking',
    value: 'Food and Cooking',
  },
];

const options: SelectOption[] = [
  {
    label: 'Afghanistan',
    value: 'afghanistan',
  },
  {
    label: 'Albania',
    value: 'albania',
  },
  {
    label: 'Angola',
    value: 'angola',
  },
  {
    label: 'Bahamas',
    value: 'bahamas',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Canada',
    value: 'canada',
  },
  {
    label: 'Chile',
    value: 'chile',
  },
  {
    label: 'Czech Republic',
    value: 'czech Republic',
  },
  {
    label: 'Colombia',
    value: 'colombia',
  },
  {
    label: 'Congo',
    value: 'congo',
  },
  {
    label: 'Croatia',
    value: 'croatia',
  },
  {
    label: 'Cuba',
    value: 'cuba',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Dominica',
    value: 'dominica',
  },
  {
    label: 'Egypt',
    value: 'egypt',
  },
  {
    label: 'Ethiopia',
    value: 'ethiopia',
  },
  {
    label: 'Estonia',
    value: 'estonia',
  },
];

const areaCodes = [
  { label: '1', value: '1' },
  { label: '20', value: '20' },
  { label: '45', value: '45' },
  { label: '53', value: '53' },
  { label: '56', value: '56' },
  { label: '57', value: '57' },
  { label: '93', value: '93' },
  { label: '243', value: '243' },
  { label: '244', value: '244' },
  { label: '251', value: '251' },
  { label: '355', value: '355' },
  { label: '372', value: '372' },
  { label: '385', value: '385' },
  { label: '420', value: '420' },
  { label: '880', value: '880' },
];

const { close: dropdownClose, toggle: dropdownToggle, isOpen: dropdownOpen } = useDisclosure();
const selectedOption = ref<SelectOption>();
const dropdownID = useId();
const listboxId = `select-dropdown-${dropdownID}`;
const selectTriggerRef = ref<HTMLDivElement>();

const {
  referenceRef: dropdownReferenceRef,
  floatingRef: dropdownFloatingRef,
  style: dropdownStyle,
} = useDropdown({
  isOpen: dropdownOpen,
  onClose: dropdownClose,
});

useTrapFocus(dropdownFloatingRef as Ref<HTMLUListElement>, {
  arrowKeysUpDown: true,
  activeState: dropdownOpen,
  initialFocusContainerFallback: true,
});

const dropdownSelectOption = (option: SelectOption) => {
  selectedOption.value = option;
  dropdownClose();
  unrefElement(selectTriggerRef as Ref<HTMLDivElement>)?.focus();
};

const countryModelValue = ref('');
const inputRef = ref();
const dropdownRef = ref();
const id = useId();
const listId = useId();
const isDisabled = ref(false);
const snippets = ref<{ label: string; value: string }[]>([]);
const isValid = ref<boolean | undefined>();
const isSelected = ref(false);
const { isOpen, close, open, toggle } = useDisclosure();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
});
const {
  current: currentFocus,
  focusables: focusableElements,
  updateFocusableElements,
} = useTrapFocus(dropdownRef, {
  trapTabs: false,
  arrowKeysUpDown: true,
  activeState: isOpen,
  initialFocus: false,
});

useTrapFocus(floatingRef as Ref<HTMLUListElement>, {
  arrowKeysOn: true,
  activeState: dropdownOpen,
  initialFocusContainerFallback: true,
});

const handleFocusInput = () => {
  const inputEl = unrefElement(inputRef)?.querySelector('input');
  inputEl?.focus();
};

const handleReset = () => {
  countryModelValue.value = '';
  snippets.value = [];
  close();
  handleFocusInput();
};

const handleInputKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') handleReset();
  if (event.key === 'Enter') close();
  if (event.key === 'ArrowUp') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[focusableElements.value.length - 1].focus();
    }
  }
  if (event.key === 'ArrowDown') {
    open();
    if (isOpen && focusableElements.value.length > 0) {
      focusableElements.value[0].focus();
    }
  }
};

const selectOption = (phrase: string) => {
  countryModelValue.value = phrase;
  isSelected.value = true;
  close();
  handleFocusInput();
};

watch(countryModelValue, () => {
  if (countryModelValue.value === '') {
    handleReset();
  } else if (countryModelValue.value && isSelected.value === false) {
    const getSnippets = async () => {
      open();
      try {
        const data = await mockAutocompleteRequest(countryModelValue.value);
        snippets.value = data;
        updateFocusableElements();
      } catch (error) {
        close();
        console.error(error);
      }
    };
    getSnippets();
  } else {
    isSelected.value = false;
  }
});

// Just for presentation purposes. Replace mock request with the actual API call.
const mockAutocompleteRequest = (phrase: string) => {
  const results = options.filter((option) => option.value.toLowerCase().startsWith(phrase.toLowerCase()));
  return results;
};

const sendForm = () => {
  const userData = {
    personalInformation: personalInformationModelValue.value,
    username: usernameModelValue.value,
    email: emailModelValue.value,
    website: websiteModelValue.value,
    phone: {
      code: areaCode.value,
      number: phoneNumberModelValue.value,
    },
    country: countryModelValue.value,
    interests: selectedOption.value?.label,
    description: descriptionValue.value,
    emailNotifications: emailNotificationsModelValue.value,
    pushNotifications: pushNotificationsModelValue.value,
  };
  console.log(userData);
};
</script>
