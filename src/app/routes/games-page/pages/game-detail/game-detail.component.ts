import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, OnInit, Input, Signal, computed } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Game } from "src/app/core/models/game";
import { GameDetails } from "src/app/core/models/game-details";
import { User } from "src/app/core/models/user";
import { GameCardComponent } from "src/app/shared/game-card/game-card.component";
import { FavoritesService } from "../../services/favorites.service";


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, GameCardComponent]
})
export class GameDetailComponent implements OnInit{

gameDetails: GameDetails;
isExpanded: boolean = false;
$user: Signal<User | null> = this.favoriteService.$user;

$favoritesDetail: Signal<boolean> = computed(() => {
  Array.from(this.favoriteService.$user().favorites().values() ?? new Set())
  return this.favoriteService.$user().favorites().has(this.gameDetails.id);
  }
);

constructor( private route: ActivatedRoute, private favoriteService: FavoritesService ) { }

  ngOnInit(): void {
    this.gameDetails = this.route.snapshot.data['game'] as GameDetails;
  }

  addGameToFavoritesDetail() {
    this.$user()?.addGame(this.gameDetails);
    console.log(this.$user()?.favorites());
  }

  toggleText() {
    this.isExpanded = !this.isExpanded;
  }
}
