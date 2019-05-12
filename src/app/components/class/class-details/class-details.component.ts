import { Component, OnInit, ViewChild } from '@angular/core';
import { Class, Student, Matter } from '../../../models/Escola';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { EditClassComponent } from '../edit-class/edit-class.component';
import { MatriculaAlunoComponent } from './matricula-aluno/matricula-aluno.component';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  idTurma: string;
  turma: Class;
  alunosDaTurma: Array<any>;
  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento', 'situacao'];
  dataSource: MatTableDataSource<Student>;
  disciplinas: Array<Matter>;
  alunosMatriculados: Array<Student>;
  fileNameDialogRefAdd: MatDialogRef<AddSubjectComponent>;

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.idTurma = this.route.snapshot.params.id;
    this.firestore.getClass(this.idTurma).subscribe(turma => {
      this.turma = turma;
      this.firestore.getSubjects(this.idTurma).subscribe(disciplinas => {
        this.disciplinas = disciplinas;
      });
      this.firestore.getStudentsClass().subscribe(alunosMatriculados => {
        this.alunosMatriculados = alunosMatriculados;
      });
    });
  }

  ngOnInit() {
  }

  cancelaMatricula(docMatriculaId: string, idAluno: string) {
    this.firestore.cancelaMatricula(docMatriculaId, idAluno);
  }

  openDialogAddDisciplina() {
    this.fileNameDialogRefAdd = this.dialog.open(AddSubjectComponent, {
      data: this.turma
    });
  }

  openDialogEditTurma() {
    const dialogRef = this.dialog.open(EditClassComponent, {
      data: this.turma
    });
  }

  openDialogMatriculaAluno() {
    const dialogRefMatricula = this.dialog.open(MatriculaAlunoComponent, {
      data: this.turma,
      width: '75%',
      height: '75%'
    });
  }
}
