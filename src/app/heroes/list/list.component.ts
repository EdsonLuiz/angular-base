import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Dr. Strange']
  lastHeroDeleted: string = ''

  handleDelete() {
    this.lastHeroDeleted = this.heroes.shift() || ''
  }
}
