import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';



@NgModule({
  declarations: [
    ComicDetailComponent,
    FavoritesListComponent,
    FavoriteItemComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
  ],
  exports: [
    ComicDetailComponent,
    FavoritesListComponent,
  ]
})
export class ComicsModule { }
