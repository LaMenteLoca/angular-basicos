import { Component } from '@angular/core';

@Component({
   selector: 'app-contador',
   template: `
      <h1>{{ titulo }}</h1>

      <h3> la base es: {{ base }}</h3>

      <button (click)="acumular( base )">  {{ base }} </button>

      <span> {{ numero }}  </span>

      <button (click)="acumular(-base)"> - {{ base }} </button>
   `
})

export class ContadorComponent{
   titulo: string = 'Contador de la  Mente Loca';
   base  : number = 5;
   numero: number = 10;
  
   acumular( valor: number) {
      this.numero += valor;
  }
}