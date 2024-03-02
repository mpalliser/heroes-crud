import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { FilterComponent } from '@components/filter/filter.component'
import { ListComponent } from '@components/list/list.component'
import { Heroe } from '@models/heroe'
import { HeroeService } from '@services/heroe.service'
import { BreadcrumbsComponent } from '@components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FilterComponent, ListComponent, MatButtonModule, BreadcrumbsComponent, MatSnackBarModule],
  template: `
    <div class="container">
      <app-breadcrumbs></app-breadcrumbs>
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <app-filter (onFilterChanges)="filterHeroes($event)"></app-filter>
        <button mat-raised-button color="primary" (click)="goToNewHero()">Nuevo heroe</button>
      </div>
      <app-list (onClickEdit)="goToEditHero($event)" (onDelete)="deleteHero($event)" [heroes]="heroes"></app-list>
    </div>
  `,
})
export class HeroesComponent {
  public heroes: Heroe[] = []

  private readonly heroeService = inject(HeroeService)

  private readonly router = inject(Router)

  private readonly snackBar = inject(MatSnackBar)

  private lastFilter = ''

  public filterHeroes(filter: string): void {
    this.heroes = []
    this.lastFilter = filter
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

  public deleteHero(heroe: Heroe): void {
    this.snackBar.open(`Heroe ${heroe.name} 'eliminado' satisfactoriamente`, 'Cerrar', { duration: 2000 })
    this.filterHeroes(this.lastFilter)
  }
}
