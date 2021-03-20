import { Contador } from './contador/contador.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    Contador
  ],
  exports: [
    Contador
  ]
})
export class ContadorModule {}
