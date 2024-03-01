import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="pb-5 pt-2">
    @for (breadcrumb of breadcrumbs; track breadcrumb; let last = $last; let first = $first) {
    @if (last) {
     <span class="tag is-light">{{ breadcrumb }}</span>
    }
    @else if (first) {
     <a [routerLink]="['']" class="mr-2"><span class="tag is-info is-light">{{ breadcrumb }}</span></a>
    } @else {
     <a>{{ breadcrumb }}</a>
    }
    }
  </div>
  `,
})
export class BreadcrumbsComponent {
  // eslint-disable-next-line dot-notation
  public readonly breadcrumbs = inject(ActivatedRoute).snapshot.data?.['breadcrumbs'] // typescript forced me to do this :D
}
