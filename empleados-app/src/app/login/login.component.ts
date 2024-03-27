import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
  ) { }

  login(form: NgForm): void {
    const { email, password } = form.value

    this.loginService.login(email, password)
  }
}
