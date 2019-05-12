import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../../models/Escola';

export interface Estados {
  estado: string;
  uf: string;
}

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  idStudent: string;
  student: Student;
  editForm: FormGroup;
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
    private firestore: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.idStudent = this.route.snapshot.params.id;
    this.firestore.getStudent(this.idStudent).subscribe(student => {
      this.student = student;
      this.editForm = this.formBuilder.group({
        dataAlterado: [new Date()],
        nome: [this.student.nome, Validators.required],
        dataDeNascimento: [student.dataDeNascimento],
        nomeDoPai: [this.student.nomeDoPai],
        nomeDaMae: [this.student.nomeDaMae, Validators.required],
        sexo: [this.student.sexo, Validators.required],
        naturalidade: [this.student.naturalidade, Validators.required],
        ufNaturalidade: [this.student.ufNaturalidade, Validators.required],
        rg: [this.student.rg, Validators.required],
        orgaoEmissorRg: [this.student.orgaoEmissorRg, Validators.required],
        ufRg: [this.student.ufRg, Validators.required],
        dataExpedicaoRg: [student.dataExpedicaoRg],
        cpf: [this.student.cpf, Validators.required],
        nis: [this.student.nis, Validators.required],
        sus: [this.student.sus, Validators.required],
        endereco: [this.student.endereco, Validators.required],
        numero: [this.student.numero, Validators.required],
        bairro: [this.student.bairro, Validators.required],
        cidade: [this.student.cidade, Validators.required],
        estado: [this.student.estado, Validators.required],
        email: [this.student.email],
        celular: [this.student.celular],
      });
    });
  }

  ngOnInit() {
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    const formValue = this.editForm.value;
    this.firestore.updateStudent(formValue);
    this.router.navigate(['/student/' + this.idStudent]);
  }
}
