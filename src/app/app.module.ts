import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PieComponent } from './componentes/pie/pie.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { Pagina3Component } from './componentes/pagina3/pagina3.component';
import { Pagina4Component } from './componentes/pagina4/pagina4.component';
import { Pagina5Component } from './componentes/pagina5/pagina5.component';
import { Pagina6Component } from './componentes/pagina6/pagina6.component';
import { Pagina7Component } from './componentes/pagina7/pagina7.component';
import { Pagina8Component } from './componentes/pagina8/pagina8.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { NuestroservicioComponent } from './paginas/nuestroservicio/nuestroservicio.component';
import { NuestroequipoComponent } from './paginas/nuestroequipo/nuestroequipo.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { RegistrateComponent } from './paginas/registrate/registrate.component';
import { AgendatucitaComponent } from './paginas/agendatucita/agendatucita.component';
import { Encuestacovid19Component } from './paginas/encuestacovid19/encuestacovid19.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuComponent,
    PieComponent,
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    Pagina6Component,
    Pagina7Component,
    Pagina8Component,
    InicioComponent,
    QuienessomosComponent,
    NuestroservicioComponent,
    NuestroequipoComponent,
    NoticiasComponent,
    RegistrateComponent,
    AgendatucitaComponent,
    Encuestacovid19Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
