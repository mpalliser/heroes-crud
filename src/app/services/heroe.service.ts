import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { Heroe } from '../models/heroe'
import { environment } from '../../environments/environment.development'

enum ApiResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error'
}
interface ApiResponse {
  response: ApiResponseStatus;
  results: Heroe[];
}

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private readonly url = environment.HEROES_API

  constructor(private httpClient: HttpClient) { }

  getById(id: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(`${this.url}/${id}`)
  }

  filterHeroes(filter: string): Observable<Heroe[]> {
    return this.httpClient.get<ApiResponse>(`${this.url}/search/${filter}`).pipe(
      map(data => (data.response === ApiResponseStatus.SUCCESS
        ? data.results
        : []
      )),
    )
  }
}
