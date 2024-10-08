import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutoDestroyService } from '../core/utils/auto-destroy.service';
import { GameDetailComponent } from './games-page/pages/game-detail/game-detail.component';
import { GamesPageComponent } from './games-page/pages/games-page/games-page.component';
import { GameIdResolver } from '../core/resolvers/game-id.resolver';
import { GameListComponent } from '../shared/game-list/game-list.component';
import { RecentlyPagesPageComponent } from './games-page/pages/recently-pages-page/recently-pages-page.component';
import { GenresPageComponent } from './games-page/pages/genres-page/genres-page.component';
import { GenreDatesComponent } from './games-page/pages/genre-dates/genre-dates.component';
import { MyListFavComponent } from './games-page/pages/my-list-fav/my-list-fav.component';
import { FavoritesComponent } from './games-page/pages/favorites/favorites.component';
import { FavoritesGenresComponent } from './games-page/pages/favorites-genres/favorites-genres.component';
import { MainGenreComponent } from './games-page/pages/main-genre/main-genre.component';

const routes: Routes = [
  {
    path: '',
    component: GamesPageComponent
  },
  {
    path: 'recently',
    component: RecentlyPagesPageComponent
  },
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'mylist',
    component: MyListFavComponent,
    children: [
      {
        path: '',
        component: FavoritesComponent
      },
      {
        path: 'favoritesgenres',
        component: FavoritesGenresComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: ':id',
    resolve: {
      game: GameIdResolver
    },
    component: GameDetailComponent,
  },
  {
    // pagina de generos
    path: 'genre/:genre',
    component: GenreDatesComponent,
      data: {
        doNotReuse: true,
      }
  },
]

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [],
  providers: [AutoDestroyService, GameIdResolver],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class gamePagesModule { }
