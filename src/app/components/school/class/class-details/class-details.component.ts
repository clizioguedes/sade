import { Component, OnInit, ViewChild } from '@angular/core';
import { Class, Student } from 'src/app/models/Escola';
import { MatTableDataSource, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { AddSubjectComponent } from '../Subjects/add-subject/add-subject.component';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { EditClassComponent } from '../edit-class/edit-class.component';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  idTurma: string;
  turma: Class;
  alunosDaTurma: Array<any>;
  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento', 'situacao'];
  dataSource: MatTableDataSource<Student>;

  disciplinas: Array<any>;

  fileNameDialogRefAdd: MatDialogRef<AddSubjectComponent>;
  fileNameDialogRefEdit: MatDialogRef<EditClassComponent>;
  // fileNameDialogRefEditDisciplina: MatDialogRef<EditSubjectComponent>;

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
    this.idTurma = this.route.snapshot.params.id;
    this.firestore.getClass(this.idTurma).subscribe(turma => {
      this.turma = turma;
      if (this.turma.id == null) {
        this.firestore.addIdClass(this.idTurma);
      }
    });
    this.firestore.getSubjects().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });
    /*
    this.firestore.getAlunosTurma(this.idTurma).subscribe(alunosDaTurma => {
      this.alunosDaTurma = alunosDaTurma;
      this.dataSource = new MatTableDataSource(this.alunosDaTurma);
      this.dataSource.sort = this.sort;
    });
    */
  }

  ngOnInit() {
  }

  openDialogAddDisciplina() {
    this.fileNameDialogRefAdd = this.dialog.open(AddSubjectComponent, {
      data: this.turma
    });
  }

  /*
  openDialogMatriculaAluno() {
    this.fileNameDialogRefMatriculaAluno = this.dialog.open(ListAlunosTurmaComponent, {
      width: '75%',
      height: '75%',
      data: this.turma
    });
  }
  */

  openDialogEditTurma() {
    this.fileNameDialogRefEdit = this.dialog.open(EditClassComponent, {
      data: this.turma
    });
  }
}
