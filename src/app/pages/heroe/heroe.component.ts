import { Component, OnInit, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { FormComponent } from '../../components/form/form.component'
import { HeroeService } from '../../services/heroe.service'
import { Heroe } from '../../models/heroe'
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [FormComponent, MatIconModule, MatButtonModule, MatSnackBarModule, BreadcrumbsComponent],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.sass',
})
export class HeroeComponent implements OnInit {
  public readonly title: string | undefined = inject(ActivatedRoute).snapshot.title

  public heroe!: Heroe

  private readonly id: string | null = inject(ActivatedRoute).snapshot.paramMap.get('id')

  ngOnInit(): void {
    if (this.id) {
      inject(HeroeService).getById(this.id).subscribe((heroe: Heroe) => {
        this.heroe = heroe
      })
    }
  }

  public goToHeroes(): void {
    inject(Router).navigate([''])
  }

  public onCreate(formValue: unknown): void {
    inject(MatSnackBar).open(`Heroe ${this.id ? 'actualizado' : 'creado'} satisfactoriamente`, 'Cerrar')
    this.goToHeroes()
  }
}
