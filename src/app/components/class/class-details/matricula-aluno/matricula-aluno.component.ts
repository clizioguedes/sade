import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Student, Class } from 'src/app/models/Escola';

@Component({
  selector: 'app-matricula-aluno',
  templateUrl: './matricula-aluno.component.html',
  styleUrls: ['./matricula-aluno.component.scss']
})
export class MatriculaAlunoComponent implements OnInit {

  idTurma: string;

  alunos: Array<Student>;

  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento', 'cpf', 'acoes'];

  constructor(
    private firestore: FirestoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idTurma = data.id;
    this.firestore.getStudents().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  ngOnInit() {
  }

  matriculaAluno(idAluno: string) {
    this.firestore.matriculaAluno(idAluno, this.idTurma);
  }
}
