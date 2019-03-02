webpackJsonp([0],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListPageModule", function() { return PlayListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_list__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayListPageModule = /** @class */ (function () {
    function PlayListPageModule() {
    }
    PlayListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__play_list__["a" /* PlayListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__play_list__["a" /* PlayListPage */]),
            ],
        })
    ], PlayListPageModule);
    return PlayListPageModule;
}());

//# sourceMappingURL=play-list.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PlayListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayListPage = /** @class */ (function () {
    function PlayListPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
        this.footer = this.translate.instant('PlaylistPage.footer');
        this.tracks = this.generateTracks();
    }
    PlayListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlayListPage');
    };
    PlayListPage.prototype.generateTracks = function () {
        var tracks = [];
        for (var a = 1; a <= 100; a++) {
            var min = this.getRandomMinutes(), sec = this.getRandomSecond();
            var minstr = min < 10 ? "0" + min : min, secStr = sec < 10 ? "0" + sec : sec;
            var track = {
                title: "Song Title " + a,
                durationString: minstr + ":" + secStr,
                playing: false,
                durationSeconds: Math.floor(min * 60 + sec),
                progress: 0,
                laps: 0,
                lapsString: "0"
            };
            tracks.push(track);
        }
        return tracks;
    };
    PlayListPage.prototype.getRandomMinutes = function () {
        return Math.floor(Math.random() * 10);
    };
    PlayListPage.prototype.getRandomSecond = function () {
        return Math.floor(Math.random() * 60);
    };
    PlayListPage.prototype.playTrack = function (track) {
        var _this = this;
        console.log('play track');
        // First stop any currently playing tracks
        if (this.currentTrack) {
            if (track === this.currentTrack) {
                track.playing = true;
            }
            else {
                this.pauseTrack(this.currentTrack);
                this.currentTrack.progress = 0;
                this.currentTrack.laps;
            }
            track.playing = true;
            this.currentTrack = track;
        }
        this.currentTrack = track;
        // Simulate track playing
        this.progressInterval = setInterval(function () {
            if (track.laps <= track.durationSeconds + 1 && track.progress <= 100) {
                track.laps++;
                track.progress = _this.getProgressValue();
                if (track.laps === track.durationSeconds) {
                    _this.nextTrack();
                }
            }
            else {
                clearInterval(_this.progressInterval);
            }
        }, 1000);
        // this.audioProgress = setInterval(() => {
        //     if (track.progress < track.durationSeconds) {
        //         track.progress++;
        //     }
        // }, track.durationSeconds * 1000);
    };
    PlayListPage.prototype.getLapsString = function () {
        var val1 = this.currentTrack.laps;
        var min = Math.floor(val1 / 60), sec = val1 % 60;
        return (min < 10 ? "0" + min.toString() : min.toString()) + " : " + (sec < 10 ? "0" + sec.toString() : sec.toString());
    };
    PlayListPage.prototype.getProgressValue = function () {
        return Math.round(1 / (this.currentTrack.durationSeconds / 100) * this.currentTrack.laps);
    };
    PlayListPage.prototype.pauseTrack = function (track) {
        track.playing = false;
        clearInterval(this.progressInterval);
    };
    PlayListPage.prototype.nextTrack = function () {
        var index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;
        this.playTrack(this.tracks[index]);
    };
    PlayListPage.prototype.prevTrack = function () {
        var index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;
        this.playTrack(this.tracks[index]);
    };
    PlayListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-play-list',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/play-list/play-list.html"*/'\n\n\n<ion-content>\n  <div class="step_one_heading">\n    <ion-list class="home">\n      <ion-row>\n        \n        <ion-col text-center col-6 class="step_one">\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n          <h1 text-center ion-text>{{translate.instant("PlaylistPage.title")}}</h1>\n          <ion-list style="height: 350px; overflow: scroll;">\n            <button class="md" width="100%" detail-none ion-item *ngFor="let track of tracks; let i = index;" (click)="track.playing ? pauseTrack(track) : playTrack(track)" [ngClass]="{ \'alternate\': i % 2, \'playing\': track.playing }">\n                <ion-avatar item-left>\n                <button *ngIf="!track.playing" (click)="playTrack(currentTrack)"  class="play_list" ion-button icon-only><ion-icon name="play"></ion-icon></button>\n                <button *ngIf="track.playing" (click)="pauseTrack(currentTrack)"  class="play_list" ion-button icon-only><ion-icon name="pause"></ion-icon></button>\n                </ion-avatar>\n                  <div float-left>{{track.title}}</div> <div float-right>{{track.durationString}}</div>\n            </button>\n          </ion-list>\n          <ion-col text-center>\n              <div class="next_bta"><button ><ion-icon ios="ios-play" md="md-play"></ion-icon>&nbsp;&nbsp; Music player here </button></div>\n            </ion-col>\n        </ion-col>\n        \n          <ion-col text-center col-12>\n              <span class="txt-bottom">{{translate.instant("PlaylistPage.footer.str1")}}\n                  <strong>{{translate.instant("PlaylistPage.footer.str2")}}</strong>\n                  {{translate.instant("PlaylistPage.footer.str3")}}\n                 <strong> {{translate.instant("PlaylistPage.footer.str4")}}</strong>\n              </span>\n          </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/play-list/play-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], PlayListPage);
    return PlayListPage;
}());

//# sourceMappingURL=play-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map