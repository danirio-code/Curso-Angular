import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { DataService } from '../data.service'
import { Empleado } from '../data/empleado.model'

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent {
  empleado: Empleado = {
    nombre: '',
    apellido: '',
    cargo: '',
    salario: 0,
  }

  empleados: Empleado[]

  constructor(
    private router: Router,
    private dataService: DataService,
  ) {
    this.empleados = this.dataService.empleados
  }

  volverHome(): void {
    this.router.navigate(['/'])
  }

  agregarEmpleado(): void {
    this.dataService.agregarEmpleadoServicio(this.empleado)
    this.empleado = {
      nombre: '',
      apellido: '',
      cargo: '',
      salario: 0,
    }
    this.volverHome()
  }
}
