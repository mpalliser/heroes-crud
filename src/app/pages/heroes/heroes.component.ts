import { Component } from '@angular/core'
import { FilterComponent } from '../../components/filter/filter.component'
import { ListComponent } from '../../components/list/list.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FilterComponent, ListComponent],
  template: `
    <p>heroes works!</p>
    <app-filter (onFilterChanges)="filterHeroes($event)"></app-filter>
    <app-list></app-list>
  `,
})
export class HeroesComponent {
  filterHeroes(value: string): void {
    console.log(value)
  }
}
