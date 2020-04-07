import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Heroe} from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  result: Heroe[] = [];

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    this._router.navigate(['/result', termino]);
  }
}
