<template>
  <client-only>
    <div class="controls">
      <div class="heading-wrapper">
        <h1 class="heading">
          Controls
        </h1>
      </div>
      <table aria-label="Controls table">
        <thead>
          <tr>
            <th>PropName</th>
            <th>Value</th>
            <th>Type</th>
            <th>DefaultValue</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(control, index) in controls" :key="index" class="props">
            <td :class="[control.type === 'text' && 'align-middle']">
              {{ control.title }}
            </td>
            <td class="value" >
              <template v-if="control.type === 'select'">
                <select
                  v-model="proxyModels[control.modelName]"
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
                <div class="switch-wrapper">
                  <label class="switch">
                    <input
                      v-model="proxyModels[control.modelName]"
                      type="checkbox"
                    >
                    <span class="slider" />
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
                    <textarea
                      v-if="control.type === 'json'"
                      rows="10"
                      v-bind="options.bind"
                      :value="JSON.stringify(proxyModels[control.modelName], undefined, 2)"
                      @input="proxyModels[control.modelName] = JSON.parse($event.target.value)"
                      :name="`${control.title}-${index}`"
                    >
                    </textarea>
                    <input
                      v-else-if="control.type === 'range'"
                      v-bind="options.bind"
                      v-model="proxyModels[control.modelName]"
                      :type="control.type"
                      :name="`${control.title}-${index}`"
                    />
                    <input
                      v-else-if="control.type === 'text'"
                      v-bind="options.bind"
                      v-model="proxyModels[control.modelName]"
                      class="border rounded-md"
                      :type="control.type"
                      :name="`${control.title}-${index}`"
                    />
                    <input
                      v-else
                      v-bind="options.bind"
                      v-model="proxyModels[control.modelName]"
                      :type="control.type"
                      :name="`${control.title}-${index}`"
                    />
                    <span v-if="options.hasOwnProperty('label')" class="pl-2">{{ options.label }}</span>
                    <span v-else-if="typeof options === 'string'" class="pl-2">{{ options }}</span>
                  </label>
                </div>
              </template>
            </td>
            <td class="propType"><span>{{control.propType}}</span></td>
            <td class="propDefaultValue">{{control.propDefaultValue}}</td>
            <td class="required">{{control?.isRequired?.toString()}}</td>
            <td class="description">{{control.description}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </client-only>
</template>

<script lang="ts">
import { toRefs, computed, reactive, Ref, defineComponent, PropType } from 'vue';

type RefValueUnknown = Ref<unknown>;
type Controls = {
  title: string;
  type: 'range' | 'radio' | 'checkbox' | 'text' | 'select' | 'boolean' | 'json';
  modelName: string;
  model?: RefValueUnknown,
  description?: string;
  propDefaultValue?: string | number | boolean;
  propType?: string;
  isRequired?: boolean;
  options?: ({
    bind?: unknown;
    label?: string;
    value?: string | undefined
  } | string)[]
}[];
export function prepareControls<T extends Record<string, RefValueUnknown>>(
  controlsObject: Controls,
  models: T
) {
  const on: Record<string, (e: string | number | boolean | []) => void> = {};
  const controls = controlsObject.map((control) => {
    control.isRequired = false;
    on[`onUpdate:${control.modelName}`] = (e: string | number | boolean | []) => {
      models[control.modelName].value = e;
    };
    return { ...control, model: models[control.modelName] };
  });

  return {
    controlsAttrs: {
      controls,
      ...on
    },
    ...models,
  };
};

export default defineComponent({
  name: 'Controls',
  props: {
    controls: {
      type: Array as PropType<Controls>,
      default: () => ([]),
    },
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const { controls } = toRefs(props);
    const proxyModels = reactive<Record<string, Ref<unknown>>>({});
    controls.value.forEach((control) => {
      proxyModels[control.modelName] = reactive(computed({
        get: () => control?.model?.value,
        set: (value) => emit(`update:${control.modelName}`, value),
      }));
    });

    return {
      proxyModels,
    };
  },
});
</script>
