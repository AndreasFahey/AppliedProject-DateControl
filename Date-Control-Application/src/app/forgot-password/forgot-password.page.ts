import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  user = {
    passwordResetEmail: 'email@example.com'
  }

  constructor(
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
  }

  sendPasswordResetEmail(email){
    this.authService.PasswordRecover(this.user.passwordResetEmail)
    .then((res) => {
      // Do something here
      this.router.navigate(['login']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}