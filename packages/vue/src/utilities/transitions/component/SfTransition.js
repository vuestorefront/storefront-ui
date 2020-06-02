export default {
  functional: true,
  props: {
    transition: {
      type: [String, Boolean],
      default: "fade",
    },
    group: {
      type: Boolean,
      default: false,
    },
  },
  render(createElement, { data, children, props }) {
    const isOff = props.transition === false;
    const tag = props.group ? "transition-group" : "transition";
    return createElement(
      tag,
      { ...data, attrs: { name: isOff ? "" : props.transition } },
      children
    );
  },
};
