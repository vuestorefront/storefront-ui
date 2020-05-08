export const clickOutside = {
  bind(el, binding, vnode) {
    binding.name = "click-outside";
    const closeHandler = binding.value;
    el._outsideClickHandler = function (event) {
      if (!el.contains(event.target)) {
        event.stopPropagation();
        closeHandler();
      }
    };
    document.addEventListener("mouseup", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },
  unbind(el) {
    document.removeEventListener("mouseup", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
    el._outsideClickHandler = null;
  },
};
