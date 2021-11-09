import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
// import { ChartsModule } from 'ng2-charts';

// Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular'; // npm install --save @fullcalendar/angular @fullcalendar/daygrid
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // npm i @fullcalendar/interaction
import listPlugin from '@fullcalendar/list'; // npm i @fullcalendar/list
import { ListcalendarComponent } from './listcalendar/listcalendar.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);

// SERVICES
import { HttpClientModule } from '@angular/common/http';

// pipes
import { FilterpipePipe } from '../pipes/filterpipe.pipe';


// ------------ PÁGINAS ----------------
import { PagesComponent } from './pages.component';

//DASHBOARD
import { DashboardComponent } from './dashboard/dashboard.component';

//NO IMPORTANTE
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// LÓGICA CONSULTAR INFORMACIÓN
import { ConsultarComponent } from './consultar/consultar.component';
import { DetalleComponent } from './detalle/detalle.component';

//LÓGICA PRESUPUESTO COMPENSADO
import { OferenteComponent } from './oferente/oferente.component';
import { CompensadoComponent } from './compensado/compensado.component';
import { CganttComponent } from './cgantt/cgantt.component';
import { FinancieraComponent } from './financiera/financiera.component';

//MODIFICACIONES DE CONTRATO
import { BalanceComponent } from './modificaciones/balance/balance.component';

import { ModificacionComponent } from './modificaciones/modificacion/modificacion.component';
import { FormatosComponent } from './formatos/formatos.component';
import { PoficialComponent } from './poficial/poficial.component';
import { CprecioComponent } from './contrato/cprecio/cprecio.component';
import { DetailsComponent } from './contrato/details/details.component';
import { ModificacionesComponent } from './contrato/modificaciones/modificaciones.component';
import { OfertaComponent } from './contrato/oferta/oferta.component';
import { OficialComponent } from './contrato/oficial/oficial.component';

import { PfinancieraComponent } from './contrato/pfinanciera/pfinanciera.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    PromesasComponent,
    RxjsComponent,
    ListcalendarComponent,

    //Lógica Search
    ConsultarComponent,
    DetalleComponent,  
  //pipes
    FilterpipePipe,
  
  //Lógica Compensado
  OferenteComponent,  
  CompensadoComponent,  
  CganttComponent,  
  FinancieraComponent, 
  BalanceComponent, 
  ModificacionComponent, 
  FormatosComponent, 
  PoficialComponent, 
  CprecioComponent, 
  DetailsComponent, 
  ModificacionesComponent, 
  OfertaComponent, 
  OficialComponent, 
  PfinancieraComponent,
],

    // los exporto para que todos los exports se encuentren en sus declaraciones
    exports: [
      DashboardComponent,
      ProgressComponent,
      Grafica1Component,
      PagesComponent,
      PromesasComponent,
      RxjsComponent,

      //Lógica Search
      ConsultarComponent,
      DetalleComponent,  
      //pipes
      FilterpipePipe,
    
      //Lógica Compensado
      OferenteComponent,  
      CompensadoComponent,  
      CganttComponent,  
      FinancieraComponent,
      PfinancieraComponent,
      DetailsComponent, 
    ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    // ChartsModule,   

    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    FullCalendarModule,
    
    
  ]
})
export class PagesModule { }
