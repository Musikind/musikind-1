import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopOverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pop-over',
  templateUrl: 'pop-over.html'
})
export class PopOverComponent {
  title: string = "A popover title";
  description: any = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique neque at erat pretium, a laoreet metus sodales. Maecenas consectetur, libero sed porttitor imperdiet, est nisi mattis massa, id posuere neque libero vel tortor. Cras non pellentesque tellus. Fusce semper elit in arcu venenatis, eget porttitor velit sodales. Nulla gravida."; 
  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  
}
