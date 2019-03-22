import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog-cadastro-ok',
  templateUrl: './dialog-cadastro-ok.component.html',
  styleUrls: ['./dialog-cadastro-ok.component.scss']
})
export class DialogCadastroOkComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCadastroOkComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
