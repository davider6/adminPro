import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {

  progreso: number = 50;
  progreso2: number = 50;

  get getProgreso(){
    return `${ this.progreso }%`;
  }

  get getProgreso2(){
    return `${ this.progreso2 }%`;
  }

  cambiarValor ( valor: number ){

    if (valor < 0 && this.progreso == 0) return;

    if (valor > 0 && this.progreso == 100) return;

    this.progreso += valor;

  }

  cambiarValor2 ( valor: number ){

    if (valor < 0 && this.progreso2 == 0) return;

    if (valor > 0 && this.progreso2 == 100) return;

    this.progreso2 += valor;

  }

  onChange( valor: number ){

    if ( valor >= 100 ) this.progreso = 100;
    if ( valor <= 0 ) this.progreso = 0;
    
    this.progreso = valor;
    
  }

}
