import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component'
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component'
import { ServicioEmpleadosService } from './servicio-empleados.service'
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
