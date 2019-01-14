import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicLengthPage } from './music-length';

@NgModule({
  declarations: [
    MusicLengthPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicLengthPage),
  ],
})
export class MusicLengthPageModule {}
