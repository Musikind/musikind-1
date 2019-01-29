import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LibraryPage} from '../library/library';

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
  commonMusicStyle: string; 
  commonMusicStyles: any = ["0", "1", "2"]; 
  items_one:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    if(navParams.data){
      this.items_one = navParams.data.items_one;
    }else {
      this.items_one = this.translate.instant('library.items.items_two');
    }
  
    this.commonMusicStyle = "0"; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicStylePage');
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
