import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form-etapa-final',
  templateUrl: './form-etapa-final.component.html',
  styleUrls: ['./form-etapa-final.component.css']
})
export class FormEtapaFinalComponent {
  public formFinal!: FormGroup;

  public etapa: string = 'Cadastro Concluído';

  constructor(private formPrincipal: AppComponent) {
    this.formFinal = this.formPrincipal.multiForm;

    console.log('formFinal',this.formFinal);
    
    console.log('formFinal.value',this.formFinal.value);
    
  }
}
