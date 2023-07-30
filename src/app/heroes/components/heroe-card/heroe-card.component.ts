import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ComicsItem, Hero } from '../../interfaces/Hero';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input()
  public hero!: Hero;

  @Output()
  public onSelectComic = new EventEmitter<ComicsItem>();

  private toastService = inject(ToastService);

  public showAllComics: boolean = false;

  public defaultDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptate nobis quas nesciunt atque illum aliquam incidunt sit veniam, asperiores dolorem, vero culpa accusantium sed id minus officia modi necessitatibus!'

  get heroImage(): string {
    const { extension, path } = this.hero.thumbnail
    return `${path}.${extension}`;
  }

  ngOnInit(): void {
    if(!this.hero) throw "You must send a valid hero!";
  }

  toggleShowAllComics() {
    this.showAllComics = !this.showAllComics;
  }

  selectComic(comic: ComicsItem) {
    this.onSelectComic.emit(comic);
  }

  openHeroDetail() {
    this.toastService.addToast({
      message: "this feature haven't been added yet",
      duration: 3,
      severity: 'warning',
    })
  }

}
