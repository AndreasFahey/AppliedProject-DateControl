import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";
import { User } from 'firebase';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  user = {} as User
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  sendPasswordResetEmail(email){
    this.authService.PasswordRecover(this.user.email)
    .then((res) => {
      // Do something here
      this.router.navigate(['home']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}
