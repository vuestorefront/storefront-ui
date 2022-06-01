
import TagBase from '../../components/Tag/TagBase';
import TagIcon from '../../components/Tag/TagIcon';
import TagIconLeft from '../../components/Tag/TagIconLeft';
import TagIconRight from '../../components/Tag/TagIconRight';

export default {
  title: 'SFUI Components/Tag',
  component: TagBase,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '100px',
      description: {
        component:
          'The tag component. [link to component docs on the page]'
      }
    }
  }
};

const Template = () => ({
  components: { TagBase },
  template: `
    <TagBase />
    `
});

export const Common = Template.bind({});

const TagWithIcon = () => ({
  components: { TagIcon },
  template: `
    <TagIcon />
    `
});

export const Icon = TagWithIcon.bind({});

const TagWithIconLeft = () => ({
  components: { TagIconLeft },
  template: `
    <TagIconLeft />
    `
});

export const IconLeft = TagWithIconLeft.bind({});

const TagWithIconRight = () => ({
  components: { TagIconRight },
  template: `
    <TagIconRight />
    `
});

export const IconRight = TagWithIconRight.bind({});
