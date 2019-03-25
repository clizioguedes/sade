import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { School } from 'src/app/models/Escola';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.scss']
})
export class EditSchoolComponent implements OnInit {

  idEscola: string;
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
    this.idEscola = data.id;
    this.firestore.getSchool(this.idEscola).subscribe(escola => {
      this.escola = escola;
      this.editForm = this.formBuilder.group({
        inep: [this.escola.inep],
        nome: [this.escola.nome],
        anoLetivo: [this.escola.anoLetivo],
        inicioAnoLetivo: [this.escola.inicioAnoLetivo],
        fimAnoLetivo: [this.escola.fimAnoLetivo],
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
    this.firestore.addSchool(form);
    this.editForm.reset();
    this.dialogRef.close();
  }

  onNoSubmit() {
    this.dialogRef.close();
  }

}
