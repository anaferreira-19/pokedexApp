import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private pokeService: PokeService, private route: ActivatedRoute) { }

  offset = 0;
  pokemon = [];

  ngOnInit() {
    this.carregarPokemons();
  }

  public carregarPokemons() {
    this.pokeService.buscarPokemonsIniciais(this.offset).subscribe(dados => {
      console.log('Dados: ', dados);
      this.pokemon = dados;
    });
  }
}
