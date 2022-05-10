import SfProgress3XL from '../../components/SfProgress/SfProgress3XL.vue'
import SfProgressXL from '../../components/SfProgress/SfProgressXL.vue'
import SfProgress2XL from '../../components/SfProgress/SfProgress2XL.vue'
import SfProgressLG from '../../components/SfProgress/SfProgressLG.vue'
import SfProgressSM from '../../components/SfProgress/SfProgressSM.vue'
import SfProgressBase from '../../components/SfProgress/SfProgressBase.vue'
import SfProgressLinear from '../../components/SfProgress/SfProgressLinear.vue'

export default {
  title: "SFUI Components/Progress",
  component: SfProgressSM,
  parameters: {
    docs: {
      description: {
        component:
          "The progress component. [link to component docs on the page]",
      },
    },
  },
  argTypes: {
    value: {
      control: "number",
      defaultValue: "0",
      description: "Progress value",
    },
  }
};

const Template = (args, { argTypes }) => ({
  components: { 
    SfProgressSM, 
    SfProgressBase, 
    SfProgressLG, 
    SfProgressXL, 
    SfProgress2XL, 
    SfProgress3XL 
},
  props: Object.keys(argTypes),
  data() {
    return {
      progressValue: 0
    }
  },
  methods: {
    loadProgress() {
      setInterval(() => {
        if (this.progressValue >= 100) {
          this.clearProgress()
        } else {
          this.progressValue = this.progressValue + 10
        }
      }, 1000)
    },
    clearProgress() {
      clearInterval(this.loadProgress)
    }
  },
  mounted() {
    this.loadProgress();
  },
  template: `
  <div class="flex flex-col gap-y-4">
    <SfProgressSM :value="progressValue" />
    <SfProgressBase :value="progressValue" />
    <SfProgressLG :value="progressValue" />
    <SfProgressXL :value="progressValue" />
    <SfProgress2XL :value="progressValue" />
    <SfProgress3XL :value="progressValue" />
  </div>`
});

export const Progress = Template.bind({});

const LinearProgress = (args, { argTypes }) => ({
  components: { SfProgressLinear },
  props: Object.keys(argTypes),
  data() {
    return {
      progressValue: 0
    }
  },
  methods: {
    loadProgress() {
      setInterval(() => {
        if (this.progressValue >= 100) {
          this.clearProgress()
        } else {
          this.progressValue = this.progressValue + 10
        }
      }, 1000)
    },
    clearProgress() {
      clearInterval(this.loadProgress)
    }
  },
  mounted() {
    this.loadProgress();
  },
  template: `
  <div>
    <SfProgressLinear :value="progressValue" class="mb-5" />
    <progress
      :value="progressValue"
      max="100"
      aria-label="Loading"
      class="h-1 progress-linear"
    />
  </div>
  `
});
export const Linear = LinearProgress.bind({});
