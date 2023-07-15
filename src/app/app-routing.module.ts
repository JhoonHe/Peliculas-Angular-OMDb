import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'pelicula/:id', component: PeliculaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
