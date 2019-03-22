import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.scss']
})
export class EditSubjectComponent implements OnInit {

  idTurma: string;
  idDisciplina: string;
  editForm: FormGroup;
  professores: Array<any>;
  submitted = false;
  constructor(
    private firestore: FirestoreService,
    private router: Router,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataTurma: any
  ) {
    this.idTurma = dataTurma.id;
  }

  ngOnInit() {
    this.firestore.getTeachers().subscribe(professores => {
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

