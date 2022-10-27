import { HttpService } from './../../shared/services/http/http.service';
import { Form } from './../../shared/classes/form/form.class';
import { NgControlStatus, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form!: Form;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.form = new Form({
      username: [{value: 'user', disabled: true}, [Validators.required, Validators.minLength(5)]],
      password: [{value: 'pass', disabled: false}, [Validators.required]],
    })

    // this.logForm()
    this.httpService.get("http://127.0.0.1:8000/tipos_investimentos").subscribe(res => console.log(res))
  }

  logForm() {
    console.log('changed', this.form.changed)

    console.log(this.form)
    console.log(this.form.viewForm())
    console.log(this.form.controls)
  }

  
}
