import { Injectable } from "@angular/core";
import { Personagem } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _personagens: Personagem[] = [
    {nome: 'Goku', poder: 30000},
    {nome: 'Vegeta', poder: 15000},
  ]

  get personagens(): Personagem[] {
    return [...this._personagens]
  }

  constructor() {
  }

  adicionarPersonagem(personagem: Personagem) {
    this._personagens.push(personagem)
  }

}
