import ButtonBase from '../../components/Button/ButtonBase.vue';
import ButtonIconLeft from '../../components/Button/ButtonIconLeft.vue';
import ButtonIconRight from '../../components/Button/ButtonIconRight.vue';
import ButtonIcons from '../../components/Button/ButtonIcons.vue';

export default {
  title: 'SFUI Components/Button',
  component: ButtonBase,
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
    type: {
      control: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'destroy-primary', 'destroy-secondary', 'destroy-tertiary'],
      table: {
        category: 'Props'
      },
      description:
        'Type of button. Changes border, background and color of text'
    },
    size: {
      control: 'select',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Props'
      },
      description:
        'Type of button. Changes border, background and color of text'
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
};

const Template = (args, { argTypes }) => ({
  components: { ButtonBase },
  props: Object.keys(argTypes),
  template: `
    <ButtonBase :size="size" :type="type" :disabled="disabled">Hello</ButtonBase>
  `
});

export const Base = Template.bind({});

Base.args = {
  size: 'medium',
  type: 'primary'
};

const IconButton = (args, { argTypes }) => ({
  components: {
    ButtonIconLeft,
    ButtonIconRight,
    ButtonIcons
  },
  props: Object.keys(argTypes),
  template: `
  <div class="flex gap-x-3">
    <ButtonIconLeft :type="type" :size="size" :disabled="disabled"> 
      <svg v-if="!type.includes('destroy')" class="w-4" :class="type === 'primary' ? 'fill-white' : 'fill-primary-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <svg v-else class="w-4" :class="type === 'destroy-primary' ? 'fill-white' : 'fill-red-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <span class="ml-[10px]">Hello</span>
    </ButtonIconLeft>
    <ButtonIcons :type="type" :size="size" :disabled="disabled">  
      <svg v-if="!type.includes('destroy')" class="w-4" :class="type === 'primary' ? 'fill-white' : 'fill-primary-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <svg v-else class="w-4" :class="type === 'destroy-primary' ? 'fill-white' : 'fill-red-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <span class="mx-[10px]">Hello</span>
      <svg v-if="!type.includes('destroy')" class="w-4" :class="type === 'primary' ? 'fill-white' : 'fill-primary-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <svg v-else class="w-4" :class="type === 'destroy-primary' ? 'fill-white' : 'fill-red-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
    </ButtonIcons>
    <ButtonIconRight :type="type" :size="size" :disabled="disabled">
      <span class="mr-[10px]">Hello</span>
      <svg v-if="!type.includes('destroy')" class="w-4" :class="type === 'primary' ? 'fill-white' : 'fill-primary-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
      <svg v-else class="w-4" :class="type === 'destroy-primary' ? 'fill-white' : 'fill-red-500'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
    </ButtonIconRight>
  </div>`
});
export const WithIcons = IconButton.bind({});

WithIcons.args = {
  type: 'primary',
  size: 'medium'
};
