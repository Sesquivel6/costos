import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  public intervalSubscription: Subscription;

  constructor() { 
    // adv 77. 

    
    // this.returnObservable().pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   valor => console.log('Subs:', valor),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs Terminado')
    // );

    this.intervalSubscription = this.returnInterval().subscribe (console.log)
    // .subscribe(
    //   (valor) => console.log(valor)
    // ) // ES LO MISMO QUE LO DE ABAJO
    

  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  returnInterval () {

    const interval$ = interval(100)
                      .pipe(
                        // take(10),
                        map(valor => valor + 1),
                        filter( valor => ( valor % 2 == 0 ? true : false ) ),
                        // map( valor => {
                        //   return 'Segundo ' + (valor + 1)
                        // } ),
                        
                      )

    return interval$

  }

  returnObservable (): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>( observer => {

      

      const interval = setInterval ( () => {

        i++;
        observer.next(i);
        
        if ( i === 5 ) {
          clearInterval (interval)
          observer.complete();
        }

        
      }, 1000)

    } );

    return obs$

  }

}
