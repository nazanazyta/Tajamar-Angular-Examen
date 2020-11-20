import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from './../../models/personaje';
import { SerieService } from './../../services/serie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes: Array<Personaje>;
  public id: string;

  constructor(private _service: SerieService, private _activeRoute: ActivatedRoute) {
    this.personajes = [];
    this.id = "";
  }

  mostrarPersonajes(id: string){
    this._service.getPersonajes(id).subscribe(response => {
      this.personajes = response;
      console.log(this.personajes);
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params) => {
      this.mostrarPersonajes(params.id);
      this.id = params.id;
    });
  }

}
