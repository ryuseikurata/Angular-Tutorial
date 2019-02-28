import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr Nice' },
      { id: 12, name: 'Kamakiri' },
      { id: 13, name: 'Konoyarou' },
      { id: 14, name: 'Gryou' },
      { id: 15, name: 'Cour' },
      { id: 16, name: 'Lux' },
      { id: 17, name: 'Oilen' },
      { id: 18, name: 'Sunder' },
      { id: 19, name: 'Vol' },
      { id: 20, name: 'Tomato' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

