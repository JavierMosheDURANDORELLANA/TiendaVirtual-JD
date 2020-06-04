import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // variable para la directiva *ngIF
  mensaje: boolean;

  constructor(private authSvc: LoginService, private router: Router) {}
  ngOnInit(): void {}
  async onLogin() {
    const { email, password } = this.LoginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        // Redireccionar a tienda.
        this.router.navigate(['/tienda']);
      } else {
        return (this.mensaje = true);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
