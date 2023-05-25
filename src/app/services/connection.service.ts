import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../model.ts/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly CHIMCHAR_URL = 'https://pokeapi.co/api/v2/pokemon/chimchar'
  readonly ALL_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) {

    this.getChimcharWithPromise();
    this.getChimcharWithObservable();
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

}
