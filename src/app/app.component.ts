import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private connService: ConnectionService) {

    //  PROMISE
    connService.getChimcharWithPromise()
      .then(chimchar => console.log('Chimchar con fetch nel component', chimchar))

    //  OSSERVABLE
    connService.getChimcharWithObservable()
      .subscribe({
        next: chimchar => console.log('Chimchar con http client nel component', chimchar),
        error: err => console.log(err)
      })



    //  PROMISE
    connService.getFirst20PokemonWithPromise()
      .then(pokemons => console.log('first 20 pokemon fetch', pokemons))


    //  OSSERVABLE
    connService.getFirst20PokemonWithObservable()
      .subscribe({
        next: pokemons => console.log('first 20 pokemon https get', pokemons),
        error: err => console.log(err)
      })


    //  PROMISE
    connService.getChimcharWithPromise()
      .then(ability => console.log('first ability with fetch', ability))

    //  OSSERVABLE
    connService.getChimcharWithObservable()
      .subscribe({
        next: ability => console.log('first ablity http get', ability),
        error: err => console.log(err)
      })









  }
  title = 'rxjs-test';
}
