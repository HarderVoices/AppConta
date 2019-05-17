import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {


  constructor(private nav:NavController) { }

  ngOnInit() {

  }


  salvar(form) {

    const NomePlanejamento =form.value.NomePlanejamento;
    const Faturamento = form.value.Faturamento;
    const Custo = form.value.Custo;

    const dois = JSON.stringify(form.value);
    localStorage.setItem(NomePlanejamento, dois);


    form.reset();

    this.nav.back();
    console.log(dois);
  }


}
