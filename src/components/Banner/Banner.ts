export default {
  name: 'VsfBanner',
  data () {
    return {
      stylesObj: {
        backgroundImage: this.bgImg,
        backgroundColor: this.bgCol === 'default' ? '#F1F2F3' : this.bgCol
      }
    }
  },
  props: {
    bgImg: {
      required: false,
      type: String,
      default: null
    },
    bgCol: {
      required: false,
      type: String,
      default: 'default'
    },
    align: {
      required: false,
      type: String,
      default: 'left'
    }
  }
}