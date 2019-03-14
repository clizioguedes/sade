import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../../services/turma.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Nivel {
  modalidade: string;
}

@Component({
  selector: 'app-add-turma',
  templateUrl: './add-turma.component.html',
  styleUrls: ['./add-turma.component.scss']
})
export class AddTurmaComponent implements OnInit {

  registerForm: FormGroup;
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
    private firestore: TurmaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date()],
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
    this.firestore.addTurma(formValue);
    this.router.navigate(['/list-turmas']);
  }
}
