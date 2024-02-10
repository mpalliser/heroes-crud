import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Heroe } from '../models/heroe'

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private heroes = [
    { id: 1, name: 'test' },
    { id: 2, name: 'superman' },
    { id: 3, name: 'spiderman' },
    { id: 4, name: 'batman' },
    { id: 5, name: 'lobezno' },
    { id: 6, name: 'test2' },
    { id: 7, name: 'test3' },
    { id: 8, name: 'test4' },
    { id: 9, name: 'test5' },
    { id: 10, name: 'test6' },
  ]

  filterHeroes(filter: string): Observable<Heroe[]> {
    // return this.httpClient.get<Heroe[]>('')
    return of(this.heroes.filter(heroe => heroe.name.includes(filter)))
  }
}
