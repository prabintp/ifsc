import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { HeaderComponent } from './header/header.component';



@Component({
    selector: 'my-app',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent],


})
export class AppComponent implements OnInit {
  title = '';



  ngOnInit() {
  // this.heroService.getHeroes()
  //   .then(heroes =>  heroes.slice(1, 5));
    console.log('on init');
 }
}
