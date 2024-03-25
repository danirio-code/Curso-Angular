import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from '../data.service'
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

  constructor(
    private router: Router,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.empleados = this.dataService.empleados
  }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    this.indice = this.activatedRoute.snapshot.params['id']
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
}
