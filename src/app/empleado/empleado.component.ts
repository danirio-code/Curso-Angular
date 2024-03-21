import { Component } from '@angular/core'

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  nombre = 'Dani'

  apellido = 'Río'

  edad = 22

  deshabilitacionInput = false

  usuarioRegistrado = false

  textoDeRegistro = 'No hay nadie registrado'

  empresa = 'Google'

  // getRegistroUsuario(): void {
  //   this.usuarioRegistrado = false
  // }

  showRegisteredText(event: Event): void {
    if ((<HTMLInputElement>event.target).value === 'true') {
      this.textoDeRegistro = 'El usuario se ha registrado correctamente'
    } else {
      this.textoDeRegistro = 'No hay nadie registrado'
    }
  }
}
