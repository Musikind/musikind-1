import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MusicSectionJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MusicSectionJsonProvider {
public musicTrackJSONArray:any = [];
  // public trackJson:any={title:'',
  //             time:'',
  //             playing: false,
  //             durationSeconds: '',
  //             progress: 0,
  //             laps: 0,
  //             lapsString: "0"};

  constructor(public http: HttpClient) {
    console.log('Hello MusicSectionJsonProvider Provider');
  }

  createAudioJSON(){
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
      this.musicTrackJSONArray.push(track);
    }
    console.log('cretaed json for track = '+ JSON.stringify(this.musicTrackJSONArray));
    return this.musicTrackJSONArray;
    
  }

  getRandomMinutes() {
    return Math.floor(Math.random() * 10);
}
getRandomSecond() {
    return Math.floor(Math.random() * 60);
}



}
