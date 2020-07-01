import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import { SfPrice, SfBadge } from "@storefront-ui/vue";
import "./SfPrice.stories.scss";
storiesOf("Atoms|Price", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfPrice },
    props: {
      regular: {
        default: text("regular", "$200.00", "Props"),
      },
      special: {
        default: text("special", "$100.00", "Props"),
      },
    },
    template: `<SfPrice
      :regular="regular"
      :special="special"/>`,
  }))
  .add("[slot] special", () => ({
    components: {
      SfPrice,
      SfBadge,
    },
    props: {
      regular: {
        default: text("regular", "$200.00", "Props"),
      },
      special: {
        default: text("special", "$100.00", "Props"),
      },
    },
    template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #special="{special}">
        <SfBadge class="color-warning">{{special}}</SfBadge>
      </template>  
    </SfPrice>`,
  }))
  .add("[slot] old", () => ({
    components: {
      SfPrice,
      SfBadge,
    },
    props: {
      regular: {
        default: text("regular", "$200.00", "Props"),
      },
      special: {
        default: text("special", "$100.00", "Props"),
      },
    },
    template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #old="{regular, special}">
        <SfBadge class="color-secondary">{{regular}}</SfBadge>
      </template>
    </SfPrice>`,
  }))
  .add("[slot] regular", () => ({
    components: {
      SfPrice,
      SfBadge,
    },
    props: {
      regular: {
        default: text("regular", "$200.00", "Props"),
      },
      special: {
        default: text("special", "", "Props"),
      },
    },
    template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #regular="{regular, special}">
        <SfBadge>{{regular}}</SfBadge>
      </template>
    </SfPrice>`,
  }))
  .add("[slots] old-text, special-text", () => ({
    components: {
      SfPrice,
    },
    props: {
      regular: {
        default: text("regular", "$200.00", "Props"),
      },
      special: {
        default: text("special", "$30", "Props"),
      },
    },
    template: `<SfPrice
      :regular="regular"
      :special="special">
      <template #old-text>
        <p class="price--text-old">Was</p>
      </template>
      <template #special-text>
        <p class="price--text-special">Now</p>
      </template>
    </SfPrice>`,
  }));
