import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any [] = [
    {
      title: 'Menu',
      icon : 'mdi mdi-gauge',
      submenu: [
        { title: 'Principal', url: '/' },
        // { title: 'Grafica 1', url: 'grafica1' },
          // { title: 'Mensajes', url: 'promesas' },
        // { title: 'Análisis m2', url: 'rxjs' },
        
      ]

    }
  ]

  
  search: any [] = [
    {
      title: 'Consultas',
      icon : 'fa fa-search',
      submenu: [
        { title: 'Contratos', url: 'search' },
        { title: 'Calendario', url: 'listcalendar' },
        
      ]

    }
  ]

  estimativo: any [] = [
    {
      title: 'P. O. Estimativo',
      icon : 'mdi mdi-gauge',
      submenu: [        
        { title: 'P. Oficial', url: 'poficial' },
        { title: 'Formatos', url: 'formatos' },
        // { title: 'rxjs', url: 'rxjs' },
      ]

    }
  ]

  compensado: any [] = [
    {
      title: 'P. Compensado',
      icon : 'mdi mdi-file-send',
      submenu: [
        { title: 'P. Oferente', url: 'oferente' },
        { title: 'P. Compensado', url: 'compensado' },
        { title: 'Carta Gantt', url: 'cgantt' },
        { title: 'Prog. Financiera', url: 'financiera' },
        
      ]

    }
  ]

  modificacion: any [] = [
    {
      title: 'Modific. Contrato',
      icon : 'mdi mdi-file-send',
      submenu: [
        { title: 'Balance', url: '/dashboard/modificacion/balance' },
        { title: 'Aum/Dism', url: 'modificacion' },
        { title: 'OO. EE.', url: 'ooee' },
        { title: 'Ampliación Plazo', url: 'ampliacion' },
        { title: 'APUS', url: 'apu' },
        
      ] 

    }
  ]

  constructor() { }
}
