export const clickOutside = {
  bind(el, binding) {
    binding.name = "click-outside";
    el._outsideClickHandler = (e) => {
      e.stopPropagation();
      const closeHandler = binding.value;
      if (!el.contains(e.target)) {
        closeHandler();
      }
    };
    document.addEventListener("click", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },
  unbind() {
    document.removeEventListener("click", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
  },
};
