import { DbzService } from './services/dbz.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { AdicionarComponent } from './adicionar/adicionar.component';


@NgModule({
  declarations: [MainPageComponent, PersonagensComponent, AdicionarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
