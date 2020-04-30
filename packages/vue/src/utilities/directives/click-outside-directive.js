export const clickOutside = {
  bind(el, binding, vnode) {
    binding.name = "click-outside";
    el._outsideClickHandler = (e) => {
      e.stopPropagation();
      const { closeHandler, exclude } = binding.value;
      let clickedOnExcludedEl = false;
      exclude.forEach((element) => {
        if (!clickedOnExcludedEl) {
          const excludedEl = vnode.context.$nextTick(() => {
            console.log(
              vnode.context.$root.$children[0].$refs[element],
              e.target,
              el
            );
            return vnode.context.$root.$children[0].$refs[element];
          });
          console.log(excludedEl);
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
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
