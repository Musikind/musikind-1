import { GettingStartedPage } from './../getting-started/getting-started';
import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsingMusicPage } from '../using-music/using-music';
import { MusicActivityPage } from '../music-activity/music-activity';
import { MusicProfilePage } from '../music-profile/music-profile';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
//import Constants from '../../../Constants.js';
//const { home } = Constants;
@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 // template: `${home.title}`,
})
export class HomePage {
  //home: any;
  //Constants: any;
  //public Constants:any = {home};

  constructor(public navCtrl: NavController, public translate: TranslateService, public translateModule: TranslateModule) { 
        translate.addLangs(["en"]);
      //translate.addLangs(["en", "pt"]);
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
       // translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
        translate.use(browserLang.match(/en/) ? browserLang : 'en');
  }

  //Move to Using Music Page on click of Start Button
  goToMusicPage() {
    this.navCtrl.push(UsingMusicPage);
  }

  //Move to Music Activity Page on click of One to One & Group
  goToMusicActivity(isGroup: boolean) {
    this.navCtrl.push(MusicActivityPage, {
      isGroup : isGroup 
    });
  }

  //Move to Music Profile page on click of Music Profile
  goToMusicProfile() {
    this.navCtrl.push(MusicProfilePage);
  }

  //Move to Getting Started Page on click of Music Plan
  goToGettingStarted() {
    this.navCtrl.push(GettingStartedPage);
  }


}
