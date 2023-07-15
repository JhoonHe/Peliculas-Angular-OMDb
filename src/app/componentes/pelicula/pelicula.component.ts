import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from 'src/app/servicios/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  id_pelicula: string = '';
  pelicula: any;

  constructor(private servicio: PeliculaService, private routerActivate: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_pelicula = this.routerActivate.snapshot.params['id'];

    this.servicio.verPelicula(this.id_pelicula).subscribe(
      (datos => {
        this.pelicula = datos;

      })
    );
  }

  regresar() {
    this.router.navigate([''])
  }
}
