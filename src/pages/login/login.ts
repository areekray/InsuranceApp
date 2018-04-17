import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  constructor(public navCtrl: NavController) {

  }

  login() {
    if(this.username.trim().length > 0 && this.password.trim().length > 0){
      this.navCtrl.setRoot('DashboardPage');
    }
    else{
      console.log('empty');
    }
  }

}
