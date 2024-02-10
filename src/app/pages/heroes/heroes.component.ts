import { Component } from '@angular/core'
import { FilterComponent } from '../../components/filter/filter.component'
import { ListComponent } from '../../components/list/list.component'
import { Heroe } from '../../models/heroe'
import { HeroeService } from '../../services/heroe.service'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FilterComponent, ListComponent],
  template: `
    <app-filter (onFilterChanges)="filterHeroes($event)"></app-filter>
    <app-list [heroes]="heroes"></app-list>
  `,
})
export class HeroesComponent {
  public heroes: Heroe[] = []

  constructor(private heroeService: HeroeService) {
    this.filterHeroes('')
  }

  filterHeroes(filter: string): void {
    this.heroeService.filterHeroes(filter).subscribe((heroes: Heroe[]) => {
      this.heroes = heroes
    })
  }
}
