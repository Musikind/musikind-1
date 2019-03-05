import { Component, Injectable } from '@angular/core';
import { HomePage } from '../home/home';
import { LibraryPage } from '../library/library';
import { TipsPage } from '../tips/tips';
import { SettingsPage } from '../settings/settings';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Injectable()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  /**
 * Represents on tab click which page to navigate on
 */

  tab1Root = HomePage;
  tab2Root = LibraryPage;
  tab3Root = TipsPage;
  tab4Root = SettingsPage;

  constructor(public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
  }
}
