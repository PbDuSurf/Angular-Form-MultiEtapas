import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form-etapa-tres',
  templateUrl: './form-etapa-tres.component.html',
  styleUrls: ['./form-etapa-tres.component.css']
})
export class FormEtapaTresComponent {
  public formTres!: FormGroup;

  public etapa: string = 'Dados profissionais';

  constructor(private formPrincipal: AppComponent) {
    this.formTres = this.formPrincipal.getFormEtapaTres();
  }
}
