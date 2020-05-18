import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import {
  SfMegaMenu,
  SfList,
  SfBanner,
  SfProductCard,
} from "@storefront-ui/vue";
storiesOf("Organisms|MegaMenu", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfMegaMenu,
      SfList,
      SfBanner,
    },
    template: `<SfMegaMenu>
        <div style="display: flex; flex: 0 0 50%; justify-content: space-between">
          <div>
            <h3 class="sf-mega-menu__root">CLOTHINGS</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
          <div>
            <h3 class="sf-mega-menu__root">ACCESORIES</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
          <div>
            <h3 class="sf-mega-menu__root">SHOES</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
        </div>
        <div style="flex: 0 0 50%">
          <h3 class="sf-mega-menu__root">FEATURED</h3>
          <div style="display: flex">
            <SfBanner title="The Office Life" subtitle="T-Shirts"/>
            <SfBanner title="Eco Sandals" subtitle="Shoes"/>
          </div>
        </div>
    </SfMegaMenu>`,
  }))
  .add("With A", () => ({
    components: {
      SfMegaMenu,
      SfList,
      SfBanner,
    },
    template: `<SfMegaMenu>
      <div style="display: flex; width: 100%">
        <div style="flex: 0 0 240px">
          <h3 class="sf-mega-menu__root">CLOTHINGS</h3>
          <h3 class="sf-mega-menu__root">ACCESORIES</h3>
          <h3 class="sf-mega-menu__root">SHOES</h3>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div>
            <h3 class="sf-mega-menu__root">CLOTHINGS</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
          <div>
            <h3 class="sf-mega-menu__root">ACCESORIES</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
          <div>
            <h3 class="sf-mega-menu__root">SHOES</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
        </div>
      </div>
    </SfMegaMenu>`,
  }))
  .add("With AA", () => ({
    components: {
      SfMegaMenu,
      SfList,
      SfBanner,
    },
    template: `<SfMegaMenu>
      <div style="display: flex; width: 100%">
        <div style="flex: 0 0 240px">
          <h3 class="sf-mega-menu__root">CLOTHINGS</h3>
          <h3 class="sf-mega-menu__root">ACCESORIES</h3>
          <h3 class="sf-mega-menu__root">SHOES</h3>
        </div>
        <div style="display: flex; flex: 1">
          <div>
            <h3 class="sf-mega-menu__root">CLOTHINGS</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
          <div>
            <h3 class="sf-mega-menu__root">ACCESORIES</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
          <div>
            <h3 class="sf-mega-menu__root">SHOES</h3>
            <SfList>
              <SfListItem>Skirts</SfListItem>
              <SfListItem>Sweaters</SfListItem>
              <SfListItem>Dresses</SfListItem>
            </SfList>
          </div>
        </div>
      </div>
    </SfMegaMenu>`,
  }))
  .add("Search", () => ({
    components: {
      SfMegaMenu,
      SfList,
      SfBanner,
      SfProductCard,
    },
    template: `<SfMegaMenu>
      <div style="flex: 0 0 240px">
        <h3 class="sf-mega-menu__root">CLOTHINGS</h3>
        <h3 class="sf-mega-menu__root">ACCESORIES</h3>
        <h3 class="sf-mega-menu__root">SHOES</h3>
      </div>
      <div style="display: flex; flex-wrap: wrap; flex: 1; height: 100%; overflow: auto">
        <SfProductCard
          v-for="(_, key) in 8"
          :key="key"
          image="/assets/storybook/Home/productB.jpg"
          image-width="216"
          image-height="326"
          badge-label="-50%"
          title="Vila stripe shirt dress"
          regular-price="$50.00"
          show-add-to-cart-button
          :score-rating="4"
          :max-rating="5"
          :reviews-count="7"
        />
      </div>
    </SfMegaMenu>`,
  }));
