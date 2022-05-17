import RadioBase from '../../components/Radio/RadioBase.vue'
import RadioRight from '../../components/Radio/RadioRight.vue'
import RadioTile from '../../components/Radio/RadioTile.vue'
import RadioMultiline from '../../components/Radio/RadioMultiline.vue'
import RadioDense from '../../components/Radio/RadioDense.vue'

export default {
  title: 'SFUI Components/Radio',
  component: RadioBase,
  parameters: {
    docs: {
      description: {
        component:
          'The base radio component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: 'radio-1',
      description: 'Radio identifier'
    },
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
      defaultValue: true,
      description: 'Shows error message value of radio group when true.'
    }
  }

}

const Template = (args, { argTypes }) => ({
  components: { RadioBase },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selectedValue = value
    }
  },
  computed: {
    isInvalid() {
      return this.selectedValue === ''
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
      <RadioBase
        id="radio-1"
        name="radio-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <RadioBase
        id="radio-2"
        name="radio-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})

export const Common = Template.bind({})

const Radio_Right = (args, { argTypes }) => ({
  components: { RadioRight },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selectedValue = value
    }
  },
  computed: {
    isInvalid() {
      return this.selectedValue === ''
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
    <RadioRight
      id="radio-3"
      name="radio-right-group-1"
      :invalid="isInvalid"
      value="one"
      :disabled="disabled"   
      :required="required" 
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <RadioRight
      id="radio-4"
      name="radio-right-group-2"
      value="two"
      :disabled="disabled"   
      :required="required" 
      :selected="selectedValue"
      @change="newValue => changeValue(newValue)"
    />
    <span
      id="errorMessage"
      class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
      :class="{'hidden': !isInvalid }"
    >Error message</span>
  </fieldset>`
})
export const Right = Radio_Right.bind({})

const Radio_Tile = (args, { argTypes }) => ({
  components: { RadioTile },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selectedValue = value
    }
  },
  computed: {
    isInvalid() {
      return this.selectedValue === ''
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
      <RadioTile
        id="radio-5"
        name="radio-tile-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <RadioTile
        id="radio-6"
        name="radio-tile-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})
export const Tile = Radio_Tile.bind({})

const Radio_Multiline = (args, { argTypes }) => ({
  components: { RadioMultiline },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selectedValue = value
    }
  },
  computed: {
    isInvalid() {
      return this.selectedValue === ''
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
      <RadioMultiline
        id="radio-7"
        name="radio-multiline-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <RadioMultiline
        id="radio-8"
        name="radio-multiline-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})

export const Multiline = Radio_Multiline .bind({})

const Radio_Dense = (args, { argTypes }) => ({
  components: { RadioDense },
  props: Object.keys(argTypes),
  data() {
    return {
      selectedValue: ''
    }
  },
  methods: {
    changeValue(value) {
      this.selectedValue = value
    }
  },
  computed: {
    isInvalid() {
      return this.selectedValue === ''
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
      <RadioDense
        id="radio-9"
        name="radio-dense-group-1"
        :invalid="isInvalid"
        value="one"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <RadioDense
        id="radio-10"
        name="radio-dense-group-2"
        value="two"
        :disabled="disabled"   
        :required="required" 
        :selected="selectedValue"
        @change="newValue => changeValue(newValue)"
      />
      <span
        id="errorMessage"
        class="block col-span-2 mt-1 text-sm font-medium text-negative-600 font-body"
        :class="{'hidden': !isInvalid }"
      >Error message</span>
  </fieldset>`
})

export const Dense = Radio_Dense.bind({})

