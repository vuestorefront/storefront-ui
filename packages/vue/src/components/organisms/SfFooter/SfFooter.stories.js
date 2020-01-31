/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import SfFooter from "./SfFooter.vue";

import SfList from "../SfList/SfList.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfFooter, SfList, SfImage, SfMenuItem },
    props: {
      column: {
        default: number("column", 4, {}, "Props")
      },
      multiple: {
        default: boolean("multiple", false, "Props")
      }
    },
    data() {
      return {
        isMobile: false,
        columns: [
          {
            title: "About us",
            items: ["Who we are", "Quality in the details", "Customer Reviews"]
          },
          {
            title: "Departments",
            items: ["Women fashion", "Men fashion", "Kidswear", "Home"]
          },
          {
            title: "Help",
            items: ["Customer service", "Size guide", "Contact us"]
          },
          {
            title: "Payment & delivery",
            items: ["Purchase terms", "Guarantee"]
          },
          {
            title: "Social",
            pictures: ["facebook", "pinterest", "twitter", "youtube"]
          }
        ]
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { padding: "1.25rem 2.5rem" }
          : { padding: "6px 0" };
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        1024;
      window.matchMedia("(max-width: 1024px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      mobileHandler(event) {
        this.isMobile = event.matches;
      }
    },
    template: `<SfFooter
        :column="column"
        :multiple="multiple"
        :style="{maxWidth: '1024px', margin: 'auto'}"
      >
        <SfFooterColumn v-for="column in columns" :key="column.title" :title="column.title" :style="{marginLeft: column.title && 'auto'}">
          <SfList v-if="column.items">
            <SfListItem v-for="item in column.items" :key="item">
              <SfMenuItem :label="item" :style="spacer"/>
            </SfListItem>
          </SfList>
          <div v-else :style="{display: 'flex', ...spacer}">
            <SfImage v-for="picture in column.pictures" :key="picture" width="12" height="12" :src="'/assets/storybook/SfFooter/'+picture+'.svg'" :style="{margin: '0 1.25rem 0 0'}"/>
          </div>
        </SfFooterColumn>
      </SfFooter>`
  }));
