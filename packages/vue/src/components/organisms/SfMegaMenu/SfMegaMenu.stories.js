/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import SfMegaMenu from "./SfMegaMenu.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfHeader from "../SfHeader/SfHeader.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
const AsidePlaceholder = {
  components: { SfImage },
  data() {
    return {
      tiles: [
        {
          title: "Last pairs left",
          pictures: {
            mobile: {
              url: "assets/storybook/SfMegaMenu/bannerSandals-full.png"
            },
            desktop: { url: "assets/storybook/SfMegaMenu/bannerSandals.jpg" }
          }
        },
        {
          title: "Beach bags 2=1",
          pictures: {
            mobile: {
              url: "assets/storybook/SfMegaMenu/bannerBeachBag-full.png"
            },
            desktop: { url: "assets/storybook/SfMegaMenu/bannerBeachBag.jpg" }
          }
        }
      ]
    };
  },
  template: `<div :style="{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}">
      <div 
        v-for="tile in tiles" 
        :key="tile.title" 
        :style="{marginBottom: '1.25rem'}"
      >
        <h3 :style="{marginBottom: '1.25rem', textTransform: 'uppercase'}">{{tile.title}}</h3>
        <SfImage :src="tile.pictures"/>
      </div>
    </div>`
};
const MegaMenuPlaceholder = {
  components: { SfMegaMenu, SfMenuItem, AsidePlaceholder },
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    }
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
            { label: "Blouses" }
          ]
        },
        {
          header: "Accessories",
          items: [
            { label: "Bags & Purses" },
            { label: "Belts" },
            { label: "Gloves" },
            { label: "Hats" }
          ]
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
            { label: "Trainers" }
          ]
        }
      ]
    };
  },
  template: `<SfMegaMenu 
        title="Man"
        :visible="visible"
        :style="{ position: 'absolute', left: 0, width: '100%', top: '100%' }"
      >
        <SfMegaMenuColumn 
          v-for="subcategory in subcategories" 
          :key="subcategory.header" 
          :title="subcategory.header"
        >
          <SfMenuItem
            v-for="item in subcategory.items" 
            :key="item.label" 
            :label="item.label" 
          />
        </SfMegaMenuColumn>
        <template #aside>
          <AsidePlaceholder/>
        </template>
      </SfMegaMenu>`
};
storiesOf("Organisms|MegaMenu", module)
  .add("Common", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem
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
              { label: "Blouses" }
            ]
          },
          {
            header: "Accessories",
            items: [
              { label: "Bags & Purses" },
              { label: "Belts" },
              { label: "Gloves" },
              { label: "Hats" }
            ]
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
              { label: "Trainers" }
            ]
          }
        ]
      };
    },
    template: `<SfMegaMenu 
        title="Man" 
        :visible="visible"
      >
        <SfMegaMenuColumn 
          v-for="subcategory in subcategories" 
          :key="subcategory.header" 
          :title="subcategory.header"
        >
          <SfMenuItem
            v-for="item in subcategory.items" 
            :key="item.label" 
            :label="item.label" 
          />
        </SfMegaMenuColumn>
      </SfMegaMenu>`
  }))
  .add("[slot] aside", () => ({
    components: {
      SfMegaMenu,
      SfMenuItem,
      AsidePlaceholder
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
              { label: "Blouses" }
            ]
          },
          {
            header: "Accessories",
            items: [
              { label: "Bags & Purses" },
              { label: "Belts" },
              { label: "Gloves" },
              { label: "Hats" }
            ]
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
              { label: "Trainers" }
            ]
          }
        ]
      };
    },
    template: `<SfMegaMenu 
        title="Man"
        :visible="visible"
      >
        <SfMegaMenuColumn 
          v-for="subcategory in subcategories" 
          :key="subcategory.header" 
          :title="subcategory.header"
        >
          <SfMenuItem
            v-for="item in subcategory.items" 
            :key="item.label" 
            :label="item.label"
          />
        </SfMegaMenuColumn>
        <template #aside>
          <AsidePlaceholder/>
        </template>
      </SfMegaMenu>`
  }))
  .add("With SfHeader", () => ({
    components: {
      SfHeader,
      MegaMenuPlaceholder
    },
    data() {
      return {
        hovered: ""
      };
    },
    template: `
      <SfHeader
        title="Storefront UI"
        :logo="{ mobile: { url: '/assets/logo.svg' }, desktop: { url: '/assets/logo.svg' } }"
      >
        <template #navigation>
          <SfHeaderNavigationItem
            @mouseover="hovered = 'women'"
            @mouseleave="hovered = ''"
          >
            <a href="#women">Women</a>
            <MegaMenuPlaceholder title="Woman" :visible="hovered === 'women'"/>
          </SfHeaderNavigationItem>
          <SfHeaderNavigationItem
            @mouseover="hovered = 'man'"
            @mouseleave="hovered = ''"
          >
            <a href="#man">Man</a>
            <MegaMenuPlaceholder title="Man" :visible="hovered === 'man'"/>
          </SfHeaderNavigationItem>
          <SfHeaderNavigationItem
            @mouseover="hovered = 'kids'"
            @mouseleave="hovered = ''"
          >
            <a href="#kids">Kids</a>
            <MegaMenuPlaceholder title="Kids" :visible="hovered === 'kids'"/>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>`
  }));
