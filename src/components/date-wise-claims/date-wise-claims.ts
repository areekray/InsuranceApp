import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

/**
 * Generated class for the DateWiseClaimsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'date-wise-claims',
  templateUrl: 'date-wise-claims.html'
})
export class DateWiseClaimsComponent implements OnInit {
  
  public lineChartOptions:any = {
    responsive: true,
    
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'transparent', //'rgba(148,159,177,0.2)',
      borderColor: '#ba0012',//'rgba(148,159,177,1)',
      pointBackgroundColor: '#ba0012', //'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'ba0012'//'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'transparent', //'rgba(77,83,96,0.2)',
      borderColor: '#0040cc',//'rgba(77,83,96,1)',
      pointBackgroundColor: '#0040cc', //'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#0040cc' //'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  lineChartLabels : Array<any> = [];
  lineChartData : Array<any> = [ 
    {data: [2,1,3,2,1,3,2], label: 'Goal'}];
  constructor() {
    console.log('Hello DateWiseClaimsComponent Component');
  }

  ngOnInit(): void {
    var currentDay = moment();
    for(let i=0; i<7; i++){
      if(i>0) {
        currentDay = currentDay.add(-1, 'days');        
      }
      this.lineChartLabels.unshift(currentDay.format('DD-MMM'));
    }
  }


}
