import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass',
})
export class FormComponent implements OnInit {
  public formGroup!: FormGroup

  private readonly formBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
      'eye-color': [''],
      'hair-color': [''],
      height: [''],
      race: [''],
      weight: [''],
    })
  }

  create(): void {
    console.log(this.formGroup.value)
  }
}
