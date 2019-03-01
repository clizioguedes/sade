import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Professor } from 'src/app/models/Escola';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-professores',
  templateUrl: './list-professores.component.html',
  styleUrls: ['./list-professores.component.scss']
})
export class ListProfessoresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  professores: Array<any>;
  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento'];
  dataSource: MatTableDataSource<Professor>;

  constructor(
    private firestore: ProfessorService,
  ) {
    this.firestore.getProfessores().subscribe(professores => {
      this.professores = professores;
      this.dataSource = new MatTableDataSource(this.professores);
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
