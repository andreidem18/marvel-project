import { Component, Input, OnChanges, SimpleChanges, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { ComicsItem } from 'src/app/heroes/interfaces/Hero';
import { Comic } from '../../interfaces/Comic';
import { ComicsService } from '../../services/comics.service';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { ConfirmationService } from '../../../shared/services/confirmation/confirmation.service';

@Component({
  selector: 'comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnChanges {

  @Input()
  public comicData: ComicsItem | null = null;

  @Input()
  public isOpen: boolean = true;

  @Output()
  public isOpenChange = new EventEmitter<boolean>();

  public comic?: Comic;

  get comicImage(): string {
    const { path, extension } = this.comic?.images[0] || {};
    return `${path}.${extension}`
  }

  get isFavorite(): boolean {
    return this.comicsService.favoritesList
      .some(f => f.name === this.comic?.title)
  }

  private comicsService = inject(ComicsService);
  private toastService = inject(ToastService);
  private confirmationService = inject(ConfirmationService);

  ngOnChanges(changes: SimpleChanges): void {
    const comicData = changes['comicData']?.currentValue as ComicsItem;
    if(!comicData) return;
    this.getComic(comicData)
  }

  getComic(comicData: ComicsItem) {
    this.comic = undefined;
    this.comicsService.getComic(comicData.resourceURI)
      .subscribe(res => {
        this.comic = res.data.results[0];
      });
  }

  close() { 
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }

  addToFavorites() {
    if(!this.comic) return;
    this.comicsService.addToFavorite(this.comic);
    this.toastService.addToast({
      severity: 'success',
      message: 'comic added to favorites!',
      duration: 3,
    })
  }

  onRemoveFavorite() {
    if(!this.comic) return;
    this.confirmationService.display({
      message: `<p>Are you sure you want to 
        remove <b>${this.comic.title}</b> from your favorites?<p>`,
      action: () => {
        this.comicsService.removeFavorite(this.comic!.title);
        this.toastService.addToast({
          message: "Favorite removed successfully",
          duration: 2,
          severity: "success",
        })
      }
    })
  }

  buyComic() {
    this.toastService.addToast({
      message: "this feature haven't been added yet",
      severity: "warning",
      duration: 3,
    })
  }
}
