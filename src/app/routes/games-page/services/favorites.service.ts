import { Injectable, signal, WritableSignal } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameDetails } from 'src/app/core/models/game-details';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  $user: WritableSignal<User>;

  constructor() {
    this.$user = signal<User>(new User(this, this.get()));
  }

  set(favorites: Game[]){
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
    this.$user.set(new User(this, favorites));
  }

  // agregue el setDetail para anadir a la lista de favoritos
  setDetail(favorites: GameDetails[]){
    sessionStorage.setItem('favorites', JSON.stringify(favorites));
    this.$user.set(new User(this, this.get()));
  }

  get(){
    const inLocalStorage = sessionStorage.getItem('favorites');
    if(inLocalStorage){
      return JSON.parse(inLocalStorage);
    }
    return [];
  }

  // update(){
  //   const inLocalStorage = sessionStorage.getItem('favorites') ;
  //   if(inLocalStorage){
  //     this.set(JSON.parse(inLocalStorage));
  //   }
  // }
}
