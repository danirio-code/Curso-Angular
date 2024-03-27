import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,
} from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginService } from './login.service'

@Injectable()

export class LoginGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isLogged()) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }
}
