import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {MusicProfilePage} from '../music-profile/music-profile'; 

/**
 * Generated class for the CongratulationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-congratulations',
  templateUrl: 'congratulations.html',
})
export class CongratulationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongratulationsPage');
  }

  goToHomePage() {
    this.navCtrl.popToRoot();
    this.navCtrl.parent.select(0);
  }
  goToCreateMusicProfilePage() {
    this.navCtrl.popToRoot();
    this.navCtrl.push(MusicProfilePage);
  }
}
