import { Component } from '@angular/core';
import { Pokemon } from '../_model/IPokemon';
import { Type } from '../_model/IType';
import { PokemonService } from '../_sevices/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      number: 1,
      name: 'Bulbasaur',
      types: [
        Type.Grass,
        Type.Poison,
      ]
    }
  ];

  constructor(
    public pokemonService: PokemonService,
  ) {

  }
}

