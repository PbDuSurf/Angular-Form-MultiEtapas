import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form-etapa-dois',
  templateUrl: './form-etapa-dois.component.html',
  styleUrls: ['./form-etapa-dois.component.css']
})
export class FormEtapaDoisComponent {
  public formDois!: FormGroup;

  public etapa: string = 'Endereço';

  constructor(private formPrincipal: AppComponent) {
    this.formDois = this.formPrincipal.getFormEtapaDois();
  }
}
