import { storiesOf } from "@storybook/vue";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import SfFooter from "./SfFooter.vue";
import SfList from "../SfList/SfList.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfFooter, SfList, SfMenuItem, SfImage },
    props: {
      column: {
        default: number("column (prop)", 4)
      },
      multiple: {
        default: boolean("multiple (prop)", true)
      }
    },
    data() {
      return {
        aboutUs: ["Who we are", "Quality in the details", "Customer Reviews"],
        departments: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        help: ["Customer service", "Size guide", "Contact us"],
        paymentsDelivery: ["Purchase terms", "Guarantee"],
        social: ["facebook", "pinterest", "twitter", "youtube"],
        isMobile: false,
        desktopMin: 1024,
        opened: []
      };
    },
    computed: {
      style() {
        return this.isMobile
          ? { padding: "1.25rem 2.5rem" }
          : { padding: "6px 0" };
      }
    },
    template: `<div style="margin: -20px;">
      <SfFooter 
        v-model="opened" 
        :column="column" 
        :multiple="multiple" 
        style="max-width: 64rem; margin-left: auto; margin-right: auto"
      >  
        <SfFooterColumn title="About us">
          <SfList>
            <SfListItem 
              v-for="item in aboutUs" 
              :key="item"
            >
              <SfMenuItem 
                :style="style" 
                :label="item"
              />
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Departments">
          <SfList>
            <SfListItem 
              v-for="item in departments" 
              :key="item"
            >
              <SfMenuItem 
                :style="style" 
                :label="item"
              />
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Help">
          <SfList>
            <SfListItem 
              v-for="item in help" 
              :key="item"
            >
              <SfMenuItem 
                :style="style" 
                :label="item"
              />
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Payment & delivery">
          <SfList>
            <SfListItem 
              v-for="item in paymentsDelivery" 
              :key="item"
            >
              <SfMenuItem 
                :style="style" 
                :label="item"
              />
            </SfListItem>
          </SfList>
        </SfFooterColumn>
        <SfFooterColumn title="Social" style="margin-left: auto">
          <div :style="style">
            <img 
              v-for="item in social" 
              :src="'/assets/storybook/footer/'+item+'.svg'" 
              style="height: 0.75rem; margin-right: 1.25rem"
            />
          </div>
        </SfFooterColumn>
      </SfFooter>
    </div>`,
    methods: {
      isMobileHandler(e) {
        this.isMobile = e.matches;
      }
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
      window
        .matchMedia("(max-width: 1024px)")
        .addListener(this.isMobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1024px)")
        .removeListener(this.isMobileHandler);
    }
  }));
