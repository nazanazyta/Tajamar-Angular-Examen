import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from './../../models/serie';
import { SerieService } from './../../services/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public serie: Serie;

  constructor(private _service: SerieService, private _activeRoute: ActivatedRoute) { }

  mostrarSerie(id: string){
    this._service.getSerie(id).subscribe(response => {
      this.serie = response;
    });
  }  

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params) => {
      this.mostrarSerie(params.id);
    });
  }

}
