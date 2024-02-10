import {
  AfterViewInit, Component, Input, ViewChild,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Heroe } from '../../models/heroe'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatPaginatorModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'actions']

  public dataSource!: MatTableDataSource<Heroe>

  @Input() set heroes(heroes: Heroe[]) {
    if (heroes.length) {
      if (this.dataSource) {
        this.dataSource.data = heroes
      } else {
        this.dataSource = new MatTableDataSource(heroes)
      }
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
}
