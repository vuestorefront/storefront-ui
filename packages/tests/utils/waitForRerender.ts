import { wrappedPromise } from './wrappedPromise';

// ensures that waitForRerender always uses node setTimeout
// and not a time api that might be mocked via cy.clock()
const originalSetTimeout = setTimeout;

export const waitForRerender = () =>
  wrappedPromise(
    'waitForRerender',
    () =>
      new Promise((resolve) => {
        requestAnimationFrame(() => {
          originalSetTimeout(resolve);
        });
      }),
  );
