import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Student, Class, Matter } from 'src/app/models/Escola';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-matricula-aluno',
  templateUrl: './matricula-aluno.component.html',
  styleUrls: ['./matricula-aluno.component.scss']
})
export class MatriculaAlunoComponent implements OnInit {

  idTurma: string;

  alunos: Array<Student>;
  nomeAluno: string;
  inep: string;
  disciplinas: Array<Matter>;

  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento', 'cpf', 'acoes'];

  registerForm: FormGroup;
  registerFormDiario: FormGroup;
  submitted: boolean;

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idTurma = data.id;
    this.firestore.getStudentsNoMatriculados().subscribe(alunos => {
      this.alunos = alunos;
    });
    this.firestore.getSubjects(this.idTurma).subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date()],
      idTurma: [this.idTurma],
      idEscola: [this.data.idEscola],
      idAluno: [],
      inep: [],
      nome: [],
    });
  }

  get f() { return this.registerForm.controls; }

  matriculaAluno(idAluno: string, nome: string, inep: string) {
    this.submitted = true;
    this.registerForm.value.idAluno = idAluno;
    this.registerForm.value.nome = nome;
    this.registerForm.value.inep = inep;
    const formValue = this.registerForm.value;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.firestore.matriculaAluno(idAluno, this.idTurma, formValue);
  }
}
