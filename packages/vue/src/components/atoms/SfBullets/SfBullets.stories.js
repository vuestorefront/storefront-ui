import { storiesOf } from "@storybook/vue";
import { withKnobs, number, object } from "@storybook/addon-knobs";
import { SfBullets } from "@storefront-ui/vue";
storiesOf("Atoms|Bullets", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      total: {
        default: number("total", 3, {}, "Props"),
      },
      buttonActive: {
        default: object(
          "active button",
          {
            disabled: false,
          },
          "Props"
        ),
      },
      buttonsInactive: {
        default: object(
          "inactive buttons",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    components: { SfBullets },
    data() {
      return {
        current: 1,
      };
    },
    template: `<SfBullets
      :total="total"
      :current="current"
      :buttonActive="buttonActive"
      :buttonsInactive="buttonsInactive"
      @click="value => current = value"/>`,
  }))
  .add("[slot] active", () => ({
    props: {
      total: {
        default: number("total", 3, {}, "Props"),
      },
      buttonsInactive: {
        default: object(
          "inactive buttons",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    components: { SfBullets },
    data() {
      return {
        current: 1,
      };
    },
    template: `<SfBullets
      :total="total"
      :current="current"
      :buttonsInactive="buttonsInactive"
      @click="value => current = value">
      <template #active>
        <li style="width: 10px; height: 10px; background-color:#9EE2B0"></li>
      </template>
    </SfBullets>`,
  }))
  .add("[slot] inactive", () => ({
    props: {
      total: {
        default: number("total", 3, {}, "Props"),
      },
      buttonActive: {
        default: object(
          "acive button",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    components: { SfBullets },
    data() {
      return {
        current: 1,
      };
    },
    template: `<SfBullets
      :total="total"
      :current="current"
      :buttonActive="buttonActive"
      @click="value => current = value">
      <template #inactive="{index, go}">
        <li @click="go(index)" style="width: 10px; height: 10px; background-color:#CCC; transform: rotate(45deg)"></li>
      </template>
    </SfBullets>`,
  }));
