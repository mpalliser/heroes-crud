import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatPaginatorModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'actions']

  public dataSource = new MatTableDataSource([
    { id: 1, name: 'test' },
    { id: 2, name: 'superman' },
    { id: 3, name: 'spiderman' },
    { id: 4, name: 'batman' },
    { id: 5, name: 'lobezno' },
    { id: 6, name: 'test2' },
    { id: 7, name: 'test3' },
    { id: 8, name: 'test4' },
    { id: 9, name: 'test5' },
    { id: 10, name: 'test6' },
  ])

  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }
}
