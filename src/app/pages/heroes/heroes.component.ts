import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { FilterComponent } from '../../components/filter/filter.component'
import { ListComponent } from '../../components/list/list.component'
import { Heroe } from '../../models/heroe'
import { HeroeService } from '../../services/heroe.service'
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FilterComponent, ListComponent, MatButtonModule, BreadcrumbsComponent],
  template: `
    <div class="container">
      <app-breadcrumbs></app-breadcrumbs>
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <app-filter (onFilterChanges)="filterHeroes($event)"></app-filter>
        <button mat-raised-button color="primary" (click)="goToNewHero()">Nuevo heroe</button>
      </div>
      <app-list (onClickEdit)="goToEditHero($event)" [heroes]="heroes"></app-list>
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

  public goToEditHero(id: string): void {
    this.router.navigate([id])
  }
}
