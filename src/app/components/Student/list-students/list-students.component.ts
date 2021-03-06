import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/Escola';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  students: Array<any>;
  displayedColumns: string[] = ['inep', 'nome', 'dataDeNascimento'];
  dataSource: MatTableDataSource<Student>;

  constructor(
    private firestore: FirestoreService,
  ) {
    this.firestore.getStudents().subscribe(students => {
      this.students = students;
      this.dataSource = new MatTableDataSource(this.students);
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
