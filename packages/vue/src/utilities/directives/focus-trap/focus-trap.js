const focusableElements = [
  "a[href]",
  "button:not([disabled])",
  "button:not([hidden])",
  "[tabindex]:not([disabled])",
  "input:not([disabled])",
  "select",
  "textarea",
];

const isHidden = (selector) => selector.offsetParent === null;

export const getFocusableChildren = (el) => {
  return (
    Array.from(el.querySelectorAll(focusableElements)).filter(
      (selector) => !isHidden(selector)
    ) || []
  );
};

export const isFocusable = (e, focusableChildrenElements) =>
  Array.from(focusableChildrenElements).some((el) => el === e.target);

export const moveFocus = (e, focusableChildrenElements) => {
  if (!focusableChildrenElements.length || e.key !== "Tab") return;

  if (!isFocusable(e, focusableChildrenElements)) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  }

  if (focusableChildrenElements.length === 1) {
    e.preventDefault();
    return;
  }

  const lastElementIndex = focusableChildrenElements.length - 1;
  const isLastElement =
    e.target === focusableChildrenElements[lastElementIndex];
  const isFirstElement = e.target === focusableChildrenElements[0];
  const isGoingForward = e.shiftKey === false;

  if (isGoingForward && isLastElement) {
    e.preventDefault();
    focusableChildrenElements[0].focus();
  } else if (!isGoingForward && isFirstElement) {
    e.preventDefault();
    focusableChildrenElements[lastElementIndex].focus();
  }
};
