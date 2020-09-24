import { storiesOf } from "@storybook/vue";
import { SfTopBar, SfButton, SfImage } from "@storefront-ui/vue";
storiesOf("Organisms|TopBar", module)
  .add("Common", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
      <template #center>
        <div style="display: flex;" class="desktop-only">
          <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">Download our application.</p>
          <SfButton style="padding: 0" class="sf-button--text">Find out more</SfButton>
        </div>
        <SfImage class="smartphone-only" src="/assets/storybook/SfTopBar/logo.svg" alt="logo"/>
      </template>
      <template #left>
        <SfButton style="padding: 0" class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #right>
        <SfImage style="margin-right: var(--spacer-sm)" src="/assets/storybook/SfTopBar/currency.svg" alt="currency"/>
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
      </template>
    </SfTopBar>`,
  }))
  .add("[slot] left", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
        <template #center>
        <div style="display: flex;" class="desktop-only">
          <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">Download our application.</p>
          <SfButton style="padding: 0" class="sf-button--text">Find out more</SfButton>
        </div>
        <SfImage class="smartphone-only" src="/assets/storybook/SfTopBar/logo.svg" alt="logo"/>
      </template>
      <template #left>
        CUSTOM LEFT
      </template>
      <template #right>
        <SfImage style="margin-right: var(--spacer-sm)" src="/assets/storybook/SfTopBar/currency.svg" alt="currency"/>
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
      </template>
    </SfTopBar>`,
  }))
  .add("[slot] center", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
      <template #center>
        CUSTOM CENTER
      </template>
      <template #left>
        <SfButton style="padding: 0" class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #right>
        <SfImage style="margin-right: var(--spacer-sm)" src="/assets/storybook/SfTopBar/currency.svg" alt="currency"/>
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
      </template>
    </SfTopBar>`,
  }))
  .add("[slot] right", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
      <template #center>
      <div style="display: flex;" class="desktop-only">
        <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">Download our application.</p>
        <SfButton style="padding: 0" class="sf-button--text">Find out more</SfButton>
      </div>
      <SfImage class="smartphone-only" src="/assets/storybook/SfTopBar/logo.svg" alt="logo"/>
      </template>
      <template #left>
        <SfButton style="padding: 0" class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #right>
        CUSTOM RIGHT
      </template>
    </SfTopBar>`,
  }));
