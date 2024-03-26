/* eslint-disable dot-notation */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { EmpleadosDataService } from '../empleados-data.service'
import { Empleado } from '../data/empleado.model'

@Component({
  selector: 'app-edit-empleado-component',
  templateUrl: './edit-empleado-component.component.html',
  styleUrls: ['./edit-empleado-component.component.css'],
})

export class EditEmpleadoComponentComponent {
  empleado: Empleado = {
    nombre: '',
    apellido: '',
    cargo: '',
    salario: 0,
  }

  empleados: Empleado[]

  indice: number

  action: string

  constructor(
    private router: Router,
    private dataService: EmpleadosDataService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.empleados = this.dataService.empleados
  }

  ngOnInit(): void {
    this.indice = this.activatedRoute.snapshot.params['id']
    this.action = this.activatedRoute.snapshot.queryParams['action']
    this.empleado = this.dataService.encontrarEmpleado(this.indice)
  }

  volverHome(): void {
    this.router.navigate(['/'])
  }

  actualizarEmpleado(): void {
    this.dataService.actualizarEmpleadoService(this.indice, this.empleado)
    this.empleado = {
      nombre: '',
      apellido: '',
      cargo: '',
      salario: 0,
    }
    this.volverHome()
  }

  eliminarEmpleado(): void {
    this.dataService.eliminarEmpleadoService(this.indice)
    this.volverHome()
  }
}
