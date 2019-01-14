import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicBenefitPage } from '../music-benefit/music-benefit';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.startUsingMusicOption = 1; 
    /*translate.addLangs(["en"]);
      //translate.addLangs(["en", "pt"]);
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
       // translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
       translate.use(browserLang.match(/en/) ? browserLang : 'en');*/
      this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsingMusicPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  goToMusicBenefit() {
    this.navCtrl.push(MusicBenefitPage);
  }

}
