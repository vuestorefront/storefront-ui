/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import SfModal from "./SfModal.vue";
import {
  visibilityToggleMixin,
  withVisibilityToggle
} from "../../../../config/storybook/decorators";
storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .addDecorator(withVisibilityToggle)
  .add("Common", () => ({
    components: { SfModal },
    props: {
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      cross: {
        default: boolean("cross", true, "Props")
      },
      persistent: {
        default: boolean("persistent", true, "Props")
      }
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        @close="visible = false"
      >
        <p>Soufflé bonbon toffee chocolate marshmallow. Sugar plum gummies marshmallow soufflé topping donut donut icing marzipan. Bonbon cake cheesecake croissant chocolate jelly beans muffin. Jujubes soufflé croissant. Toffee fruitcake biscuit powder dragée jelly-o brownie. Wafer icing biscuit lemon drops bear claw cotton candy gingerbread cotton candy. Gummies ice cream marzipan sweet roll tart pudding jelly-o. Dessert halvah cake marzipan topping dragée wafer. Pudding cake liquorice dragée cheesecake pie ice cream. Pudding cotton candy marshmallow soufflé cake lemon drops liquorice. Dessert pudding candy pudding sweet roll biscuit cotton candy muffin dessert. Chocolate chocolate topping ice cream marshmallow pudding.</p>
        <p>Fruitcake soufflé jelly-o chupa chups fruitcake cake topping. Candy gingerbread candy. Chocolate marzipan cookie marzipan sweet. Tootsie roll lemon drops tiramisu topping toffee cotton candy cake. Topping ice cream tootsie roll tart tiramisu biscuit halvah cake. Carrot cake cake tootsie roll muffin wafer wafer fruitcake. Bear claw sesame snaps oat cake sugar plum marshmallow. Jujubes dessert danish chocolate bar icing cheesecake candy. Jujubes tart marzipan ice cream. Donut pudding candy canes. Jelly-o dragée fruitcake donut. Lollipop sweet halvah croissant caramels.</p>
        <p>Jelly chocolate cake candy sweet roll sweet danish jelly. Cheesecake caramels chupa chups jujubes macaroon sweet cupcake donut. Liquorice sugar plum pie candy lollipop marshmallow sugar plum icing. Jelly beans marzipan chocolate macaroon sweet topping dragée brownie. Dragée biscuit jujubes topping danish cake. Topping cheesecake jelly cookie marshmallow halvah. Jelly beans chocolate cake gingerbread pie. Cheesecake brownie candy canes. Pastry caramels jelly beans. Cake caramels cupcake muffin cheesecake cupcake dragée wafer bonbon. Topping oat cake cake brownie bear claw fruitcake soufflé carrot cake. Chocolate cake chocolate cake apple pie jelly-o fruitcake cotton candy chocolate candy danish.</p>
        <p>Dragée sweet icing liquorice sweet cookie caramels pie. Croissant gummies macaroon marshmallow pastry marshmallow gingerbread cookie cake. Caramels topping bear claw ice cream bonbon. Donut gummi bears fruitcake topping. Macaroon carrot cake chupa chups pie lemon drops. Cheesecake carrot cake macaroon tootsie roll sweet cake muffin oat cake powder. Cake topping topping cake biscuit. Tart marzipan chupa chups candy. Pie cake muffin pastry muffin biscuit. Wafer cookie jujubes. Jelly-o pudding halvah lollipop sweet roll. Chocolate cake biscuit fruitcake muffin brownie cookie chocolate bar pudding. Chocolate cake gingerbread macaroon. Lollipop gummi bears halvah danish tootsie roll dessert.</p>
        <p>Cake sweet roll jujubes lollipop toffee sweet roll jelly-o pie jelly-o. Muffin cookie cookie powder jelly chocolate cake. Cupcake tootsie roll cotton candy. Ice cream cotton candy bear claw oat cake pastry. Bonbon jelly beans marshmallow powder chocolate bar wafer. Pastry lollipop chocolate oat cake donut candy jujubes cookie lollipop. Chocolate donut ice cream chocolate pudding sesame snaps. Jelly-o apple pie gummi bears apple pie jelly candy. Fruitcake cotton candy chocolate cake tart icing apple pie apple pie liquorice gingerbread. Gummi bears tart cookie soufflé croissant marshmallow bear claw oat cake. Caramels chocolate bar tootsie roll dessert lemon drops caramels marshmallow. Biscuit caramels chupa chups. Pastry lollipop topping sweet gummi bears cotton candy danish.</p>
      </SfModal>`
  }))
  .add("[slot] close", () => ({
    components: { SfModal },
    props: {
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      cross: {
        default: boolean("cross", true, "Props")
      },
      persistent: {
        default: boolean("persistent", true, "Props")
      }
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
        <template #close>
          close
        </template>
      </SfModal>`
  }));
