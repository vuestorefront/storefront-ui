export const willChange = {
  bind(el, binding) {
    binding.name = "will-change";
    el._willChangeActive = function () {
      console.log(binding.value);
      el.style.willChange = binding.value;
    };
    el._willChangeAuto = function () {
      el.style.willChange = "auto";
    };
    el.addEventListener("mouseenter", el._willChangeActive);
    el.addEventListener("transitionend", el._willChangeAuto);
  },
  unbind(el) {
    el.removeEventListener("mouseenter", el._willChangeActive);
    el.removeEventListener("transitionend", el._willChangeAuto);
  },
};
