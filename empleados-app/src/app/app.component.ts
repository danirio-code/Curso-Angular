import { Component, OnInit } from '@angular/core'
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service'

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
      apiKey: 'AIzaSyA4gFLTGhkB1DpDl0eTW_2k6RNtGXt-xVo',
      authDomain: 'angular-empresa-app.firebaseapp.com',
    })
  }

  isLogged(): boolean {
    return this.loginService.isLogged()
  }

  logout(): void {
    this.loginService.logout()
  }
}
