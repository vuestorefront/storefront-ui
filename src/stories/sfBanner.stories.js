import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfBanner from "../components/molecules/SfBanner/SfBanner.vue";

export default storiesOf("Banner", module)
  .add("aligned center", () => ({
    components: { SfBanner },
    template: `
    <SfBanner 
      style="background-image: url('/img/Banner1.png')" 
      :buttonAction="action">
      <div slot="title">ECO SANDALS</div>
      <div slot="subtitle">Summer shoes</div>
      <div slot="description">
        The collection features formal and casual comfort shoes with a Danish
        design focus. Made from premium leathers and comfort.
      </div>
      <template slot="call-to-action"
        >shop now</template
      >
    </SfBanner>`,
    methods: { action: action("clicked") }
  }))
  .add("aligned left", () => ({
    components: { SfBanner },
    template: `
    <SfBanner 
      style="background-image: url('/img/Banner2.png'); align-items: flex-start;" 
      :buttonAction="action">
      <div slot="title">COCKTAIL & PARTY</div>
      <div slot="subtitle">Dresses</div>
      <div slot="description">
      Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.
      </div>
      <template slot="call-to-action"
        >shop now</template
      >
    </SfBanner>`,
    methods: { action: action("clicked") }
  }));
