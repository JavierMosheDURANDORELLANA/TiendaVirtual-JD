import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Declarando variables de login
  email = '';
  password = '';
  mostraraviso = true;

  validandologin() {
    // tslint:disable-next-line: no-conditional-assignment
    if (
      // tslint:disable-next-line: triple-equals
      // tslint:disable-next-line: no-bitwise
      this.email === 'javierdurand@nextu.com' ||
      // tslint:disable-next-line: triple-equals
      this.password === 'desarrolloweb'
    ) {
      this.mostraraviso = !this.mostraraviso;
    } else {
      // this.mostraraviso = !this.mostraraviso;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
