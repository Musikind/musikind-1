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
  choices: any = []; 
  //assign default radio button to second
  selectedChoice: any = "1";
  isGroup = false; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    //get data from parameters of previous page
    this.choices = this.translate.instant('CommonActivity.Choices');
    this.isGroup = navParams.data.isGroup;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicActivityPage');
  }

    /**
 *Represents a functionality of back button.
 *@constructor
 */
  closeModal() {
      //go to previous page on back click
    this.navCtrl.pop();
  }

 /**
 *Represents a Navigation functionaity.
 *@constructor
 */
  goToMusicLength() {
    //go to next page
    let showCustomMusicStyle= false; 
    if(this.selectedChoice === "0"){
      showCustomMusicStyle =true; 
    }
    this.navCtrl.push(MusicLengthPage, {
      updateMusicStyle : showCustomMusicStyle, 
      isGroup: this.isGroup 
    });
  }

   /**
 *Represents a function to assign value in variable of selected radio button.
 *@constructor
 */
  changeChoice(val){
    //assign selected radio button value
    this.selectedChoice = val;
    console.log("selecetd choice = "+this.selectedChoice);
  }

}
