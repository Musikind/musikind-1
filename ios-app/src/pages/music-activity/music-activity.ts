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
  selectedChoice: any = "1";
  isGroup = false; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    this.choices = this.translate.instant('CommonActivity.Choices');
    this.isGroup = navParams.data.isGroup;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicActivityPage');
  }
  closeModal() {
    this.navCtrl.pop();
  }
  goToMusicLength() {
    let showCustomMusicStyle= false; 
    if(this.selectedChoice === "0"){
      showCustomMusicStyle =true; 
    }
    this.navCtrl.push(MusicLengthPage, {
      updateMusicStyle : showCustomMusicStyle, 
      isGroup: this.isGroup 
    });
  }

  changeChoice(val){
    this.selectedChoice = val;
    console.log("selecetd choice = "+this.selectedChoice);
  }

}
