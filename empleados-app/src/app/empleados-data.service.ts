import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Empleado } from './data/empleado.model'
import { ServicioEmpleadosService } from './servicio-empleados.service'
import { DataService } from './data.service'

@Injectable()

export class EmpleadosDataService {
  empleados: Empleado[] = []

  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private fireBaseService: DataService,
  ) { }

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.fireBaseService.fetchEmpleados()
  }

  setEmpleados(empleados: Empleado[]): void {
    this.empleados = empleados
  }

  agregarEmpleadoServicio(empleado: Empleado): void {
    this.servicioVentanaEmergente.mostrarMensaje(`Empleado añadido: ${empleado.nombre} ${empleado.apellido}`)
    this.empleados.push(empleado)
    // Almacenar los datos en FireBase
    this.fireBaseService.storeEmpleados(this.empleados)
  }

  encontrarEmpleado(indice: number): Empleado {
    return this.empleados[indice]
  }

  actualizarEmpleadoService(index: number, empleado: Empleado): void {
    // this.servicioVentanaEmergente.mostrarMensaje(`Empleado actualizado: ${empleado.nombre} ${empleado.apellido}`)
    this.empleados[index] = empleado
    this.fireBaseService.updateEmpleado(index, empleado)
  }

  eliminarEmpleadoService(index: number): void {
    if (this.servicioVentanaEmergente.confirmarEliminar(`
      ¿Seguro que quieres eliminar a: ${this.empleados[index].nombre} ${this.empleados[index].apellido}?
    `)) {
      this.empleados.splice(index, 1)
      this.fireBaseService.deleteEmpleado(index)
      if (this.empleados != null) {
        this.fireBaseService.storeEmpleados(this.empleados)
      }
    }
  }
}
