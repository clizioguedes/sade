import { Component, OnInit } from '@angular/core';
import { Matter, Class, Teacher, Student } from 'src/app/models/Escola';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  registerFormFrequencia: FormGroup;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  date = new FormControl(new Date());
  constructor(
    private firestore: FirestoreService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
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

      this.firestore.getStudentsClass().subscribe(alunosMatriculados => {
        this.alunosMatriculados = alunosMatriculados;
      });
    });
  }

  ngOnInit() {
    this.registerFormFrequencia = this.formBuilder.group({
      dataCadastro: [new Date()],
      dataFrequencia: ['', Validators.required],
      quantidade: ['', Validators.required],
      idMatricula: [''],
      disciplina: [''],
    });
  }

  get f() { return this.registerFormFrequencia.controls; }

  customTrackBy(index: number, freq: any): any {
    return index;
  }

  cadastrarFrequencia(matriculaId: string, disciplina: string) {
    this.registerFormFrequencia.value.idMatricula = matriculaId;
    this.registerFormFrequencia.value.disciplina = disciplina;
    const formValue = this.registerFormFrequencia.value;
    // stop here if form is invalid
    if (this.registerFormFrequencia.invalid) {
      return;
    }
    const matricula = matriculaId;
    this.firestore.cadastrarFrequencia(matricula, formValue);
    this.submitted = true;
  }
}
