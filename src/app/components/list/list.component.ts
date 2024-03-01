import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, inject,
} from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { filter } from 'rxjs'
import { Heroe } from '../../models/heroe'
import { LoadingService } from '../../services/loading.service'
import { ConfirmDialog } from '../confirm-dialog/confirm.dialog.component'

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

  @Output() onDelete = new EventEmitter<Heroe>()

  @ViewChild(MatPaginator) paginator!: MatPaginator

  public readonly dialog = inject(MatDialog)

  ngAfterViewInit(): void {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator
    }
  }

  public openConfirmDialog(heroe: Heroe): void {
    const dialogRef = this.dialog.open(ConfirmDialog, { data: heroe })
    dialogRef.afterClosed()
      .pipe(filter(result => Boolean(result)))
      .subscribe(() => this.onDelete.emit(heroe))
  }
}
