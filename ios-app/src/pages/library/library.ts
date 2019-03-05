import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MusicSectionJsonProvider } from '../../providers/music-section-json/music-section-json';

/*
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
    selector: 'page-library',
    templateUrl: 'library.html',

})
export class LibraryPage {
    items_one: any = [];
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
    items_two:any = [];
    item_two:any=[]; 
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService,
         public translateModule: TranslateModule, public trackJsonProvider:MusicSectionJsonProvider) {
        this.translate.setDefaultLang('en');
        this.items_one = this.translate.instant('library.items.Items_one');
        this.items_two = this.translate.instant('library.items.items_two');
        //call track json function from provider and stored its return value in tracks
        this.tracks = this.trackJsonProvider.createAudioJSON();
        this.currentTrack = this.tracks[0];
        this.item_two = this.items_two[0];      
    }
   
     /**
 *Represents a function to play a Track.
 *@constructor
 *@param {string} track - Currently selected track details.
 */
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

        this.audioProgress = setInterval(() => {
            if (track.progress < track.durationSeconds) {
                track.progress++;
            }
        }, track.durationSeconds * 1000);
    }

      /**
 *Represents a function to get Laps time of a playing track.
 *@constructor
 */
    getLapsString() {
        //get already played audio time
        let val1 = this.currentTrack.laps;
        let min = Math.floor(val1 / 60), sec = val1 % 60;
        return (min < 10 ? "0" + min.toString() : min.toString()) + " : " + (sec < 10 ? "0" + sec.toString() : sec.toString())
    }

      /**
 *Represents a function to calculate progress value of currently playing track.
 *@constructor
 */
    getProgressValue(){
        //calculate progress value of audio playing
        return Math.round(1 / (this.currentTrack.durationSeconds / 100) * this.currentTrack.laps);
    }

      /**
 *Represents a function to pause a Track.
 *@constructor
 *@param {string} track - Currently selected track details.
 */
    pauseTrack(track) {
        //pause audio
        track.playing = false;
        clearInterval(this.progressInterval);

    }

  /**
 *Represents a function to play a next Track.
 *@constructor
 */
    nextTrack() {
        //move to next track of play list
        let index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;
        this.playTrack(this.tracks[index]);
    }

      /**
 *Represents a function to play a previous Track.
 *@constructor
 */
    prevTrack() {
        //move to previous track of playlist
        let index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;
        this.playTrack(this.tracks[index]);

    }




























}
