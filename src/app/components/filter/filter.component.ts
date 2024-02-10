import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import {
  Subject, debounceTime, takeUntil,
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
        debounceTime(300),
      ).subscribe((value: string) => this.onFilterChanges.emit(value))
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }
}
