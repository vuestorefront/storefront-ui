// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfBreadcrumbs from "./SfBreadcrumbs.vue";

storiesOf("Atoms|Breadcrumbs", module)
  .add(
    "Default",
    () => ({
      components: { SfBreadcrumbs },
      data(){
        return {
          breadcrumbs: [{text: 'Home',route: {link: '#'}},{text: 'Category',route: {link: '#'}},{text: 'Pants',route: {link: '#'}}]
        }
      },
      template: `<SfBreadcrumbs
        :breadcrumbs="breadcrumbs" />`
    }),
  )
  .add(
    "[slot] link",
    () => ({
      components: { SfBreadcrumbs },
      data(){
        return {
          breadcrumbs: [{text: 'Home',route: {link: '#'}},{text: 'Category',route: {link: '#'}},{text: 'Pants',route: {link: '#'}}]
        }
      },
      template: `<SfBreadcrumbs
        :breadcrumbs="breadcrumbs">
        <template #link>
          <span></span>
        </template>
      </SfBreadcrumbs>`
    }),
  )
  .add(
    "[slot] current",
    () => ({
      components: { SfBreadcrumbs },
      data(){
        return {
          breadcrumbs: [{text: 'Home',route: {link: '#'}},{text: 'Category',route: {link: '#'}},{text: 'Pants',route: {link: '#'}}]
        }
      },
      template: `<SfBreadcrumbs
        :breadcrumbs="breadcrumbs">
        <template #current>
          <span></span>
        </template>
      </SfBreadcrumbs>`
    }),
  )
