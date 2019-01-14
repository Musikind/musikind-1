import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulingWeekPage } from './scheduling-week';

@NgModule({
  declarations: [
    SchedulingWeekPage,
  ],
  imports: [
    IonicPageModule.forChild(SchedulingWeekPage),
  ],
})
export class SchedulingWeekPageModule {}
