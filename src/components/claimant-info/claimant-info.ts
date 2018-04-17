import { Component } from '@angular/core';

/**
 * Generated class for the ClaimantInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'claimant-info',
  templateUrl: 'claimant-info.html'
})
export class ClaimantInfoComponent {
  claimantList: Array<any> = [
    {
      id: 'A231',
      name: 'Ramesh Prasad',
      age: 45,
      gender: 'M',
      date: '26/05/2016',
      type: 'Retirement',
      status: 'Accepted'
    },
    {
      id: 'A201',
      name: 'Ratul Bagchi',
      age: 55,
      gender: 'M',
      date: '21/12/2017',
      type: 'Retirement',
      status: 'In Progress'
    },
    {
      id: 'A031',
      name: 'Avinash Kaushik',
      age: 35,
      gender: 'M',
      date: '07/11/2016',
      type: 'Retirement',
      status: 'Denied'
    }
  ]
  constructor() {

  }

}
