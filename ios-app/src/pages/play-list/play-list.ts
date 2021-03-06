import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
/**
 * Generated class for the PlayListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-play-list',
  templateUrl: 'play-list.html',
})
export class PlayListPage {
  tracks: any;
  currentTrack: any;
  activeProgress: any;
  progressInterval: any;
  footer:string; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
    this.translate.setDefaultLang('en');
    this.footer = this.translate.instant('PlaylistPage.footer');
    this.tracks = this.generateTracks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayListPage');
  }
  
  generateTracks() {
    let tracks = [];
    for (let a = 1; a <= 100; a++) {
        let min = this.getRandomMinutes(), sec = this.getRandomSecond();
        let minstr = min < 10 ? "0" + min : min, secStr = sec < 10 ? "0" + sec : sec;

        let track = {
            title: `Song Title ${a}`,
            durationString: `${minstr}:${secStr}`,
            playing: false,
            durationSeconds: Math.floor(min * 60 + sec),
            progress: 0,
            laps: 0,
            lapsString: "0"
        };
        tracks.push(track);
    }
    return tracks;
}

getRandomMinutes() {
  return Math.floor(Math.random() * 10);
}
getRandomSecond() {
  return Math.floor(Math.random() * 60);
}

playTrack(track: any) {
  console.log('play track');
  // First stop any currently playing tracks
  if (this.currentTrack) {
      if(track === this.currentTrack){
          track.playing = true;
      }else {
          this.pauseTrack(this.currentTrack);
          this.currentTrack.progress = 0; 
          this.currentTrack.laps

      }
     
      track.playing = true;
      this.currentTrack = track;
  }
  this.currentTrack = track;
  // Simulate track playing
  this.progressInterval = setInterval(() => {
      if (track.laps <= track.durationSeconds + 1 && track.progress <= 100) {
          track.laps++;
          track.progress = this.getProgressValue();
          if(track.laps === track.durationSeconds){
              this.nextTrack();
          }
      } else {
          clearInterval(this.progressInterval);
      }
  }, 1000);
  // this.audioProgress = setInterval(() => {
  //     if (track.progress < track.durationSeconds) {
  //         track.progress++;
  //     }
  // }, track.durationSeconds * 1000);
}
getLapsString() {
  let val1 = this.currentTrack.laps;
  let min = Math.floor(val1 / 60), sec = val1 % 60;
  return (min < 10 ? "0" + min.toString() : min.toString()) + " : " + (sec < 10 ? "0" + sec.toString() : sec.toString())
}
getProgressValue(){
  return Math.round(1 / (this.currentTrack.durationSeconds / 100) * this.currentTrack.laps);
}

pauseTrack(track) {
  track.playing = false;
  clearInterval(this.progressInterval);

}

nextTrack() {
  let index = this.tracks.indexOf(this.currentTrack);
  index >= this.tracks.length - 1 ? index = 0 : index++;
  this.playTrack(this.tracks[index]);
}

prevTrack() {
  let index = this.tracks.indexOf(this.currentTrack);
  index > 0 ? index-- : index = this.tracks.length - 1;
  this.playTrack(this.tracks[index]);

}

}
