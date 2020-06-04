import { Component, OnInit } from '@angular/core';
// Importaciones para log out
import { provideRoutes, Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [LoginService],
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user: any;
  constructor(private authSvc: LoginService, private router: Router) {}

  async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
    }
  }
  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['']);
    } catch (error) {
      console.log(error);
    }
  }
}
