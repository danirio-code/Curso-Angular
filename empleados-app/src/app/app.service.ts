import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})

export class AppService {
  // private URL = 'https://www.newblue.es/i18n/es_ES' -> Problema CORS

  private URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

  constructor(
    public http: HttpClient,
  ) { }

  public peticionApi(): Observable<Object> {
    return this.http.get<Object>(this.URL)
  }
}
