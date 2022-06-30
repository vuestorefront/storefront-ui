
import AccordionBase from '../../components/Accordion/AccordionBase.vue';

export default {
  title: 'SFUI Components/Accordion',
  component: AccordionBase,
  parameters: {
    docs: {
      description: {
        component:
          'The accordion component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    expanded: {
      control: 'boolean',
      defaultValue: true,
      table: {
        category: 'Props',
        defaultValue: {
          summary: true
        }
      },
      description:
        'Toggling expand accordion state'
    },
    buttonText: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Text of accordion button button'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { AccordionBase },
  props: Object.keys(argTypes),
  data() {
    return {
      opened: this.expanded
    };
  },
  methods: {
    handleExpanded() {
      this.opened = !this.opened;
    }
  },
  template: `
    <AccordionBase
      :expanded="opened"
      :buttonText="buttonText"
      @toggle="handleExpanded"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AccordionBase>
    `
});

export const Base = Template.bind({});

Base.args = {
  buttonText: 'Accordion Header'
};

const LeftChevron = (args, { argTypes }) => ({
  components: { AccordionBase },
  props: Object.keys(argTypes),
  data() {
    return {
      opened: this.expanded
    };
  },
  methods: {
    handleExpanded() {
      this.opened = !this.opened;
    }
  },
  template: `
    <AccordionBase
      :expanded="opened"
      :buttonText="buttonText"
      @toggle="handleExpanded"
    >
      <template #header="{ expanded }">  
        <div class="flex justify-start"> 
          <svg class="w-6 h-6 transition-transform mr-2 fill-gray-500 group-hover:fill-primary-600 group-active:fill-primary-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :class="{'rotate-180': !expanded}">
            <path d="M7.82034 15.0014C7.43065 15.3903 6.79962 15.3899 6.41034 15.0006C6.02077 14.6111 6.02077 13.9794 6.41034 13.5899L10.9979 9.00237C11.3884 8.61184 12.0215 8.61184 12.4121 9.00237L16.9996 13.5899C17.3891 13.9794 17.3891 14.6111 16.9996 15.0006C16.6103 15.3899 15.9793 15.3903 15.5896 15.0014L11.705 11.1253L7.82034 15.0014Z" />
            <path d="M7.82034 15.0014C7.43065 15.3903 6.79962 15.3899 6.41034 15.0006C6.02077 14.6111 6.02077 13.9794 6.41034 13.5899L10.9979 9.00237C11.3884 8.61184 12.0215 8.61184 12.4121 9.00237L16.9996 13.5899C17.3891 13.9794 17.3891 14.6111 16.9996 15.0006C16.6103 15.3899 15.9793 15.3903 15.5896 15.0014L11.705 11.1253L7.82034 15.0014Z" />
          </svg>
        </div>
      </template>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </AccordionBase>
    `
});

export const WithLeftChevron = LeftChevron.bind({});

WithLeftChevron.args = {
  ...Base.args
};

const Multiple = (args, { argTypes }) => ({
  components: { AccordionBase },
  props: Object.keys(argTypes),
  data() {
    return {
      opened: {
        acc1: true,
        acc2: true,
        acc3: true
      },
      buttonText1: 'Accordion Header 1',
      buttonText2: 'Accordion Header 2',
      buttonText3: 'Accordion Header 3'
    };
  },
  methods: {
    handleExpanded() {
      this.opened = !this.opened;
    }
  },
  template: `
    <div>
      <AccordionBase
        :expanded="opened.acc1"
        :buttonText="buttonText1"
        @toggle="opened.acc1 = !opened.acc1"
        class="mb-2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </AccordionBase>
      <AccordionBase
        :expanded="opened.acc2"
        :buttonText="buttonText2"
        @toggle="opened.acc2 = !opened.acc2"
        class="mb-2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </AccordionBase>
      <AccordionBase
        :expanded="opened.acc3"
        :buttonText="buttonText3"
        @toggle="opened.acc3 = !opened.acc3"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </AccordionBase>
    </div>
    `
});

export const MultipleAccordions = Multiple.bind({});
