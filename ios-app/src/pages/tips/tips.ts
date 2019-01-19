import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {UsingMusicPage} from '../using-music/using-music';
import {MusicActivityPage} from '../music-activity/music-activity';


/*
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsPage');
  }
  goToUsingMusicInPersonalCare(){
    this.navCtrl.push(UsingMusicPage)
  }
  goToUsingMusicActivity(){
    this.navCtrl.push(MusicActivityPage);
  }

}
