import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComicRes } from '../interfaces/ComicRes';
import { Observable } from 'rxjs';
import { Favorite } from '../interfaces/Favorite';
import { Comic } from '../interfaces/Comic';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { environtment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private apiUrl = environtment.apiUrl;

  private http = inject(HttpClient);
  private heroesService = inject(HeroesService);

  private _favoritesList: Favorite[] = [];

  get favoritesList(): Favorite[] {
    return [...this._favoritesList];
  }

  constructor() {
    this.loadFromLocalStorage();
  }

  getComic(comicUrl: string): Observable<ComicRes> {
    const comicId = this.getComicId(comicUrl);
    return this.http.get<ComicRes>(`${this.apiUrl}/comics/${comicId}`);
  }

  getComicId(comicUrl: string): string {
    return comicUrl.split('/').at(-1) || "";
  }

  addToFavorite(comic: Comic): void {
    
    const exists = this._favoritesList.some(f => f.name === comic.title);
    if(exists) return;

    const favorite: Favorite = {
      name: comic.title,
      resourceURI: comic.resourceURI,
      image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    }

    this._favoritesList.unshift(favorite);
    this.saveToLocalStorage();
  }

  removeFavorite(comicName: string): void {
    this._favoritesList = this._favoritesList
      .filter(f => f.name !== comicName)
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const favoritesJson = JSON.stringify(this._favoritesList);
    localStorage.setItem('favorites', favoritesJson);
  }

  loadFromLocalStorage() {
    const favorites = localStorage.getItem('favorites') || "[]";
    this._favoritesList = JSON.parse(favorites);
  }


  pickRandomFavorites() {
    const allComics = this.heroesService.heroesList?.results.map(h => h.comics.items).flat() || [];
    const randomIndexs: number[] = this.getUniqueRandoms(allComics.length, 3);
    randomIndexs.forEach(i => {
      this.getComic(allComics[i].resourceURI)
        .subscribe(comic => this.addToFavorite(comic.data.results[0]))
    })
  }

  getUniqueRandoms(max: number, quantity: number): number[] {
    const randoms = [];
    if(quantity > max) quantity = max;
    while(randoms.length < quantity) {
      const r = Math.floor(Math.random() * max);
      if(randoms.indexOf(r) === -1) randoms.push(r);
    }
    return randoms;
  }

}
