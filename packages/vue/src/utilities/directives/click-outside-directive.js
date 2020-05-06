export const clickOutside = {
  bind(el, binding, vnode) {
    binding.name = "click-outside";
    el._outsideClickHandler = (e) => {
      e.stopPropagation();
      const { closeHandler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      if (exclude)
        exclude.forEach((element) => {
          if (!clickedOnExcludedEl) {
            const excludedEl = vnode.context.$parent.$refs[element];
            excludedEl.$el
              ? (clickedOnExcludedEl = excludedEl.$el.contains(e.target))
              : (clickedOnExcludedEl = excludedEl.contains(e.target));
          }
        });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        closeHandler();
      }
    };
    document.addEventListener("click", el._outsideClickHandler);
    document.addEventListener("touchstart", el._outsideClickHandler);
  },
  unbind(el) {
    document.removeEventListener("click", el._outsideClickHandler);
    document.removeEventListener("touchstart", el._outsideClickHandler);
  },
};
