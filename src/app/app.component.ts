import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule],
  template: `
  <mat-toolbar class="is-flex is-justify-content-space-between" color="primary">
    <span>{{ title }}</span>
    <a mat-icon-button href="https://github.com/mpalliser/heroes-crud" target="_blank">
      <mat-icon>share</mat-icon>
    </a>
  </mat-toolbar>
  <router-outlet />
  `,
})
export class AppComponent {
  title = 'Heroes crud'
}
