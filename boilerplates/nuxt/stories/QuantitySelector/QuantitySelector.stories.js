
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector.vue';

export default {
  title: 'SFUI Components/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    docs: {
      description: {
        component:
          'The Quantity Selector component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      defaultValue: '1',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '1'
        }
      },
      description: 'Input value'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Native input disabled attribute'
    },
    quantityInStock: {
      control: 'number',
      defaultValue: '5',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '5'
        }
      },
      description: 'Input value'
    },
    minQuantity: {
      control: 'number',
      defaultValue: '1',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '1'
        }
      },
      description: 'Input value'
    },
    size: {
      control: 'radio',
      options: ['base', 'lg'],
      defaultValue: 'base',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'base'
        }
      },
      description: 'Change size of component'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { QuantitySelector },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.value,
      disabledState: this.disabled,
      inStock: this.quantityInStock
    };
  },
  watch: {
    inStock: {
      handler(newVal) {
        if (newVal <= 0) { this.disabledState = true; }
      },
      immediate: true
    }
  },
  template: `
  <div>
    <QuantitySelector 
      v-model="quantity"
      :quantityInStock="quantityInStock"
      :minQuantity="minQuantity"
      :disabled="disabledState"
      :size="size"
    />
    </div>
    `
});

export const Base = Template.bind({});
