import { SfAccordion, SfList, SfMenuItem, SfButton } from "@storefront-ui/vue";
import SfAccordionItem from "./_internal/SfAccordionItem.vue";

const accordions = [
  {
    header: "Clothing",
    items: [
      { label: "All", count: "280" },
      { label: "Skirts", count: "11" },
      { label: "Dresses", count: "32" },
    ],
  },
  {
    header: "Accessories",
    items: [
      { label: "All", count: "80" },
      { label: "Belts", count: "101" },
      { label: "Bag", count: "2" },
    ],
  },
  {
    header: "Shoes",
    items: [
      { label: "All", count: "2" },
      { label: "Trainers", count: "22" },
      { label: "Sandals", count: "55" },
    ],
  },
];

export default {
  title: "Components/Organisms/Accordion",
  component: SfAccordionItem,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "accordion-item-header-justify": {
        value: "space-between",
        control: "text",
      },
      "accordion-item-header-padding": {
        value: "var(--spacer-sm)",
        control: "text",
      },
      "accordion-item-header-color": { value: "", control: "text" },
      "accordion-item-header-border": {
        value:
          "var(--accordion-item-header-border-style, solid) var(--accordion-item-header-border-color, var(--c-light))",
        control: "text",
      },
      "accordion-item-header-border-width": {
        value: "0 0 1px 0",
        control: "text",
      },
      "accordion-item-header-font": { value: "", control: "text" },
      "accordion-item-header-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "accordion-item-header-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "accordion-item-header-font-line-height": {
        value: "1.4",
        control: "text",
      },
      "accordion-item-header-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "accordion-item-content-padding": {
        value: "var(--spacer-base) var(--spacer-sm)",
        control: "text",
      },
      "accordion-item-content-color": {
        value: "var(--c-text)",
        control: "text",
      },
      "accordion-item-content-border": {
        value:
          "var(--accordion-item-content-border-style, solid) var(--accordion-item-content-border-color, var(--c-light))",
        control: "text",
      },
      "accordion-item-content-border-width": {
        value: "1px 0",
        control: "text",
      },
      "accordion-item-content-font": { value: "", control: "text" },
      "accordion-item-content-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "accordion-item-content-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "accordion-item-content-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "accordion-item-content-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "accordion-item-chevron-display": { value: "none", control: "text" },
      "chevron-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Accordion component. Can be set as one or multiple opened, with or without icon. Constructed from main component - SfAccordion and internal components - SfAccordionItem.",
      },
    },
  },
  argTypes: {
    open: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Allows to open multiple accordion items if set to `true`",
    },
    transition: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "sf-expand",
        },
      },
      defaultValue: "",
      description:
        "Overlay transition effect. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    showChevron: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: "Show chevron icon",
    },
    firstOpen: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description:
        "Opens the first accordion item if set to 'true'. @deprecated will be removed. Use open prop instead",
    },
    "click:open-header": {
      action: "Open header",
      table: { category: "Events" },
      description:
        "This event can be used on SfAccordion when there is a need to open SfAccordionItems programmatically. This example can be found below in a story called `Control With Buttons`",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAccordion, SfList, SfMenuItem },
  props: Object.keys(argTypes),
  data() {
    return {
      accordions,
    };
  },
  template: `
  <SfAccordion 
    :open="open" 
    :multiple="multiple"
    :show-chevron="showChevron"
    :transition="transition"
    :first-open="firstOpen">
    <SfAccordionItem 
      v-for="accordion in accordions" 
      :key="accordion.header" 
      :header="accordion.header"
    >
      <SfList>
        <SfListItem
          v-for="item in accordion.items"
          :key="item.label"
          >
          <SfMenuItem 
            :label="item.label" 
            :count="item.count"
          />
        </SfListItem>
      </SfList>
    </SfAccordionItem>
  </SfAccordion>`,
});

export const Common = Template.bind({});
Common.args = {};

export const OpenOne = Template.bind({});
OpenOne.args = {
  ...Common.args,
  open: "Accessories",
};

export const OpenMultiple = Template.bind({
  argTypes: {
    open: {
      control: "array",
    },
  },
});

OpenMultiple.args = {
  open: ["Clothing", "Shoes"],
};

export const AllOpen = Template.bind({});
AllOpen.args = {
  ...Common.args,
  open: "all",
};

export const HideChevron = Template.bind({});
HideChevron.args = {
  ...Common.args,
  showChevron: false,
};

export const controlWithButtons = (args, { argTypes }) => ({
  components: { SfAccordion, SfList, SfMenuItem, SfButton },
  props: Object.keys(argTypes),
  data() {
    return {
      accordions,
      activeHeader: "Shoes",
    };
  },
  methods: {
    change(headerName) {
      this.activeHeader = headerName;
    },
  },
  template: `
  <div>
    <SfButton style="display: inline; margin: var(--spacer-xs)" @click="change('Clothing')">open Clothing</SfButton>
    <SfButton style="display: inline; margin: var(--spacer-xs)" @click="change('Accessories')">open Accessories</SfButton>
    <SfButton style="display: inline; margin: var(--spacer-xs)" @click="change('Shoes')">open Shoes</SfButton>
    <SfAccordion 
      :open="activeHeader" 
      :multiple="multiple"
      :show-chevron="showChevron"
      :transition="transition"
      :first-open="firstOpen"
      @click:open-header="change('')"
    >
      <SfAccordionItem 
        v-for="accordion in accordions" 
        :key="accordion.header" 
        :header="accordion.header"
      >
        <SfList>
          <SfListItem
            v-for="item in accordion.items"
            :key="item.label"
          >
            <SfMenuItem
              :label="item.label" 
              :count="item.count"
            />
          </SfListItem>
        </SfList>
      </SfAccordionItem>
    </SfAccordion>
  </div>`,
});

export const UseHeaderSlot = (args, { argTypes }) => ({
  components: { SfAccordion, SfList, SfMenuItem },
  props: Object.keys(argTypes),
  data() {
    return {
      accordions,
    };
  },
  template: `
  <SfAccordion 
    :open="open" 
    :multiple="multiple"
    :show-chevron="showChevron"
    :transition="transition"
    :first-open="firstOpen">
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
          >
          <SfMenuItem 
            :label="item.label" 
            :count="item.count"
          />
        </SfListItem>
      </SfList>
    </SfAccordionItem>
  </SfAccordion>`,
});
UseHeaderSlot.args = { ...Common.args };
UseHeaderSlot.parameters = {
  docs: {
    source: {
      code: `
<template>
  <SfAccordion transition="sf-expand" showChevron>
    <SfAccordionItem  header="Clothing">
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>            
    </SfAccordionItem>
    <SfAccordionItem  header="Accessories">
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>            
    </SfAccordionItem>
    <SfAccordionItem  header="Shoes">
      <template #header="{header, isOpen, accordionClick, showChevron}">
        <div @click="accordionClick" :style="{cursor: 'pointer'}">CUSTOM HEADER</div>
      </template>            
    </SfAccordionItem>
  </SfAccordion>
</template>`,
    },
  },
};
