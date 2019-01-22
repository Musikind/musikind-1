import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { PopOverComponent } from './pop-over/pop-over';
@NgModule({
	declarations: [ProgressBarComponent,
    PopOverComponent],
	imports: [],
	exports: [ProgressBarComponent,
    PopOverComponent]
})
export class ComponentsModule {}


