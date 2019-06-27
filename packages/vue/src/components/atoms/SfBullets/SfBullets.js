export default {
  name: "SfBullets",
  props: {
    /**
     * Number of bullets in total (active + inactive)
     */
    bulletsNumber: {
      type: Number,
      default: 0
    },
    /**
     * Index of the curretly active bullet
     */
    currentBulletIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    inactiveRight() {
      return this.bulletsNumber - 1 - this.currentBulletIndex;
    },
    inactiveLeft() {
      return this.bulletsNumber - this.inactiveRight - 1;
    }
  }
};
