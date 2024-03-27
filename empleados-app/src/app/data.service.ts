/* eslint-disable no-console */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Empleado } from './data/empleado.model'
import { LoginService } from './login/login.service'

@Injectable()

export class DataService {
  private fireBaseUrl = 'https://angular-empresa-app-default-rtdb.europe-west1.firebasedatabase.app'

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
  ) { }

  storeEmpleados(empleados: Empleado[]): void {
    const token = this.loginService.getIdToken()
    this.http.put(`${this.fireBaseUrl}/empleados.json?auth=${token}`, empleados)
      .subscribe({
        next: data => {
          console.log(`Se ha guardado los empleados: ${data}`)
          window.location.reload()
        },
        error: error => {
          console.log(`Error al guardar los empleados: ${error}`)
        },
      })
  }

  fetchEmpleados(): Observable<Empleado[]> {
    const token = this.loginService.getIdToken()
    return this.http.get<Empleado[]>(`${this.fireBaseUrl}/empleados.json?auth=${token}`)
  }

  updateEmpleado(id: number, empleado: Empleado): void {
    const token = this.loginService.getIdToken()
    this.http.put(`${this.fireBaseUrl}/empleados/${id}.json?auth=${token}`, empleado)
      .subscribe({
        next: data => {
          console.log(`Se ha editado el empleado: ${data}`)
          window.location.reload()
        },
        error: error => {
          console.log(`Error al guardar el empleado: ${error}`)
        },
      })
  }

  deleteEmpleado(id: number): void {
    const token = this.loginService.getIdToken()
    this.http.delete(`${this.fireBaseUrl}/empleados/${id}.json?auth=${token}`)
      .subscribe({
        next: data => {
          console.log(`Se ha eliminado el empleado: ${data}`)
          window.location.reload()
        },
        error: error => {
          console.log(`Error al eliminar el empleado: ${error}`)
        },
      })
  }
}
