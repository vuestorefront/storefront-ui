import {
  Fragment
} from 'vue-fragment'

export default {
  name: 'Sftab',
  // inject: ["sharedState"],
  components: {
    Fragment
  },
  props: {
    tab: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    tabClick() {
      this.$emit('tabClick', this.index)
    }
  },
  // computed: {
  //   isActive() {
  //     return this.valueComputed === this.sharedState.activeTabValue;
  //   },
  //   valueComputed() {
  //     return this.value || this._uid;
  //   }
  // }
}