import Glide from '@glidejs/glide';
import SfImage from '../../atoms/SfImage/SfImage.vue';

export default {
  name: 'SfGallery',

  components: {
    SfImage,
  },

  props: {
    /**
     * Images list
     */
    images: {
      type: Array,
      default: () => [],
    },
    /**
     * Initial image number (starting from 1)
     */
    current: {
      type: Number,
      default: 1,
    },
    /**
     * Glide slider options (https://glidejs.com/docs/options/)
     */
    sliderOptions: {
      type: Object,
      default() {
        return {
          type: 'slider',
          autoplay: false,
          rewind: false,
          gap: 0,
        };
      },
    },
    /**
     * Image zoom inside or overlap the stage
     */
    inside: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      positionStatic: '',
      eventHover: '',
      pictureSelected: '',
      glide: null,
      activeIndex: this.current - 1,
    };
  },

  computed: {
    mapPictures() {
      // map images to handle picture tags with SfImage
      return this.images.map(({ normal, big }) => ({
        small: normal,
        normal: big,
      }));
    },
  },

  methods: {
    positionObject(index) {
      if (this.$refs.sfGalleryBigImage) {
        if(this.inside){
          return this.$refs.sfGalleryBigImage[index].$el.getBoundingClientRect();
        }else{
          return this.$refs.sfGalleryBigImage[index].$refs.imgLazy.getBoundingClientRect();
        }
      }
      return '';
    },
    go(index) {
      this.activeIndex = index;
      /**
       * Event for current image change (`v-model`)
       * @type {Event}
       */
      this.$emit('click', index + 1);
      if (this.glide) {
        this.glide.go(`=${index}`);
      }
    },
    addImg(picture) {
      this.pictureSelected = picture.normal.url;
    },
    changeImg($event, index) {
      this.eventHover = $event;
      if(this.inside) {
        this.positionStatic = this.positionObject(index);
        this.$refs.sfGalleryBigImage[index].$refs.imgLazy.style.transform = "scale(2)";
        this.$refs.sfGalleryBigImage[index].$refs.imgLazy.style.transformOrigin = `${$event.clientX - this.positionStatic.x}px ${$event.clientY - this.positionStatic.y}px`;
      }else{
        this.positionStatic = this.positionObject(index);
        this.$refs.imgZoom.style.transformOrigin = `${$event.clientX - this.positionStatic.x}px ${$event.clientY - this.positionStatic.y }px`;
        this.$refs.outSide.style.top = `${this.positionStatic.y + this.$refs.sfGalleryBigImage[index].$refs.imgLazy.offsetHeight}px`
        this.$refs.outSide.style.left = `${this.positionStatic.x}px`
      }
    },
    removeImg() {
      this.pictureSelected = '';
      this.$refs.sfGalleryBigImage.forEach(el => {
        el.$el.style.transform = '';
      })
    },
  },

  mounted() {
    this.$nextTick(() => {
      // handle slider with swipe and transitions with Glide.js
      // https://glidejs.com/docs/
      const glide = new Glide(this.$refs.glide, this.sliderOptions);
      glide.on('run', () => {
        this.go(glide.index);
      });
      glide.mount();
      this.glide = glide;
    });
  },

  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  },
};
