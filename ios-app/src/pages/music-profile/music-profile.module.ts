import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicProfilePage } from './music-profile';

@NgModule({
  declarations: [
    MusicProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MusicProfilePage),
  ],
})
export class MusicProfilePageModule {}
