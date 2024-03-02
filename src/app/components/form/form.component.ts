import { CommonModule } from '@angular/common'
import {
  Component, EventEmitter, Input,
  Output,
  inject,
} from '@angular/core'
import {
  FormBuilder, FormGroup, ReactiveFormsModule, Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { Heroe } from '@models/heroe'
import { UpperCaseDirective } from '@directives/upper-case.directive'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule, UpperCaseDirective],
  templateUrl: './form.component.html',
})
export class FormComponent {
  public formGroup!: FormGroup

  @Input() set heroe(heroe: Heroe) {
    this.initForm(heroe)
  }

  @Output() onCreateEvent = new EventEmitter<string>()

  private readonly formBuilder = inject(FormBuilder)

  public submit(): void {
    this.onCreateEvent.emit(this.formGroup.get('name')?.value)
  }

  private initForm(heroe?: Heroe): void {
    this.formGroup = this.formBuilder.group({
      id: [heroe?.id ?? null, [Validators.required]],
      name: [heroe?.name ?? '', [Validators.required]],
      image: [{ value: heroe?.image?.url ?? '', disabled: true }],
    })
  }
}
