import { Injectable } from '@angular/core'
import {
  Observable, delay, forkJoin, map, tap,
} from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './data/pokemon-data'
import { User, UserFork, UserPlus } from './data/users.data'

@Injectable({
  providedIn: 'root',
})

export class AppService {
  // private URL = 'https://www.newblue.es/i18n/es_ES' -> Problema CORS

  private URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/ditto'

  private URL_USERS = 'https://jsonplaceholder.typicode.com/todos'

  constructor(
    public http: HttpClient,
  ) { }

  // Probando operators rxjs
  public peticionApiPokemon(): Observable<string> {
    return this.http.get<Pokemon>(this.URL_POKEMON)
      .pipe(
        // tap((data: Pokemon) => console.log(data)),
        map((data: Pokemon) => data.name),
        delay(5000),
        tap((data: string) => console.log(data)),
        map((data: string) => `Pokemon: ${data.toUpperCase()}`),
      )
  }

  public peticionApiUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_USERS)
  }

  public get peticionApi1(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/todos/1')
  }

  public get peticionApi2(): Observable<UserPlus> {
    return this.http.get<UserPlus>('https://jsonplaceholder.typicode.com/users/1')
  }

  public mergeObservables(): Observable<UserFork> {
    return forkJoin({
      api_1: this.peticionApi1,
      api_2: this.peticionApi2,
    })
  }
}
