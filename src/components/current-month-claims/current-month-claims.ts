import { Component } from '@angular/core';

/**
 * Generated class for the CurrentMonthClaimsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'current-month-claims',
  templateUrl: 'current-month-claims.html'
})
export class CurrentMonthClaimsComponent {

  text: string;

  constructor() {
    console.log('Hello CurrentMonthClaimsComponent Component');
    this.text = 'Hello World';
  }

   // Doughnut
   public doughnutChartLabels:string[] = ['Auto', 'Business', 'Retirement', 'Property', 'Other'];
   public doughnutChartData:number[] = [350, 450, 100, 70, 100];
   public doughnutChartType:string = 'doughnut';
   public chartColors: any[] = [
    { 
      backgroundColor:["#AE1E23", "#326295", "#9F6B3F", "#007337", "#e8a833"] 
    }];

    doughnutChartOptions: any = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      elements: {
        radius: 300
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      cutoutPercentage: 75,
      animation: {
        animateScale: true,
        animateRotate: true
      }
      };
   // events
   public chartClicked(e:any):void {
     console.log(e);
   }
  
   public chartHovered(e:any):void {
     console.log(e);
   }

   calculateTotal() {
     let total = 0;
     this.doughnutChartData.forEach(item => {
      total = total + item;
     });
     return total;
   }

}
