import { SfAccordion, SfList, SfMenuItem } from "@storefront-ui/vue";

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
  component: SfAccordion,
  argTypes: {
    open: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description:
        "Opens an accordion item based on title. If 'all' string is passed then all items will be open by default.",
    },
    multiple: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      description: "Allows to open multiple accordion items if set to `true`",
    },
    transition: {
      control: "string",
      table: {
        category: "Props",
        defaultValue: {
          summary: "sf-expand",
        },
      },
    },
    showChevron: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      description: "Show chevron icon",
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
    :transition="transition">
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
