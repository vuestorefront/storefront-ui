import SfSpinnerSm from '../../components/SfSpinner/SfSpinnerSm.vue'
import SfSpinnerBase from '../../components/SfSpinner/SfSpinnerBase.vue'
import SfSpinnerLg from '../../components/SfSpinner/SfSpinnerLg.vue'
import SfSpinnerXl from '../../components/SfSpinner/SfSpinnerXl.vue'
import SfSpinner2xl from '../../components/SfSpinner/SfSpinner2xl.vue'
import SfSpinner3xl from '../../components/SfSpinner/SfSpinner3xl.vue'
import SfSpinnerLinear from '../../components/SfSpinner/SfSpinnerLinear.vue'

export default {
  title: 'SFUI Components/Spinner',
  component: SfSpinnerBase,
  parameters: {
    docs: {
      description: {
        component:
          'The component to show users that loading is underway of content. [link to component docs on the page]'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    SfSpinnerSm,
    SfSpinnerBase,
    SfSpinnerLg,
    SfSpinnerXl,
    SfSpinner2xl,
    SfSpinner3xl
  },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfSpinnerSm class="mb-2" />
    <SfSpinnerBase class="mb-2" /> 
    <SfSpinnerLg class="mb-2" />
    <SfSpinnerXl class="mb-2" />
    <SfSpinner2xl class="mb-4" />
    <SfSpinner3xl />
  </div>`
});

export const Common = Template.bind({})

const Linear = (args, { argTypes }) => ({
  components: { SfSpinnerLinear },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfSpinnerLinear />
  </div>`
})

export const SpinnerLinear = Linear.bind({})
