import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Teacher } from 'src/app/models/Escola';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {

  idTurma: any;
  teachers: Teacher[];
  registerForm: FormGroup;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  constructor(
    public dialogRef: MatDialogRef<AddSubjectComponent>,
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idTurma = data.id;
  }

  ngOnInit() {
    this.firestore.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date()],
      nome: ['', Validators.required],
      idProfessor: [''],
      idTurma: [this.idTurma],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    const formValue = this.registerForm.value;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.firestore.addSubject(formValue);
    this.dialogRef.close();
  }

  onNoSubmit() {
    this.dialogRef.close();
  }
}
