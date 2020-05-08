import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import {
  SfMegaMenu,
  SfHeader,
  SfMenuItem,
  SfBanner,
  SfList,
} from "@storefront-ui/vue";
const AsidePlaceholder = {
  components: { SfBanner },
  data() {
    return {
      isMobile: false,
      tiles: [
        {
          title: "THE OFFICE LIFE",
          subtitle: "T-shirts",
          pictures: {
            mobile: "assets/storybook/SfMegaMenu/bannerSandals.jpg",
            desktop: "assets/storybook/SfMegaMenu/bannerSandals.jpg",
          },
        },
        {
          title: "ECO SANDALS",
          subtitle: "T-shirts",
          pictures: {
            mobile: "assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
            desktop: "assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
          },
        },
      ],
    };
  },
  computed: {
    root() {
      return this.isMobile ? {} : { display: "flex" };
    },
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <= 1023;
    window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
  },
  beforeDestroy() {
    window.matchMedia("(max-width: 1023px)").removeListener(this.mobileHandler);
  },
  methods: {
    mobileHandler(event) {
      this.isMobile = event.matches;
    },
  },
  template: `
      <div :style="root">
      <SfBanner 
        v-for="(tile, index) in tiles"
        :key="tile.title" 
        :title="tile.title" 
        :subtitle="tile.subtitle" 
        :image="tile.pictures" 
        :style="{margin: isMobile ? index === 0 ? '0' : '24px 0 0 0' : index === 0 ? '0' : '0 0 0 24px', '--banner-height': '310px', '--banner-width': '330px'} "
      />
      </div>`,
};
const MegaMenuPlaceholder = {
  components: { SfMegaMenu, SfMenuItem, AsidePlaceholder, SfList },
  props: {
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    asideTitle: {
      default: text("asideTitle", "Featured", "Props"),
    },
  },
  data() {
    return {
      subcategories: [
        {
          header: "Clothing",
          items: [
            { label: "Skirts" },
            { label: "Sweaters" },
            { label: "Dresses" },
            { label: "TShirts" },
            { label: "Pants" },
            { label: "Underwear" },
            { label: "Jackets" },
            { label: "Blouses" },
          ],
        },
        {
          header: "Accessories",
          items: [
            { label: "Bags & Purses" },
            { label: "Belts" },
            { label: "Gloves" },
            { label: "Hats" },
          ],
        },
        {
          header: "Shoes",
          items: [
            { label: "Boots" },
            { label: "Heels" },
            { label: "Flat shoes" },
            { label: "Loafers" },
            { label: "Sandals" },
            { label: "Slippers" },
            { label: "Trainers" },
          ],
        },
      ],
    };
  },
  template: `<SfMegaMenu 
        title="Man"
        :asideTitle="asideTitle"
        :visible="visible"
        :style="{position: 'absolute', left: 0}"
      >
        <SfMegaMenuColumn 
          v-for="subcategory in subcategories" 
          :key="subcategory.header" 
          :title="subcategory.header"
        >
          <SfList>
            <SfListItem 
              v-for="item in subcategory.items" 
              :key="item.label"
            >
              <SfMenuItem
                :label="item.label" 
              />
            </SfListItem>
          </SfList>
        </SfMegaMenuColumn>
        <template #aside>
          <AsidePlaceholder/>
        </template>
      </SfMegaMenu>`,
};
storiesOf("Organisms|MegaMenu", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem,
      SfList,
    },
    props: {
      title: {
        default: text("title", "Man", "Props"),
      },
    },
    data() {
      return {
        visible: true,
        subcategories: [
          {
            header: "Clothing",
            items: [
              { label: "Skirts" },
              { label: "Sweaters" },
              { label: "Dresses" },
              { label: "TShirts" },
              { label: "Pants" },
              { label: "Underwear" },
              { label: "Jackets" },
              { label: "Blouses" },
            ],
          },
          {
            header: "Accessories",
            items: [
              { label: "Bags & Purses" },
              { label: "Belts" },
              { label: "Gloves" },
              { label: "Hats" },
            ],
          },
          {
            header: "Shoes",
            items: [
              { label: "Boots" },
              { label: "Heels" },
              { label: "Flat shoes" },
              { label: "Loafers" },
              { label: "Sandals" },
              { label: "Slippers" },
              { label: "Trainers" },
            ],
          },
        ],
      };
    },
    template: `<SfMegaMenu 
        :title="title" 
        :visible="visible"
      >
        <SfMegaMenuColumn 
          v-for="subcategory in subcategories" 
          :key="subcategory.header" 
          :title="subcategory.header"
        >
          <SfList>
            <SfListItem v-for="item in subcategory.items" :key="item.label" >
              <SfMenuItem
                :label="item.label" 
              />
            </SfListItem>
          </SfList>
        </SfMegaMenuColumn>
      </SfMegaMenu>`,
  }))
  .add("[slot] aside", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem,
      SfList,
      AsidePlaceholder,
    },
    props: {
      title: {
        default: text("title", "Man", "Props"),
      },
      asideTitle: {
        default: text("asideTitle", "Featured", "Props"),
      },
    },
    data() {
      return {
        visible: true,
        subcategories: [
          {
            header: "Clothing",
            items: [
              { label: "Skirts" },
              { label: "Sweaters" },
              { label: "Dresses" },
              { label: "TShirts" },
              { label: "Pants" },
              { label: "Underwear" },
              { label: "Jackets" },
              { label: "Blouses" },
            ],
          },
          {
            header: "Accessories",
            items: [
              { label: "Bags & Purses" },
              { label: "Belts" },
              { label: "Gloves" },
              { label: "Hats" },
            ],
          },
          {
            header: "Shoes",
            items: [
              { label: "Boots" },
              { label: "Heels" },
              { label: "Flat shoes" },
              { label: "Loafers" },
              { label: "Sandals" },
              { label: "Slippers" },
              { label: "Trainers" },
            ],
          },
        ],
      };
    },
    template: `<SfMegaMenu 
        :title="title"
        :asideTitle="asideTitle"
        :visible="visible"
      >
        <SfMegaMenuColumn 
          v-for="subcategory in subcategories" 
          :key="subcategory.header" 
          :title="subcategory.header"
        >
          <SfList>
            <SfListItem
              v-for="item in subcategory.items"
              :key="item.label" 
            >
              <SfMenuItem
                :label="item.label"
              />
            </SfListItem>
          </SfList>
        </SfMegaMenuColumn>
        <template #aside>
          <AsidePlaceholder/>
        </template>
      </SfMegaMenu>`,
  }))
  .add("With SfHeader", () => ({
    components: {
      SfHeader,
      MegaMenuPlaceholder,
    },
    data() {
      return {
        hovered: "",
      };
    },
    template: `
      <SfHeader
        title="Storefront UI"
        :logo="{ mobile: { url: '/assets/logo.svg' }, desktop: { url: '/assets/logo.svg' } }"
      >
        <template #navigation>
          <SfHeaderNavigationItem
            :class="{'sf-header-navigation-item--is-active': hovered === 'women'}"
            @mouseover="hovered = 'women'"
            @mouseleave="hovered = ''"
          >
            <a href="#women">Women</a>
            <MegaMenuPlaceholder title="Woman" :visible="hovered === 'women'"/>
          </SfHeaderNavigationItem>
          <SfHeaderNavigationItem
            :class="{'sf-header-navigation-item--is-active': hovered === 'man'}"
            @mouseover="hovered = 'man'"
            @mouseleave="hovered = ''"
          >
            <a href="#man">Man</a>
            <MegaMenuPlaceholder title="Man" :visible="hovered === 'man'"/>
          </SfHeaderNavigationItem>
          <SfHeaderNavigationItem
            :class="{'sf-header-navigation-item--is-active': hovered === 'kids'}"
            @mouseover="hovered = 'kids'"
            @mouseleave="hovered = ''"
          >
            <a href="#kids">Kids</a>
            <MegaMenuPlaceholder title="Kids" :visible="hovered === 'kids'"/>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>`,
  }));
