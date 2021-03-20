import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Personagem } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  novo: Personagem = {
    nome: 'novo',
    poder: 0
  }

}
