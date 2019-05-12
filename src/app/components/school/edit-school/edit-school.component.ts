import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { School } from 'src/app/models/Escola';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.scss']
})
export class EditSchoolComponent implements OnInit {

  escola: School;
  editForm: FormGroup;

  estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
  ];

  constructor(
    private firestore: FirestoreService,
    public dialogRef: MatDialogRef<EditSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: School,
    private formBuilder: FormBuilder,
  ) {
    this.firestore.getSchool(this.data.inep).subscribe(escola => {
      this.escola = escola;
      this.editForm = this.formBuilder.group({
        nome: [this.escola.nome],
        anoLetivo: [this.escola.anoLetivo],
        endereco: [this.escola.endereco],
        numero: [this.escola.numero],
        bairro: [this.escola.bairro],
        cidade: [this.escola.cidade],
        uf: [this.escola.estado],
        email: [this.escola.email],
        telefone: [this.escola.telefone],
      });
    });
  }

  ngOnInit() { }

  onSubmit() {
    const form = this.editForm.value;
    if (this.editForm.invalid) {
      return;
    }
    this.firestore.updateSchool(form);
    this.editForm.reset();
    this.dialogRef.close();
  }

  onNoSubmit() {
    this.dialogRef.close();
  }

}
