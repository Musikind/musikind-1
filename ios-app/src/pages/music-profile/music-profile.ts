import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipsPage } from '../tips/tips';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the MusicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-musicprofile',
  templateUrl: 'music-profile.html',
})
export class MusicProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicProfilePage');
  }
  
  closeModal() {
    this.navCtrl.pop();
  }

  goToTipsPage() {
    this.navCtrl.push(TipsPage)
  }

}
