export const willChange = {
  bind(el, binding) {
    binding.name = "will-change";
    el._willChangeActive = function () {
      const label = el.getElementsByClassName("sf-label");
      label[0].style.willChange = binding.value;
    };
    el._willChangeAuto = function () {
      const label = el.getElementsByClassName("sf-label");
      label[0].style.willChange = "auto";
    };
    el.addEventListener("mouseenter", el._willChangeActive);
    el.addEventListener("transitionend", el._willChangeAuto);
  },
  unbind(el) {
    el.removeEventListener("mouseenter", el._willChangeActive);
    el.removeEventListener("transitionend", el._willChangeAuto);
  },
};
