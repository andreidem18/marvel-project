import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { HeroesService } from '../../../heroes/services/heroes.service';

@Component({
  selector: 'shared-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  public inputSearch = new FormControl("");
  private heroesService = inject(HeroesService);

  ngOnInit(): void {
    this.inputSearch.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.heroesService.getAllHeroes({ name: value || ""}).subscribe();
      });
  }

}
