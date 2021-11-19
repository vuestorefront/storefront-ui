import { icons } from "@storefront-ui/shared/icons/icons";
import { SfContentPages, SfTabs } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

const pages = [
  {
    title: "About us",
    tabs: [
      {
        title: "Security",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
      {
        title: "Privacy Policy",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
      {
        title: "Additional Information",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
    ],
  },
  {
    title: "Customer service",
    tabs: [
      {
        title: "Size guide",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
      {
        title: "Where's my order?",
        content:
          "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
      },
    ],
  },
  {
    title: "Store locator",
    content:
      "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
  },
];
export default {
  title: "Components/Organisms/ContentPages",
  component: SfContentPages,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "content-pages-content-page-font": { value: "", control: "text" },
      "content-pages-content-page-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "content-pages-content-page-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "content-pages-content-page-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "content-pages-content-page-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "content-pages-height": { value: "100vh", control: "text" },
      "content-pages-section-margin": {
        value: "var(--spacer-base) 0",
        control: "text",
      },
      "content-pages-transition": {
        value: "transform 150ms ease-in-out",
        control: "text",
      },
      "content-pages-section-active-transform": {
        value: "translate3d(-100%, 0, 0)",
        control: "text",
      },
      "content-pages-sidebar-flex": { value: "0 0 100%", control: "text" },
      "content-pages-sidebar-padding": { value: "", control: "text" },
      "content-pages-sidebar-background": { value: "", control: "text" },
      "content-pages-content-flex": { value: "0 0 100%", control: "text" },
      "content-pages-content-padding": { value: "", control: "text" },
      "content-pages-sidebar-title-margin": {
        value: "0 0 var(--spacer-xl) 0",
        control: "text",
      },
      "content-pages-sidebar-title-font": { value: "", control: "text" },
      "content-pages-sidebar-title-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "content-pages-sidebar-title-font-size": {
        value: "var(--h3-font-size)",
        control: "text",
      },
      "content-pages-sidebar-title-font-line-height": {
        value: "1.4",
        control: "text",
      },
      "content-pages-sidebar-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "content-pages-sidebar-category-title-margin": {
        value: "var(--spacer-sm) 0",
        control: "text",
      },
      "content-pages-sidebar-category-title-font": {
        value: "",
        control: "text",
      },
      "content-pages-sidebar-category-title-font-weight": {
        value: "var(--font-weight--bold)",
        control: "text",
      },
      "content-pages-sidebar-category-title-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "content-pages-sidebar-category-title-font-line-height": {
        value: "1.2",
        control: "text",
      },
      "content-pages-sidebar-category-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "list-item-padding": {
        value: "var(--spacer-sm) var(--spacer-sm) var(--spacer-sm)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-border-width": {
        value: "0 0 1px 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-margin": {
        value: "var(--spacer-base) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-border": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The content pages for static content. Built from main component - SfContentPages and internal components - SfContentCategory and SfContentPage.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Pages title.",
    },
    active: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Active page.",
    },
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props for SfContentPage component",
        type: {
          summary: ["string", "array"],
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Sets icon type. Icon SVG path(s). It can be single SVG path(string) or array of SVG paths or icon name from our icons list(such as 'added_to_cart`)",
    },
    title: {
      control: "text",
      table: {
        category: "Props for SfContentCategory component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Sets category title.",
    },
    pages: {
      control: "array",
      defaultValue: pages,
      description: "Pages data (only for testing purposes).",
    },
    "click:change": { action: "Page changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
  <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
  </SfContentPage>
  </SfContentPages>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Help",
  pages,
};

export const HasActive = Template.bind({});
HasActive.args = {
  ...Common.args,
  active: "About us",
};

export const WithCategories = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
  <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
  </SfContentPage>
  </SfContentPages>`,
});
WithCategories.args = {
  ...Common.args,
  categories: [{ pages, title: "Personal Details" }],
};

export const WithCategoryIcon = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
    <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title" :icon="page.icon">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
    </SfContentPage>
  </SfContentPages>`,
});
WithCategoryIcon.args = {
  ...Common.args,
  pages: [
    {
      title: "About us",
      icon: "clock",
      tabs: [
        {
          title: "Security",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
        {
          title: "Privacy Policy",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
        {
          title: "Additional Information",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
      ],
    },
    {
      title: "Customer service",
      icon: "heart",
      tabs: [
        {
          title: "Size guide",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
        {
          title: "Where's my order?",
          content:
            "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
        },
      ],
    },
    {
      title: "Store locator",
      icon: "home",
      content:
        "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
    },
  ],
};

export const UseMenuItemSlot = (args, { argTypes }) => ({
  components: { SfContentPages, SfTabs },
  props: Object.keys(argTypes),
  template: `
  <SfContentPages
    :title="title"
    :active="active"
    @click:change="(active) => { this['click:change'](active); this.active = active }"
  >
  <template #menu-item="{ updatePage, page, active }">
    <button @click="updatePage(page.title)">{{page.title}}</button>
  </template>
  <SfContentPage v-for="(page, key) in pages" :key="page.title+key" :title="page.title">
    <SfTabs v-if="page.tabs" :open-tab="1">
      <SfTab v-for="(tab, key) in page.tabs" :key="tab.title+key" :title="tab.title">{{tab.content}}</SfTab>
    </SfTabs>
    <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
  </SfContentPage>
  </SfContentPages>`,
});
UseMenuItemSlot.args = { ...Common.args };
