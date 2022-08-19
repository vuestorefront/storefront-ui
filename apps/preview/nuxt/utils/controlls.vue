<template>
  <div class="mb-2">
    <h1 class="pb-2">
      Controls
    </h1>
    <table class="mb-3">
      <tbody>
        <tr v-for="(control, index) in controls" :key="index">
          <td class="text-sm pr-2 align-top">
            {{ control.title }}
          </td>
          <td class="align-top">
            <template v-if="control.type === 'select'">
              <select
                v-model="proxyModels[control.modelName]"
                class="border rounded-md"
              >
                <option
                  v-for="(options, optionIndex) in control.options || [{}]"
                  :key="`${control.title}-${index}-${optionIndex}`"
                  :value="options.value || options.label || options"
                >
                  {{ options.label || options }}
                </option>
              </select>
            </template>
            <template v-else-if="control.type === 'boolean'">
              <div class="flex items-center">
                <label :class="$style.switch">
                  <input
                    v-model="proxyModels[control.modelName]"
                    type="checkbox"
                  >
                  <span :class="[$style.slider, $style.round]" />
                </label>
                <span class="ml-2">{{ proxyModels[control.modelName] }}</span>
              </div>
            </template>
            <template v-else>
              <div
                v-for="(options, optionIndex) in control.options || [{}]"
                :key="`${control.title}-${index}-${optionIndex}`"
                class="flex items-center"
              >
                <label class="flex items-center">
                  <span v-if="options.hasOwnProperty('label')" class="pr-2">{{ options.label }}</span>
                  <span v-else-if="typeof options === 'string'" class="pr-2">{{ options }}</span>
                  <input
                    v-if="control.type === 'range'"
                    v-bind="options.bind"
                    v-model="proxyModels[control.modelName]"
                    :type="control.type"
                    :name="`${control.title}-${index}`"
                  >
                  <input
                    v-else
                    v-bind="options.bind"
                    v-model="proxyModels[control.modelName]"
                    :class="control.type === 'text' ? 'border rounded-md' : ''"
                    :value="options.value || options.label || typeof options === 'string' && options"
                    :type="control.type"
                    :name="`${control.title}-${index}`"
                  >
                </label>
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <hr>
  </div>
</template>

<script>
import {
  // eslint-disable-next-line no-unused-vars
  toRefs, computed, ref, unref, reactive,
} from '@vue/composition-api';

/**
{
  title: string;
  type: 'range', 'radio' | 'checkbox' | 'text' | 'select' | 'boolean';
  model: Ref<unknown> | ComputedRef<unknown>;
  options: {
    bind: unknown;
    label: string;
  }[]
}[]

 * */
export default {
  name: 'ExampleStory',
  props: {
    controls: {
      type: Array,
      default: () => ([]),
    },
  },
  setup(props, { emit }) {
    const { controls } = toRefs(props);
    const proxyModels = {};
    controls.value.forEach((control) => {
      proxyModels[control.modelName] = reactive(computed({
        get: () => unref(control.model),
        set: (value) => { emit(`update:${control.modelName}`, value); },
      }));
    });

    return {
      proxyModels: reactive(proxyModels),
    };
  },
};
</script>

<style module>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  @apply bg-gray-300 absolute;
  cursor: pointer;
  inset: 0;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  @apply bg-primary-500;
}

input:checked + .slider:before {
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
