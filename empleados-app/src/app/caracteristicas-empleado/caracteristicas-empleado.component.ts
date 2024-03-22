import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css'],
})
export class CaracteristicasEmpleadoComponent {
  @Output() caracteristicasEmpleado = new EventEmitter<string>()

  agregarCaracteristica(caracteristicas: string): void {
    this.caracteristicasEmpleado.emit(caracteristicas)
  }
}
