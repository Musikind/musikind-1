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
  title: string = "Help";
  description: any = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida."; 
  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  
}
