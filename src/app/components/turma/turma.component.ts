import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/models/Escola';
import { TurmaService } from 'src/app/services/turma.service';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddDisciplinaComponent } from './add-disciplina/add-disciplina.component';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  idTurma: string;
  turma: Turma;
  alunosDaTurma: Array<any>;
  disciplinas: Array<any>;
  fileNameDialogRef: MatDialogRef<AddDisciplinaComponent>;

  constructor(
    private firestoreTurma: TurmaService,
    private firestoreAluno: AlunoService,
    private firestoreDisciplina: DisciplinaService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.idTurma = this.route.snapshot.params.id;
    this.firestoreTurma.getTurma(this.idTurma).subscribe(turma => {
      this.turma = turma;
      if (this.turma.id == null) {
        this.firestoreTurma.addId(this.idTurma);
      }
    });
    this.firestoreAluno.getAlunosTurma(this.idTurma).subscribe(alunosDaTurma => {
      this.alunosDaTurma = alunosDaTurma;
    });

    this.firestoreDisciplina.getDisciplinas(this.idTurma).subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
  }

  openDialog() {
    this.fileNameDialogRef = this.dialog.open(AddDisciplinaComponent, {
      data: this.turma
    });
  }

  ngOnInit() {
  }
}
