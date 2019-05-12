import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Escola';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  id: string;
  student: Student;
  idStudent: string;

  constructor(
    private firestore: FirestoreService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.firestore.getStudent(this.id).subscribe(student => {
      this.student = student;
    });
  }

  ngOnInit() {
  }

  /*
    addTurmaInAluno(idTurma: string) {
      if (idTurma == null) {
        alert('Turma Inválida');
      } else {
        this.firestoreAluno.addAlunoNaTurma(idTurma);
        alert('OK');
      }
    }
    */
}
