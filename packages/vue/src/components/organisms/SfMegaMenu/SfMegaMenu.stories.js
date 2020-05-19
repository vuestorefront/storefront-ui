import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import {
  SfMegaMenu,
  SfList,
  SfBanner,
  SfProductCard,
  SfHighlight,
  SfScrollable,
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
      <SfMegaMenuColumn style="flex: 1" title="CLOTHINGS">
        <SfList>
          <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn style="flex: 1" title="ACCESORIES">
        <SfList>
          <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn style="flex: 1" title="SHOES">
        <SfList>
          <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn style="flex: 0 0 50%" title="FEATURED">
        <div style="display: flex">
          <SfBanner style="margin: 0 24px 0 0" title="The Office Life" subtitle="T-Shirts" image="/assets/storybook/SfMegaMenu/bannerBeachBag.jpg"/>
          <SfBanner title="Eco Sandals" subtitle="Shoes" image="/assets/storybook/SfMegaMenu/bannerSandals.jpg"/>
        </div>
      </SfMegaMenuColumn>
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
        <div style="display: flex; justify-content: space-between; flex: 1; background-color: #F1F2F3">
          <SfMegaMenuColumn style="flex: 1" title="CLOTHINGS A">
            <SfList>
              <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfMegaMenuColumn style="flex: 1" title="ACCESORIES A">
            <SfList>
              <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfMegaMenuColumn style="flex: 1" title="SHOES A">
            <SfList>
              <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
            </SfList>
          </SfMegaMenuColumn>
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
        <div style="flex: 0 0 240px; background-color: #E0E0E1">
          <h3 class="sf-mega-menu__root">CLOTHINGS A</h3>
          <h3 class="sf-mega-menu__root">ACCESORIES A</h3>
          <h3 class="sf-mega-menu__root">SHOES A</h3>
        </div>
        <div style="display: flex; justify-content: space-between; flex: 1; background-color: #F1F2F3">
          <SfMegaMenuColumn style="flex: 1" title="CLOTHINGS AA">
            <SfList>
              <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfMegaMenuColumn style="flex: 1" title="ACCESORIES AA">
            <SfList>
              <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfMegaMenuColumn style="flex: 1" title="SHOES AA">
            <SfList>
              <SfListItem style="--list-item-margin: 1rem 0">Skirts</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Sweaters</SfListItem>
              <SfListItem style="--list-item-margin: 1rem 0">Dresses</SfListItem>
            </SfList>
          </SfMegaMenuColumn>
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
      SfHighlight,
      SfScrollable,
    },
    template: `<SfMegaMenu>
      <SfMegaMenuColumn style="flex: 0 0 240px" title="CATEGORIES">
        <SfList>
          <SfListItem style="--list-item-margin: 1rem 0">
            <SfHighlight tag="span" content="Long dresses" highlighted="dress"/>
          </SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">
            <SfHighlight tag="span" content="Summer dresses" highlighted="dress"/>
          </SfListItem>
          <SfListItem style="--list-item-margin: 1rem 0">
            <SfHighlight tag="span" content="Dresses" highlighted="dress"/>
          </SfListItem>
        </SfList>
      </SfMegaMenuColumn>
      <SfMegaMenuColumn style="flex: 1" title="PRODUCT SUGGESTIONS">
        <SfScrollable style="flex: 1" max-content-height="38.75rem" show-text="" hide-text="">
          <div style="display: flex; flex-wrap: wrap; flex: 1;">
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
        </SfScrollable>
      </SfMegaMenuColumn>
    </SfMegaMenu>`,
  }));
