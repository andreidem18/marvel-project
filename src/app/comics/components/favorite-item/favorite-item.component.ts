import { Component, OnInit, Input, inject } from '@angular/core';
import { Favorite } from '../../interfaces/Favorite';
import { ComicsService } from '../../services/comics.service';
import { ConfirmationService } from 'src/app/shared/services/confirmation/confirmation.service';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'comic-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {

  @Input()
  public favorite!: Favorite;

  public isComicDetailOpen: boolean = false;

  private comicsService = inject(ComicsService);
  private toastService = inject(ToastService);
  private confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    if(!this.favorite) throw "You must send a favorite item"
  }

  onRemoveFavorite(e: Event) {
    e.stopPropagation();
    this.confirmationService.display({
      message: `<p>Are you sure you want to 
        remove <b>${this.favorite.name}</b> from your favorites?<p>`,
      action: () => {
        this.comicsService.removeFavorite(this.favorite.name);
        this.toastService.addToast({
          message: "Favorite removed successfully",
          duration: 2,
          severity: "success",
        })
      }
    })
  }

  openComicDetail() {
    this.isComicDetailOpen = true;
  }
}
