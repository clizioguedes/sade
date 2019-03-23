import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogCadastroOkComponent } from './dialog-cadastro-ok/dialog-cadastro-ok.component';

export interface Estados {
  estado: string;
  uf: string;
}

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

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

  // resgisterFormGroup: FormGroup;
  registerForm: FormGroup;

  DialogRefCadastroOk: MatDialogRef<DialogCadastroOkComponent>;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: FirestoreService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      inep: ['', Validators.required],
      nome: ['', Validators.required],
      anoLetivo: ['', Validators.required],
      inicioAnoLetivo: ['', Validators.required],
      fimAnoLetivo: ['', Validators.required],
      endereco: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],
      email: [''],
      telefone: [''],
    });
  }

  onSubmit() {
    const form = this.registerForm.value;
    if (this.registerForm.invalid) {
      return;
    }
    this.firestore.addSchool(form);
    this.openDialog();
    this.registerForm.reset();
  }

  openDialog(): void {
    this.DialogRefCadastroOk = this.dialog.open(DialogCadastroOkComponent, {
      width: '400px',
    });
  }
}
