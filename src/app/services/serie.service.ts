import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Serie } from './../models/serie';
import { Personaje } from '../models/personaje';

@Injectable()
export class SerieService {
    private url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlseries;
    }

    getSeries(): Observable<any> {
        var request = "api/series";
        return this._http.get(this.url + request);
    }

    getSerie(id: string): Observable<any> {
        var request = "api/series/" + id;
        return this._http.get(this.url + request);
    }

    getPersonajes(id: string): Observable<any> {
        var request = "api/series/personajesserie/" + id;
        return this._http.get(this.url + request);
    }

    postPersonaje(personaje: Personaje): Observable<any> {
        var request = "api/personajes";
        var json = JSON.stringify(personaje);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url + request, json, { headers: header });
    }
}