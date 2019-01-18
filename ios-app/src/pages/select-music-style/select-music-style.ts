import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LibraryPage} from '../library/library';

/**
 * Generated class for the SelectMusicStylePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-selectmusicstyle',
  templateUrl: 'select-music-style.html',
})
export class SelectMusicStylePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectMusicStylePage');
  }
  closeModal() {
    this.navCtrl.pop();
  }
  goToLibrary(){
    this.navCtrl.parent.select(1);
    this.navCtrl.push(LibraryPage, {
      style : 'Classical', 
      audio : 'Calm'
    });
    this.navCtrl.popToRoot();
  }

}
