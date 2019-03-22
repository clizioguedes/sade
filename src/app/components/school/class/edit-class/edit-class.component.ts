import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit {

  idClass: string;
  editForm: FormGroup;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  niveis = [
    'Educação Infantil',
    'Ensino Fundamental',
    'Ensino Médio',
    'Educação de Jovens e Adultos (EJA)',
    'Educação Profissional Técnica de Nível Médio',
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditClassComponent>,
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
  ) {
    this.idClass = data.id;
    this.firestore.getClass(this.idClass).subscribe(turma => {
      this.editForm = this.formBuilder.group({
        dataCadastro: [turma.dataCadastro],
        dataEdicao: [new Date()],
        nome: [turma.nome, Validators.required],
        periodo: [turma.periodo, Validators.required],
        nivel: [turma.nivel, Validators.required],
        modalidade: [turma.modalidade],
      });
    });
  }

  ngOnInit() {

  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    if (this.f.nivel.value !== 'Ensino Fundamental') {
      this.editForm.value.modalidade = 'N/A';
    }
    this.submitted = true;
    const formValue = this.editForm.value;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    this.firestore.updateClass(formValue);
    this.dialogRef.close();
  }

  onNoSubmit() {
    this.dialogRef.close();
  }
}
