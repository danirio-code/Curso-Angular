import { Component, OnInit } from '@angular/core'
// import { BehaviorSubject, timer  } from 'rxjs'
import { Observable } from 'rxjs'
import { AppService } from './app.service'
import { Empleado } from './empleado.model'
import { User } from './data/users.data'
import { DataService } from './data.service'
// import { Pokemon } from './pokemon-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  empleados: Empleado[]

  // existe: BehaviorSubject<string> = new BehaviorSubject('true')

  constructor(
    public appService: AppService,
    private dataService: DataService,
  ) {
    this.empleados = this.dataService.empleados
  }

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
    this.dataService.agregarEmpleadoServicio(this.empleado)
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
