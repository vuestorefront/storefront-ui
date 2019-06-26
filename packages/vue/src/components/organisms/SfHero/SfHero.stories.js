// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  object,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfHero from "./SfHero.vue";
import { string } from "postcss-selector-parser";

const data = () => {
  return {
    items: [
      {
        title: "Colorful summer dresses are already in store",
        buttonText: "Learn more",
        subtitle: "Summer collection 2019",
        background: "Pink",
        image: "https://i.ibb.co/Jn6JRGh/hero-bg-left.png",
        bgPosition: "bottom left",
        containerPosition: "right"
      },
      {
        title: "Colorful summer dresses are already in store",
        subtitle: "Summer collection 2019",
        buttonText: "Learn more",
        background: "DarkGoldenRod",
        image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
      },
      {
        title: "Colorful summer dresses are already in store",
        subtitle: "Summer collection 2019",
        buttonText: "Learn more",
        background: "violet",
        image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
      }
    ]
  };
};

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$carousel-mobile-breakpoint", "$mobile-max"],
    ["$controls-top", "50%"],
    ["$controls-width", "100%"],
    ["$bullets-position-offset", "16px"],
    ["$bullets-width", "100%"]
  ]
};

storiesOf("Organisms|SfHero", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfHero },
      template: `<SfHero>
        <SfHeroItem 
          title="Colorful summer dresses are already in store"
          subtitle="Summer collection 2019"
          buttonText="Learn more"
          background="violet"
          image="https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
        ></SfHeroItem>
        <SfHeroItem 
          title="Colorful summer dresses are already in store"
          subtitle="Summer collection 2019"
          buttonText="Learn more"
          background="DarkGoldenRod"
          image="https://i.ibb.co/Jn6JRGh/hero-bg-left.png"
          backgroundPosition="bottom left"
          containerPosition="right"
        ></SfHeroItem>
        <SfHeroItem 
          title="Colorful summer dresses are already in store"
          subtitle="Summer collection 2019"
          buttonText="Learn more"
          background="pink"
          image="https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"
        ></SfHeroItem>
      </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Description</h2>
        <p>
          Swappable gallery for large web banner images.
          <br><br>
          This story shows how to use it with <code>slots</code>.
          <br><br>
          You passes any number of <code>&lt;SfHeroItem&gt;</code> with the optional <code>props</code> as below:
          <br><br>
          <code>
          title?: string,<br>
          subtitle?: string,<br>
          buttonText?: string,<br>
          background?: string,<br>
          image?: string,<br>
          backgroundPosition?: string,<br>
          containerPosition?: string<br>
          </code><br>
        </p>
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefrontui/vue/dist/SfHero.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[props] heroItems",
    () => ({
      components: { SfHero },
      data,
      template: `<SfHero :heroItems="items">
        </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Description</h2>
        <p>
          Swappable gallery for large web banner images.
          <br><br>
          This story shows how to use it with <code>props</code>.
          <br><br>
          You passes an array of objects (<code>heroItems</code>) with the format below:
          <br><br>
          <code>
          items: [<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title?: string,<br>
            &nbsp;&nbsp;buttonText?: string,<br>
            &nbsp;&nbsp;subtitle?: string,<br>
            &nbsp;&nbsp;background?: string,<br>
            &nbsp;&nbsp;image?: string,<br>
            &nbsp;&nbsp;bgPosition?: string,<br>
            &nbsp;&nbsp;containerPosition?: string,<br>
            &nbsp;}<br>
            ];
          </code>
          <br><br>
          
          This example uses below items props:<br>
          <code>
          items: [<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title: "Colorful summer dresses are already in store",<br>
            &nbsp;&nbsp;buttonText: "Learn more",<br>
            &nbsp;&nbsp;subtitle: "Summer collection 2019",<br>
            &nbsp;&nbsp;background: "Pink",<br>
            &nbsp;&nbsp;image: "https://i.ibb.co/Jn6JRGh/hero-bg-left.png",<br>
            &nbsp;&nbsp;bgPosition: "bottom left",<br>
            &nbsp;&nbsp;containerPosition: "right"<br>
            &nbsp;},<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title: "Colorful summer dresses are already in store",<br>
            &nbsp;&nbsp;subtitle: "Summer collection 2019",<br>
            &nbsp;&nbsp;buttonText: "Learn more",<br>
            &nbsp;&nbsp;background: "DarkGoldenRod",<br>
            &nbsp;&nbsp;image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"<br>
            &nbsp;},<br>
            &nbsp;{<br>
            &nbsp;&nbsp;title: "Colorful summer dresses are already in store",<br>
            &nbsp;&nbsp;subtitle: "Summer collection 2019",<br>
            &nbsp;&nbsp;buttonText: "Learn more",<br>
            &nbsp;&nbsp;background: "violet",<br>
            &nbsp;&nbsp;image: "https://i.ibb.co/6HS24vc/hero-bg-removebg-preview.png"<br>
            &nbsp;}<br>
          ]<br>
          </code>
        </p>
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefrontui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[props] options",
    () => ({
      components: { SfHero },
      props: {
        autoplay: {
          default: number("autoplay option for glide.js", 1000)
        }
      },
      data,
      template: `<SfHero :heroItems="items" :options="{ autoplay }">
        </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefrontui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[props] bulletPosition",
    () => ({
      components: { SfHero },
      props: {
        bulletsPosition: {
          default: select("bulletsPosition options", ["default", "top"], "null")
        }
      },
      data,
      template: `
      <SfHero :heroItems="items" :bulletsPosition="bulletsPosition">
        </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefrontui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[slot] controls icons",
    () => ({
      components: { SfHero },
      data,
      template: `
      <SfHero :heroItems="items">
        <template #previousIcon>
          <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">&lt; PREV</span>
        </template>
        <template #nextIcon>
        <span style="margin: 12px; cursor: pointer; font-weight: 900; font-size: 18px;">NEXT &gt;</span>
        </template>
      </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefrontui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  )
  .add(
    "[slot] bullets",
    () => ({
      components: { SfHero },
      data,
      template: `
      <SfHero :heroItems="items">
        <template #bulletInactive>
          <span style="margin: 3px; cursor: pointer;">O</span>
        </template>
        <template #bulletActive>
          <span style="margin: 3px; cursor: pointer;">X</span>
        </template>
      </SfHero>`
    }),
    {
      info: {
        summary: `
        <h2>Usage</h2>
        <pre><code>import { SfHero } from "@storefrontui/vue/dist/SfHero.vue"</code></pre>
        `
      }
    }
  );
