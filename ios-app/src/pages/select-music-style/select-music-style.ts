import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LibraryPage} from '../library/library';
import {MusicSectionNewPage} from '../music-section-new/music-section-new'

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
  items_one:any = [];
  //set default radio button to second
  selectedMusicStyle:any = "1";
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    //get previous page parameters value
    if(navParams.data && navParams.data.items_one){
      this.items_one = navParams.data.items_one;
    }else {
        this.items_one = this.translate.instant('MusicBenefit.MusicStyle.Items_one');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectMusicStylePage');
  }

  closeModal() {
    //go to previous page
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
  
  goToPlayer(){
    //go to next page
    this.navCtrl.push(MusicSectionNewPage, {
      style : 'Classical', 
      audio : 'Calm'
    });
  }

  changeChoice(val){
    //set selected radio button values
    this.selectedMusicStyle = val;
    console.log("selected music style = "+this.selectedMusicStyle);
  }

}
