<template>
  <div class="e-page">
    <div class="e-page-component">
      <p>Single Checkbox</p>
      <VsfCheckbox
        v-model="toggle"
        name="custom"
        :label="labelModel"
        :disabled="disabledModel"
        :helpText="helpTextModel"
        :errorText="errorTextModel"
        :invalid="invalidModel"
        :indeterminate="indeterminateModel"
        :required="requiredModel"
        :rightCheckbox="rightCheckboxModel"
      ></VsfCheckbox>
      <div>Toggled: {{ toggle }}</div>
      <br />
      <p>Multiple Checkboxes</p>
      <client-only>
        <VsfCheckbox v-model="checked" name="jack" label="Jack" value="Jack" />
        <VsfCheckbox v-model="checked" name="mike" label="Mike" value="Mike" />
      </client-only>
      <div>Checked: {{ checked }}</div>
    </div>
    <div class="e-page-controls">
      <table>
        <tbody>
          <tr>
            <td>Label</td>
            <td>
              <input v-model="labelModel" type="text" />
            </td>
          </tr>
          <tr>
            <td>Disabled</td>
            <td>
              <label>
                <input v-model="disabledModel" type="checkbox" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Indeterminate</td>
            <td>
              <label>
                <input v-model="indeterminateModel" type="checkbox" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Invalid</td>
            <td>
              <label>
                <input v-model="invalidModel" type="checkbox" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Right Checkbox</td>
            <td>
              <label>
                <input v-model="rightCheckboxModel" type="checkbox" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Required</td>
            <td>
              <label>
                <input v-model="requiredModel" type="checkbox" />
              </label>
            </td>
          </tr>
          <tr>
            <td>Help Text</td>
            <td>
              <input v-model="helpTextModel" type="text" />
            </td>
          </tr>
          <tr>
            <td>Error Text</td>
            <td>
              <input v-model="errorTextModel" type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import VsfCheckbox from '../../output/blocks/VsfCheckbox/VsfCheckbox.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VsfCheckboxExample',
  components: {
    VsfCheckbox,
  },
  // TODO: Replace with Controls component
  data() {
    return {
      toggle: true,
      checked: ['Mike'],
      labelModel: 'Label',
      disabledModel: false,
      invalidModel: false,
      indeterminateModel: false,
      requiredModel: false,
      rightCheckboxModel: false,
      helpTextModel: 'help',
      errorTextModel: 'error',
    };
  },
});
</script>
