import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormEtapaUmComponent } from './form-etapa-um/form-etapa-um.component';
import { FormEtapaDoisComponent } from './form-etapa-dois/form-etapa-dois.component';
import { FormEtapaTresComponent } from './form-etapa-tres/form-etapa-tres.component';
import { FormEtapaFinalComponent } from './form-etapa-final/form-etapa-final.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'etapa-01',
    pathMatch: 'full'
  },
  {
    path: 'etapa-01',
    component: FormEtapaUmComponent
  },
  {
    path: 'etapa-02',
    component: FormEtapaDoisComponent
  },
  {
    path: 'etapa-03',
    component: FormEtapaTresComponent
  },
  {
    path: 'final',
    component: FormEtapaFinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
