import { Component, Input } from '@angular/core';
import { Pokemon, getPokemonNumber, getPokemonImage } from '../_model/IPokemon';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon: Pokemon;

  public getPokemonNumber = getPokemonNumber;
  public getPokemonImage = getPokemonImage;
}
