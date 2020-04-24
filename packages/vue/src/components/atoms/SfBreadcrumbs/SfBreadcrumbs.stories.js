import { storiesOf } from "@storybook/vue";
import { withKnobs, object } from "@storybook/addon-knobs";
import { SfBreadcrumbs } from "@storefront-ui/vue";
storiesOf("Atoms|Breadcrumbs", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBreadcrumbs },
    props: {
      breadcrumbs: {
        default: object(
          "breadcrumbs",
          [
            { text: "Home", link: "#" },
            { text: "Category", link: "#" },
            { text: "Pants", link: "#" },
          ],
          "Props"
        ),
      },
    },
    template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs" />`,
  }))
  .add("[slot] link", () => ({
    components: { SfBreadcrumbs },
    props: {
      breadcrumbs: {
        default: object(
          "breadcrumbs",
          [
            { text: "Home", link: "#" },
            { text: "Category", link: "#" },
            { text: "Pants", link: "#" },
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
  }))
  .add("[slot] current", () => ({
    components: { SfBreadcrumbs },
    props: {
      breadcrumbs: {
        default: object(
          "breadcrumbs",
          [
            { text: "Home", link: "#" },
            { text: "Category", link: "#" },
            { text: "Pants", link: "#" },
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
  }));
