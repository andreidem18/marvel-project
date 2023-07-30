import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HeroesList, HeroesRes } from '../interfaces/HeroesRes';
import { EndpointParams } from '../interfaces/EndpointParams';
import { finalize, tap, Observable } from 'rxjs';
import { environtment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private http = inject(HttpClient);
  private apiUrl = environtment.apiUrl;
  private nameFilter: string = ""
  
  private _heroesList?: HeroesList;
  get heroesList(): HeroesList | undefined { 
    return this._heroesList 
      ? {...this._heroesList} 
      : undefined 
  };

  public isLoading: boolean = false;

  constructor() { 
    this.getAllHeroes().subscribe();
  }

  getAllHeroes(endpointParams?: EndpointParams): Observable<HeroesRes> {
    
    const params = this.getParams(endpointParams);

    this.isLoading = true;
    return this.http.get<HeroesRes>(`${this.apiUrl}/characters`, { params })
      .pipe(
        tap(res => this._heroesList = res.data),
        finalize(() => this.isLoading = false)
      )
  }

  getParams(endpointParams?: EndpointParams): HttpParams {
    const { offset = 0, limit = 10, name, orderBy, reset = false } = endpointParams || {};

    let params = new HttpParams()
      .set("offset", offset)
      .set("limit", limit)

    if(reset) this.nameFilter = "";

    if(name) {
      this.nameFilter = name;
      params = params.set('nameStartsWith', name);
    } else if (name === ""){
      // Don't add the param
    } else if (this.nameFilter) {
      params = params.set('nameStartsWith', this.nameFilter);
    }

    if(orderBy) params = params.set('orderBy', orderBy);

    return params;
  }

}
