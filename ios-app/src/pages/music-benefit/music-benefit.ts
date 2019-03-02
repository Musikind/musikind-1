import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
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
  selected:any = 0; 
  musicStyle: any; 
  items_one:any = this.translate.instant('library.items.items_two');
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule,  public popoverCtrl: PopoverController) {
    this.translate.setDefaultLang('en');
    this.items_one = this.translate.instant('library.items.items_two');
    //set first radio button as default selected radio button
    this.musicStyle = 0;
   }

   ionViewWillEnter(){
    console.log('ionViewWillEnter' + this.selected);
  }

  //Move to previous page on click of back button
  closeModal() {
    this.navCtrl.pop();
  }

  //Move to Music Style page on click of Next button with two paramenters
  goToMusicStyle() {
    this.navCtrl.push(MusicStylePage, {
        "items_one" : this.translate.instant('MusicBenefit.MusicStyle.Items_one'), 
        "MusicStyle" : this.getSelectedMusicStyle()
    });
  }

  //Open popover on click of help/query icon
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopOverComponent);
    popover.present({
      ev: myEvent
    });
  }

  //to set new value in radio button variable
  changeStatus(newValue){
    this.musicStyle = newValue; 
    // this.updateSelected(newValue);
  }

  // getFromLocal(key){
  //   return localStorage.getItem(key)
  // }

  //to fetch selected radio button row details for sending to next page
  //in parameter
  getSelectedMusicStyle(){
     let selected = {}; 
     for(let i=0; i<this.items_one.length; i++){
      let item = this.items_one[i]; 
      if(item.active){
        selected = item; 
      }
    }
    return selected;  
  }

  // updateSelected(newValue){
  //     for(let i=0; i<this.items_one.length; i++){
  //         let item = this.items_one[i]; 
  //         if((item.id -1) === newValue){
  //           item.active =true; 
  //         }else {
  //           item.active =false; 
  //         }
  //     }
  // }

  // setToLocal(key, value){
  //   localStorage.setItem(key, value);
  // }
}
