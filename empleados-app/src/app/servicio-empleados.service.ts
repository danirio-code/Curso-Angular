/* eslint-disable no-alert */
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ServicioEmpleadosService {
  // constructor() { }

  mostrarMensaje(mensaje: string): void {
    alert(mensaje)
  }

  confirmarEliminar(mensaje: string): boolean {
    // eslint-disable-next-line no-restricted-globals
    return confirm(mensaje)
  }
}
