// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import SfCheckbox from "./SfCheckbox.vue";

const defaultData = {
  components: { SfCheckbox },
  data: () => {
    return {
      status: false
    };
  },
  methods: {
    onChange: action("Option changed")
  }
};

storiesOf("Checkbox", module)
  .addParameters({ info: true })
  .add("Basic", () => ({
    ...defaultData,
    template: `
      <sf-checkbox
        id="sf-checkbox-default"
        name="sf-checkbox-default"
        v-model="status"
        @input="onChange"
      />
    `
  }))
  .add("With label", () => ({
    ...defaultData,
    template: `
      <sf-checkbox
        id="sf-checkbox-with-label"
        name="sf-checkbox-with-label"
        v-model="status"
        @input="onChange"
      >
        Checkbox label example
      </sf-checkbox>
    `
  }))
  .add("With inline status", () => ({
    ...defaultData,
    template: `
      <sf-checkbox
        id="sf-checkbox-with-inline-status"
        name="sf-checkbox-with-inline-status"
        v-model="status"
        @input="onChange"
      >
        Am i checked: {{status}}
      </sf-checkbox>
    `
  }))
  .add("Slots", () => ({
    ...defaultData,
    template: `
      <sf-checkbox
        id="sf-checkbox-slots"
        name="sf-checkbox-slots"
        v-model="status"
        @input="onChange"
      >
        <template #label>
          <label for="sf-checkbox-slots" class="sf-checkbox__label">
            <span class="sf-checkbox__icon">
              <img
                class="sf-checkbox__icon-svg"
                src="/assets/check.svg"
                alt="Checkbox Icon"
              />
            </span>
            <img src="https://via.placeholder.com/350x60?text=Checkbox+Content+Image" alt="placeholder image" style="display: block;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta ea fugiat maiores non, nulla praesentium similique voluptatum! Aperiam asperiores dolores eius eum impedit minima necessitatibus numquam saepe ullam veritatis!
          </label>
        </template>
      </sf-checkbox>
    `
  }));
