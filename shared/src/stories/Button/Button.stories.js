import ButtonPrimary from '../../components/Button/Primary/ButtonPrimary.vue'
import ButtonPrimarySmall from '../../components/Button/Primary/ButtonPrimarySmall.vue'
import ButtonPrimaryLarge from '../../components/Button/Primary/ButtonPrimaryLarge.vue'
import ButtonSecondary from '../../components/Button/Secondary/ButtonSecondary.vue'
import ButtonSecondarySmall from '../../components/Button/Secondary/ButtonSecondarySmall.vue'
import ButtonSecondaryLarge from '../../components/Button/Secondary/ButtonSecondaryLarge.vue'
import ButtonTertiary from '../../components/Button/Tertiary/ButtonTertiary.vue'
import ButtonTertiarySmall from '../../components/Button/Tertiary/ButtonTertiarySmall.vue'
import ButtonTertiaryLarge from '../../components/Button/Tertiary/ButtonTertiaryLarge.vue'
import ButtonPrimaryDestroy from '../../components/Button/Primary/Destroy/ButtonPrimaryDestroy.vue'
import ButtonPrimaryDestroySmall from '../../components/Button/Primary/Destroy/ButtonPrimaryDestroySmall.vue'
import ButtonPrimaryDestroyLarge from '../../components/Button/Primary/Destroy/ButtonPrimaryDestroyLarge.vue'
import ButtonSecondaryDestroy from '../../components/Button/Secondary/Destroy/ButtonSecondaryDestroy.vue'
import ButtonSecondaryDestroySmall from '../../components/Button/Secondary/Destroy/ButtonSecondaryDestroySmall.vue'
import ButtonSecondaryDestroyLarge from '../../components/Button/Secondary/Destroy/ButtonSecondaryDestroyLarge.vue'
import ButtonTertiaryDestroy from '../../components/Button/Tertiary/Destroy/ButtonTertiaryDestroy.vue'
import ButtonTertiaryDestroySmall from '../../components/Button/Tertiary/Destroy/ButtonTertiaryDestroySmall.vue'
import ButtonTertiaryDestroyLarge from '../../components/Button/Tertiary/Destroy/ButtonTertiaryDestroyLarge.vue'
import ButtonIconLeft from '../../components/Button/Primary/Icon/ButtonPrimaryIconLeft.vue'
import ButtonIconRight from '../../components/Button/Primary/Icon/ButtonPrimaryIconRight.vue'
import ButtonIcons from '../../components/Button/Primary/Icon/ButtonPrimaryIcons.vue'

export default {
  title: 'SFUI Components/Button',
  component: ButtonPrimary,
  parameters: {
    docs: {
      description: {
        component:
          'The base button component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Native button disabled attribute'
    },
    default: {
      table: {
        category: 'Slots',
        type: {
          summary: null
        }
      },
      description: 'Use this slot to place content inside the button'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ButtonPrimary, ButtonPrimarySmall, ButtonPrimaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonPrimarySmall :disabled="disabled">Hello</ButtonPrimarySmall>
    <ButtonPrimary :disabled="disabled">Hello</ButtonPrimary>
    <ButtonPrimaryLarge :disabled="disabled">Hello</ButtonPrimaryLarge>
  </div>`
})

export const Primary = Template.bind({})

const SecondaryButton = (args, { argTypes }) => ({
  components: { ButtonSecondary, ButtonSecondarySmall, ButtonSecondaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonSecondarySmall :disabled="disabled">Hello</ButtonSecondarySmall>
    <ButtonSecondary :disabled="disabled">Hello</ButtonSecondary>
    <ButtonSecondaryLarge :disabled="disabled">Hello</ButtonSecondaryLarge>
  </div>`
})
export const Secondary = SecondaryButton.bind({})

const TertiaryButton = (args, { argTypes }) => ({
  components: { ButtonTertiary, ButtonTertiarySmall, ButtonTertiaryLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonTertiarySmall :disabled="disabled">Hello</ButtonTertiarySmall>
    <ButtonTertiary :disabled="disabled">Hello</ButtonTertiary>
    <ButtonTertiaryLarge :disabled="disabled">Hello</ButtonTertiaryLarge>
  </div>`
})
export const Tertiary = TertiaryButton.bind({})

const DestroyButton = (args, { argTypes }) => ({
  components: { ButtonPrimaryDestroy, ButtonPrimaryDestroySmall, ButtonPrimaryDestroyLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonPrimaryDestroySmall :disabled="disabled">Hello</ButtonPrimaryDestroySmall>
    <ButtonPrimaryDestroy :disabled="disabled">Hello</ButtonPrimaryDestroy>
    <ButtonPrimaryDestroyLarge :disabled="disabled">Hello</ButtonPrimaryDestroyLarge>
  </div>`
})
export const DestroyPrimary = DestroyButton.bind({})

const DestroySecondaryButton = (args, { argTypes }) => ({
  components: { ButtonSecondaryDestroy, ButtonSecondaryDestroySmall, ButtonSecondaryDestroyLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonSecondaryDestroySmall :disabled="disabled">Hello</ButtonSecondaryDestroySmall>
    <ButtonSecondaryDestroy :disabled="disabled">Hello</ButtonSecondaryDestroy>
    <ButtonSecondaryDestroyLarge :disabled="disabled">Hello</ButtonSecondaryDestroyLarge>
  </div>`
})
export const DestroySecondary = DestroySecondaryButton.bind({})

const DestroyTertiaryButton = (args, { argTypes }) => ({
  components: { ButtonTertiaryDestroy, ButtonTertiaryDestroySmall, ButtonTertiaryDestroyLarge },
  props: Object.keys(argTypes),
  template: `
  <div>
    <ButtonTertiaryDestroySmall :disabled="disabled">Hello</ButtonTertiaryDestroySmall>
    <ButtonTertiaryDestroy :disabled="disabled">Hello</ButtonTertiaryDestroy>
    <ButtonTertiaryDestroyLarge :disabled="disabled">Hello</ButtonTertiaryDestroyLarge>
  </div>`
})
export const DestroyTertiary = DestroyTertiaryButton.bind({})

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
})
export const PriamryWithIcons = IconButton.bind({})
