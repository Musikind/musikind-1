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
  customMusicLength: boolean = false; 
  isGroup:boolean = false; 
  //assisgn default radio button value to second
  selectedMusicLength:any = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    //get data from previus page parameters
    this.customMusicLength = this.navParams.data.updateMusicStyle; 
    this.isGroup = this.navParams.data.isGroup; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicLengthPage');
  }

    /**
 *Represents a functionality of back button.
 *@constructor
 */
  closeModal() {
     //go to previous page on back button click
    this.navCtrl.pop();
  }

    /**
 *Represents a Navigation functionality.
 *@constructor
 */
  goToSelectMusicStyle() {
      //go to next pag on Next button click
    if(this.customMusicLength){
        this.navCtrl.push(SelectMusicStylePage, { 
          "items_one" : this.isGroup?  this.translate.instant('MusicLength.MusicStyleGroup.Items_one'): this.translate.instant('MusicLength.MusicStyle.Items_one')
        });
    }
    else {
        this.navCtrl.push(SelectMusicStylePage);  
    }
    
  }

     /**
 *Represents a function to store value of selected radio button.
 *@constructor
 *@param {string} myEvent - The index of selected row.
 */
  presentPopover(myEvent){
    //assign value of selected radio button
    this.selectedMusicLength = myEvent;
    console.log("selected music length = "+this.selectedMusicLength);
  }

}
