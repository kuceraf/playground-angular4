import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../../services/hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';

  constructor (private heroService: HeroService) {}

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }

  // addHero(name: string) {
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .subscribe(
  //       hero  => this.heroes.push(hero),
  //       error =>  this.errorMessage = <any>error);
  // }
}

export interface Hero {
  name: String;
}
