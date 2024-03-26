import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component'
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component'
import { ServicioEmpleadosService } from './servicio-empleados.service'
import { DataService } from './data.service'
import { HomeComponentComponent } from './home-component/home-component.component'
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component'
import { QuienesComponentComponent } from './quienes-component/quienes-component.component'
import { ContactoComponentComponent } from './contacto-component/contacto-component.component'
import { EditEmpleadoComponentComponent } from './edit-empleado-component/edit-empleado-component.component'
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponentComponent,
  },
  {
    path: 'proyectos',
    component: ProyectosComponentComponent,
  },
  {
    path: 'quienes-somos',
    component: QuienesComponentComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponentComponent,
  },
  {
    path: 'edit-empleado/:id',
    component: EditEmpleadoComponentComponent,
  },
  // ** significa que cualquier otra ruta que no esté definida en la lista de rutas
  {
    path: '**',
    component: ErrorPersonalizadoComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    EditEmpleadoComponentComponent,
    ErrorPersonalizadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServicioEmpleadosService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
