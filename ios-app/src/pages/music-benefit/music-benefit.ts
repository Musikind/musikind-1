import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MusicStylePage } from '../music-style/music-style';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { PopOverComponent } from '../../components/pop-over/pop-over';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule,  public popoverCtrl: PopoverController) {
    this.translate.setDefaultLang('en');
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicBenefitPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  goToMusicStyle() {
    this.navCtrl.push(MusicStylePage, {
        "items_one" : this.translate.instant('MusicBenefit.MusicStyle.Items_one')
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopOverComponent);
    popover.present({
      ev: myEvent
    });
  }
}
