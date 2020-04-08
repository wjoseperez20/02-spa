import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html'
})
export class FinderComponent implements OnInit {

  heroes: any[] = [];
  term: string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['text']);
      this.term = params['text'];
    });
  }

  ngOnInit(): void {
  }

}
