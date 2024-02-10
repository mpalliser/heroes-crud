import { Routes } from '@angular/router'
import { HeroesComponent } from './pages/heroes/heroes.component'

export const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
]
