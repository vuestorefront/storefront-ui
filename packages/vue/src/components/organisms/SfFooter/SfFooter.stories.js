import "./SfFooter.stories.scss";
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean, object } from "@storybook/addon-knobs";
import {
  SfFooter,
  SfHeader,
  SfList,
  SfImage,
  SfButton,
  SfMenuItem,
} from "@storefront-ui/vue";
export default {
  title: "Molecules/AddressPicker",
  component: SfAddressPicker,
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: 0,
    },
    current: {
      control: "number",
      defaultValue: 0,
      table: {
        category: "Props",
      },
    },
    input: { action: "Address picked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddressPicker },
  props: Object.keys(argTypes),
  template: `<SfBar
  :title="title"
  :back="back"
  :close="close"
/>`,
});

export const Common = Template.bind({});
Common.args = {};
storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfFooter,
      SfHeader,
      SfList,
      SfImage,
      SfButton,
      SfMenuItem,
    },
    props: {
      column: {
        default: number("column", 4, {}, "Props"),
      },
      multiple: {
        default: boolean("multiple", false, "Props"),
      },
      open: {
        default: object("open", ["About us", "Help", "Social"], "Props"),
      },
    },
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
    template: `<SfFooter
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
  }));
