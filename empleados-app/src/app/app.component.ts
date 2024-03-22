import { Component } from '@angular/core'
// import { BehaviorSubject, timer  } from 'rxjs'
import { AppService } from './app.service'
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

  apiContent = ''

  empleados: Empleado[] = [
    new Empleado('Dani', 'Río', 'Desarrollador Junior', 1000),
    new Empleado('María', 'González', 'Diseñador', 2000),
    new Empleado('Felipeti', 'Sánchez', 'Maquetador', 1500),
    new Empleado('Juan', 'Pérez', 'Desarrollador Senior', 3000),
  ]

  URL = 'https://www.newblue.es/i18n/es_ES'

  // existe: BehaviorSubject<string> = new BehaviorSubject('true')

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getApiContent()

    // EXPLICACION DE CARLOS SOBRE COMO FUNCIONA RXJS
    // this.existe.subscribe(data => console.log(data))
    // this.existe.next('true')
    // this.existe.next('false')
    // this.existe.next('false')
    // timer(5000).subscribe(() => this.existe.next('hola'))
    // this.existe.next('true')
  }

  agregarEmpleado(): void {
    this.empleados.push(this.empleado)
    this.empleado = {
      nombre: '',
      apellido: '',
      cargo: '',
      salario: 0,
    }
  }

  getApiContent(): void {
    this.appService
      .peticionApi()
      .subscribe(data => {
        this.apiContent = JSON.stringify(data)
      })
  }
}
