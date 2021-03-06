import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  opMobile = ['SERVICIOS','PACIENTES', 'CATEGORÍAS', 'SUBCATEGORÍAS'];
  
  constructor() { }

  ngAfterViewInit() {
    $('.sidenav').sidenav();
    $("#menu").click(function () {
      $('.sidenav').sidenav('open');
      $('.collapsible').collapsible();
    });
    $(".dropdown-trigger").dropdown();
  }

  ngOnInit() {
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    
}
}
