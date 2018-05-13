import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";
import {MessageService} from "./message.service";

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    return of(HEROES);
  }
}
