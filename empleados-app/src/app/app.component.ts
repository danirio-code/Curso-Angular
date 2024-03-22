import { Component } from '@angular/core'
import { Empleado } from './empleado.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Empleados'

  empleado: Empleado = {
    nombre: '',
    apellido: '',
    cargo: '',
    salario: 0,
  }

  empleados: Empleado[] = [
    new Empleado('Dani', 'Río', 'Desarrollador Junior', 1000),
    new Empleado('María', 'González', 'Diseñador', 2000),
    new Empleado('Felipeti', 'Sánchez', 'Maquetador', 1500),
    new Empleado('Juan', 'Pérez', 'Desarrollador Senior', 3000),
  ]

  agregarEmpleado(): void {
    this.empleados.push(this.empleado)
    this.empleado = {
      nombre: '',
      apellido: '',
      cargo: '',
      salario: 0,
    }
  }
}
