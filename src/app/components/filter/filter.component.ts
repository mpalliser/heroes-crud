import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {
  Subject, debounceTime, filter, takeUntil,
} from 'rxjs'

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: 'filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  public formControl = new FormControl<string>('', { nonNullable: true })

  @Output() onFilterChanges = new EventEmitter<string>()

  private destroy = new Subject<void>()

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.destroy),
        filter((value: string) => !!value && value.length > 2),
        debounceTime(300),
      ).subscribe((value: string) => this.onFilterChanges.emit(value))
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }
}
