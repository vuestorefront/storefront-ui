import { withKnobs, object } from "@storybook/addon-knobs";
import { SfBreadcrumbs } from "@storefront-ui/vue";
export default {
  title: "Atoms|Breadcrumbs",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfBreadcrumbs },
  props: {
    breadcrumbs: {
      default: object(
        "breadcrumbs",
        [
          { text: "Home", route: { link: "#" } },
          { text: "Category", route: { link: "#" } },
          { text: "Pants", route: { link: "#" } },
        ],
        "Props"
      ),
    },
  },
  template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs" />`,
});
export const SlotLink = () => ({
  components: { SfBreadcrumbs },
  props: {
    breadcrumbs: {
      default: object(
        "breadcrumbs",
        [
          { text: "Home", route: { link: "#" } },
          { text: "Category", route: { link: "#" } },
          { text: "Pants", route: { link: "#" } },
        ],
        "Props"
      ),
    },
  },
  template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs">
      <template #link="{breadcrumb, go}">
        <span style="text-transform: lowercase">'{{breadcrumb.text}}'</span>
      </template>
    </SfBreadcrumbs>`,
});
SlotLink.story = {
  name: "[slot] link",
};
export const SlotCurrent = () => ({
  components: { SfBreadcrumbs },
  props: {
    breadcrumbs: {
      default: object(
        "breadcrumbs",
        [
          { text: "Home", route: { link: "#" } },
          { text: "Category", route: { link: "#" } },
          { text: "Pants", route: { link: "#" } },
        ],
        "Props"
      ),
    },
  },
  template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs">
      <template #current="{breadcrumb}">
        <span style="text-transform: uppercase">"{{breadcrumb.text}}"</span>
      </template>
    </SfBreadcrumbs>`,
});
SlotCurrent.story = {
  name: "[slot] current",
};
