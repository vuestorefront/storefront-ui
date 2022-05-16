import SfRadio from '../../components/SfRadio/SfRadio.vue'
import SfRadioRight from '../../components/SfRadio/SfRadioRight.vue'
import SfRadioTile from '../../components/SfRadio/SfRadioTile.vue'
import SfRadioMultiline from '../../components/SfRadio/SfRadioMultiline.vue'
import SfRadioDense from '../../components/SfRadio/SfRadioDense.vue'

export default {
  title: 'SFUI Components/Radio',
  component: SfRadio,
  parameters: {
    docs: {
      description: {
        component:
          'The base radio component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    name: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: 'radio',
      description: 'Radio name'
    },
    value: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: {
          summary: ''
        }
      },
      defaultValue: '',
      description: 'Value selected.'
    },
    selected: {
      control: 'text',
      table: {
        category: 'Props',
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: ''
        }
      },
      defaultValue: '',
      description: 'Value of the selected option'
    },
    required: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Required field.'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Disables radio.'
    },
    invalid: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Shows error message value of radio group when true.'
    }
  }

}

const Template = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selected = value
    }
  },
  computed: {
    isInvalid() {
      return this.selected === ''
    }
  },
  template: `
    <fieldset
      aria-required="true"
      aria-invalid="true"
      aria-describedby="errorMessage"
      role="radiogroup"
      class="flex flex-col"
    >
      <SfRadio
        name="radio-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <SfRadio
        name="radio-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})

export const Common = Template.bind({})

const RadioRight = (args, { argTypes }) => ({
  components: { SfRadioRight },
  props: Object.keys(argTypes),
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selected = value
    }
  },
  computed: {
    isInvalid() {
      return this.selected === ''
    }
  },
  template: `
    <fieldset
      aria-required="true"
      aria-invalid="true"
      aria-describedby="errorMessage"
      role="radiogroup"
      class="flex flex-col"
  >
    <SfRadioRight
      name="radio-right-group-1"
      :invalid="isInvalid"
      value="one"
      :disabled="disabled"   
      :required="required" 
      :selected="selected"
      @change="selectedValue => changeValue(selectedValue)"
    />
    <SfRadioRight
      name="radio-right-group-2"
      value="two"
      :disabled="disabled"   
      :required="required" 
      :selected="selected"
      @change="selectedValue => changeValue(selectedValue)"
    />
    <span
      id="errorMessage"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
      :class="{'hidden': !isInvalid }"
    >Error message</span>
  </fieldset>`
})
export const Right = RadioRight.bind({})

const RadioTile = (args, { argTypes }) => ({
  components: { SfRadioTile },
  props: Object.keys(argTypes),
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selected = value
    }
  },
  computed: {
    isInvalid() {
      return this.selected === ''
    }
  },
  template: `
    <fieldset
      aria-required="true"
      aria-invalid="true"
      aria-describedby="errorMessage"
      role="radiogroup"
      class="flex flex-col"
    >
      <SfRadioTile
        name="radio-tile-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <SfRadioTile
        name="radio-tile-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})
export const Tile = RadioTile.bind({})

const RadioMultiline = (args, { argTypes }) => ({
  components: { SfRadioMultiline },
  props: Object.keys(argTypes),
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selected = value
    }
  },
  computed: {
    isInvalid() {
      return this.selected === ''
    }
  },
  template: `
    <fieldset
      aria-required="true"
      aria-invalid="true"
      aria-describedby="errorMessage"
      role="radiogroup"
      class="flex flex-col"
    >
      <SfRadioMultiline
        name="radio-multiline-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <SfRadioMultiline
        name="radio-multiline-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})

export const Multiline = RadioMultiline .bind({})

const RadioDense = (args, { argTypes }) => ({
  components: { SfRadioDense },
  props: Object.keys(argTypes),
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selected = value
    }
  },
  computed: {
    isInvalid() {
      return this.selected === ''
    }
  },
  template: `
    <fieldset
      aria-required="true"
      aria-invalid="true"
      aria-describedby="errorMessage"
      role="radiogroup"
      class="flex flex-col"
    >
      <SfRadioDense
        name="radio-dense-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <SfRadioDense
        name="radio-dense-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selected"
        @change="selectedValue => changeValue(selectedValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})

export const Dense = RadioDense.bind({})

