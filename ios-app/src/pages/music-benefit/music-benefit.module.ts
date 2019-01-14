import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicBenefitPage } from './music-benefit';

@NgModule({
  declarations: [
    MusicBenefitPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicBenefitPage),
  ],
})
export class MusicBenefitPageModule {}
