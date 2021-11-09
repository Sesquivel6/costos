import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [ './sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  searchItems: any[];
  compensadoItems: any[];
  modItems: any[];
  poeItems: any[];


  constructor( private sidebarService: SidebarService) { 

    this.menuItems = sidebarService.menu;
    this.searchItems = sidebarService.search;
    this.compensadoItems = sidebarService.compensado;
    this.modItems = sidebarService.modificacion;
    this.poeItems = sidebarService.estimativo;

    
  }

  ngOnInit(): void {

    
  }

}
