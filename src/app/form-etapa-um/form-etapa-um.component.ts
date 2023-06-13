import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form-etapa-um',
  templateUrl: './form-etapa-um.component.html',
  styleUrls: ['./form-etapa-um.component.css']
})
export class FormEtapaUmComponent {
  public formUm!: FormGroup;

  public etapa: string = 'Dados pessoais';

  constructor(private formPrincipal: AppComponent) {
    this.formUm = this.formPrincipal.getFormEtapaUm();
  }
}
