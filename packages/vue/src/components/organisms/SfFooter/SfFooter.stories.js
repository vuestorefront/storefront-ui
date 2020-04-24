import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";
import {
  SfFooter,
  SfHeader,
  SfList,
  SfImage,
  SfButton,
  SfMenuItem,
} from "@storefront-ui/vue";
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
    },
    data() {
      return {
        isMobile: false,
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
    computed: {
      itemSpacer() {
        return this.isMobile ? { padding: "24px 32px" } : { padding: "16px 0" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<SfFooter
        :column="column"
        :multiple="multiple"
      >
        <SfFooterColumn v-for="column in columns" :key="column.title" :title="column.title">
          <SfList v-if="column.items">
            <SfListItem v-for="item in column.items" :key="item">
              <SfMenuItem :label="item"/>
            </SfListItem>
          </SfList>
          <div v-else :style="{display: 'flex', ...itemSpacer}">
            <SfImage v-for="picture in column.pictures" :key="picture" width="12" height="12" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" :style="{margin: '0 1.5rem 0 0'}"/>
          </div>
        </SfFooterColumn>
      </SfFooter>`,
  }));
