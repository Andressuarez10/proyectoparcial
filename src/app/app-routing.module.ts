import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendatucitaComponent } from './paginas/agendatucita/agendatucita.component';
import { Encuestacovid19Component } from './paginas/encuestacovid19/encuestacovid19.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { NuestroequipoComponent } from './paginas/nuestroequipo/nuestroequipo.component';
import { NuestroservicioComponent } from './paginas/nuestroservicio/nuestroservicio.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { RegistrateComponent } from './paginas/registrate/registrate.component';

const routes:Routes=[

  {path:'Inicio',component:InicioComponent},
  
  {path:'QuienesSomos',component:QuienessomosComponent},
  
  {path:'NuestroServicio',component:NuestroservicioComponent},

  {path:'NuestroEquipo',component:NuestroequipoComponent},
  
  {path:'Noticias',component:NoticiasComponent},
  
  {path:'Registrate',component:RegistrateComponent},

  {path:'AgendaTuCita',component:AgendatucitaComponent},

  {path:'EncuestaCovid19',component:Encuestacovid19Component},
  
  {path:'',redirectTo:'/Inicio',pathMatch:'full'}
  
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
