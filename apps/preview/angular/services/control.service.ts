import { effect, Injectable, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Controls } from 'src/app/components/controls/controls.types';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ControlService {
  constructor(private route: ActivatedRoute) {}

  prepareControls<T extends { [k: string]: unknown }>(controls: Controls, models?: T) {
    const state = signal<T>(
      controls.reduce<T>((acc, cur) => {
        const queryModelValue = this.route.snapshot.queryParams[cur.modelName];

        if (!queryModelValue) {
          return { ...acc, [cur.modelName]: models ? models[cur.modelName] : undefined };
        }

        if (cur.type === 'boolean') {
          return { ...acc, [cur.modelName]: queryModelValue === 'true' };
        }

        if (cur.type === 'json') {
          return { ...acc, [cur.modelName]: JSON.parse(queryModelValue) };
        }

        return { ...acc, [cur.modelName]: queryModelValue };
      }, {} as T),
    );

    effect(() => {
      const paramsObject = Object.keys(state()).reduce(
        (acc, cur) => (models && state()[cur] !== models[cur] ? { ...acc, [cur]: state()[cur] } : acc),
        {},
      );

      const params = new HttpParams({ fromObject: paramsObject }).toString();

      window.history.replaceState(
        window.history.state,
        window.document.title,
        params ? `${window.location.pathname}?${params}` : window.location.pathname,
      );
    });

    return {
      state,
      ...models,
    };
  }
}
