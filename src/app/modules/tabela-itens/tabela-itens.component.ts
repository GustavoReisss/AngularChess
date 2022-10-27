import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-itens',
  templateUrl: './tabela-itens.component.html',
  styleUrls: ['./tabela-itens.component.scss']
})
export class TabelaItensComponent implements OnInit {
  itens = [
    { id: 55, nome: 'Amazon Web Services', obj: {oi: 'oi'}},
    { id: 122, nome: 'Eletrobras', obj: {oi: 'oi'}},
  ]

  constructor() {
  }
 
  ngOnInit(): void { }

  addItem() {
    let id = this.itens[this.itens.length-1].id + 1
    
    this.itens.push({
      id: id,
      nome: `Item ${id}`,
      obj: {
        oi: "Oi"
      }
    })

    this.itens = [...this.itens]
  }
}
