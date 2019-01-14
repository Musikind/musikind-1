import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicSectionPage } from './music-section';

@NgModule({
  declarations: [
    MusicSectionPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicSectionPage),
  ],
})
export class MusicSectionPageModule {}
