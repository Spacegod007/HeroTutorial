import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    return of(HEROES);
  }
}
