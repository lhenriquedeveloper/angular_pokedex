import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Pokemon } from '../_model/IPokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // public pokemons:  new ReplaySubject<Pokemon[]>(1);

  // constructor(
  //   private httpClient: HttpClient
  // ) {
  //   const allPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  //   this.httpClient.get(allPokemonsUrl).subscribe(this.pokemons)
  // }
}
