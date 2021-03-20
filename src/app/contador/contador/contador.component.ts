import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html'
})
export class Contador {
  numero: number = 0;
  base: number = 5;

  handleOperation(valor: number) {
    if(this.numero > 0 || valor >= 1) {
      this.numero += valor;
    }
  }
}
