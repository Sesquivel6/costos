import { Component, OnInit } from '@angular/core';
// import { rejects } from 'node:assert';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => { console.log(usuarios);} )

}

getUsuarios () {

  return new Promise( resolve => {

    fetch('https://reqres.in/api/users')
  .then ( resp => resp.json() )
  .then( body => resolve(body.data)); 


  });
  
  
}

}
