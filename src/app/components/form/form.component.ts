import { CommonModule } from '@angular/common'
import {
  Component, EventEmitter, Input,
  Output,
  inject,
} from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { Heroe } from '../../models/heroe'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass',
})
export class FormComponent {
  public formGroup!: FormGroup

  public isEdit = false

  @Input() set heroe(heroe: Heroe) {
    if (heroe) {
      this.isEdit = true
    }
    this.initForm(heroe)
  }

  @Output() onCreateEvent = new EventEmitter<unknown>()

  private readonly formBuilder = inject(FormBuilder)

  public submit(): void {
    this.onCreateEvent.emit(this.formGroup.value)
  }

  private initForm(heroe?: Heroe): void {
    this.formGroup = this.formBuilder.group({
      name: [heroe?.name ?? ''],
      'eye-color': [heroe?.appearance['eye-color'] ?? ''],
      'hair-color': [heroe?.appearance['hair-color'] ?? ''],
      height: [heroe?.appearance.height[1] ?? ''],
      race: [heroe?.appearance.race ?? ''],
      weight: [heroe?.appearance.weight[1] ?? ''],
    })
  }
}
