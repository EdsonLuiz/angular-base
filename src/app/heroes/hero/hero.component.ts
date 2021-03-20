import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  title: string = 'Hero component';
  name: string = 'Ironman'
  age: number = 45;

  getName(): string {
    return `Mr ${this.name}`
  }

  get nameToUpper(): string {
    return this.name.toUpperCase()
  }

  changeHeroName(): void {
    this.name = this.name === 'Ironman' ? 'Spiderman' : 'Ironman'
  }
}
