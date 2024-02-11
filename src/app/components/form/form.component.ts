import { Component, OnInit, inject } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass',
})
export class FormComponent implements OnInit {
  public formGroup!: FormGroup

  private readonly formBuilder = inject(FormBuilder)

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [''],
    })
  }
}
