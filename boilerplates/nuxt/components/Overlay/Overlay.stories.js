
import ButtonBase from '../../components/Button/ButtonBase/ButtonBase.vue';
import OverlayBase from './OverlayBase.vue';

export default {
  title: 'SFUI Components/Overlay',
  component: OverlayBase,
  parameters: {
    docs: {
      description: {
        component:
          'The overlay component. [link to component docs on the page]'
      }
    }
  }
};

const Template = () => ({
  components: { ButtonBase, OverlayBase },
  data() {
    return {
      visible: false
    };
  },
  template: `
  <div class="flex justify-center items-center">
    <ButtonBase class="absolute top-1/2" @click="visible = !visible">Show overlay</ButtonBase>
    <OverlayBase v-if="visible">
    </OverlayBase>
    <ButtonBase v-if="visible" class="absolute top-1/2" @click="visible=false">Close overlay</ButtonBase>
</div>
    `
});

export const Base = Template.bind({});
