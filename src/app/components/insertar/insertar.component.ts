import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';
import { Serie } from './../../models/serie';
import { SerieService } from './../../services/serie.service';
import { SerieComponent } from './../serie/serie.component';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  @ViewChild("cajanombre") cajanombre: ElementRef;
  @ViewChild("cajaimagen") cajaimagen: ElementRef;
  @ViewChild("cajaserie") cajaserie: ElementRef;
  public series: Array<Serie>;

  constructor(private _service: SerieService,
    private _router: Router) { }

  insertarPersonaje() {
    var id = 0;
    var nom = this.cajanombre.nativeElement.value;
    var ima = this.cajaimagen.nativeElement.value;
    var ser = parseInt(this.cajaserie.nativeElement.value);
    var perso = new Personaje(id, nom, ima, ser);
    this._service.postPersonaje(perso).subscribe(response => {
      console.log("CORRECTO");
    });
  }

  ngOnInit(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

}
