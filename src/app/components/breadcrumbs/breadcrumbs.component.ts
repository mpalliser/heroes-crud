import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.sass',
})
export class BreadcrumbsComponent {
  // eslint-disable-next-line dot-notation
  public readonly breadcrumbs = inject(ActivatedRoute).snapshot.data?.['breadcrumbs']
}
