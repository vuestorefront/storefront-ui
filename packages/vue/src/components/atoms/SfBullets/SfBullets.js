export default {
  name: "SfBullets",
  props: {
    bulletsNumber: {
      type: Number,
      default: 0
    },
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
