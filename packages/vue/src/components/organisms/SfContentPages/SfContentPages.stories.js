import { withKnobs, text } from "@storybook/addon-knobs";
import SfContentPages from "./SfContentPages.vue";
import SfTabs from "../SfTabs/SfTabs.vue";

export default {
  title: "Organisms|ContentPages",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfContentPages, SfTabs },
  props: {
    title: {
      default: text("title", "Help", "Props"),
    },
  },
  data() {
    return {
      activePage: "About us",
      pages: [
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
      ],
    };
  },
  template: `<SfContentPages
      :title="title"
      :active="activePage"
      @click:change="activePage = $event"
    >
      <SfContentPage v-for="page in pages" :key="page.title" :title="page.title">
        <SfTabs v-if="page.tabs" :open-tab="1">
          <SfTab v-for="tab in page.tabs" :key="tab.title" :title="tab.title">{{tab.content}}</SfTab>
        </SfTabs>
        <p v-else :style="{padding: '1rem'}">{{page.content}}</p>
      </SfContentPage>
      </SfContentPages>`,
});

export const WithCategory = () => ({
  components: { SfContentPages, SfTabs },
  props: {
    title: {
      default: text("title", "Help", "Props"),
    },
  },
  data() {
    return {
      activePage: "About us",
      categories: [
        {
          title: "Personal Details",
          pages: [
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
          ],
        },
      ],
    };
  },
  template: `<SfContentPages
        :title="title"
        :active="activePage"
        @click:change="activePage = $event"
    >
      <SfContentCategory v-for="category in categories" :key="category.title" :title="category.title">
        <SfContentPage v-for="page in category.pages" :key="page.title" :title="page.title">
          <SfTabs v-if="page.tabs" :open-tab="1">
            <SfTab v-for="tab in page.tabs" :key="tab.title" :title="tab.title">{{tab.content}}</SfTab>
          </SfTabs>
          <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
        </SfContentPage>
      </SfContentCategory>
    </SfContentPages>`,
});

export const Mixed = () => ({
  components: { SfContentPages, SfTabs },
  props: {
    title: {
      default: text("title", "Help", "Props"),
    },
  },
  data() {
    return {
      activePage: "About us",
      categories: [
        {
          title: "Personal Details",
          pages: [
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
          ],
        },
        {
          pages: [
            {
              title: "Order history",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
            {
              title: "My reviews",
              content:
                "This website ('website') is operated by Luma Inc., which includes Luma stores, and Luma Private Sales.",
            },
          ],
        },
      ],
    };
  },
  template: `<SfContentPages
        :title="title"
        :active="activePage"
        @click:change="activePage = $event"
    >
      <template v-for="category in categories">
        <SfContentCategory  v-if="category.title" :key="category.title" :title="category.title">
          <SfContentPage v-for="page in category.pages" :key="page.title" :title="page.title">
            <SfTabs v-if="page.tabs" :open-tab="1">
              <SfTab v-for="tab in page.tabs" :key="tab.title" :title="tab.title">{{tab.content}}</SfTab>
            </SfTabs>
            <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
          </SfContentPage>
        </SfContentCategory>
        <SfContentPage v-else v-for="page in category.pages" :key="page.title" :title="page.title">
          <SfTabs v-if="page.tabs" open-tab="1">
            <SfTab v-for="tab in page.tabs" :key="tab.title" :title="tab.title">{{tab.content}}</SfTab>
          </SfTabs>
          <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
        </SfContentPage>
      </template>
    </SfContentPages>`,
});

export const WithIcon = () => ({
  components: { SfContentPages, SfTabs },
  props: {
    title: {
      default: text("title", "Help", "Props"),
    },
  },
  data() {
    return {
      activePage: "About us",
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
  },
  template: `<SfContentPages
      :title="title"
      :active="activePage"
      @click:change="activePage = $event"
    >
      <SfContentPage v-for="page in pages" :key="page.title" :title="page.title" :icon="page.icon">
        <SfTabs v-if="page.tabs" :open-tab="1">
          <SfTab v-for="tab in page.tabs" :key="tab.title" :title="tab.title">{{tab.content}}</SfTab>
        </SfTabs>
        <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
      </SfContentPage>
      </SfContentPages>`,
});

export const SlotMenuItem = () => ({
  components: { SfContentPages, SfTabs },
  props: {
    title: {
      default: text("title", "Help", "Props"),
    },
  },
  data() {
    return {
      activePage: "About us",
      pages: [
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
      ],
    };
  },
  template: `<SfContentPages
        :title="title"
        :active="activePage"
        @click:change="activePage = $event"
    >
      <template #menu-item="{ updatePage, page, active }">
        <button @click="updatePage(page.title)">{{page.title}}</button>
      </template>
      <SfContentPage v-for="page in pages" :key="page.title" :title="page.title">
        <SfTabs v-if="page.tabs" :open-tab="1">
          <SfTab v-for="tab in page.tabs" :key="tab.title" :title="tab.title">{{tab.content}}</SfTab>
        </SfTabs>
        <p v-else :style="{padding: '1.25rem 0'}">{{page.content}}}}</p>
      </SfContentPage>
    </SfContentPages>`,
});

SlotMenuItem.story = {
  name: "[slot] menu-item",
};
