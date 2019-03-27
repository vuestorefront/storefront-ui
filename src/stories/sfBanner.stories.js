import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfBanner from "../components/molecules/SfBanner/SfBanner.vue";

export default storiesOf("Banner", module).add("few banners", () => ({
  components: { SfBanner },
  template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
      <SfBanner style="margin-bottom: 30px; justify-content: center;">
        <template slot="title">
          ECO SANDALS
        </template>
        <template slot="subtitle">
          Summer shoes
        </template>
        <template slot="description">
          The collection features formal and casual comfort shoes with a Danish
          design focus. Made from premium leathers and comfort.
        </template>
        <template slot="button">
          shop now
        </template>
      </SfBanner>
      <SfBanner style="width: 48%; align-items: flex-start; background-image: url('./img/Banner1.png');">
        <template slot="title">
          ECO SANDALS
        </template>
        <template slot="subtitle">
          Summer shoes
        </template>
        <template slot="description">
          The collection features formal and casual comfort shoes with a Danish
          design focus. Made from premium leathers and comfort.
        </template>
        <template slot="button">
          shop now
        </template>
      </SfBanner>
      <SfBanner style="width: 48%; align-items: flex-start;">
        <template slot="title">
          ECO SANDALS
        </template>
        <template slot="subtitle">
          Summer shoes
        </template>
        <template slot="description">
          The collection features formal and casual comfort shoes with a Danish
          design focus. Made from premium leathers and comfort.
        </template>
        <template slot="button">
          shop now
        </template>
      </SfBanner>
    </div>`
}));
