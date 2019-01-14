import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicActivityPage } from './music-activity';

@NgModule({
  declarations: [
    MusicActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicActivityPage),
  ],
})
export class MusicActivityPageModule {}
