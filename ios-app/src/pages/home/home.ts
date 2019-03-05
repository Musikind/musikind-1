import { GettingStartedPage } from './../getting-started/getting-started';
import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsingMusicPage } from '../using-music/using-music';
import { MusicActivityPage } from '../music-activity/music-activity';
import { MusicProfilePage } from '../music-profile/music-profile';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public translate: TranslateService, public translateModule: TranslateModule) { 
        translate.addLangs(["en"]);
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en/) ? browserLang : 'en');
  }

  /**
 *Represents a Navigation function.
 *@constructor
 */
  goToMusicPage() {
  //Move to Using Music Page on click of Start Button
    this.navCtrl.push(UsingMusicPage);
  }

  /**
 *Represents a Navigation function.
 *@constructor
 */
  goToMusicActivity(isGroup: boolean) {
    //Move to Music Activity Page on click of One to One & Group
    this.navCtrl.push(MusicActivityPage, {
      isGroup : isGroup 
    });
  }

  /**
 *Represents a Navigation function.
 *@constructor
 */
  goToMusicProfile() {
    //Move to Music Profile page on click of Music Profile
    this.navCtrl.push(MusicProfilePage);
  }

     /**
 *Represents a Navigation function.
 *@constructor
 */
  goToGettingStarted() {
    //Move to Getting Started Page on click of Music Plan
    this.navCtrl.push(GettingStartedPage);
  }


}
