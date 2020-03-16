/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import SfAccordion from "./SfAccordion.vue";

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

storiesOf("Organisms|Accordion", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfAccordion, SfList, SfMenuItem },
    props: {
      firstOpen: {
        default: boolean("firstOpen", true, "Props")
      },
      multiple: {
        default: boolean("multiple", false, "Props")
      },
      showChevron: {
        default: boolean("showChevron", false, "Props")
      },
      transition: {
        default: text("transition", "fade", "Props")
      }
    },
    data() {
      return {
        accordions: [
          {
            header: "Clothing",
            items: [
              { label: "All", count: "280" },
              { label: "Skirts", count: "11" },
              { label: "Dresses", count: "32" }
            ]
          },
          {
            header: "Accessories",
            items: [
              { label: "All", count: "80" },
              { label: "Belts", count: "101" },
              { label: "Bag", count: "2" }
            ]
          },
          {
            header: "Shoes",
            items: [
              { label: "All", count: "2" },
              { label: "Trainers", count: "22" },
              { label: "Sandals", count: "55" }
            ]
          }
        ]
      };
    },
    template: `<SfAccordion 
        :first-open="firstOpen" 
        :multiple="multiple"
        :show-chevron="showChevron"
        :transition="transition">
      <SfAccordionItem 
        v-for="accordion in accordions" 
        :key="accordion.header" 
        :header="accordion.header"
      >
        <SfList>
          <SfListItem
            v-for="item in accordion.items"
            :key="item.label"
            :style="{padding: '1.25rem 2rem 1.25rem 2rem'}">
            <SfMenuItem 
              :label="item.label" 
              :count="item.count"
            />
          </SfListItem>
        </SfList>
      </SfAccordionItem>
      </SfAccordion>`
  }))
  .add("[slot] header", () => ({
    components: { SfAccordion, SfList, SfMenuItem },
    props: {
      firstOpen: {
        default: boolean("firstOpen", true, "Props")
      },
      multiple: {
        default: boolean("multiple", false, "Props")
      },
      showChevron: {
        default: boolean("showChevron", false, "Props")
      },
      transition: {
        default: text("transition", "fade", "Props")
      }
    },
    data() {
      return {
        accordions: [
          {
            header: "Clothing",
            items: [
              { label: "All", count: "280" },
              { label: "Skirts", count: "11" },
              { label: "Dresses", count: "32" }
            ]
          },
          {
            header: "Accessories",
            items: [
              { label: "All", count: "80" },
              { label: "Belts", count: "101" },
              { label: "Bag", count: "2" }
            ]
          },
          {
            header: "Shoes",
            items: [
              { label: "All", count: "2" },
              { label: "Trainers", count: "22" },
              { label: "Sandals", count: "55" }
            ]
          }
        ]
      };
    },
    template: `<SfAccordion
        :first-open="firstOpen"
        :multiple="multiple"
        :show-chevron="showChevron"
        :transition="transition"
        :style="{maxWidth: '186px', padding: '1rem'}">
      <SfAccordionItem
          v-for="accordion in accordions"
          :key="accordion.header"
          :header="accordion.header"
      >
        <template #header="{header, isOpen, accordionClick, showChevron}">
          <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
        </template>
        <SfList>
          <SfListItem
              v-for="item in accordion.items"
              :key="item.label"
              :style="{margin: '10px 0'}">
            <SfMenuItem
                :label="item.label"
                :count="item.count"
            />
          </SfListItem>
        </SfList>
      </SfAccordionItem>
    </SfAccordion>`
  }));
