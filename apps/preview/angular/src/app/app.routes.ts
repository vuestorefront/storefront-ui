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
      {
        path: '',
        loadComponent: () =>
          import('./pages/examples-index-page/examples-index-page.component').then(
            (mod) => mod.ExamplesIndexPageComponent,
          ),
      },
      {
        path: 'sf-button',
        loadComponent: () =>
          import('./pages/examples-sf-button-page/examples-sf-button-page.component').then(
            (mod) => mod.ExamplesSfButtonPageComponent,
          ),
      },
      {
        path: 'sf-list-item',
        loadComponent: () =>
          import('./pages/examples-sf-list-item-page/examples-sf-list-item-page.component').then(
            (mod) => mod.ExamplesSfListItemPageComponent,
          ),
      },
    ],
  },
];
