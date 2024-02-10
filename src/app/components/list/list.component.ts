import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  AfterViewInit, Component, Input, ViewChild, inject,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Heroe } from '../../models/heroe'
import { LoadingService } from '../../services/loading.service'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatPaginatorModule, NgOptimizedImage, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'image', 'actions']

  public dataSource = new MatTableDataSource<Heroe>()

  public readonly isLoading$ = inject(LoadingService).isLoading

  @Input() set heroes(heroes: Heroe[]) {
    this.dataSource.data = heroes
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator
    }
  }
}
