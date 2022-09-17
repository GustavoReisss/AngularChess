import { Form } from './../../shared/classes/form/form.class';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form!: Form;

  constructor() { }

  ngOnInit(): void {
    this.form = new Form({
      username: [{value: 'user', disabled: true}, [Validators.required, Validators.minLength(5)]],
      password: [{value: 'pass', disabled: false}, [Validators.required]],
      teste: ['', [Validators.required]]
    })

    this.logForm()
  }

  logForm() {
    console.log('changed', this.form.changed)
    console.log(this.form.value)
    console.log(this.form.controls)
  }
}
