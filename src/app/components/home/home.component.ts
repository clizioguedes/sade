import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// import { AfService, Funcionario } from '../../services/af.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.af.list().subscribe( funcionarios => {
    // this.funcionarios = funcionarios;
    // });
  }

  customTrackBy(index: number, diario: any): any {
    return index;
  }

  addAluno() {
    // this.af.add(this.funcionario);
  }

  addNota(id: any, n1: number, n2: number, n3: number) {
    // this.af.addNotaB1(id, n1, n2, n3);
  }

}
