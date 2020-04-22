let outsideClickHandler;
export const clickOutside = {
  bind(el, binding) {
    outsideClickHandler = (e) => {
      e.stopPropagation();
      const callback = binding.value;
      if (!el.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", outsideClickHandler);
    document.addEventListener("touchstart", outsideClickHandler);
  },
  unbind() {
    document.removeEventListener("click", outsideClickHandler);
    document.removeEventListener("touchstart", outsideClickHandler);
  },
};
