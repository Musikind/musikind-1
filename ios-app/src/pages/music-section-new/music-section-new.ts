import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MusicSectionJsonProvider } from '../../providers/music-section-json/music-section-json';
import { Storage } from '@ionic/storage';


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
    activeCls: string = ""; 
    footerRowCls: string = "row"; 
    musicSectionCls:any = "step_one_heading"; 
    benefitValue:any;
    colorCode:any;


    constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, 
        public translateModule: TranslateModule, public trackJsonProvider:MusicSectionJsonProvider,
        public storage: Storage) {
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

    getProgressValue(){
        //calculate progress value of audio playing
        return Math.round(1 / (this.currentTrack.durationSeconds / 100) * this.currentTrack.laps);
    }

    pauseTrack(track) {
        //pause current playing track
        track.playing = false;
        clearInterval(this.progressInterval);

    }

    nextTrack() {
        //play next track
        let index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;
        this.playTrack(this.tracks[index]);
    }

    prevTrack() {
        //play prev track
        let index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;
        this.playTrack(this.tracks[index]);

    }

    closeModal() {
        // move to previous page
        this.navCtrl.pop();
      }

}