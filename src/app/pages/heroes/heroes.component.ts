import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { FilterComponent } from '../../components/filter/filter.component'
import { ListComponent } from '../../components/list/list.component'
import { Heroe } from '../../models/heroe'
import { HeroeService } from '../../services/heroe.service'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FilterComponent, ListComponent, MatButtonModule],
  template: `
    <div class="container">
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <app-filter (onFilterChanges)="filterHeroes($event)"></app-filter>
        <button mat-raised-button color="primary" (click)="goToNewHero()">Nuevo heroe</button>
      </div>
      <app-list [heroes]="heroes"></app-list>
    </div>
  `,
})
export class HeroesComponent {
  public heroes: Heroe[] = []

  private readonly heroeService = inject(HeroeService)

  private readonly router = inject(Router)

  public filterHeroes(filter: string): void {
    this.heroes = []
    this.heroeService.filterHeroes(filter).subscribe((heroes: Heroe[]) => {
      this.heroes = heroes
    })
  }

  public goToNewHero(): void {
    this.router.navigate(['new'])
  }
}
