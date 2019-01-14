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

  goToMusicPage() {
    this.navCtrl.push(UsingMusicPage);
  }
  goToMusicActivity() {
    this.navCtrl.push(MusicActivityPage);
  }
  goToMusicProfile() {
    this.navCtrl.push(MusicProfilePage);
  }
  goToGettingStarted() {
    this.navCtrl.push(GettingStartedPage);
  }

}
