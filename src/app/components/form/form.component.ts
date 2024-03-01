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
import { Heroe } from '../../models/heroe'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
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
      'eye-color': [heroe?.appearance['eye-color'] ?? '', [Validators.required]],
      'hair-color': [heroe?.appearance['hair-color'] ?? '', [Validators.required]],
      height: [heroe?.appearance.height[1] ?? '', [Validators.required]],
      race: [heroe?.appearance.race ?? '', [Validators.required]],
      weight: [heroe?.appearance.weight[1] ?? '', [Validators.required]],
    })
  }
}
