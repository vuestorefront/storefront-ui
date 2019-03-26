export default {
  name: "SfCategoryTile",
  data() {
    return {
      stylesObj: {
        backgroundImage: 'url("' + this.img + '")'
      }
    };
  },
  props: {
    img: {
      required: false,
      type: String,
      default: null
    }
  }
};
