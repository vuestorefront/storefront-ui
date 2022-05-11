import Progress3Xl from '../../components/Progress/Progress3Xl.vue'
import ProgressXl from '../../components/Progress/ProgressXl.vue'
import Progress2Xl from '../../components/Progress/Progress2Xl.vue'
import ProgressLg from '../../components/Progress/ProgressLg.vue'
import ProgressSm from '../../components/Progress/ProgressSm.vue'
import ProgressBase from '../../components/Progress/ProgressBase.vue'
import ProgressLinear from '../../components/Progress/ProgressLinear.vue'

export default {
  title: "SFUI Components/Progress",
  component: ProgressSm,
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
    ProgressSm, 
    ProgressBase, 
    ProgressLg, 
    ProgressXl, 
    Progress2Xl, 
    Progress3Xl 
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
    <ProgressSm :value="progressValue" />
    <ProgressBase :value="progressValue" />
    <ProgressLg :value="progressValue" />
    <ProgressXl :value="progressValue" />
    <Progress2Xl :value="progressValue" />
    <Progress3Xl :value="progressValue" />
  </div>`
});

export const Progress = Template.bind({});

const LinearProgress = (args, { argTypes }) => ({
  components: { ProgressLinear },
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
    <ProgressLinear :value="progressValue" class="mb-5" />
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
