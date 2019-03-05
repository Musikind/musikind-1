import { MusicSectionPage } from './../music-section/music-section';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the SettingAimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-setting-aim',
  templateUrl: 'setting-aim.html',
})
export class SettingAimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingAimPage');
  }

    /**
 *Represents a Navigation functionality.
 *@constructor
 */
  goToMusicSection() {
    this.navCtrl.push(MusicSectionPage);
  }

    /**
 *Represents a functionality of back button.
 *@constructor
 */
  closeModal() {
    this.navCtrl.pop();
  }

}
