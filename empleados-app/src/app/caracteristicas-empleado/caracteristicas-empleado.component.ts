import { Component, EventEmitter, Output } from '@angular/core'
import { ServicioEmpleadosService } from '../servicio-empleados.service'

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css'],
})
export class CaracteristicasEmpleadoComponent {
  @Output() caracteristicasEmpleado = new EventEmitter<string>()

  constructor(
    private empleadoService: ServicioEmpleadosService,
  ) { }

  agregarCaracteristica(caracteristica: string): void {
    this.empleadoService.mostrarMensaje(`Característica a añadir: ${caracteristica}`)
    this.caracteristicasEmpleado.emit(caracteristica)
  }
}
