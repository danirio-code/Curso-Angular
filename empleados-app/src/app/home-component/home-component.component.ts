import { Component, OnInit } from '@angular/core'
// import { BehaviorSubject, timer  } from 'rxjs'
import { Observable } from 'rxjs'
import { HomeService } from './home-component.service'
import { Empleado } from '../data/empleado.model'
import { User } from '../data/users-data'
import { EmpleadosDataService } from '../empleados-data.service'
// import { Pokemon } from '../pokemon-data'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados'

  empleado: Empleado = {
    nombre: '',
    apellido: '',
    cargo: '',
    salario: 0,
  }

  empleados: Empleado[] = []

  pokemonApiContent: Observable<String> = this.homeService.peticionApiPokemon()

  pokemonName = ''

  usersApiContent: Observable<User[]> = this.homeService.peticionApiUsers()

  mergedObservables = this.homeService.mergeObservables()

  // existe: BehaviorSubject<string> = new BehaviorSubject('true')

  constructor(
    public homeService: HomeService,
    private dataService: EmpleadosDataService,
  ) { }

  ngOnInit(): void {
    this.mergeObservables()

    this.dataService.obtenerEmpleados().subscribe(data => {
      this.empleados = data
      this.dataService.setEmpleados(data)
    })

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
    this.homeService.mergeObservables().subscribe(data => console.log(data))
  }
}
