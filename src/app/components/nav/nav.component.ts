import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }
  constructor() { }

  ngOnInit() {
  }

}
