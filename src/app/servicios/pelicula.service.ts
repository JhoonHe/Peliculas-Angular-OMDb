import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private api_url = 'https://omdbapi.com/?apikey';
  private api_key = 'e9e40461';

  constructor(private http: HttpClient) { }

  obtenerPeliculas(nombre: string): Observable<any> {
    return this.http.get(`${this.api_url}=${this.api_key}&s=${nombre}`);
  }

  verPelicula(id: string): Observable<any> {
    return this.http.get(`${this.api_url}=${this.api_key}&i=${id}`);
  }
}
