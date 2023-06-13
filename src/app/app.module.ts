import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEtapaUmComponent } from './form-etapa-um/form-etapa-um.component';
import { FormEtapaDoisComponent } from './form-etapa-dois/form-etapa-dois.component';
import { FormEtapaTresComponent } from './form-etapa-tres/form-etapa-tres.component';
import { FormEtapaFinalComponent } from './form-etapa-final/form-etapa-final.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormEtapaUmComponent,
    FormEtapaDoisComponent,
    FormEtapaTresComponent,
    FormEtapaFinalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
