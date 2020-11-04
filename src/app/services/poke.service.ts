import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokeService {
  private url = 'https://pokeapi.co/api/v2';
  private spritesUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) { }

  public buscarPokemonsIniciais(offset = 0) {
    return this.http.get(`${this.url}/pokemon?offset=${offset}&limit=10`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        map(pokemons => {
          return pokemons.map((poke, index) => {
            poke.sprite = this.buscarSprite(index + offset + 1);
            poke.index = offset + index + 1;
            return poke;
          })
        })
      )
  }

  public buscarSprite(index) {
    return (`${this.spritesUrl}${index}.png`);
  }
}
