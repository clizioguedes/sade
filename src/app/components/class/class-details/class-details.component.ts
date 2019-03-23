import { Component, OnInit, ViewChild } from '@angular/core';
import { Class, Student } from '../../../models/Escola';
import { MatTableDataSource, MatSort, MatDialogRef, MatDialog } from '@angular/material';
import { AddSubjectComponent } from './subjects/add-subject/add-subject.component';
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

  fileNameDialogRefAdd: MatDialogRef<AddSubjectComponent>;
  fileNameDialogRefEdit: MatDialogRef<EditClassComponent>;

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.idTurma = this.route.snapshot.params.id;
    this.firestore.getClass(this.idTurma).subscribe(turma => {
      this.turma = turma;
    });
  }

  openDialogAddDisciplina() {
    this.fileNameDialogRefAdd = this.dialog.open(AddSubjectComponent, {
      data: this.turma
    });
  }

  openDialogEditTurma() {
    this.fileNameDialogRefEdit = this.dialog.open(EditClassComponent, {
      data: this.turma
    });
  }
}
