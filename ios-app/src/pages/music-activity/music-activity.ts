import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicLengthPage } from '../music-length/music-length';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the MusicActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-musicactivity',
  templateUrl: 'music-activity.html',
})
export class MusicActivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicActivityPage');
  }
  closeModal() {
    this.navCtrl.pop();
  }
  goToMusicLength() {
    this.navCtrl.push(MusicLengthPage);
  }

}
