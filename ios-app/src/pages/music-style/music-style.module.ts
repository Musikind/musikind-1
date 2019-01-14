import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicStylePage } from './music-style';

@NgModule({
  declarations: [
    MusicStylePage,
  ],
  imports: [
    IonicPageModule.forChild(MusicStylePage),
  ],
})
export class MusicStylePageModule {}
