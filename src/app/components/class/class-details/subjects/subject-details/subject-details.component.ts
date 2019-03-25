import { Component, OnInit } from '@angular/core';
import { Matter, Class, Teacher, Student } from 'src/app/models/Escola';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

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

  alunosMatriculados: Array<Student>;

  date = new FormControl(new Date());
  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const idDisciplina = this.route.snapshot.params.id;
    console.log(idDisciplina);
    this.firestore.getSubject(idDisciplina).subscribe(disciplina => {
      this.disciplina = disciplina;
      this.idTurma = this.disciplina.idTurma;
      this.idProfessor = this.disciplina.idProfessor;

      this.firestore.getClass(this.idTurma).subscribe(turma => {
        this.turma = turma;
      });

      this.firestore.getTeacher(this.idProfessor).subscribe(professor => {
        this.professor = professor;
      });

      this.firestore.getStudentsClass(this.idTurma).subscribe(alunosMatriculados => {
        this.alunosMatriculados = alunosMatriculados;
      });
    });
  }
}
