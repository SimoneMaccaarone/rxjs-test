import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private connService: ConnectionService) {

    //  PROMIS
    connService.getChimcharWithPromise()
      .then(chimchar => console.log('Chimchar con fetch nel component', chimchar))

    //  OSSERVABLE
    connService.getChimcharWithObservable()
      .subscribe({
        next: chimchar => console.log('Chimchar con http client nel component', chimchar),
        error: err => console.log(err)
      })




    //  PROMIS
    connService.getFirst20PokemonWithPromise()
      .then(pokemons => console.log('first 20 pokemon', pokemons))

console.log('-------------------------------------')

    //  OSSERVABLE
    connService.getFirst20PokemonWithObservable()
      .subscribe({
        next: pokemons => console.log(pokemons),
        error: err => console.log(err)
      })



  }

  title = 'rxjs-test';
}
