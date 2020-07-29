import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donuth',
  templateUrl: './donuth.component.html',
  styles: [
  ]
})
export class DonuthComponent implements OnInit {

  @Input() title: string = "Sin título";

  @Input('labels') doughnutChartLabels: Label[] = ['Data1', 'Data2', 'Data3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [33, 33, 34],
  ];

  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#FF5800', '#FFB414' ] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
