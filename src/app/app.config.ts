import { ApplicationConfig } from '@angular/core'
import { Routes, provideRouter } from '@angular/router'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { loadingInterceptor } from './interceptors/loading.interceptor'

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/heroes/heroes.component').then(c => c.HeroesComponent),
    data: { breadcrumbs: ['heroes'] },
  },
  {
    path: 'new',
    loadComponent: () => import('./pages/heroe/heroe.component').then(c => c.HeroeComponent),
    title: 'Nuevo heroe',
    data: { breadcrumbs: ['heroes', 'nuevo heroe'] },
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/heroe/heroe.component').then(c => c.HeroeComponent),
    title: 'Editar heroe',
    data: { breadcrumbs: ['heroes', 'editar heroe'] },
  },
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([loadingInterceptor])),
  ],
}
