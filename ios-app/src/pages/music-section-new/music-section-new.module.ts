import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicSectionNewPage } from './music-section-new';

@NgModule({
  declarations: [
    MusicSectionNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicSectionNewPage),
  ],
})
export class MusicSectionNewPageModule {}
