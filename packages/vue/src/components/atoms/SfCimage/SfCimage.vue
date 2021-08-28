<script>
import { buildImageUrl, getConfig } from "cloudinary-build-url";
import { placeholderTypes } from "./helpers";
import { h } from "vue";

const SfCimg = (props, context) => {
  if (!props.publicId) {
    throw Error("PublicId is required to use this component." + props);
    return;
  }
  if ((!props.cloud || !props.cloud.cloudName) && !getConfig().cloudName) {
    throw Error("cloudName is required to use this component.");
    return;
  }
  const progressiveEffect = props.progressive ? [{ flags: "progressive" }] : [];

  const chaining = progressiveEffect.concat(props.transformations);
  const options = {
    cloud: props.cloud,
    transformations: {
      format: props.format || "auto",
      chaining,
    },
  };

  const placeholderEffects = placeholderTypes[props.placeholder];
  let src = buildImageUrl(props.publicId, options);

  if (typeof window !== "undefined" && placeholderEffects) {
    const image = new Image();

    image.onload = () => {
      context.parent.$refs.cimage.setAttribute("src", image.src);
    };

    image.src = src;
    src = buildImageUrl(props.publicId, {
      cloud: props.cloud,
      transformations: {
        chaining: chaining.concat(placeholderEffects),
      },
    });
  }

  return h(
    "img",
    {
      ...context.attrs,
      src,
      loading: props.loading,
      alt: props.alt,
      ref: "cimage",
      class: {
        "sf-cimage": true,
      },
    },
    context.children
  );
};

SfCimg.props = {
  publicId: {
    type: String,
    required: true,
  },
  progressive: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
    validator: (value) => !value || placeholderTypes[value],
  },
  cloud: {
    type: Object,
    required: true,
    validator: (value) => !!value.cloudName,
  },
  transformations: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: String,
    default: "lazy",
    validator: (value) => ["", "lazy", "eager"].includes(value),
  },
  alt: {
    type: String,
    required: true,
  },
};
export default SfCimg;
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfCimage.scss";
</style>
