import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model.ts/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly CHIMCHAR_URL = 'https://pokeapi.co/api/v2/pokemon/chimchar'
  readonly ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {

    this.getChimcharWithPromise();
    this.getChimcharWithObservable();
    // this.getFirst20PokemonWithPromise();
    // this.getFirst20PokemonWithObservable();
  }


  //  --- GET PROMISE ---
  getChimcharWithPromise(): Promise<any> {
    // fetch(this.CHIMCHAR_URL)
    //   .then(resp => resp.json())
    //   .then(chimchar => console.log('Ecco Chimchar PROMISE', chimchar))

    return fetch(this.CHIMCHAR_URL).then(resp => resp.json() as unknown as Pokemon)
  }

  //  --- GET OBSERVABLE ---
  getChimcharWithObservable(): Observable<Pokemon> {
    // this.http.get(this.CHIMCHAR_URL)
    //   .subscribe({
    //     next: chimchar => console.log('Ecco Chimchar OBSERVABLE', chimchar),
    //     error: err => console.log(err)
    //   })

    return this.http.get<Pokemon>(this.CHIMCHAR_URL)
  }

  //  --- GET PROMISE ---
  getFirst20PokemonWithPromise(): Promise<any[]> {
    const fetchArray = [];

    for (let i = 1; i < 21; i++) {
      const url = this.ALL_POKEMON_URL + '/' + i + '/'
      console.log(url);

      const request = fetch(url).then(resp => resp.json());
      fetchArray.push(request);
    }
    return Promise.all(fetchArray);
  }

  //  --- GET OBSERVABLE ---
  getFirst20PokemonWithObservable(): Observable<Pokemon[]> {

    const getArray=[];

    for (let i = 1; i < 21; i++) {
      const url = this.ALL_POKEMON_URL + '/' + i + '/'
      console.log(url);

      const request = this.http.get<Pokemon>(url);
      getArray.push(request)
    }
    return forkjoin(getArray);
  }

  getFirstAbilityPromise(){
    return fetch(this.CHIMCHAR_URL)
    .then(resp=> resp.json())
    .then(chimchar=> {
      const abilities = chimchar.abilities;
      const firstAbility = abilities[0];
      const ability = firstAbility.ability;
      const abilityUrl = ability.url
      return fetch(abilityUrl).then(resp=> resp.json())
    })
  }


  getFirstAbilityObservable(){

  }

}
function forkjoin(getArray: Observable<Pokemon>[]): Observable<Pokemon[]> {
  throw new Error('Function not implemented.');
}

