import { Injectable } from '@angular/core'
import {
  Observable, delay, map, tap,
} from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './pokemon-data'

@Injectable({
  providedIn: 'root',
})

export class AppService {
  // private URL = 'https://www.newblue.es/i18n/es_ES' -> Problema CORS

  private URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

  constructor(
    public http: HttpClient,
  ) { }

  // Probando operators rxjs
  public peticionApi(): Observable<string> {
    return this.http.get<Pokemon>(this.URL)
      .pipe(
        tap((data: Pokemon) => console.log(data)),
        map((data: Pokemon) => data.name),
        delay(5000),
        tap((data: string) => console.log(data)),
        map((data: string) => `Pokemon: ${data.toUpperCase()}`),
      )
  }
}
