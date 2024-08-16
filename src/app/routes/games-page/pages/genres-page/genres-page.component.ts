import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from 'src/app/core/models/game';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@Component({
  selector: 'app-genres-page',
  templateUrl: './genres-page.component.html',
  styleUrls: ['./genres-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, CommonModule, SpinnerComponent]
})
export class GenresPageComponent {

  $genres: Signal<Genre[]> = this.genreService.$genres;

  constructor(private genreService: GenreService) { }
}
