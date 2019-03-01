import { Component, OnInit, Inject } from '@angular/core';
import { Professor } from 'src/app/models/Escola';
import { DisciplinaService } from '../../../services/disciplina.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProfessorService } from 'src/app/services/professor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-disciplina',
  templateUrl: './add-disciplina.component.html',
  styleUrls: ['./add-disciplina.component.scss']
})
export class AddDisciplinaComponent implements OnInit {

  idTurma: any;
  professores: Professor[];
  registerForm: FormGroup;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  constructor(
    public dialogRef: MatDialogRef<AddDisciplinaComponent>,
    private firestoreDisciplina: DisciplinaService,
    private firestoreProfessor: ProfessorService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dataTurma: any
  ) {
    this.idTurma = dataTurma.id;
  }

  ngOnInit() {
    this.firestoreProfessor.getProfessores().subscribe(professores => {
      this.professores = professores;
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
    this.firestoreDisciplina.addDisciplina(this.idTurma, formValue);
    this.dialogRef.close();
  }

  onNoSubmit() {
    this.dialogRef.close();
  }
}
