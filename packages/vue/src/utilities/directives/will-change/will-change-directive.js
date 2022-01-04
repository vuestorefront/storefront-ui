export const willChange = {
  bind(el, binding) {
    binding.name = "will-change";
    el._willChangeActive = function () {
      console.log(binding.value);
      el.style.willChange = `${binding.value}`;
    };
    el._willChangeAuto = function () {
      el.style.willChange = "auto";
    };
    document.addEventListener("mouseenter", el._willChangeHandler);
    document.addEventListener("animationEnd", el._willChangeAuto);
  },
  unbind(el) {
    document.removeEventListener("mouseenter", el._willChangeHandler);
    document.removeEventListener("animationEnd", el._willChangeAuto);
  },
};
