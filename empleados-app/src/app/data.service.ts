import { Injectable } from '@angular/core'
import { Empleado } from './empleado.model'
import { ServicioEmpleadosService } from './servicio-empleados.service'

@Injectable()

export class DataService {
  empleados: Empleado[] = [
    new Empleado('Dani', 'Río', 'Desarrollador Junior', 1000),
    new Empleado('María', 'González', 'Diseñador', 2000),
    new Empleado('Julián', 'Sánchez', 'Maquetador', 1500),
    new Empleado('Juan', 'Pérez', 'Desarrollador Senior', 3000),
  ]

  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
  ) { }

  agregarEmpleadoServicio(empleado: Empleado): void {
    this.servicioVentanaEmergente.mostrarMensaje(`Empleado añadido: ${empleado.nombre} ${empleado.apellido}`)
    this.empleados.push(empleado)
  }
}
