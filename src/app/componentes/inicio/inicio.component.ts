import { Component } from '@angular/core';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  peliculas: any[] = [];
  nombre_pelicula: string = '';
  error: any;

  constructor(private servicio: PeliculaService, private router: Router) { }

  obtenerPeliculas() {
    this.servicio.obtenerPeliculas(this.nombre_pelicula).subscribe(
      (datos => {
        this.peliculas = datos.Search;

        this.error = datos.Error;

        if (this.error === "Too many results.") {
          this.error += " Please enter more information";
        }
      })
    );
  }

  verPelicula(id: string) {
    this.router.navigate(['pelicula', id])
  }
}
