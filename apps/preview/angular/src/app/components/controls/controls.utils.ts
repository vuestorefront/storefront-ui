import { signal } from '@angular/core';
import { Controls } from './controls.types';

export function prepareControls<T extends { [k: string]: unknown }>(controls: Controls, models?: T) {
  const state = signal<T>(
    controls.reduce<T>(
      (acc, cur) => ({ ...acc, [cur.modelName]: models ? models[cur.modelName] : undefined }),
      {} as T,
    ),
  );

  return {
    state,
    ...models,
  };
}
