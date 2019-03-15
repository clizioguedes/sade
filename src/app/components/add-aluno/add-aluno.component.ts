import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Estados {
  estado: string;
  uf: string;
}

@Component({
  selector: 'app-add-aluno',
  templateUrl: './add-aluno.component.html',
  styleUrls: ['./add-aluno.component.scss']
})
export class AddAlunoComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  estados: Estados[] = [
    { estado: 'Acre', uf: 'AC' },
    { estado: 'Alagoas', uf: 'AL' },
    { estado: 'Amapá', uf: 'AP' },
    { estado: 'Amazonas', uf: 'AM' },
    { estado: 'Bahia', uf: 'BA' },
    { estado: 'Ceará', uf: 'CE' },
    { estado: 'Distrito Federal', uf: 'DF' },
    { estado: 'Espirito Santos', uf: 'ES' },
    { estado: 'Goiás', uf: 'GO' },
    { estado: 'Maranhão', uf: 'MA' },
    { estado: 'Mato Grosso', uf: 'MT' },
    { estado: 'Mato Grosso do Sul', uf: 'MS' },
    { estado: 'Minas Gerais', uf: 'MG' },
    { estado: 'Pará', uf: 'PA' },
    { estado: 'Paraiba', uf: 'PB' },
    { estado: 'Paraná', uf: 'PR' },
    { estado: 'Pernambuco', uf: 'PE' },
    { estado: 'Piauí', uf: 'PI' },
    { estado: 'Rio de Janeiro', uf: 'RJ' },
    { estado: 'Rio Grande do Norte', uf: 'RN' },
    { estado: 'Rio Grande do Sul', uf: 'RS' },
    { estado: 'Rondônia', uf: 'RO' },
    { estado: 'Roraima', uf: 'RR' },
    { estado: 'Santa Catarina', uf: 'SC' },
    { estado: 'São Paulo', uf: 'SP' },
    { estado: 'Sergipe', uf: 'SE' },
    { estado: 'Tocantins', uf: 'TO' },
  ];

  constructor(
    private firestore: AlunoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date()],
      inep: [''],
      nome: ['', Validators.required],
      dataDeNascimento: ['', Validators.required],
      nomeDoPai: [''],
      nomeDaMae: ['', Validators.required],
      sexo: ['', Validators.required],
      naturalidade: ['', Validators.required],
      ufNaturalidade: ['', Validators.required],
      rg: ['', Validators.required],
      orgaoEmissorRg: ['', Validators.required],
      ufRg: ['', Validators.required],
      dataExpedicaoRg: ['', Validators.required],
      cpf: ['', Validators.required],
      nis: ['', Validators.required],
      sus: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: [0, Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      email: [''],
      celular: [''],
      situacao: ['Esperando Matricula'],
      idTurma: ['']
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
    this.firestore.addAluno(formValue);
    this.router.navigate(['/list-alunos']);
  }
}
