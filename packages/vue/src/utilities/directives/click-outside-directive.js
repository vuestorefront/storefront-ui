export const clickOutside = {
  bind(el, binding, vnode) {
    binding.name = "click-outside";
    el._outsideClickHandler = (e) => {
      e.stopPropagation();
      const { closeHandler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach((element) => {
        if (!clickedOnExcludedEl) {
          console.log(vnode);
          const excludedEl = vnode.context.$refs[element];
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        console.log("close");
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
