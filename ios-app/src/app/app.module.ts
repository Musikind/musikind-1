import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LibraryPage } from '../pages/library/library';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TipsPage } from '../pages/tips/tips';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { UsingMusicPage } from '../pages/using-music/using-music';
import { MusicBenefitPage } from '../pages/music-benefit/music-benefit';
import { MusicStylePage } from '../pages/music-style/music-style';
import { MusicActivityPage } from '../pages/music-activity/music-activity';
import { MusicLengthPage } from '../pages/music-length/music-length';
import { SelectMusicStylePage } from '../pages/select-music-style/select-music-style';
import { MusicProfilePage } from '../pages/music-profile/music-profile';
import { CongratulationsPage } from '../pages/congratulations/congratulations';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http"; 
import { GettingStartedPage } from '../pages/getting-started/getting-started';
import { SettingAimPage } from '../pages/setting-aim/setting-aim';
import { MusicSectionPage } from '../pages/music-section/music-section';
import { SchedulingWeekPage } from '../pages/scheduling-week/scheduling-week';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { AudioProvider } from '../providers/audio/audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import {TooltipsModule} from 'ionic-tooltips'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopOverComponent } from '../components/pop-over/pop-over';
import {PlayListPage } from '../pages/play-list/play-list'; 


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    MyApp,
    LibraryPage,
    HomePage,
    TabsPage,
    TipsPage,
    SettingsPage,
    UsingMusicPage,
    MusicBenefitPage,
    MusicStylePage,
    MusicActivityPage,
    MusicLengthPage,
    SelectMusicStylePage,
    MusicProfilePage,
    GettingStartedPage,
    SettingAimPage,
    MusicSectionPage,
    SchedulingWeekPage,
    ProgressBarComponent,
    CongratulationsPage,
    PopOverComponent,
    PlayListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        IonicModule.forRoot(MyApp),
    TooltipsModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LibraryPage,
    HomePage,
    TabsPage,
    TipsPage,
    SettingsPage,
    UsingMusicPage,
    MusicBenefitPage,
    MusicStylePage,
    MusicActivityPage,
    MusicLengthPage,
    SelectMusicStylePage,
    MusicProfilePage,
    GettingStartedPage,
    SettingAimPage,
    MusicSectionPage,
    SchedulingWeekPage,
    CongratulationsPage,
    PopOverComponent,
    PlayListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AudioProvider,
    SmartAudioProvider

  ]
})
export class AppModule {}
