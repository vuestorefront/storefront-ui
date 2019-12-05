/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object } from "@storybook/addon-knobs";

import SfBreadcrumbs from "./SfBreadcrumbs.vue";

storiesOf("Atoms|Breadcrumbs", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfBreadcrumbs },
    props: {
      breadcrumbs: {
        default: object("breadcrumbs (prop)", [
          { text: "Home", route: { link: "#" } },
          { text: "Category", route: { link: "#" } },
          { text: "Pants", route: { link: "#" } }
        ])
      }
    },
    template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs" />`
  }))
  .add("[slot] link", () => ({
    components: { SfBreadcrumbs },
    props: {
      breadcrumbs: {
        default: object("breadcrumbs (prop)", [
          { text: "Home", route: { link: "#" } },
          { text: "Category", route: { link: "#" } },
          { text: "Pants", route: { link: "#" } }
        ])
      }
    },
    template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs">
      <template #link="{breadcrumb, go}">
        <span style="text-transform: lowercase">'{{breadcrumb.text}}'</span>
      </template>
    </SfBreadcrumbs>`
  }))
  .add("[slot] current", () => ({
    components: { SfBreadcrumbs },
    props: {
      breadcrumbs: {
        default: object("breadcrumbs (prop)", [
          { text: "Home", route: { link: "#" } },
          { text: "Category", route: { link: "#" } },
          { text: "Pants", route: { link: "#" } }
        ])
      }
    },
    template: `<SfBreadcrumbs
      :breadcrumbs="breadcrumbs">
      <template #current="{breadcrumb}">
        <span style="text-transform: uppercase">"{{breadcrumb.text}}"</span>
      </template>
    </SfBreadcrumbs>`
  }));
