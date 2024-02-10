import { Component } from '@angular/core'
import { FilterComponent } from '../../components/filter/filter.component'

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FilterComponent],
  template: `
    <p>heroes works!</p>
    <app-filter></app-filter>`,
})
export class HeroesComponent {

}
