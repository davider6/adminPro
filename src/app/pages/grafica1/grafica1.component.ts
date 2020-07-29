import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
 
  public labels1: string[] = ['Hot Dogs', 'Pizza', 'Alitas'];
  public data1 = [
    [5, 8, 7],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
