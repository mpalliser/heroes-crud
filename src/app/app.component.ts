import { Component } from '@angular/core'
import { RouterModule, RouterOutlet } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
  <mat-toolbar class="is-flex is-justify-content-space-between" color="primary">
    <span class="is-clickable" [routerLink]="['']">{{ title }}</span>
    <a mat-icon-button [href]="githubUrl" target="_blank">
      <mat-icon>share</mat-icon>
    </a>
  </mat-toolbar>
  <router-outlet />
  `,
})
export class AppComponent {
  public readonly title = 'Heroes crud'

  public readonly githubUrl = 'https://github.com/mpalliser/heroes-crud'
}
