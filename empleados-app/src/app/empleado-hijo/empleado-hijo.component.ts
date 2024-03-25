import { Component, Input } from '@angular/core'
import { Empleado } from '../data/empleado.model'

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css'],
})
export class EmpleadoHijoComponent {
  @Input() empleadoFilaTabla: Empleado

  @Input() indiceFilaTabla: number

  listaCaracteristicas = ['']

  agregarCaracteristica(caracteristica: string): void {
    this.listaCaracteristicas.push(caracteristica)
  }
}
