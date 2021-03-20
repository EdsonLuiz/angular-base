import { DbzService } from './../services/dbz.service';
import { Personagem } from './../interfaces/dbz.interface';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent {

  @Input()
  novo: Personagem = {} as Personagem

  constructor(private dbzService: DbzService) {}

  // @Output()
  // personagemEmmiter: EventEmitter<Personagem> = new EventEmitter();

  adicionar() {
    if(!this.novo.nome.trim()) {
      return
    }
    // this.personagemEmmiter.emit(this.novo)
    this.dbzService.adicionarPersonagem(this.novo)
    this.novo = {nome: '', poder: 0}
  }

}
