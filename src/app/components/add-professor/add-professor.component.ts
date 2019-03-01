import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Estados {
  estado: string;
  uf: string;
}

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.scss']
})
export class AddProfessorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  aviso = 'Este Item é Obrigatório';

  niveis = [
    'Graduação',
    'Pós-Graduação',
    'Mestrado',
    'Doutorado'
  ];

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
    private firestoreProfessor: ProfessorService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dataCadastro: [new Date()],
      inep: ['', Validators.required],
      nome: ['', Validators.required],
      dataDeNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      naturalidade: ['', Validators.required],
      ufNaturalidade: ['', Validators.required],
      rg: ['', Validators.required],
      orgaoEmissorRg: ['', Validators.required],
      ufRg: ['', Validators.required],
      dataExpedicaoRg: ['', Validators.required],
      cpf: ['', Validators.required],
      nis: [''],
      sus: [''],
      endereco: ['', Validators.required],
      numero: [0, Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: [''],
      email: [''],
      celular: [''],
      matricula: ['', Validators.required],
      nivelFormacao: ['', Validators.required],
      cursoFormacao: ['', Validators.required],
      anoFormacao: ['', Validators.required],
      instituicaoFormacao: ['', Validators.required],
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
    this.firestoreProfessor.addProfessor(formValue);
    this.router.navigate(['/list-professores']);
  }
}
