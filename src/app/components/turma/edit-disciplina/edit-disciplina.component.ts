import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-edit-disciplina',
  templateUrl: './edit-disciplina.component.html',
  styleUrls: ['./edit-disciplina.component.scss']
})
export class EditDisciplinaComponent implements OnInit {

  idTurma: string;
  idDisciplina: string;
  editForm: FormGroup;
  professores: Array<any>;
  submitted = false;
  constructor(
    private firestoreDisciplina: DisciplinaService,
    private firestoreProfessor: ProfessorService,
    private router: Router,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataTurma: any
  ) {
    this.idTurma = dataTurma.id;
   }

  ngOnInit() {
    this.firestoreProfessor.getProfessores().subscribe(professores => {
      this.professores = professores;
    });
    this.editForm = this.formBuilder.group({
      dataCadastro: [new Date()],
      nome: ['', Validators.required],
      idProfessor: [''],
      idTurma: [this.idTurma],
    });
  }

}
