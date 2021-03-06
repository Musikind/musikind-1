import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {CongratulationsPage} from '../congratulations/congratulations';

/**
 * Generated class for the SchedulingWeekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduling-week',
  templateUrl: 'scheduling-week.html',
})
export class SchedulingWeekPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulingWeekPage');
  }

    /**
 *Represents a functionality of back button.
 *@constructor
 */
  closeModal() {
    this.navCtrl.pop();
  }

    /**
 *Represents a Navigation functionality.
 *@constructor
 */
  goToCongratulation(){
    this.navCtrl.push(CongratulationsPage);
  }

}
