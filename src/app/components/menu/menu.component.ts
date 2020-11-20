import { Component, OnInit } from '@angular/core';
import { SerieService } from './../../services/serie.service';
import { Serie } from './../../models/serie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series: Array<Serie>;

  constructor(private _service: SerieService) {
    this.series = [];
  }

  mostrarSeries(){
    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

  ngOnInit(): void {
    this.mostrarSeries();
    console.log("inicio");
  }

}
