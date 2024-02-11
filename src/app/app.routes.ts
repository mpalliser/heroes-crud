import { Routes } from '@angular/router'
import { HeroesComponent } from './pages/heroes/heroes.component'
import { HeroeComponent } from './pages/heroe/heroe.component'

export const routes: Routes = [
  { path: '', component: HeroesComponent, data: { breadcrumbs: ['heroes'] } },
  {
    path: 'new', component: HeroeComponent, title: 'Nuevo heroe', data: { breadcrumbs: ['heroes', 'nuevo'] },
  },
  {
    path: ':id', component: HeroeComponent, title: 'Editar heroe', data: { breadcrumbs: ['heroes', 'editar'] },
  },
]
