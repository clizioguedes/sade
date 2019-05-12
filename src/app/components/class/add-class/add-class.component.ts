import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { School } from 'src/app/models/Escola';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  registerForm: FormGroup;
  escola: School;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  niveis = [
    'Educação Infantil',
    'Ensino Fundamental',
    'Ensino Médio',
    'Educação de Jovens e Adultos (EJA)',
    'Educação Profissional Técnica de Nível Médio',
  ];

  constructor(
    private firestore: FirestoreService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddClassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: School,
  ) {
    this.escola = data;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date()],
      idEscola: [this.escola.id],
      nome: ['', Validators.required],
      nivel: ['', Validators.required],
      periodo: ['', Validators.required],
      modalidade: [''],
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
    this.firestore.addClass(formValue);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
