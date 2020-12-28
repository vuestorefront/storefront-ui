import {
  SfFooter,
  SfHeader,
  SfList,
  SfImage,
  SfButton,
  SfMenuItem,
} from "@storefront-ui/vue";

export default {
  title: "Organisms/Footer",
  component: SfFooter,
  argTypes: {
    open: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    column: {
      control: "number",
      defaultValue: 4,
      table: {
        category: "Props",
      },
      description: "Number of columns in footer",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SfFooter,
    SfHeader,
    SfList,
    SfImage,
    SfButton,
    SfMenuItem,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
        {
          title: "Social",
          pictures: ["facebook", "pinterest", "twitter", "youtube"],
        },
      ],
    };
  },
  template: `
    <SfFooter
      :column="column"
      :multiple="multiple"
      :open="open"
      class="sb-footer"
    >
      <SfFooterColumn v-for="column in columns" :key="column.title" :title="column.title">        
        <SfList v-if="column.items">
          <SfListItem v-for="item in column.items" :key="item">
            <SfMenuItem :label="item"/>
          </SfListItem>
        </SfList>
        <div v-else class="sb-footer__social">
          <SfImage v-for="picture in column.pictures" :key="picture" width="12" height="12" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" class="sb-social-icon"/>
        </div>
      </SfFooterColumn>
    </SfFooter>`,
});

export const Common = Template.bind({});
Common.args = {
  open: ["About us", "Help", "Social"],
};
