import { Component, OnInit } from '@angular/core';
import { Matter, Class, Teacher } from 'src/app/models/Escola';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  id: string;
  disciplina: Matter;

  turma: Class;
  idTurma: string;

  professor: Teacher;
  idProfessor: string;

  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const idDisciplina = this.route.snapshot.params.id;
    this.firestore.getSubject(idDisciplina).subscribe(disciplina => {
      this.disciplina = disciplina;
      this.idTurma = this.disciplina.idTurma;
      this.idProfessor = this.disciplina.idProfessor;

      console.log(this.idTurma);
      console.log(this.idProfessor);
      this.firestore.getClass(this.idTurma).subscribe(turma => {
        this.turma = turma;
      });

      this.firestore.getTeacher(this.idProfessor).subscribe(professor => {
        this.professor = professor;
      });
    });
  }

  teste(id: number) {
    console.log(id);
  }
}
