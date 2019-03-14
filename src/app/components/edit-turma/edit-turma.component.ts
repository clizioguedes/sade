import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TurmaService } from 'src/app/services/turma.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-turma',
  templateUrl: './edit-turma.component.html',
  styleUrls: ['./edit-turma.component.scss']
})
export class EditTurmaComponent implements OnInit {

  idTurma: string;
  editForm: FormGroup;
  submitted = false;
  turma: any;
  aviso = 'Este Item é Obrigatório';
  nome;

  niveis = [
    'Educação Infantil',
    'Ensino Fundamental',
    'Ensino Médio',
    'Educação de Jovens e Adultos (EJA)',
    'Educação Profissional Técnica de Nível Médio',
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditTurmaComponent>,
    private firestoreTurma: TurmaService,
    private formBuilder: FormBuilder,
  ) {
    this.idTurma = data.id;
    this.firestoreTurma.getTurma(this.idTurma).subscribe(turma => {
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
    this.firestoreTurma.updateTurma(formValue);
    this.dialogRef.close();
  }

  onNoSubmit() {
    this.dialogRef.close();
  }
}
