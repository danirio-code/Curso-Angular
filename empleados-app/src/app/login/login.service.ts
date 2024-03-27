import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// eslint-disable-next-line import/no-extraneous-dependencies
import { CookieService } from 'ngx-cookie-service'

@Injectable()

export class LoginService {
  token: string | null = null

  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) { }

  login(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token
            this.cookieService.set('token', this.token)
            this.router.navigate(['/'])
          },
        )
      },
    )
  }

  getIdToken(): string | null {
    return this.cookieService.get('token')
  }

  isLogged(): boolean {
    return this.cookieService.get('token') !== ''
  }

  logout(): void {
    firebase.auth().signOut().then(
      () => {
        this.token = null
        this.cookieService.delete('token')
        this.router.navigate(['/'])
        window.location.reload()
      },
    )
  }
}
