import { Component, Inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog'
import { Heroe } from '../../models/heroe'

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatButtonModule],
  template: `
  <h2 mat-dialog-title>Atención</h2>
  <mat-dialog-content>
    <p>¿Seguro que desea eliminar a {{ data.name }}?</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button mat-dialog-close>Cancel</button>
    <button mat-raised-button color="warn" [mat-dialog-close]="true" cdkFocusInitial>Eliminar</button>
  </mat-dialog-actions>
  `,
})
export class ConfirmDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Heroe) { }
}
