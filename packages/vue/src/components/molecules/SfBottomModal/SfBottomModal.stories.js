import {
  SfBottomModal,
  SfButton,
  SfImage,
  SfList,
  SfCharacteristic,
} from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/BottomModal",
  component: SfBottomModal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "300px",
      description: {
        component: "The modal component displaying at the bottom of the page.",
      },
    },
  },
  argTypes: {
    transition: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description:
        "Transition effect on opening modal. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    title: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Bottom Modal title",
    },
    content: {
      control: "text",
      description:
        "Fill to see the content (for testing purposes). For development use default slot, described below, to change the content.",
    },
    isOpen: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Bottom Modal is open",
    },
    "click:close": {
      action: "Close button clicked!",
      table: { category: "Events" },
    },
  },
  args: {
    isOpen: true,
    title: "Title",
    transition: "sf-fade",
    content: "Your content",
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBottomModal },
  props: Object.keys(argTypes),
  template: `
  <SfBottomModal
  :transition="transition"
  :is-open="isOpen"
  :title="title"  
  @click:close="this['click:close']"> 
      {{content}}
  </SfBottomModal>`,
});

export const Common = Template.bind({});

export const Example = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    SfBottomModal,
    SfButton,
    SfImage,
    SfList,
    SfCharacteristic,
  },
  data() {
    return {
      isMobile: false,
      open: this.isOpen,
      items: [
        { country: "Poland", language: "Polish" },
        { country: "Poland", language: "Polish" },
        { country: "Poland", language: "Polish" },
      ],
    };
  },
  computed: {
    customStyleForContent() {
      return this.isMobile ? {} : { display: "flex" };
    },
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <= 1023;
    window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
  },
  beforeDestroy() {
    window.matchMedia("(max-width: 1023px)").removeListener(this.mobileHandler);
  },
  methods: {
    mobileHandler(event) {
      this.isMobile = event.matches;
    },
  },
  template: `<div>
    <SfButton :style="{'background': 'transparent', padding: 0, '--button-box-shadow': 'none'}" @click="open = !open">
      <SfImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM2SURBVDiNrZT/S9tHGMdflyZmjTbYsMxKsTqduBBT42wbNc32wZHqEseE1uovVYq0c6BI9z8Mxn4pusHcRlgs+6FFGTqNtE0n7fqFBpv1g5lzbkS3iWzSoStmIOaT3H4Y6ZouFNb2gePu3sf7xfPcHY9QFEVPjqhzHn0nMrt4oKjI0rW2tgHA7t0F/LmxOVJoyY9ubkY+zuXTPSpomr1FSzrub22nhoTQde0ptgBgMOgpLS3ClL+zu3Rf8ZCWdNwPBr9ofiyw6IWmCZ3YMVnteNG0tPQbNTXl/LDwKwB2eylzsWUqK/eiqnEAk9lsngqHw+M5galk9YTVavZJCd/FlqmqKkFV49hs+zAaDahqnHqXDVWN43RWsGuXicuHjhCqavAPrCQmMhx9pswzZ9p9g4NfcvDQy6RTKaLRRXp6fAQC09jtZeTl6bl1a55jx15lbOwbACpOnSA/bweAb9TvbWk/3XNRD+B7o+HC2bNjuN3VrK7+werqPTo6mwgEpmlstLO+vomqxuntfZPh4Uk8HgdbW9tUnDqB2WzKJHceKBSexr5+KcTQ6bdb+fSTKcrK9lBeXszMzF26uo5w7txlrNZCapwVXAlHOd6hMDp6DZmW9K3N8lxae3B/UtAvPO6+4NF2pXts9BptbW7Gx28C0Npaz9TUbZpbDnLp4iwATa/XMvP1XTweB9dvxPjgtb2YDP++q/F5S1AcdvdLgP37y5mbW0KnE9jtZcRiy7xSV8m30Z8AcLlsRCIL/8CuxwD4avK9h0sGQBx290u/30UoFMHrrSMcjgKgKE6uXlVpaLATiXxPOi1x1duI3F6gtvYl5ud/5l3j7+wUMht4svv9bCVzIEDKzFogpXwwZ7Tj6/MYZSrbp2laTuCThv7HDwMj2xsb3c8CZrBYgvrFjz67IyTPBCgFURRF0WualtA0TT7lSCiKotcDbCz90nkvFJ58muysfm8ngMj0w4GVxISQ+J6w1OnBkoK3soAA4XB4XAjh/18wKUNer7ctsxePduxQKNS88vn5C+lkMv9xIJ3B8FfJyc4Ov99/6WH9P8BMDKwkekEcEFJm/QApxAjIO4MlBcO5fH8D9mJwJg0giNMAAAAASUVORK5CYII=" alt="Flag of the USA"/>
    </SfButton>
    <SfBottomModal :is-open="open" :title="title" @click:close="open = !open"> 
        <SfList :style="customStyleForContent">
          <SfListItem v-for="(item, index) in items" :key="index"
          >
            <SfButton
              :style="{'background': 'transparent', 'color': 'var(--c-text-muted)','--button-box-shadow': 'none'}"
              class="sf-button--full-width"
              :aria-label="item.language"
              @click="open = !open"
            >
              <SfCharacteristic style="text-align: left" icon="heart_fill" :description="item.language">
                <template #title>
                  <span class="desktop-only">{{ item.country }}</span>
                </template>
                <template #icon>
                  <SfImage :style="{'--image-width': '20px', 'margin-right': '1rem', 'border': '1px solid var(--c-light)', 'border-radius': '50%'}" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB1ZlPbtNAFMa/sROxdYEDuBIsWBV2IIHknqDlBr0BR0CcAOUGHAFO4EECiR1lBYtKNnuQIpQVjef1PTu2nD9OmsR2Xn/SkyeRx/78+fl5ZgzcEQxahojCuRMYk6IF9hLKogLeXHCccEQcYcOulxwpxycO25b4jbDAiCOm3Yk5ztEVLQhcJKGFVNlXYMDxnrrjLfZFrpjjO3VPQru6OxOZUH8kW4s9gMi1Ys0aoQmay03XSDk75TI2Lv/wVu1FRXKHOBxPOeYesCVHZ7Yn0IG4aqWxytEYeqhcnRNKxdsihB7kBRNJY9HRN9BH7mqVo8pyc5GjuqMR9HJRF3oGvZzUhYbQS1TPUYJickepzTFhRwzKhvs3gWZyob+OXuDe/QCauTOOVg/T1cOX+h+mHEMplMIOXlZCncNnqIV+V0J9ykfVKuHy+bES6rnhBygly5ythB6PrcxPLPRhn4y/pfMDZ+AdlJGRGcl2ac7EZUqmIhE0QJQ++vv1WJpLcyZNrl5n2WnZXhL6+M8Xy2pHODBimORm+XvlAkQSRIEbTGMq5tf9U7vlJSsXIKQC/J9OX0sH9A2fs37LS9auOP8MnodD3495fTtEH8xE1m95ibeun3TIr64HZ+V93iRS8DYdQDpKvnRaDQxGk+mgUWSxyxZ0kApWDMgrzQZ2+ipy9eDVOQ8LZVUlwm7cWmDJXp9vxGHfH0Ye6MwYhI3ljMe6xnnWkfsx4cHPs2JcsRU3vEQrFNZbf74AAAAASUVORK5CYII=" alt="Flag of Poland" />
                </template>
              </SfCharacteristic>
            </SfButton>
          </SfListItem>
        </SfList>
    </SfBottomModal>
</div>`,
});
Example.decorators = [
  () => ({
    template: '<div style="position: relative; width: 10rem;"><story /></div>',
  }),
];
Example.args = {
  isOpen: false,
};
