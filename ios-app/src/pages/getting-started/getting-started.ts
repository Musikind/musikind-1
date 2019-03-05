import { SettingAimPage } from './../setting-aim/setting-aim';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * Generated class for the GettingStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-getting-started',
  templateUrl: 'getting-started.html',
})
export class GettingStartedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GettingStartedPage');
  }

   /**
 *Represents a Navigation function.
 *@constructor
 */
  goToSettingAim() {
    //go to setting page on click of button
    this.navCtrl.push(SettingAimPage);
  }

   /**
 *Represents a Back button functionality.
 *@constructor
 */
  closeModal() {
    //go to previous page on click of back button
    this.navCtrl.pop();
  }

}
