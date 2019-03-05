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
  
 /**
 *Represents a functionality of back button.
 *@constructor
 *@param {string} val - The index of selected value.
 */
  closeModal() {
     //Move to previous page on click of Back Button
    this.navCtrl.pop();
  }

    /**
 *Represents a Navigation functionality.
 *@constructor
 */
  goToMusicBenefit() {
     //Move to Music Benefit Pafge on click og Next Button
    this.navCtrl.push(MusicBenefitPage);
  }

    /**
 *Represents a function to set selected radio button value.
 *@constructor
 *@param {string} myEvent - The index of selected value.
 */
  setModuleOption(myEvent){ 
    //Set Radio Button value in Radio Button parent variable
    console.log("selected radio button value = "+myEvent);
    this.startUsingMusicOption = myEvent;
  }

    /**
 *Represents a function to open popover.
 *@constructor
 *@param {string} myEvent - The index of selected value.
 */
  presentPopover(myEvent) {
     //Open popover on click of help/query icon
    let popover = this.popOverCtrl.create(PopOverComponent);
    popover.present({
      ev: myEvent
    });
    
  }

}
