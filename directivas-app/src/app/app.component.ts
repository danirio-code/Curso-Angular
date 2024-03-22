import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de Usuario'

  nombre = ''

  apellido = ''

  mensaje = ''

  registrado = false

  cargo = ''

  entradas: { titulo: string }[]

  constructor() {
    this.entradas = [
      {
        titulo: 'Python, cada día más popular',
      },
      {
        titulo: 'Java, presente desde hace más de 20 años',
      },
      {
        titulo: 'JavaScript, cada vez más funcional',
      },
      {
        titulo: 'Kotlin, potencia para tus apps',
      },
      {
        titulo: '¿Dónde quedó pascal?',
      },
    ]
  }

  registrarUsuario(): void {
    this.registrado = true
    this.mensaje = 'Usuario registrado con éxito'
  }
}
