import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicStylePage } from '../music-style/music-style';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the MusicBenefitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-musicbenefit',
  templateUrl: 'music-benefit.html',
})
export class MusicBenefitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule,  public toastCtrl: ToastController) {
    this.translate.setDefaultLang('en');
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicBenefitPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  goToMusicStyle() {
    this.navCtrl.push(MusicStylePage);
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'A default toast message',
      duration: 3000
    });
    toast.present();
  }


  showMessage(){
    this.presentToast();
  }
}
