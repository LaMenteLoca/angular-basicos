import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

   heroes: string[] = ['Batman', 'Robin', 'Linterna Verde', 'Hulk',  'Superman', 'Mujer Maravilla'];
   heroeBorrado: string = '';


borrarHeroe() {
   console.log('Borrando Héroe....');
   this.heroeBorrado = this.heroes.shift() || '' ;
   console.log(this.heroeBorrado);
}
/*    shift()  borra el primero y devuelve el borrado.
      pop()  borra el ultimo elemento y devuelve el borrado.
      splice(0,1) borra primer numero
         (0,2) borra primeros dos
         (-1,1) borra el ultimo
         (-2,1) borra penultimo*/

}

