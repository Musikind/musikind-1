import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MusicBenefitPage } from '../music-benefit/music-benefit';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { PopOverComponent } from '../../components/pop-over/pop-over';

/**
 * Generated class for the UsingMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-usingmusic',
  templateUrl: 'using-music.html',
})
export class UsingMusicPage {
  startUsingMusicOption:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, 
    public translateModule: TranslateModule, public popOverCtrl: PopoverController) {
      // set radio button default to second option
        this.startUsingMusicOption = 2; 
      this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsingMusicPage');
  }
  
  //Move to previous page on click of Back Button
  closeModal() {
    this.navCtrl.pop();
  }

  //Move to Music Benefit Pafge on click og Next Button
  goToMusicBenefit() {
    this.navCtrl.push(MusicBenefitPage);
  }

  //Set Radio Button value in Radio Button parent variable
  setModuleOption(myEvent){
    console.log("selected radio button value = "+myEvent);
    this.startUsingMusicOption = myEvent;
  }

  //Open popover on click of help/query icon
  presentPopover(myEvent) {
    let popover = this.popOverCtrl.create(PopOverComponent);
    popover.present({
      ev: myEvent
    });
    
  }

}
