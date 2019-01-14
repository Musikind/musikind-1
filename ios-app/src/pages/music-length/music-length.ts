import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectMusicStylePage } from '../select-music-style/select-music-style';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the MusicLengthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-musiclength',
  templateUrl: 'music-length.html',
})
export class MusicLengthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicLengthPage');
  }
  closeModal() {
    this.navCtrl.pop();
  }
  goToSelectMusicStyle() {
    this.navCtrl.push(SelectMusicStylePage);
  }

}
