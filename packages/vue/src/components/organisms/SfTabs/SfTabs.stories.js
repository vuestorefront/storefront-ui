/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import SfTabs from "./SfTabs.vue";

storiesOf("Organisms|Tabs", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfTabs
    },
    template: `
      <SfTabs :openTab="1">
      <SfTab title="Description">
      The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common "problem" areas. Find stunning women's cocktail dresses and party dresses.</SfTab>
      <SfTab title="Read reviews">
        <h3 style="padding: 0">Maria</h3> 
        <p>I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend.. Read more</p>
      </SfTab>
      <SfTab title="Additional Information">
        <h3 style="padding: 0">Brand</h3>
        <p>
          <u>Brand name</u> is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.
        </p>
      </SfTab>
    </SfTabs>`
  }));
