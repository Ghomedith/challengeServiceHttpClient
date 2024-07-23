import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './../../../challengeService/src/app/models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private http = inject(HttpClient);

  constructor() {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}
