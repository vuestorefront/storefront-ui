/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";

import SfBannerGrid from "./SfBannerGrid.vue";
import SfBanner from "../../molecules/SfBanner/SfBanner.vue";

storiesOf("Organisms|BannerGrid", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner-grid--modifier": "sf-banner-grid--modifier"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    components: { SfBannerGrid, SfBanner },
    template: `<div style="max-width:1240px; margin: auto">
        <SfBannerGrid :bannerGrid="1">
          <template #bannerA>
            <a href="#">
              <SfBanner
                subtitle="Dresses"
                title="COCKTAIL PARTY"
                description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
                button-text="SHOP NOW"
                image="assets/storybook/homepage/bannerF.jpg"
                class="sf-banner--slim"
              />
            </a>
          </template>
          <template #bannerB>
            <a href="#">
              <SfBanner
                subtitle="Dresses"
                title="LINEN DRESSES"
                description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
                button-text="SHOP NOW"
                image="assets/storybook/homepage/bannerE.jpg"
                class="sf-banner--slim"
                style="padding-right: 20%"
              />
            </a>
          </template>
          <template #bannerC>
            <a href="#">
              <SfBanner
              subtitle="T-Shirts"
              title="THE OFFICE LIFE"
              image="assets/storybook/homepage/bannerC.jpg"
              class="sf-banner--slim"
            />
            </a>
          </template>
          <template #bannerD>
            <a href="#">
              <SfBanner
                subtitle="Summer shoes"
                title="ECO SANDALS"
                image="assets/storybook/homepage/bannerG.jpg"
                class="sf-banner--slim"
              />
            </a>
          </template>
        </SfBannerGrid>
      </div>`
  }))
  .add("Grid 2", () => ({
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-banner-grid--modifier": "sf-banner-grid--modifier"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    components: { SfBannerGrid, SfBanner },
    template: `<div style="max-width:1240px; margin: auto"><SfBannerGrid :bannerGrid="2">
        <template #bannerA>
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="COCKTAIL PARTY"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              button-text="SHOP NOW"
              image="assets/storybook/homepage/bannerF.jpg"
              class="sf-banner--slim"
            />
          </a>
        </template>
        <template #bannerB>
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="LINEN DRESSES"
              button-text="SHOP NOW"
              image="assets/storybook/homepage/bannerE.jpg"
              class="sf-banner--slim"
            />
          </a>
        </template>
        <template #bannerC>
          <a href="#">
            <SfBanner
              subtitle="T-Shirts"
              title="THE OFFICE LIFE"
              image="assets/storybook/homepage/bannerC.jpg"
              class="sf-banner--slim"
            />
          </a>
        </template>
        <template #bannerD>
          <a href="#">
            <SfBanner
              subtitle="Summer shoes"
              title="ECO SANDALS"
              image="assets/storybook/homepage/bannerK.jpg"
              class="sf-banner--slim"
            />
          </a>
        </template>
      </SfBannerGrid></div>`
  }));
