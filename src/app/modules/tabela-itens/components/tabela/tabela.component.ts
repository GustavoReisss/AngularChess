import { Validators } from '@angular/forms';
import { Form } from './../../../../shared/classes/form/form.class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  _itens: any

  get itens() {
    return this._itens
  }

  @Input() set itens(itens: any) {
    for (let item of itens) {
      this.formulario.addControl(String(item.id), new Form({
        'id': item.id,
        'nome': [item.nome, [Validators.required, Validators.minLength(5)]]
      }))
    }

    this._itens = itens
    this.updateFormValue()
  }

  formulario: Form

  constructor() {
    this.formulario = new Form({})
  }

  ngOnInit(): void {
  }

  toggleForm() {
    if (this.formulario.enabled) {
      this.formulario.disable()
      return
    }

    this.formulario.enable()
  }

  show() {
    console.log(this.formulario)
  }

  resetForm() {
    this.formulario.resetValue()
  }

  updateFormValue() {
    this.formulario.updateInitialValue()
  }

  save() {
    for (let controlName in this.formulario.controls) {
      let control: any | null = this.formulario.controls[controlName]

      if (control && control.changed) {
        console.log(controlName, control)
      }
    }
  }

}
