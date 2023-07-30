import { Component, inject } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Favorite } from '../../interfaces/Favorite';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'comics-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent {

  private comicsService = inject(ComicsService);
  private toastService = inject(ToastService);

  get favoritesList(): Favorite[] {
    return this.comicsService.favoritesList;
  }

  pickRandomFavorites() {
    this.comicsService.pickRandomFavorites();
    this.toastService.addToast({
      message: 'Comics added successfully!',
      severity: 'success',
      duration: 3,
    })
  }
}
