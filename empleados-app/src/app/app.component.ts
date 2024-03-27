import { Component, OnInit } from '@angular/core'
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: environment.FIREBASE_API_KEY,
      authDomain: environment.FIREBASE_AUTH_DOMAIN,
    })
  }

  isLogged(): boolean {
    return this.loginService.isLogged()
  }

  logout(): void {
    this.loginService.logout()
  }
}
