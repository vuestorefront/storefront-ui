import { wrappedPromise } from "./wrappedPromise";

export const waitForRerender = () => wrappedPromise('waitForRerender', () => new Promise(resolve => {
    requestAnimationFrame(() => {
        setTimeout(resolve);
    });
}))
