import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService, TranslateModule } from '@ngx-translate/core';


@IonicPage()
@Injectable()
@Component({
  selector: 'page-MusicSectionNewPage',
  templateUrl: 'music-section-new.html',
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public translateModule: TranslateModule) {
        this.translate.setDefaultLang('en');
        this.tracks = this.generateTracks();
        this.currentTrack = this.tracks[0];
        this.item_two = this.items_two[0];
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