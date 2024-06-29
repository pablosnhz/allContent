import { MainLayoutComponent } from "./core/main-layout/main-layout.component";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./shared/game-list/games-pages.module').then(m => m.gamePagesModule)
      }
    ]
  }
];
