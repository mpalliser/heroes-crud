import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ActivatedRoute, Router } from '@angular/router'
import { FormComponent } from '../../components/form/form.component'

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [FormComponent, MatIconModule, MatButtonModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.sass',
})
export class HeroeComponent {
  public title: string | undefined = inject(ActivatedRoute).snapshot.title

  private router = inject(Router)
  // private readonly route = inject(ActivatedRoute).snapshot.paramMap.get('id')

  public goToHeroes(): void {
    this.router.navigate([''])
  }
}
