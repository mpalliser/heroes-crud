import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, inject,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { Heroe } from '../../models/heroe'
import { LoadingService } from '../../services/loading.service'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatPaginatorModule, NgOptimizedImage, CommonModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent implements AfterViewInit {
  public readonly displayedColumns: string[] = ['id', 'name', 'image', 'actions']

  public readonly dataSource = new MatTableDataSource<Heroe>()

  public readonly isLoading$ = inject(LoadingService).isLoading

  @Input() set heroes(heroes: Heroe[]) {
    this.dataSource.data = heroes
  }

  @Output() onClickEdit = new EventEmitter<string>()

  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator
    }
  }
}
