import SpinnerSm from '../../components/Spinner/SpinnerSm.vue'
import SpinnerBase from '../../components/Spinner/SpinnerBase.vue'
import SpinnerLg from '../../components/Spinner/SpinnerLg.vue'
import SpinnerXl from '../../components/Spinner/SpinnerXl.vue'
import Spinner2Xl from '../../components/Spinner/Spinner2Xl.vue'
import Spinner3Xl from '../../components/Spinner/Spinner3Xl.vue'
import SpinnerLinear from '../../components/Spinner/SpinnerLinear.vue'

export default {
  title: 'SFUI Components/Spinner',
  component: SpinnerBase,
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
    SpinnerSm,
    SpinnerBase,
    SpinnerLg,
    SpinnerXl,
    Spinner2Xl,
    Spinner3Xl
  },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SpinnerSm class="mb-2" />
    <SpinnerBase class="mb-2" /> 
    <SpinnerLg class="mb-2" />
    <SpinnerXl class="mb-2" />
    <Spinner2Xl class="mb-4" />
    <Spinner3Xl />
  </div>`
})

export const Common = Template.bind({})

const Linear = (args, { argTypes }) => ({
  components: { SpinnerLinear },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SpinnerLinear />
  </div>`
})

export const LinearSpinner = Linear.bind({})
