import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.sass',
})
export class HeroeComponent implements OnInit {
  private id = inject(ActivatedRoute).snapshot.paramMap.get('id')

  ngOnInit(): void {
  }
}
