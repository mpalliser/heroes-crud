import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormComponent } from '../../components/form/form.component'

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.sass',
})
export class HeroeComponent implements OnInit {
  public title: string | undefined = inject(ActivatedRoute).snapshot.title

  // private readonly route = inject(ActivatedRoute).snapshot.paramMap.get('id')

  ngOnInit(): void {
  }
}
