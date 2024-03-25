import { Component } from '@angular/core'
// import { BehaviorSubject, timer  } from 'rxjs'
import { Observable } from 'rxjs'
import { AppService } from './app.service'
import { Empleado } from './empleado.model'
import { User } from './data/users.data'
// import { Pokemon } from './pokemon-data'

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

  pokemonApiContent: Observable<String> = this.appService.peticionApiPokemon()

  pokemonName = ''

  usersApiContent: Observable<User[]> = this.appService.peticionApiUsers()

  mergedObservables = this.appService.mergeObservables()

  // peticionApi1: Observable<User> = this.appService.peticionApi1()

  // peticionApi2: Observable<User> = this.appService.peticionApi2()

  empleados: Empleado[] = [
    new Empleado('Dani', 'Río', 'Desarrollador Junior', 1000),
    new Empleado('María', 'González', 'Diseñador', 2000),
    new Empleado('Felipeti', 'Sánchez', 'Maquetador', 1500),
    new Empleado('Juan', 'Pérez', 'Desarrollador Senior', 3000),
  ]

  // existe: BehaviorSubject<string> = new BehaviorSubject('true')

  constructor(
    public appService: AppService,
  ) { }

  ngOnInit(): void {
    this.mergeObservables()

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

  // getApiContent(): void {
  //   this.appService
  //     .peticionApi()
  //     .subscribe(data => {
  //       this.pokemonName = data
  //       console.log(this.pokemonName)
  //     })
  // }

  mergeObservables(): void {
    this.appService.mergeObservables().subscribe(data => console.log(data))
  }
}
