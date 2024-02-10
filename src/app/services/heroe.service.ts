import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { Heroe } from '../models/heroe'

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
  private readonly url = '/api/2315095485180488/search/'

  constructor(private httpClient: HttpClient) { }

  filterHeroes(filter: string): Observable<Heroe[]> {
    return this.httpClient.get<ApiResponse>(`${this.url}${filter}`).pipe(
      map(data => (data.response === ApiResponseStatus.SUCCESS
        ? data.results
        : []
      )),
    )
  }
}
