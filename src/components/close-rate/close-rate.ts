import { Component } from '@angular/core';

/**
 * Generated class for the CloseRateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'close-rate',
  templateUrl: 'close-rate.html'
})
export class CloseRateComponent {

  text: string;

  constructor() {
    console.log('Hello CloseRateComponent Component');
    this.text = 'Hello World';
  }

}
