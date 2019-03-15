import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MusicSectionJsonProvider } from '../../providers/music-section-json/music-section-json';
import { Storage } from '@ionic/storage';
import {
  StreamingMedia,
  StreamingAudioOptions
} from "@ionic-native/streaming-media";

@IonicPage()
@Injectable()
@Component({
  selector: "page-MusicSectionNewPage",
  templateUrl: "music-section-new.html"
})
export class MusicSectionNewPage {

    items_one = [
        { id: 1, name: 'Classical', active: true },
        { id: 2, name: 'Traditional Songs', active: false },
        { id: 3, name: 'Populer Music', active: false },
    ];
    audioProgress: number;
    toggleClass_one(item) {
        Object.keys(this.items_one).forEach(key => {
            if (this.items_one[key].id != item.id) {
                this.items_one[key].active = false;
            } else {
                item.active = true;
            }
        });
    }
    items_two = [
        { id: 1, name: 'Calm', active: true },
        { id: 2, name: 'Stimulation', active: false },
        { id: 3, name: 'Concentration', active: false },
    ];
    item_two:any; 
    toggleClass_two(item) {
        Object.keys(this.items_two).forEach(key => {
            if (this.items_two[key].id != item.id) {
                this.items_two[key].active = false;
            } else {
                item.active = true;
            }
        });
    }
    tracks: any;
    currentTrack: any;
    activeProgress: any;
    progressInterval: any;
    activeCls: string = ""; 
    footerRowCls: string = "row"; 
    musicSectionCls:any = "step_one_heading"; 
    benefitValue:any;
    colorCode:any;
    knobValues:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, 
        public translateModule: TranslateModule, public trackJsonProvider:MusicSectionJsonProvider,
        public storage: Storage,public streamingMedia: StreamingMedia) {
        this.translate.setDefaultLang('en');
        // call MUsic Track list Json function and store returned json in a variable 'tracks'
            this.tracks =  this.trackJsonProvider.createAudioJSON();
            console.log("Tracks = "+JSON.stringify(this.tracks));
            this.currentTrack = this.tracks[0];
            this.item_two = this.items_two[0];
    
            let activeCls = (this.navParams.data && typeof this.navParams.data.audio === "object") ? this.navParams.data.audio.name.toLocaleLowerCase(): "";   
            this.musicSectionCls = activeCls === ""? "step_one_heading" : "step_one_heading " + activeCls;  //(this.navParams.data && typeof this.navParams.data.audio) ? this.navParams.data.audio.name.toLocaleLowerCase(): ""  
            this.footerRowCls = activeCls === ""? "row" : "row " + activeCls;  

            //get benefit value from storage 
            this.storage.get('benefilValue').then(res=>{
                this.benefitValue = res;
                console.log('selected benefit value = '+this.benefitValue);
                //assign color of background according to benefit value
                if(this.benefitValue == 0){
                    this.colorCode = '#b5ec73';
                }
                if(this.benefitValue == 1){
                    this.colorCode = '#ffb732';
                }
                if(this.benefitValue == 2){
                    this.colorCode = '#CF89CE';
                }
            });
        
    }

    ionViewDidEnter(){
        this.tracks =  this.trackJsonProvider.createAudioJSON();
        console.log("Tracks = "+JSON.stringify(this.tracks));
        this.currentTrack = this.tracks[0];
    }
   
    /**
 *Represents a function to play a Track.
 *@constructor
 *@param {string} track - The row value of selected track.
 */
    playTrack(track: any) {
        console.log('play track');
        // First stop any currently playing tracks
        if (this.currentTrack) {
            this.pauseTrack(this.currentTrack);
            track.playing = true;
            this.currentTrack = track;
    }
    this.currentTrack = track;
    // Simulate track playing
    this.progressInterval = setInterval(() => {
      if (track.laps <= track.durationSeconds + 1 && track.progress <= 100) {
        track.laps++;
        track.progress = this.getProgressValue();
        if (track.laps === track.durationSeconds) {
          this.nextTrack();
        }
      } else {
        clearInterval(this.progressInterval);
      }
    }, 1000);

    this.audioProgress = setInterval(() => {
      if (track.progress < track.durationSeconds) {
        track.progress++;
      }
    }, track.durationSeconds * 1000);

    //Media Audio Streaming
    this.openAudioInFullScreen();
  }

  /**
   *Represents a function to calculate progress value of currently playing track.
   *@constructor
   */
  getProgressValue() {
    //calculate progress value of audio playing
    return Math.round(
      (1 / (this.currentTrack.durationSeconds / 100)) * this.currentTrack.laps
    );
  }

  /**
   *Represents a function to pause track.
   *@constructor
   *@param {string} track - The index of selected row.
   */
  pauseTrack(track) {
    //pause current playing track
    track.playing = false;
    clearInterval(this.progressInterval);

    // Stop current audio
    this.streamingMedia.stopAudio();
  }

  /**
   *Represents a function to play next track.
   *@constructor
   */
  nextTrack() {
    //play next track
    let index = this.tracks.indexOf(this.currentTrack);
    index >= this.tracks.length - 1 ? (index = 0) : index++;
    this.playTrack(this.tracks[index]);
  }

  /**
   *Represents a function to play previous track.
   *@constructor
   */
  prevTrack() {
    //play prev track
    let index = this.tracks.indexOf(this.currentTrack);
    index > 0 ? index-- : (index = this.tracks.length - 1);
    this.playTrack(this.tracks[index]);
  }

  /**
   *Represents a functionality of back button.
   *@constructor
   */
  closeModal() {
    // move to previous page
    this.navCtrl.pop();
  }
  /**
   *Represents a functiona to open audio player on full screen (Music streaming).
   *@constructor
   */
  openAudioInFullScreen() {
    //var audioUrl = "http://soundbible.com/grab.php?id-2196&type=mp3";

    // Play an audio file with options (all options optional)
    var options: StreamingAudioOptions = {
      //   bgColor: "#FFFFFF",
      //   bgImage: "assets/imgs/big_logo.png",
      //   bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
      initFullscreen: false, // true is default. iOS only.
      //   keepAwake: false, // prevents device from sleeping. true is default. Android only.
      successCallback: function() {
        console.log("Player closed without error.");
      },
      errorCallback: function(errMsg) {
        console.log("Error! " + errMsg);
      }
    };

    // Play an audio file
    this.streamingMedia.playAudio(
      "http://soundbible.com/grab.php?id-2196&type=mp3",
      options
    );

    // Stop current audio
    // this.streamingMedia.stopAudio();

    // Pause current audio (iOS only)
    // this.streamingMedia.pauseAudio();

    // Resume current audio (iOS only)
    // this.streamingMedia.resumeAudio();
  }
}
