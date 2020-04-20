import Vue from "vue";

const focusableElements = [
  "a[href]",
  "button",
  "button:not([disabled])",
  "[tabindex]",
  "[tabindex]:not([disabled])",
  "input",
  "input:not([disabled])",
  "select",
  "textarea",
];
// const focusableElementsSuffix = () => {
//     focusableElements.map(f => f += ':not([disabled])');
// }

export const focusable = (el) => {
  return el.querySelectorAll(focusableElements);
};

export const focusFirst = (first) => {
  Vue.nextTick(function () {
    first.focus();
  });
};

export const trap = (e, focusable) => {
  if (focusable.length < 2 && e.key === "Tab") {
    e.preventDefault();
    return;
  }
  
  const last = focusable.length - 1;

  if (e.key === "Tab" && e.shiftKey === false && e.target === focusable[last]) {
    e.preventDefault();
    focusable[0].focus();
  } else if (
    e.key === "Tab" &&
    e.shiftKey === true &&
    e.target === focusable[0]
  ) {
    e.preventDefault();
    focusable[last].focus();
  }
};
