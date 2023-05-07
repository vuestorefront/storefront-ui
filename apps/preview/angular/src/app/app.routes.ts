import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExamplesLayoutComponent } from './layouts/examples-layout/examples-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'examples',
    component: ExamplesLayoutComponent,
    children: [
      // todo: will be implemented with ExamplesPageComponent for /examples index page later
      {
        path: '',
        redirectTo: 'sf-button',
        pathMatch: 'prefix',
      },
      {
        path: 'sf-button',
        loadComponent: () =>
          import('./pages/examples-sf-button-page/examples-sf-button-page.component').then(
            (mod) => mod.ExamplesSfButtonPageComponent,
          ),
      },
    ],
  },
];
