import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import SfArrow from './SfArrow.vue';
import SfIcon from '../SfIcon/SfIcon.vue';

export default {
  title: 'Atoms|Arrow',
  decorators: [withKnobs],
};

export const Common = () => ({
  components: {
    SfArrow,
  },
  props: {
    customClass: {
      default: options(
        'CSS modifiers',
        {
          'sf-arrow--right': 'sf-arrow--right',
          'sf-arrow--top': 'sf-arrow--top',
          'sf-arrow--down': 'sf-arrow--down',
          'sf-arrow--long': 'sf-arrow--long',
          'sf-arrow--transparent': 'sf-arrow--transparent',
          'sf-arrow--rounded': 'sf-arrow--rounded',
          'sf-arrow--no-shadow': 'sf-arrow--no-shadow',
        },
        '',
        { display: 'multi-select' },
        'CSS Modifiers'
      ),
    },
    ariaLabel: {
      default: text('ariaLabel', 'Arrow Label', 'Props'),
    },
  },
  template: `<SfArrow
      :class="customClass" 
      :aria-label="ariaLabel"
    />`,
});

export const SlotDefault = () => ({
  components: {
    SfArrow,
    SfIcon,
  },
  props: {
    customClass: {
      default: options(
        'CSS modifiers',
        {
          'sf-arrow--right': 'sf-arrow--right',
          'sf-arrow--long': 'sf-arrow--long',
          'sf-arrow--transparent': 'sf-arrow--transparent',
          'sf-arrow--rounded': 'sf-arrow--rounded',
          'sf-arrow--no-shadow': 'sf-arrow--no-shadow',
        },
        '',
        { display: 'multi-select' },
        'CSS Modifiers'
      ),
    },
    ariaLabel: {
      default: text('ariaLabel', 'Arrow Label', 'Props'),
    },
  },
  template: `<SfArrow
      :class="customClass" :aria-label="ariaLabel">
      <SfIcon icon="chevron_left" class="sf-arrow__icon" size="12px" view-box="0 0 24 12"/>
    </SfArrow>`,
});

SlotDefault.story = {
  name: '[slot] default',
};
