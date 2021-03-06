import { SchedulingWeekPage } from './../scheduling-week/scheduling-week';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the MusicSectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-music-section',
  templateUrl: 'music-section.html',
})
export class MusicSectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicSectionPage');
  }

  /**
 *Represents a Navigation functionality.
 *@constructor
 */
  goToSchedulingWeek() {
    //go to scheduling week page
    this.navCtrl.push(SchedulingWeekPage);
  }

  /**
 *Represents a functionality of back button.
 *@constructor
 */
  closeModal() {
    //go to previous page on click of back button
    this.navCtrl.pop();
  }
}
