/* eslint-disable no-console */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Empleado } from './data/empleado.model'

@Injectable()

export class DataService {
  private fireBaseUrl = 'https://angular-empresa-app-default-rtdb.europe-west1.firebasedatabase.app'

  constructor(
    private http: HttpClient,
  ) { }

  storeEmpleados(empleados: Empleado[]): void {
    this.http.put(`${this.fireBaseUrl}/empleados.json`, empleados)
      .subscribe({
        next: data => {
          console.log(`Se ha guardado los empleados: ${data}`)
        },
        error: error => {
          console.log(`Error al guardar los empleados: ${error}`)
        },
      })
  }

  fetchEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.fireBaseUrl}/empleados.json`)
  }

  updateEmpleado(id: number, empleado: Empleado): void {
    this.http.put(`${this.fireBaseUrl}/empleados/${id}.json`, empleado)
      .subscribe({
        next: data => {
          console.log(`Se ha editado el empleado: ${data}`)
        },
        error: error => {
          console.log(`Error al guardar el empleado: ${error}`)
        },
      })
  }

  deleteEmpleado(id: number): void {
    this.http.delete(`${this.fireBaseUrl}/empleados/${id}.json`)
      .subscribe({
        next: data => {
          console.log(`Se ha eliminado el empleado: ${data}`)
        },
        error: error => {
          console.log(`Error al eliminar el empleado: ${error}`)
        },
      })
  }
}
