import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/routes/games-page/services/game.service';
import { GameDetails } from '../models/game-details';

@Injectable({ providedIn: 'root' })
export class GameIdResolver implements Resolve<Observable<GameDetails>> {
  constructor( private gameService: GameService ) {}

  resolve( route: ActivatedRouteSnapshot ): Observable<GameDetails> {
    return this.gameService.getGamesById( route.params['id'] );
  }
}
