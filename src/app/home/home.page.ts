import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NovoPlanejamentoPage } from '../novo-planejamento/novo-planejamento.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  planejamentos;


constructor(private router:Router) {
  this.planejamentos = [];
}

  excluir(NomePlanejamento) {
    localStorage.removeItem(NomePlanejamento);
    this.mostrar();
  }

  NomePlanejamento;

  mostrar() {

  this.planejamentos = [];

  const tamanhoBancoDados = localStorage.length;

  for(let index=0; index < tamanhoBancoDados; index++) {
    const key = localStorage.key(index)
    const NomePlanejamento = localStorage.getItem(key)
    const planejamento = JSON.parse(NomePlanejamento)
    this.planejamentos.push(planejamento)

  }

  
}
  ionViewDidEnter () {
    this.mostrar();
  }
}