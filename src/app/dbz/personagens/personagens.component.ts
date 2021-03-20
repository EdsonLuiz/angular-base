import { DbzService } from './../services/dbz.service';
import { Personagem } from './../interfaces/dbz.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent {

  // @Input('inputData')
  // personagens: Personagem[] = []

  constructor(private dbzService: DbzService) {

  }

  get personagens(): Personagem[] {
    return this.dbzService.personagens
  }


}
