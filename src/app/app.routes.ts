import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./modules/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import ('./modules/user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
