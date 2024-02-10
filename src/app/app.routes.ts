import { Routes } from '@angular/router'
import { HeroesComponent } from './pages/heroes/heroes.component'
import { HeroeComponent } from './pages/heroe/heroe.component'

export const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'new', component: HeroeComponent },
  { path: ':id', component: HeroeComponent },
]
