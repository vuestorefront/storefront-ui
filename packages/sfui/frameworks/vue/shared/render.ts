export const waitForNextRender = async () =>
  new Promise((res) => {
    setTimeout(() => {
      requestAnimationFrame(res);
    });
  });

export const waitForElementInDOM = async (element: HTMLElement) => {
  while (!document.body.contains(element)) {
    await waitForNextRender();
  }
};
