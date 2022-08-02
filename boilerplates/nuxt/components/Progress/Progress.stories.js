import Progress3Xl from './Progress3Xl/Progress3Xl.vue';
import ProgressXl from './ProgressXl/ProgressXl.vue';
import Progress2Xl from './Progress2Xl/Progress2Xl.vue';
import ProgressLg from './ProgressLg/ProgressLg.vue';
import ProgressSm from './/ProgressSm/ProgressSm.vue';
import ProgressBase from './ProgressBase/ProgressBase.vue';
import ProgressLinear from './ProgressLinear/ProgressLinear.vue';

export default {
  title: 'SFUI Components/Progress',
  component: ProgressSm,
  parameters: {
    docs: {
      description: {
        component:
          'The progress component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'number',
      defaultValue: '0',
      description: 'Progress value'
    }
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
    };
  },
  methods: {
    loadProgress() {
      setInterval(() => {
        if (this.progressValue >= 100) {
          this.clearProgress();
        } else {
          this.progressValue = this.progressValue + 10;
        }
      }, 1000);
    },
    clearProgress() {
      clearInterval(this.loadProgress);
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
    };
  },
  methods: {
    loadProgress() {
      setInterval(() => {
        if (this.progressValue >= 100) {
          this.clearProgress();
        } else {
          this.progressValue = this.progressValue + 10;
        }
      }, 1000);
    },
    clearProgress() {
      clearInterval(this.loadProgress);
    }
  },
  mounted() {
    this.loadProgress();
  },
  template: `
  <div>
    <ProgressLinear :value="progressValue" class="mb-5 h-6" />
    <ProgressLinear :value="progressValue" class="mb-5 h-1" />
  </div>
  `
});
export const Linear = LinearProgress.bind({});
