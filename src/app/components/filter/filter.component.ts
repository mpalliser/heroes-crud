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
  template: `
    <mat-form-field>
      <mat-label>Filtro</mat-label>
      <input matInput type="text" [formControl]="formControl">
      @if (formControl.value) {
      <button matSuffix mat-icon-button aria-label="Clear" (click)="formControl.reset()">
        <mat-icon>close</mat-icon>
      </button>
      }
    </mat-form-field>
  `,
})
export class FilterComponent implements OnInit, OnDestroy {
  public readonly formControl = new FormControl<string>('', { nonNullable: true })

  @Output() onFilterChanges = new EventEmitter<string>()

  private readonly destroy = new Subject<void>()

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        takeUntil(this.destroy),
        debounceTime(300),
      ).subscribe((value: string) => this.onFilterChanges.emit(value))

    this.formControl.setValue('bat') // set to obtain initial data, api doesn't return heroes with empty value
  }

  ngOnDestroy(): void {
    this.destroy.next()
    this.destroy.complete()
  }
}
