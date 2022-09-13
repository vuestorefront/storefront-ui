<template>
  <div class="py-2">
    <label
      :class="
        _classStringToObject(
          classStringFromArray([
            'flex w-full items-center gap-2',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            reverse ? 'flex-row-reverse justify-between' : 'flex-row',
          ])
        )
      "
    >
      <span class="p-1">
        <input
          v-model="vueProxyValue"
          type="checkbox"
          ref="inputRef"
          :class="_classStringToObject(inputClasses)"
          :disabled="disabled"
          :required="required"
          :indeterminate="indeterminate"
          :invalid="invalid"
          :checked="checked"
          @input="onChangeHandler($event)"
          :value="value"
        />
      </span>
      <span
        :class="
          _classStringToObject(
            classStringFromArray([
              'text-gray-900 font-body text-base',
              disabled && 'text-opacity-40',
              required && `after:content-['*']`,
            ])
          )
        "
      >
        {{ label }}
      </span>
    </label>
    <div
      :class="
        _classStringToObject(classStringFromArray([reverse ? 'ml-0' : 'ml-8']))
      "
    >
      <div
        v-if="invalid && errorText"
        :class="
          _classStringToObject(
            classStringFromArray([
              'mt-0.5 text-sm font-medium font-body',
              disabled ? 'text-gray-500/50' : 'text-negative-600',
            ])
          )
        "
      >
        {{ errorText }}
      </div>

      <div
        v-if="helpText"
        :class="
          _classStringToObject(
            classStringFromArray([
              'mt-0.5 text-xs font-body text-gray-500',
              disabled && 'text-opacity-50',
            ])
          )
        "
      >
        {{ helpText }}
      </div>
    </div>

    <div
      v-if="required && requiredText"
      :class="
        _classStringToObject(
          classStringFromArray([
            'mt-4 text-sm text-gray-500 font-body',
            disabled && 'text-opacity-50',
          ])
        )
      "
    >
      {{ requiredText }}
    </div>
  </div>
</template>

<script>
import { classStringFromArray } from "../../functions/domUtils";

export default {
  name: "vsf-checkbox",

  props: [
    "disabled",
    "invalid",
    "className",
    "onChange",
    "modelValue",
    "indeterminate",
    "reverse",
    "required",
    "checked",
    "value",
    "label",
    "errorText",
    "helpText",
    "requiredText",
  ],

  data: () => ({ classStringFromArray }),

  watch: {
    onUpdateHook0() {
      /* IF-react */
      this.$refs.inputRef.indeterminate = Boolean(this.indeterminate);
      /* ENDIF-react */
    },
  },

  computed: {
    inputClasses() {
      return classStringFromArray([
        "peer flex self-center w-4 h-4 border-2 rounded-sm appearance-none cursor-pointer disabled:cursor-not-allowed outline-violet",
        "text-gray-500",
        "hover:checked:text-primary-600 active:checked:text-primary-700 checked:text-primary-500 checked:!border-transparent ",
        "checked:bg-checked-checkbox-current border-current",
        "indeterminate:bg-indeterminate-checkbox-current",
        "indeterminate:text-primary-500",
        this.disabled
          ? "disabled:!text-[#b8b8bc]"
          : this.invalid
          ? "border-negative-500 hover:border-negative-600 active:border-negative-700"
          : "hover:text-primary-600 active:text-primary-700",
        this.className,
      ]);
    },
    vueProxyValue() {
      return {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
        },
      };
    },
    onUpdateHook0() {
      return {
        0: this.indeterminate,
      };
    },
  },

  methods: {
    onChangeHandler(event) {
      this.onChange && this.onChange(event);
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
