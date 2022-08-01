
import TagBase from '../../components/Tag/TagBase';
import TagIcon from '../../components/Tag/TagIcon';
import TagIconLeft from '../../components/Tag/TagIconLeft';
import TagIconRight from '../../components/Tag/TagIconRight';
import TagBadge from '../../components/Tag/TagBadge';

export default {
  title: 'SFUI Components/Tag',
  component: TagBase,
  parameters: {
    docs: {
      description: {
        component:
          'The tag component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'Label'
        }
      },
      defaultValue: 'Label',
      description: 'Label text.'
    },
    type: {
      control: 'select',
      options: [
        'base',
        'info',
        'positive',
        'warning',
        'error',
        'disabled'
      ],
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'base'
        }
      },
      defaultValue: 'base',
      description: 'Tag type.'
    },
    size: {
      control: 'radio',
      options: ['base', 'sm'],
      defaultValue: 'base',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'base'
        }
      },
      description: 'Change size of the component'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { TagBase },
  props: Object.keys(argTypes),
  template: `
    <TagBase 
      :label="label"
      :type="type"
      :size="size"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      </svg>
    </TagBase>
    `
});

export const Base = Template.bind({});

const TagWithIcon = (args, { argTypes }) => ({
  components: { TagIcon },
  props: Object.keys(argTypes),
  template: `
    <TagIcon 
      :label="label"
      :type="type"
      :size="size"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      </svg>
    </TagIcon>
    `
});

export const Icon = TagWithIcon.bind({});

const TagWithIconLeft = (args, { argTypes }) => ({
  components: { TagIconLeft },
  props: Object.keys(argTypes),
  template: `
    <TagIconLeft 
      :label="label"
      :type="type"
      :size="size"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      </svg>
    </TagIconLeft>
    `
});

export const IconLeft = TagWithIconLeft.bind({});

const TagWithIconRight = (args, { argTypes }) => ({
  components: { TagIconRight },
  props: Object.keys(argTypes),
  template: `
    <TagIconRight 
      :label="label"
      :type="type"
      :size="size"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      </svg>
    </TagIconRight>
    `
});

export const IconRight = TagWithIconRight.bind({});

const TagBadgeMode = (args, { argTypes }) => ({
  components: { TagBadge },
  props: Object.keys(argTypes),
  template: `
    <TagBadge 
      :label="label"
      :type="type"
      :size="size"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
      </svg>
    </TagBadge>
    `
});

export const BadgeVariant = TagBadgeMode.bind({});
