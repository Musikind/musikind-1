import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
// import {LibraryPage} from '../library/library';
import { MusicSectionNewPage } from '../music-section-new/music-section-new';

/**
 * Generated class for the MusicStylePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-musicstyle',
  templateUrl: 'music-style.html',
})
export class MusicStylePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicStylePage');
  }

  closeModal() {
    this.navCtrl.pop();
  }
  // goToLibrary(){
  //   this.navCtrl.parent.select(1);
  //   this.navCtrl.push(LibraryPage, {
  //     style : 'Classical', 
  //     audio : 'Calm'
  //   });
  //   this.navCtrl.popToRoot();
  // }

  goToMusicSectionNewPage(){
    this.navCtrl.push(MusicSectionNewPage, {
          style : 'Classical', 
          audio : 'Calm'
         });
  }


}
