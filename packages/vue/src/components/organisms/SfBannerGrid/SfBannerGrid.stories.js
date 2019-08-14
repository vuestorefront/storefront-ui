// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBannerGrid from "./SfBannerGrid.vue";
import SfBanner from "../../molecules/SfBanner/SfBanner.vue"
// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emited when option is selected"]]
};

storiesOf("Organisms|BannerGrid", module)
  .addDecorator(withKnobs)
  .add(
    "Grid 1",
    () => ({
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-banner-grud--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfBannerGrid, SfBanner },
      template: `<SfBannerGrid :bannerGrid="1">
        <template #bannerA>
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="COCKTAIL PARTY"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              button-text="SHOP NOW"
              image="assets/storybook/homepage/bannerF.png"
              class="sf-banner--left sf-banner--container-full"
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
              image="assets/storybook/homepage/bannerE.png"
              class="sf-banner--left"
            />
          </a>
        </template>
        <template #bannerC>
          <a href="#">
            <SfBanner
            subtitle="T-Shirts"
            title="THE OFFICE LIFE"
            image="assets/storybook/homepage/bannerC.png"
            class="sf-banner--left sf-banner--container-full"
          />
          </a>
        </template>
        <template #bannerD>
          <a href="#">
            <SfBanner
              subtitle="Summer shoes"
              title="ECO SANDALS"
              image="assets/storybook/homepage/bannerG.png"
              class="sf-banner--left sf-banner--container-full"
            />
          </a>
        </template>
      </SfBannerGrid>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBannerGrid } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  )
  .add(
    "Grid 2",
    () => ({
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-banner-grud--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfBannerGrid, SfBanner },
      template: `<SfBannerGrid :bannerGrid="2">
        <template #bannerA>
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="COCKTAIL PARTY"
              description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
              button-text="SHOP NOW"
              image="assets/storybook/homepage/bannerF.png"
              class="sf-banner--left sf-banner--container-full"
            />
          </a>
        </template>
        <template #bannerB>
          <a href="#">
            <SfBanner
              subtitle="Dresses"
              title="LINEN DRESSES"
              button-text="SHOP NOW"
              image="assets/storybook/homepage/bannerE.png"
              class="sf-banner--left"
            />
          </a>
        </template>
        <template #bannerC>
          <a href="#">
            <SfBanner
              subtitle="T-Shirts"
              title="THE OFFICE LIFE"
              image="assets/storybook/homepage/bannerC.png"
              class="sf-banner--left sf-banner--container-full"
            />
          </a>
        </template>
        <template #bannerD>
          <a href="#">
            <SfBanner
              subtitle="Summer shoes"
              title="ECO SANDALS"
              image="assets/storybook/homepage/bannerK.png"
              class="sf-banner--left sf-banner--container-full"
            />
          </a>
        </template>
      </SfBannerGrid>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfBannerGrid } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  );
