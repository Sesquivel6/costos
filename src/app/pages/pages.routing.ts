import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { DetalleComponent } from './detalle/detalle.component';
import { OferenteComponent } from './oferente/oferente.component';
import { CompensadoComponent } from './compensado/compensado.component';
import { CganttComponent } from './cgantt/cgantt.component';
import { FinancieraComponent } from './financiera/financiera.component';
import { ListcalendarComponent } from './listcalendar/listcalendar.component';
import { ModificacionComponent } from './modificaciones/modificacion/modificacion.component';
import { BalanceComponent } from './modificaciones/balance/balance.component';
import { FormatosComponent } from './formatos/formatos.component';
import { PoficialComponent } from './poficial/poficial.component';
import { PfinancieraComponent } from './contrato/pfinanciera/pfinanciera.component';
import { DetailsComponent } from './contrato/details/details.component';



//enviar data a través de rutas utilizando 'data'. ADV 84. 

const routes: Routes = [
    {   path: 'dashboard', 
        component: PagesComponent,
        children: [
        { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
        { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar' } },
        { path: 'grafica1', component: Grafica1Component, data: { title: '1st Graphic' } },
        { path: 'promesas', component: PromesasComponent, data: { title: 'Promises' } },
        { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' } },

        // Lógica Searchings results
        {path: 'search', component: ConsultarComponent, data: { title: 'Consultar Obra' }},
        {path: 'detalle/:id', component: DetalleComponent, data: { title: 'Detalle' }}, // dashboard/detalle/-MUFMdylZubJR0VIpjQJ 
        {path: 'listcalendar', component: ListcalendarComponent, data: { title: 'Consultar Actividad' }},

        //Lógica Presupuesto Oficial Estimativo
        {path: 'poficial', component: PoficialComponent, data: { title: 'Presupuesto Oficial Estimativo' }},
        {path: 'formatos', component: FormatosComponent, data: { title: 'Formatos' }},

        //Lógica Compensado
        {path: 'oferente', component: OferenteComponent, data: { title: 'P. Oferta' }},
        {path: 'compensado', component: CompensadoComponent, data: { title: 'P. Compensado' }},
        {path: 'cgantt', component: CganttComponent, data: { title: 'Carta Gantt' }},
        {path: 'financiera', component: FinancieraComponent, data: { title: 'Prog Financiera' }},
        {path: 'pfinanciera', component: PfinancieraComponent, data: { title: 'Prog Financiera' }},
        {path: 'details', component: DetailsComponent, data: { title: 'Detalle Contrato' }},
        
        
        //Lógica Modificación de contrato
        {path: 'modificacion', component: ModificacionComponent,
        children: [
        { path: 'balance', component: BalanceComponent, data: { title: 'Dashboard' } },
        ]},
        ]},
    

        

        
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
