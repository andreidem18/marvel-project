import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicsModule } from '../comics/comics.module';



@NgModule({
  declarations: [
    HeroesListComponent,
    HeroeCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    ComicsModule,
    SharedModule,
  ],
  exports: [
    HeroesListComponent,
  ]
})
export class HeroesModule { }
