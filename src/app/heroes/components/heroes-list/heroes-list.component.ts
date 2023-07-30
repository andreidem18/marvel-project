import { Component, inject, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesList } from '../../interfaces/HeroesRes';
import { LimitOffset } from 'src/app/shared/interfaces/LimitOffset';
import { FormControl } from '@angular/forms';
import { ComicsItem } from '../../interfaces/Hero';

@Component({
  selector: 'heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  private heroesService = inject(HeroesService);
  public orderBy = new FormControl('name');
  public comicSelected: ComicsItem | null = null;
  public isComicOpen: boolean = false;

  ngOnInit(): void {
    this.orderBy.valueChanges.subscribe(value => {
      this.handleOrderBy(value || "name")
    });
  }

  get heroesList(): HeroesList | undefined { 
    return this.heroesService.heroesList;
  };

  get isLoading(): boolean {
    return this.heroesService.isLoading;
  }

  setPagination(pagination: LimitOffset) {
    this.heroesService.getAllHeroes(pagination).subscribe();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleOrderBy(value: string) {
    this.heroesService.getAllHeroes({ 
      orderBy: value as 'name' | 'modified',
    }).subscribe();
  }

  selectComic(comic: ComicsItem) {
    this.comicSelected = comic;
    this.isComicOpen = true;
  }

}
