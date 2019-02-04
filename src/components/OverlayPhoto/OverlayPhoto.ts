export default {
  name: 'VsfOverlayPhoto',
  props: {
    imgSrc: {
      required: true,
      type: String,
    },
    overlayText: {
      required: true,
      type: String
    }
  }
}