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
  commonMusicStyle: string; 
  commonMusicStyles: any = ["0", "1", "2"]; 
  musicStyle: any; 
  items_one:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    console.log('Music style navParams.data' + navParams.data);
    
    //get parameters from previous page
    if(navParams.data){
      console.log("item one = "+JSON.stringify(navParams.data.items_one));
      this.items_one = navParams.data.items_one;
      console.log("music style = "+JSON.stringify(navParams.data.MusicStyle));
      this.musicStyle = navParams.data.MusicStyle; 
    }else {
      this.items_one = this.translate.instant('library.items.items_two');
    }
  
    //set radio button default selection to first
    this.commonMusicStyle = "0"; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicStylePage');
  }

  //open previous page on click of back button
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

  //move to Music Section Page on click of Next Button with parameters
  goToMusicSectionNewPage(){
    this.navCtrl.push(MusicSectionNewPage, {
          style : 'Classical', 
          audio : 'Calm'
         });
  }

  //set selection value of radio button to one variable
  changeStatus(val){
    this.commonMusicStyle = val;
  }


}
