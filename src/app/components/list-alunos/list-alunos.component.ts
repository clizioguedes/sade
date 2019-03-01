import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { MatDialog } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Aluno } from 'src/app/models/Escola';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.scss']
})
export class ListAlunosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  alunos: Array<any>;
  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento'];
  dataSource: MatTableDataSource<Aluno>;

  constructor(
    private firestore: AlunoService,
  ) {
    this.firestore.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
      this.dataSource = new MatTableDataSource(this.alunos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
