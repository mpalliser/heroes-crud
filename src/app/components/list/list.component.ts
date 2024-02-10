import { Component } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent {
  public displayedColumns: string[] = ['id', 'name', 'actions']

  public data: unknown[] = [
    { id: 1, name: 'test' },
    { id: 2, name: 'superman' },
    { id: 3, name: 'spiderman' },
    { id: 4, name: 'batman' },
    { id: 5, name: 'lobezno' },
  ]
}
