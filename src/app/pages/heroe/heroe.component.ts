import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { ActivatedRoute, Router } from '@angular/router'
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component'
import { FormComponent } from '../../components/form/form.component'
import { Heroe } from '../../models/heroe'
import { HeroeService } from '../../services/heroe.service'

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [FormComponent, MatIconModule, MatButtonModule, MatSnackBarModule, BreadcrumbsComponent],
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  public readonly title: string | undefined = inject(ActivatedRoute).snapshot.title

  public heroe!: Heroe

  private readonly snackBar = inject(MatSnackBar)

  private readonly router = inject(Router)

  constructor() {
    const id = inject(ActivatedRoute).snapshot.paramMap.get('id')
    if (id) {
      inject(HeroeService).getById(id).subscribe((heroe: Heroe) => {
        this.heroe = heroe
      })
    }
  }

  public goToHeroes(): void {
    this.router.navigate([''])
  }

  public onCreate(name: string): void {
    this.snackBar.open(`Heroe ${name} ${name ? 'actualizado' : 'creado'} satisfactoriamente`, 'Cerrar', { duration: 2000 })
    this.goToHeroes()
  }
}
