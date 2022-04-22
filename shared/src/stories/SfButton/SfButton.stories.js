import ButtonPrimary from "../../components/SfButton/Primary/ButtonPrimary.vue";
import ButtonPrimarySmall from "../../components/SfButton/Primary/ButtonPrimarySmall.vue";
import ButtonPrimaryLarge from "../../components/SfButton/Primary/ButtonPrimaryLarge.vue";
import ButtonSecondary from "../../components/SfButton/Secondary/ButtonSecondary.vue";
import ButtonSecondarySmall from "../../components/SfButton/Secondary/ButtonSecondarySmall.vue";
import ButtonSecondaryLarge from "../../components/SfButton/Secondary/ButtonSecondaryLarge.vue";
import ButtonTertiary from "../../components/SfButton/Tertiary/ButtonTertiary.vue";
import ButtonTertiarySmall from "../../components/SfButton/Tertiary/ButtonTertiarySmall.vue";
import ButtonTertiaryLarge from "../../components/SfButton/Tertiary/ButtonTertiaryLarge.vue";
import ButtonDestroy from "../../components/SfButton/Primary/Destroy/ButtonDestroy.vue";
import ButtonDestroySmall from "../../components/SfButton/Primary/Destroy/ButtonDestroySmall.vue";
import ButtonDestroyLarge from "../../components/SfButton/Primary/Destroy/ButtonDestroyLarge.vue";
import ButtonDestroySecondary from "../../components/SfButton/Secondary/Destroy/ButtonDestroySecondary.vue";
import ButtonDestroySecondarySmall from "../../components/SfButton/Secondary/Destroy/ButtonDestroySecondarySmall.vue";
import ButtonDestroySecondaryLarge from "../../components/SfButton/Secondary/Destroy/ButtonDestroySecondaryLarge.vue";
import ButtonDestroyTertiary from "../../components/SfButton/Tertiary/Destroy/ButtonDestroyTertiary.vue";
import ButtonTertiaryDestroySmall from "../../components/SfButton/Tertiary/Destroy/ButtonTertiaryDestroySmall.vue";
import ButtonTertiaryDestroyLarge from "../../components/SfButton/Tertiary/Destroy/ButtonTertiaryDestroyLarge.vue";
import ButtonIconLeft from "../../components/SfButton/Primary/Icon/ButtonPrimaryIconLeft.vue";
import ButtonIconRight from "../../components/SfButton/Primary/Icon/ButtonPrimaryIconRight.vue";
import ButtonIcons from "../../components/SfButton/Primary/Icon/ButtonPrimaryIcons.vue";


export default {
  title: "SFUI Components/Button",
  component: ButtonPrimary,
  parameters: {
    docs: {
      description: {
        component:
          "The base button component. [link to component docs on the page]",
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description:
        "Native button disabled attribute",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content inside the button",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ButtonPrimary, ButtonPrimarySmall, ButtonPrimaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonPrimarySmall :disabled="disabled">Hello</ButtonPrimarySmall>
    <ButtonPrimary :disabled="disabled">Hello</ButtonPrimary>
    <ButtonPrimaryLarge :disabled="disabled">Hello</ButtonPrimaryLarge>
  </div>`
});

export const Primary = Template.bind({});

const SecondaryButton = (args, { argTypes }) => ({
  components: { ButtonSecondary, ButtonSecondarySmall, ButtonSecondaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonSecondarySmall :disabled="disabled">Hello</ButtonSecondarySmall>
    <ButtonSecondary :disabled="disabled">Hello</ButtonSecondary>
    <ButtonSecondaryLarge :disabled="disabled">Hello</ButtonSecondaryLarge>
  </div>`
});
export const Secondary = SecondaryButton.bind({});

const TertiaryButton = (args, { argTypes }) => ({
  components: { ButtonTertiary, ButtonTertiarySmall, ButtonTertiaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonTertiarySmall :disabled="disabled">Hello</ButtonTertiarySmall>
    <ButtonTertiary :disabled="disabled">Hello</ButtonTertiary>
    <ButtonTertiaryLarge :disabled="disabled">Hello</ButtonTertiaryLarge>
  </div>`
});
export const Tertiary = TertiaryButton.bind({});

const DestroyButton = (args, { argTypes }) => ({
  components: { ButtonDestroy, ButtonDestroySmall, ButtonDestroyLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonDestroySmall :disabled="disabled">Hello</ButtonDestroySmall>
    <ButtonDestroy :disabled="disabled">Hello</ButtonDestroy>
    <ButtonDestroyLarge :disabled="disabled">Hello</ButtonDestroyLarge>
  </div>`
});
export const Destroy = DestroyButton.bind({});

const DestroySecondaryButton = (args, { argTypes }) => ({
  components: { ButtonDestroySecondary, ButtonDestroySecondarySmall, ButtonDestroySecondaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonDestroySecondarySmall :disabled="disabled">Hello</ButtonDestroySecondarySmall>
    <ButtonDestroySecondary :disabled="disabled">Hello</ButtonDestroySecondary>
    <ButtonDestroySecondaryLarge :disabled="disabled">Hello</ButtonDestroySecondaryLarge>
  </div>`
});
export const DestroySecondary = DestroySecondaryButton.bind({});

const DestroyTertiaryButton = (args, { argTypes }) => ({
  components: { ButtonDestroyTertiary, ButtonTertiaryDestroySmall, ButtonTertiaryDestroyLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonTertiaryDestroySmall :disabled="disabled">Hello</ButtonTertiaryDestroySmall>
    <ButtonDestroyTertiary :disabled="disabled">Hello</ButtonDestroyTertiary>
    <ButtonTertiaryDestroyLarge :disabled="disabled">Hello</ButtonTertiaryDestroyLarge>
  </div>`
});
export const DestroyTertiary = DestroyTertiaryButton.bind({});

const IconButton = (args, { argTypes }) => ({
  components: { 
    ButtonIconLeft,
    ButtonIconRight,
    ButtonIcons
  },
  props: Object.keys(argTypes),
  template: `
  <div class="flex gap-x-3">
    <ButtonIconLeft :disabled="disabled"> 
      <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <span class="ml-[10px]">Hello</span>
    </ButtonIconLeft>
    <ButtonIcons :disabled="disabled">  
      <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
      <span class="mx-[10px]">Hello</span>
      <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
    </ButtonIcons>
    <ButtonIconRight :disabled="disabled">
      <span class="mr-[10px]">Hello</span>
      <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
    </ButtonIconRight>
  </div>`
});
export const WithIcons = IconButton.bind({});
