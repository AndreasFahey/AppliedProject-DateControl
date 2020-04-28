import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit() {
  }

  // ***********Not Working**********
  sendPasswordResetEmail(email){
    this.authService.PasswordReset(email)
    .then((res) => {
      // Do something here
      this.router.navigate(['login']);
    }).catch((error) => {
      window.alert(error.message)
    })
}

}