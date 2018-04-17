import { Component } from '@angular/core';

/**
 * Generated class for the ClaimsStatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'claims-status',
  templateUrl: 'claims-status.html'
})
export class ClaimsStatusComponent {

  text: string;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Accepted', 'In Progress', 'Denied'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
 
  public barChartData:any[] = [
    {data: [36, 59, 10], label: 'Claim', backgroundColor: '#007337'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() {
    console.log('Hello ClaimsStatusComponent Component');
    this.text = 'Hello World';
  }

}
