webpackJsonp([17],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicSectionJsonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MusicSectionJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MusicSectionJsonProvider = /** @class */ (function () {
    // public trackJson:any={title:'',
    //             time:'',
    //             playing: false,
    //             durationSeconds: '',
    //             progress: 0,
    //             laps: 0,
    //             lapsString: "0"};
    function MusicSectionJsonProvider(http) {
        this.http = http;
        this.musicTrackJSONArray = [];
        console.log('Hello MusicSectionJsonProvider Provider');
    }
    MusicSectionJsonProvider.prototype.createAudioJSON = function () {
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
            this.musicTrackJSONArray.push(track);
        }
        console.log('cretaed json for track = ' + JSON.stringify(this.musicTrackJSONArray));
        return this.musicTrackJSONArray;
    };
    MusicSectionJsonProvider.prototype.getRandomMinutes = function () {
        return Math.floor(Math.random() * 10);
    };
    MusicSectionJsonProvider.prototype.getRandomSecond = function () {
        return Math.floor(Math.random() * 60);
    };
    MusicSectionJsonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MusicSectionJsonProvider);
    return MusicSectionJsonProvider;
}());

//# sourceMappingURL=music-section-json.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the PopOverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopOverComponent = /** @class */ (function () {
    function PopOverComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.title = "Help";
        this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida.";
    }
    PopOverComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopOverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pop-over',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/components/pop-over/pop-over.html"*/'<!-- Generated template for the PopOverComponent component -->\n<div padding>\n  <h1>{{title}}</h1>\n  <p>{{description}}</p>\n</div>\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/components/pop-over/pop-over.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], PopOverComponent);
    return PopOverComponent;
}());

//# sourceMappingURL=pop-over.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicBenefitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_style_music_style__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pop_over_pop_over__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(135);
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
 * Generated class for the MusicBenefitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicBenefitPage = /** @class */ (function () {
    function MusicBenefitPage(navCtrl, navParams, translate, translateModule, popoverCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.selected = 0;
        this.items_one = this.translate.instant('library.items.items_two');
        this.translate.setDefaultLang('en');
        this.items_one = this.translate.instant('library.items.items_two');
        //set first radio button as default selected radio button
        this.musicStyle = 0;
        storage.set('benefilValue', this.musicStyle);
    }
    MusicBenefitPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter' + this.selected);
    };
    /**
  *Represents a functionality of back button.
  *@constructor
  */
    MusicBenefitPage.prototype.closeModal = function () {
        //Move to previous page on click of back button
        this.navCtrl.pop();
    };
    /**
    *Represents a Navigation functionality.
    *@constructor
    */
    MusicBenefitPage.prototype.goToMusicStyle = function () {
        //Move to Music Style page on click of Next button with two paramenters
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__music_style_music_style__["a" /* MusicStylePage */], {
            "items_one": this.translate.instant('MusicBenefit.MusicStyle.Items_one'),
            "MusicStyle": this.getSelectedMusicStyle()
        });
    };
    MusicBenefitPage.prototype.presentPopover = function (myEvent) {
        //Open popover on click of help/query icon
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_pop_over_pop_over__["a" /* PopOverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    MusicBenefitPage.prototype.changeStatus = function (newValue) {
        //to set new value in radio button variable
        this.musicStyle = newValue;
        this.storage.set('benefilValue', this.musicStyle);
    };
    /**
  *Represents a function to fetch selected row details.
  *@constructor
  *@param {string} newValue - The index of selected row.
  */
    MusicBenefitPage.prototype.getSelectedMusicStyle = function () {
        //to fetch selected radio button row details for sending to next page
        //in parameter
        var selected = {};
        for (var i = 0; i < this.items_one.length; i++) {
            var item = this.items_one[i];
            if (item.active) {
                selected = item;
            }
        }
        return selected;
    };
    MusicBenefitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musicbenefit',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-benefit/music-benefit.html"*/'<!--\n\n  Generated template for the MusicBenefitPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>usingmusicbenefit</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content id="myModel">\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col text-center col-6 class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n            <h1 text-center ion-text>{{translate.instant("startMusicBenefitTitle")}}</h1>\n\n            <!-- <ul>\n\n                <li *ngFor="let item of items_one; let i = index">\n\n                  {{ item.name }} &nbsp;  <ion-icon name="ios-help-circle-outline" (click)="presentPopover($event)" ></ion-icon> \n\n                    <span class="round"> \n\n                      <input type="radio" name="demo" (click)="changeStatus(i)" value="{{ i }}" id="radio-one" class="form-radio" [checked]=" (item.active)"  /></span>\n\n                </li>\n\n            </ul> -->\n\n            <ion-list radio-group [(ngModel)]="musicStyle">\n\n                  \n\n              <ion-item *ngFor="let item of items_one; let i = index">              \n\n                    <ion-label style="color:black;">{{ item.name }} &nbsp;  \n\n                        <ion-icon name="ios-help-circle-outline" (click)="presentPopover($event)"></ion-icon></ion-label> \n\n                    <ion-radio value="{{i}}" class="form-radio"(ionSelect)="changeStatus(i)" [checked]=" (item.active)" ></ion-radio>\n\n               </ion-item>\n\n               </ion-list>\n\n            <ion-col text-center>\n\n              <div class="next_bta" ><button (click)="goToMusicStyle()">{{translate.instant("commonNext")}} </button></div>\n\n            </ion-col>\n\n        </ion-col>\n\n        \n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-benefit/music-benefit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MusicBenefitPage);
    return MusicBenefitPage;
}());

//# sourceMappingURL=music-benefit.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicStylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_section_new_music_section_new__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {LibraryPage} from '../library/library';

/**
 * Generated class for the MusicStylePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicStylePage = /** @class */ (function () {
    function MusicStylePage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.commonMusicStyles = ["0", "1", "2"];
        this.items_one = [];
        this.translate.setDefaultLang('en');
        console.log('Music style navParams.data' + navParams.data);
        //get parameters from previous page
        if (navParams.data) {
            console.log("item one = " + JSON.stringify(navParams.data.items_one));
            this.items_one = navParams.data.items_one;
            console.log("music style = " + JSON.stringify(navParams.data.MusicStyle));
            this.musicStyle = navParams.data.MusicStyle;
        }
        else {
            this.items_one = this.translate.instant('library.items.items_two');
        }
        //set radio button default selection to first
        this.commonMusicStyle = "0";
    }
    MusicStylePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicStylePage');
    };
    /**
   *Represents a functionality of back button.
   *@constructor
   */
    MusicStylePage.prototype.closeModal = function () {
        //open previous page on click of back button
        this.navCtrl.pop();
    };
    /**
    *Represents a Navigation functionality.
    *@constructor
    */
    MusicStylePage.prototype.goToMusicSectionNewPage = function () {
        //move to Music Section Page on click of Next Button with parameters
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__music_section_new_music_section_new__["a" /* MusicSectionNewPage */], {
            style: this.musicStyle,
            audio: 'Calm'
        });
    };
    /**
*Represents a function to store selected radio button value.
*@constructor
*@param {string} val - The index of selected row.
*/
    MusicStylePage.prototype.changeStatus = function (val) {
        //set selection value of radio button to one variable
        this.commonMusicStyle = val;
    };
    MusicStylePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musicstyle',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-style/music-style.html"*/'\n\n\n\n\n\n<ion-content id="myModel">\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        \n\n        <ion-col text-center col-6 class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("commonMusicStyleTitle")}}</h1>\n\n          <!-- <ul>\n\n              <li *ngFor="let item of items_one; let i = index" >{{ item.name }}\n\n                  <span class="round">  <input type="radio" name="demo" (click)="changeStatus(i)" value="{{ i }}" id="radio-one" class="form-radio" [checked]=" (item.active)"  /> <label for="radio-one" ></label> </span>\n\n              </li>\n\n          </ul> -->\n\n          <ion-list radio-group [(ngModel)]="commonMusicStyle">\n\n                  \n\n              <ion-item *ngFor="let item of items_one; let i = index">              \n\n                    <ion-label style="color:rgb(27, 27, 27);">{{ item.name }}</ion-label> \n\n                    <ion-radio value="{{i}}" class="form-radio"(ionSelect)="changeStatus(i)" [checked]=" (item.active)" ></ion-radio>\n\n               </ion-item>\n\n              \n\n               </ion-list>\n\n          <ion-col text-center>\n\n            <div class="next_bta"><button (click)="goToMusicSectionNewPage()"><ion-icon ios="ios-play" md="md-play"></ion-icon>&nbsp;&nbsp;{{translate.instant("commonMusicPlay")}}</button></div>\n\n          </ion-col>\n\n          \n\n        </ion-col>\n\n      \n\n          <ion-col text-center col-12 id="musicStyle">\n\n              <span class="txt-bottom"><b><i>{{translate.instant("startMusicStyleBottomTextOne")}}</i></b> {{translate.instant("startMusicStyleBottomTextTwo")}}\n\n               {{translate.instant("startMusicStyleBottomTextThree")}} {{translate.instant("startMusicStyleBottomTextFour")}}\n\n              </span>\n\n          </ion-col>\n\n         \n\n    \n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-style/music-style.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], MusicStylePage);
    return MusicStylePage;
}());

//# sourceMappingURL=music-style.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicLengthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_music_style_select_music_style__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the MusicLengthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicLengthPage = /** @class */ (function () {
    function MusicLengthPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.customMusicLength = false;
        this.isGroup = false;
        //assisgn default radio button value to second
        this.selectedMusicLength = 1;
        this.translate.setDefaultLang('en');
        //get data from previus page parameters
        this.customMusicLength = this.navParams.data.updateMusicStyle;
        this.isGroup = this.navParams.data.isGroup;
    }
    MusicLengthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicLengthPage');
    };
    /**
 *Represents a functionality of back button.
 *@constructor
 */
    MusicLengthPage.prototype.closeModal = function () {
        //go to previous page on back button click
        this.navCtrl.pop();
    };
    /**
 *Represents a Navigation functionality.
 *@constructor
 */
    MusicLengthPage.prototype.goToSelectMusicStyle = function () {
        //go to next pag on Next button click
        if (this.customMusicLength) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_music_style_select_music_style__["a" /* SelectMusicStylePage */], {
                "items_one": this.isGroup ? this.translate.instant('MusicLength.MusicStyleGroup.Items_one') : this.translate.instant('MusicLength.MusicStyle.Items_one')
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_music_style_select_music_style__["a" /* SelectMusicStylePage */]);
        }
    };
    /**
*Represents a function to store value of selected radio button.
*@constructor
*@param {string} myEvent - The index of selected row.
*/
    MusicLengthPage.prototype.presentPopover = function (myEvent) {
        //assign value of selected radio button
        this.selectedMusicLength = myEvent;
        console.log("selected music length = " + this.selectedMusicLength);
    };
    MusicLengthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musiclength',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-length/music-length.html"*/'<!--\n\n  Generated template for the MusicLengthPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>musiclength</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content id="myMusicActivity"> \n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n      <ion-col text-center  class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("commonActivityLengthTitle")}}</h1>\n\n          <!-- <ul>\n\n            <li>{{translate.instant("commonActivityLengthFirstOption")}} <span class="round">\n\n              <input type="radio" name="demo" value="1" id="radio-one" class="form-radio" checked />\n\n              <label for="radio-one"></label>\n\n</span></li>\n\n            <li>{{translate.instant("commonActivityLengthSecondOption")}} <span class="round">\n\n              <input type="radio" name="demo" value="2" id="radio-two" class="form-radio" />\n\n              <label for="radio-two"></label>\n\n</span></li>\n\n          </ul> -->\n\n          <ion-list radio-group [(ngModel)]="selectedMusicLength">\n\n                           \n\n            <ion-item>\n\n                 <ion-label style="color:black;">{{translate.instant("commonActivityLengthFirstOption")}}</ion-label>\n\n                  <ion-radio value="1" class="form-radio" (ionSelect)="presentPopover($event)"></ion-radio>\n\n             </ion-item>\n\n              <ion-item>\n\n                  <ion-label style="color:black;">{{translate.instant("commonActivityLengthSecondOption")}} </ion-label>  \n\n                  <ion-radio value="2" class="form-radio"(ionSelect)="presentPopover($event)"></ion-radio>\n\n                  </ion-item>\n\n            \n\n          </ion-list>\n\n          <ion-col text-center>\n\n              <div class="next_bta" ><button (click)="goToSelectMusicStyle()">{{translate.instant("commonNext")}}</button></div>\n\n          </ion-col>\n\n          <div class="back_btn1 bck_btn_mobile"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-length/music-length.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]])
    ], MusicLengthPage);
    return MusicLengthPage;
}());

//# sourceMappingURL=music-length.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectMusicStylePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_section_new_music_section_new__ = __webpack_require__(90);
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
 * Generated class for the SelectMusicStylePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectMusicStylePage = /** @class */ (function () {
    function SelectMusicStylePage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.items_one = [];
        //set default radio button to second
        this.selectedMusicStyle = "1";
        this.translate.setDefaultLang('en');
        //get previous page parameters value
        if (navParams.data && navParams.data.items_one) {
            this.items_one = navParams.data.items_one;
        }
        else {
            this.items_one = this.translate.instant('MusicBenefit.MusicStyle.Items_one');
        }
    }
    SelectMusicStylePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectMusicStylePage');
    };
    /**
   *Represents a back button functionality.
   *@constructor
   */
    SelectMusicStylePage.prototype.closeModal = function () {
        //go to previous page
        this.navCtrl.pop();
    };
    /**
   *Represents a Navigation function on Next button click.
   *@constructor
   */
    SelectMusicStylePage.prototype.goToPlayer = function () {
        //go to next page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__music_section_new_music_section_new__["a" /* MusicSectionNewPage */], {
            style: 'Classical',
            audio: 'Calm'
        });
    };
    /**
   *Represents a change in radio button.
   *@constructor
   *@param {string} val - The index of selected value.
   */
    SelectMusicStylePage.prototype.changeChoice = function (val) {
        //set selected radio button values
        this.selectedMusicStyle = val;
        console.log("selected music style = " + this.selectedMusicStyle);
    };
    SelectMusicStylePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectmusicstyle',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/select-music-style/select-music-style.html"*/'<!--\n\n  Generated template for the SelectMusicStylePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>selectmusicstyle</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content id="myMusicActivity">\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("commonMusicStyleTitle")}}</h1>\n\n          <!-- <ul>\n\n              <li *ngFor="let item of items_one; let i = index" >{{ item.name }}\n\n                  <span class="round">  <input type="radio" name="demo" value="{{i}}" id="radio-one" class="form-radio" [checked]="(item.active)" /> <label for="radio-one" ></label> </span>\n\n              </li>\n\n          </ul> -->\n\n          <ion-list radio-group [(ngModel)]="selectedMusicStyle">\n\n                  \n\n              <ion-item *ngFor="let item of items_one; let i = index">              \n\n                    <ion-label style="color:black;">{{ item.name }} </ion-label> \n\n                    <ion-radio value="{{i}}" class="form-radio" (ionSelect)="changeChoice(i)" [checked]="(item.active)"></ion-radio>\n\n               </ion-item>\n\n          </ion-list>\n\n          <ion-col text-center>\n\n            <div class="next_bta"><button (click)="goToPlayer()"><ion-icon ios="ios-play" md="md-play"></ion-icon>&nbsp;&nbsp;{{translate.instant("commonMusicPlay")}}</button></div>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n          <ion-col text-center col-12>\n\n              <span class="txt-bottom"><b><i>{{translate.instant("startMusicStyleBottomTextOne")}}</i></b> {{translate.instant("commonMusicStylebottomText")}}</span>\n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/select-music-style/select-music-style.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], SelectMusicStylePage);
    return SelectMusicStylePage;
}());

//# sourceMappingURL=select-music-style.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettingStartedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setting_aim_setting_aim__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the GettingStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GettingStartedPage = /** @class */ (function () {
    function GettingStartedPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    GettingStartedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GettingStartedPage');
    };
    /**
  *Represents a Navigation function.
  *@constructor
  */
    GettingStartedPage.prototype.goToSettingAim = function () {
        //go to setting page on click of button
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__setting_aim_setting_aim__["a" /* SettingAimPage */]);
    };
    /**
  *Represents a Back button functionality.
  *@constructor
  */
    GettingStartedPage.prototype.closeModal = function () {
        //go to previous page on click of back button
        this.navCtrl.pop();
    };
    GettingStartedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-getting-started',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/getting-started/getting-started.html"*/'<!--\n\n  Generated template for the GettingStartedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>gettingStarted</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content>\n\n    <div class="step_one_heading">\n\n      <ion-list class="home">\n\n        <ion-row>\n\n          <ion-col col-3></ion-col>\n\n          <ion-col text-center class="step_one">\n\n            <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n            <h1 text-center ion-text>{{translate.instant("gettingTitle")}}</h1>\n\n            <ion-col col-12 text-left>\n\n              <p class="first-txt">{{translate.instant("gettingFirstText")}}</p>\n\n            </ion-col>\n\n            <ion-col col-12 text-left>\n\n              <p class="first-txt">{{translate.instant("gettingSecondText")}}</p>\n\n            </ion-col>\n\n            <ion-item class="txt-block-email">\n\n              <ion-input type="email" placeholder="{{translate.instant(\'commonEmailText\')}}"></ion-input>\n\n              <button ion-button color="dark" class="btn-color" clear item-right>{{translate.instant("commonSend")}}</button>\n\n            </ion-item>\n\n            <ion-col text-center>\n\n              <div class="next_bta" (click)="goToSettingAim()"><button>{{translate.instant("commonNext")}}</button></div>\n\n            </ion-col>\n\n            <ion-col col-12 class="bottom-txt">\n\n              <p>{{translate.instant("commonStoreText")}}.</p>\n\n            </ion-col>\n\n          </ion-col>\n\n          <ion-col col-3></ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n    </div>\n\n    </ion-content>\n\n  '/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/getting-started/getting-started.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]])
    ], GettingStartedPage);
    return GettingStartedPage;
}());

//# sourceMappingURL=getting-started.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingAimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_section_music_section__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the SettingAimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingAimPage = /** @class */ (function () {
    function SettingAimPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    SettingAimPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingAimPage');
    };
    /**
 *Represents a Navigation functionality.
 *@constructor
 */
    SettingAimPage.prototype.goToMusicSection = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__music_section_music_section__["a" /* MusicSectionPage */]);
    };
    /**
 *Represents a functionality of back button.
 *@constructor
 */
    SettingAimPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    SettingAimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-setting-aim',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/setting-aim/setting-aim.html"*/'<!--\n\n  Generated template for the SettingAimPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>settingAim</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n<ion-content>\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("settingAimTitle")}}</h1>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("settingAimFirstText")}}</p>\n\n          </ion-col>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("settingAimSecondText")}}</p>\n\n          </ion-col>\n\n          <ul>\n\n            <li>{{translate.instant("settingAimFirstOption")}} <span class="round">\n\n              <input type="radio" name="demo" value="1" id="radio-one" class="form-radio" />\n\n              <label for="radio-one"></label>\n\n</span></li>\n\n            <li>{{translate.instant("settingAimSecondOption")}} <span class="round">\n\n              <input type="radio" name="demo" value="2" id="radio-two" class="form-radio" />\n\n              <label for="radio-two"></label>\n\n</span></li>\n\n            <li>{{translate.instant("settingAimThirdOption")}} <span class="round">\n\n              <input type="radio" name="demo" value="3" id="radio-three" class="form-radio" checked />\n\n              <label for="radio-three"></label>\n\n</span></li>\n\n            <li>{{translate.instant("settingAimFourthOption")}} <span class="round">\n\n              <input type="radio" name="demo" value="4" id="radio-four" class="form-radio" />\n\n              <label for="radio-three"></label>\n\n            </span></li>\n\n          </ul>\n\n          <ion-col text-center>\n\n            <div class="next_bta" (click)="goToMusicSection()"><button>{{translate.instant("commonNext")}}</button></div>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/setting-aim/setting-aim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]])
    ], SettingAimPage);
    return SettingAimPage;
}());

//# sourceMappingURL=setting-aim.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicSectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduling_week_scheduling_week__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the MusicSectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicSectionPage = /** @class */ (function () {
    function MusicSectionPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    MusicSectionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicSectionPage');
    };
    /**
   *Represents a Navigation functionality.
   *@constructor
   */
    MusicSectionPage.prototype.goToSchedulingWeek = function () {
        //go to scheduling week page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__scheduling_week_scheduling_week__["a" /* SchedulingWeekPage */]);
    };
    /**
   *Represents a functionality of back button.
   *@constructor
   */
    MusicSectionPage.prototype.closeModal = function () {
        //go to previous page on click of back button
        this.navCtrl.pop();
    };
    MusicSectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-music-section',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-section/music-section.html"*/'<!--\n\n  Generated template for the MusicSectionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>musicSection</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content>\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center  class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("musicSectionTitle")}}</h1>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("musicSectionFirstText")}}</p>\n\n          </ion-col>\n\n          <ul>\n\n            <li><p class="leftTextColor">1. {{translate.instant("musicSectionFirstOptionLeft")}}</p>&nbsp;&nbsp;{{translate.instant("musicSectionFirstOptionRight")}}</li>\n\n            <li><p class="leftTextColor">2. {{translate.instant("musicSectionLeftCommon")}}</p>&nbsp;&nbsp;{{translate.instant("musicSectionSecondOptionRight")}}</li>\n\n            <li><p class="leftTextColor">3. {{translate.instant("musicSectionLeftCommon")}}</p>&nbsp;&nbsp;{{translate.instant("musicSectionThirdOptionRight")}}</li>\n\n          </ul>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("musicSectionBottomText")}}</p>\n\n          </ion-col>\n\n          <ion-col text-center>\n\n            <div class="next_bta" (click)="goToSchedulingWeek()"><button>{{translate.instant("commonNext")}}</button></div>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-section/music-section.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]])
    ], MusicSectionPage);
    return MusicSectionPage;
}());

//# sourceMappingURL=music-section.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulingWeekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__congratulations_congratulations__ = __webpack_require__(371);
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
 * Generated class for the SchedulingWeekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulingWeekPage = /** @class */ (function () {
    function SchedulingWeekPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    SchedulingWeekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulingWeekPage');
    };
    /**
 *Represents a functionality of back button.
 *@constructor
 */
    SchedulingWeekPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    /**
 *Represents a Navigation functionality.
 *@constructor
 */
    SchedulingWeekPage.prototype.goToCongratulation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__congratulations_congratulations__["a" /* CongratulationsPage */]);
    };
    SchedulingWeekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scheduling-week',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/scheduling-week/scheduling-week.html"*/'<!--\n\n  Generated template for the SchedulingWeekPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>schedulingWeek</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content>\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("schedulingWeekTitle")}}</h1>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("schedulingWeekFirstText")}}</p>\n\n          </ion-col>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("schedulingWeekSecondText")}}</p>\n\n          </ion-col>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("schedulingWeekThirdText")}}</p>\n\n          </ion-col>\n\n          <ion-col text-center>\n\n            <div class="next_bta" (click)="goToCongratulation()" ><button>{{translate.instant("commonNext")}}</button></div>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/scheduling-week/scheduling-week.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], SchedulingWeekPage);
    return SchedulingWeekPage;
}());

//# sourceMappingURL=scheduling-week.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_music_section_json_music_section_json__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = /** @class */ (function () {
    function LibraryPage(navCtrl, navParams, translate, translateModule, trackJsonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.trackJsonProvider = trackJsonProvider;
        this.items_one = [];
        this.items_two = [];
        this.item_two = [];
        this.translate.setDefaultLang('en');
        this.items_one = this.translate.instant('library.items.Items_one');
        this.items_two = this.translate.instant('library.items.items_two');
        //call track json function from provider and stored its return value in tracks
        this.tracks = this.trackJsonProvider.createAudioJSON();
        this.currentTrack = this.tracks[0];
        this.item_two = this.items_two[0];
    }
    LibraryPage.prototype.toggleClass_one = function (item) {
        var _this = this;
        Object.keys(this.items_one).forEach(function (key) {
            if (_this.items_one[key].id != item.id) {
                _this.items_one[key].active = false;
            }
            else {
                item.active = true;
            }
        });
    };
    LibraryPage.prototype.toggleClass_two = function (item) {
        var _this = this;
        Object.keys(this.items_two).forEach(function (key) {
            if (_this.items_two[key].id != item.id) {
                _this.items_two[key].active = false;
            }
            else {
                item.active = true;
            }
        });
    };
    /**
*Represents a function to play a Track.
*@constructor
*@param {string} track - Currently selected track details.
*/
    LibraryPage.prototype.playTrack = function (track) {
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
        this.audioProgress = setInterval(function () {
            if (track.progress < track.durationSeconds) {
                track.progress++;
            }
        }, track.durationSeconds * 1000);
    };
    /**
*Represents a function to get Laps time of a playing track.
*@constructor
*/
    LibraryPage.prototype.getLapsString = function () {
        //get already played audio time
        var val1 = this.currentTrack.laps;
        var min = Math.floor(val1 / 60), sec = val1 % 60;
        return (min < 10 ? "0" + min.toString() : min.toString()) + " : " + (sec < 10 ? "0" + sec.toString() : sec.toString());
    };
    /**
*Represents a function to calculate progress value of currently playing track.
*@constructor
*/
    LibraryPage.prototype.getProgressValue = function () {
        //calculate progress value of audio playing
        return Math.round(1 / (this.currentTrack.durationSeconds / 100) * this.currentTrack.laps);
    };
    /**
*Represents a function to pause a Track.
*@constructor
*@param {string} track - Currently selected track details.
*/
    LibraryPage.prototype.pauseTrack = function (track) {
        //pause audio
        track.playing = false;
        clearInterval(this.progressInterval);
    };
    /**
   *Represents a function to play a next Track.
   *@constructor
   */
    LibraryPage.prototype.nextTrack = function () {
        //move to next track of play list
        var index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;
        this.playTrack(this.tracks[index]);
    };
    /**
*Represents a function to play a previous Track.
*@constructor
*/
    LibraryPage.prototype.prevTrack = function () {
        //move to previous track of playlist
        var index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;
        this.playTrack(this.tracks[index]);
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/library/library.html"*/'<!--\n\n  Generated template for the LibraryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar >\n\n    <ion-title>{{translate.instant("library.title")}} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-row class="style_top">\n\n     <ion-col col-lg-3>Styles</ion-col>\n\n     <ion-col col-lg-9>Audio</ion-col>\n\n  </ion-row>\n\n  <ion-row class="listing">\n\n    <ion-col col-lg-3 col-md-4>\n\n       <ul class="left_btns" >   \n\n          <li *ngFor="let item of items_one" (click)="toggleClass_one(item)" [ngClass]="{\'active\': item.active}">{{ item.name }} </li>\n\n        </ul>\n\n    </ion-col>\n\n    <ion-col col-lg-9>\n\n      <ion-row class="audio_top">\n\n        <ion-col col-lg-12 >\n\n          <ul class="right_top_btns">\n\n            <li *ngFor="let item of items_two" (click)="toggleClass_two(item)" [ngClass]="{\'active\': item.active}">{{ item.name }}</li>\n\n          </ul>\n\n          </ion-col>\n\n      </ion-row>\n\n        <ion-row class="audio_listing">\n\n          <ion-content fullscreen>\n\n            <ion-list no-lines style="width: 100%">\n\n                <button detail-none ion-item *ngFor="let track of tracks; let i = index;" (click)="track.playing ? pauseTrack(track) : playTrack(track)" [ngClass]="{ \'alternate\': i % 2, \'playing\': track.playing }">\n\n                    <ion-avatar item-left>\n\n                    <button *ngIf="!track.playing" (click)="playTrack(currentTrack)"  class="play_list" ion-button icon-only><ion-icon name="play"></ion-icon></button>\n\n                    <button *ngIf="track.playing" (click)="pauseTrack(currentTrack)"  class="play_list" ion-button icon-only><ion-icon name="pause"></ion-icon></button>\n\n                    </ion-avatar>\n\n                      <div float-left>{{track.title}}</div> <div float-right>{{track.durationString}}</div>\n\n                </button>\n\n            </ion-list>\n\n          \n\n          </ion-content>\n\n        </ion-row>\n\n\n\n\n\n    </ion-col>\n\n </ion-row>\n\n\n\n\n\n\n\n<ion-footer id="myAudioPlayer">\n\n\n\n  <ion-grid>\n\n\n\n      <ion-row >\n\n\n\n          <ion-col col-1 >\n\n              <button (click)="prevTrack()" class="rewind" ion-button icon-only><ion-icon name="rewind"></ion-icon></button>\n\n          </ion-col>\n\n\n\n          <ion-col col-1>\n\n              <button *ngIf="!currentTrack.playing" (click)="playTrack(currentTrack)"  class="play" ion-button icon-only><ion-icon name="play"></ion-icon></button>\n\n              <button *ngIf="currentTrack.playing" (click)="pauseTrack(currentTrack)"  class="play" ion-button icon-only><ion-icon name="pause"></ion-icon></button>\n\n          </ion-col>\n\n\n\n          <ion-col col-1>\n\n              <button (click)="nextTrack()" class="fastforward" ion-button icon-only><ion-icon name="fastforward"></ion-icon></button>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n                <span class="track_time">{{getLapsString()}}</span>\n\n          </ion-col>\n\n          <ion-col col-5 col-md-5>\n\n                <progress-bar [progress]="currentTrack.progress"></progress-bar>\n\n         </ion-col>\n\n         <ion-col col-1>\n\n           <span class="track_time">{{currentTrack.durationString}}</span>\n\n         </ion-col>\n\n\n\n          <div col-2 class="volume_icon valume-right" float-right>\n\n            <button><ion-icon name="ios-volume-up" class="ios_volume_icon"></ion-icon></button>\n\n            <ion-range min="1" max="100" step="1" [(ngModel)]="knobValues"></ion-range>        \n\n          </div>\n\n\n\n      </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-footer>\n\n \n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/library/library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__providers_music_section_json_music_section_json__["a" /* MusicSectionJsonProvider */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/settings/settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  This is a Settings Page.\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/congratulations/congratulations.module": [
		708,
		16
	],
	"../pages/getting-started/getting-started.module": [
		709,
		15
	],
	"../pages/library/library.module": [
		710,
		14
	],
	"../pages/music-activity/music-activity.module": [
		711,
		13
	],
	"../pages/music-benefit/music-benefit.module": [
		712,
		12
	],
	"../pages/music-length/music-length.module": [
		717,
		11
	],
	"../pages/music-profile/music-profile.module": [
		713,
		10
	],
	"../pages/music-section-new/music-section-new.module": [
		714,
		9
	],
	"../pages/music-section/music-section.module": [
		715,
		8
	],
	"../pages/music-style/music-style.module": [
		716,
		7
	],
	"../pages/play-list/play-list.module": [
		718,
		0
	],
	"../pages/scheduling-week/scheduling-week.module": [
		719,
		6
	],
	"../pages/select-music-style/select-music-style.module": [
		720,
		5
	],
	"../pages/setting-aim/setting-aim.module": [
		721,
		4
	],
	"../pages/settings/settings.module": [
		722,
		3
	],
	"../pages/tips/tips.module": [
		723,
		2
	],
	"../pages/using-music/using-music.module": [
		724,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tips_tips__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(translate, translateModule) {
        this.translate = translate;
        this.translateModule = translateModule;
        /**
       * Represents on tab click which page to navigate on
       */
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__tips_tips__["a" /* TipsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */];
        this.translate.setDefaultLang('en');
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/tabs/tabs.html"*/'<ion-content padding>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="{{translate.instant(\'tabsTitleHome\')}}" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="{{translate.instant(\'tabsTitleLibrary\')}}" tabIcon="musical-note"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="{{translate.instant(\'tabsTitleTips\')}}" tabIcon="help-circle"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="{{translate.instant(\'tabsTitleSettings\')}}" tabIcon="settings" enabled="false"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getting_started_getting_started__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__using_music_using_music__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_activity_music_activity__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_profile_music_profile__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.translateModule = translateModule;
        translate.addLangs(["en"]);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en/) ? browserLang : 'en');
    }
    /**
   *Represents a Navigation function.
   *@constructor
   */
    HomePage.prototype.goToMusicPage = function () {
        //Move to Using Music Page on click of Start Button
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__using_music_using_music__["a" /* UsingMusicPage */]);
    };
    /**
   *Represents a Navigation function.
   *@constructor
   */
    HomePage.prototype.goToMusicActivity = function (isGroup) {
        //Move to Music Activity Page on click of One to One & Group
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__music_activity_music_activity__["a" /* MusicActivityPage */], {
            isGroup: isGroup
        });
    };
    /**
   *Represents a Navigation function.
   *@constructor
   */
    HomePage.prototype.goToMusicProfile = function () {
        //Move to Music Profile page on click of Music Profile
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__music_profile_music_profile__["a" /* MusicProfilePage */]);
    };
    /**
*Represents a Navigation function.
*@constructor
*/
    HomePage.prototype.goToGettingStarted = function () {
        //Move to Getting Started Page on click of Music Plan
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__getting_started_getting_started__["a" /* GettingStartedPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/home/home.html"*/'<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n\n<ion-content no-bounce>\n\n	<ion-list>\n\n		<ion-row class="home_heading">\n\n			<ion-col text-center col-12>\n\n					<h1><b>{{translate.instant("homeTitle")}}</b></h1>\n\n					<a href="#" class="white-btn" (click)="goToMusicPage()">{{translate.instant("homeButton")}}</a>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row class="home_four_icons">\n\n			<ion-col class="section_one" col-6>\n\n				<h2>{{translate.instant("homeLeftTitle")}}</h2>\n\n				<ion-col class="home_icons">\n\n					<a class="face_icon" href="#" (click)="goToMusicActivity()">\n\n						<i class="material-icons md-48">face</i><h4> {{translate.instant("homeFirstIcon")}}</h4>\n\n					</a>\n\n				</ion-col>\n\n				<ion-col class="home_icons">\n\n					<a class="group_icon" href="#" (click)="goToMusicActivity(true)">\n\n						<div><img src="assets/imgs/gourp_icon.png" width="100%"></div>\n\n						<h4>{{translate.instant("homeSecondIcon")}}</h4>\n\n					</a>\n\n				</ion-col>\n\n			</ion-col>\n\n			<ion-col class="section_one" col-6>\n\n				<h2> {{translate.instant("homeRightTitle")}} </h2>\n\n				<ion-col class="home_icons">\n\n					<a class="music_profile_icon" href="#" (click)="goToMusicProfile()">\n\n						<i class="material-icons md-48">music_note</i><h4> {{translate.instant("musicProfileTitle")}}</h4>\n\n					</a>\n\n				</ion-col>\n\n				<ion-col class="home_icons">\n\n					<a class="music_plan_icon" href="#" (click)="goToGettingStarted()">\n\n						<i class="material-icons md-48">calendar_today</i><h4> {{translate.instant("homeFourthIcon")}}</h4>\n\n					</a>\n\n				</ion-col>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratulationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__music_profile_music_profile__ = __webpack_require__(87);
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
 * Generated class for the CongratulationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CongratulationsPage = /** @class */ (function () {
    function CongratulationsPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    CongratulationsPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    CongratulationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CongratulationsPage');
    };
    CongratulationsPage.prototype.goToHomePage = function () {
        this.navCtrl.popToRoot();
        this.navCtrl.parent.select(0);
    };
    CongratulationsPage.prototype.goToCreateMusicProfilePage = function () {
        // this.navCtrl.popToRoot();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__music_profile_music_profile__["a" /* MusicProfilePage */]);
    };
    CongratulationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-congratulations',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/congratulations/congratulations.html"*/'<!--\n\n  Generated template for the CongratulationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>congratulations</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content>\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("Congratulations.title")}}</h1>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("Congratulations.text1")}}</p>\n\n          </ion-col>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("Congratulations.text2")}}</p>\n\n          </ion-col>\n\n          <ion-col text-center>\n\n            <div class="next_bta"><button (click)="goToCreateMusicProfilePage()">{{translate.instant("Congratulations.Buttons.CreateMusicProfile")}}</button></div>\n\n          </ion-col>\n\n          <ion-col col-12 class="bottom-txt">\n\n            <p (click)="goToHomePage()">{{translate.instant("Congratulations.Buttons.BackHome")}}.</p>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/congratulations/congratulations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], CongratulationsPage);
    return CongratulationsPage;
}());

//# sourceMappingURL=congratulations.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_library_library__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tips_tips__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_using_music_using_music__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_music_benefit_music_benefit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_music_style_music_style__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_music_activity_music_activity__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_music_length_music_length__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_select_music_style_select_music_style__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_music_profile_music_profile__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_getting_started_getting_started__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_setting_aim_setting_aim__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_music_section_music_section__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_scheduling_week_scheduling_week__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_progress_bar_progress_bar__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_audio_audio__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_smart_audio_smart_audio__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_music_section_new_music_section_new__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic_tooltips__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_pop_over_pop_over__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_music_section_json_music_section_json__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_storage__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_streaming_media__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "../assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tips_tips__["a" /* TipsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_using_music_using_music__["a" /* UsingMusicPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_music_benefit_music_benefit__["a" /* MusicBenefitPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_music_style_music_style__["a" /* MusicStylePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_music_activity_music_activity__["a" /* MusicActivityPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_music_length_music_length__["a" /* MusicLengthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_select_music_style_select_music_style__["a" /* SelectMusicStylePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_music_profile_music_profile__["a" /* MusicProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_getting_started_getting_started__["a" /* GettingStartedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_setting_aim_setting_aim__["a" /* SettingAimPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_music_section_music_section__["a" /* MusicSectionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_scheduling_week_scheduling_week__["a" /* SchedulingWeekPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_music_section_new_music_section_new__["a" /* MusicSectionNewPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_pop_over_pop_over__["a" /* PopOverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/congratulations/congratulations.module#CongratulationsPageModule', name: 'CongratulationsPage', segment: 'congratulations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getting-started/getting-started.module#GettingStartedPageModule', name: 'GettingStartedPage', segment: 'getting-started', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-activity/music-activity.module#MusicActivityPageModule', name: 'MusicActivityPage', segment: 'music-activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-benefit/music-benefit.module#MusicBenefitPageModule', name: 'MusicBenefitPage', segment: 'music-benefit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-profile/music-profile.module#MusicProfilePageModule', name: 'MusicProfilePage', segment: 'music-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-section-new/music-section-new.module#MusicSectionNewPageModule', name: 'MusicSectionNewPage', segment: 'music-section-new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-section/music-section.module#MusicSectionPageModule', name: 'MusicSectionPage', segment: 'music-section', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-style/music-style.module#MusicStylePageModule', name: 'MusicStylePage', segment: 'music-style', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music-length/music-length.module#MusicLengthPageModule', name: 'MusicLengthPage', segment: 'music-length', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/play-list/play-list.module#PlayListPageModule', name: 'PlayListPage', segment: 'play-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scheduling-week/scheduling-week.module#SchedulingWeekPageModule', name: 'SchedulingWeekPage', segment: 'scheduling-week', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-music-style/select-music-style.module#SelectMusicStylePageModule', name: 'SelectMusicStylePage', segment: 'select-music-style', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-aim/setting-aim.module#SettingAimPageModule', name: 'SettingAimPage', segment: 'setting-aim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tips/tips.module#TipsPageModule', name: 'TipsPage', segment: 'tips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/using-music/using-music.module#UsingMusicPageModule', name: 'UsingMusicPage', segment: 'using-music', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_29_ionic_tooltips__["a" /* TooltipsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tips_tips__["a" /* TipsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_using_music_using_music__["a" /* UsingMusicPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_music_benefit_music_benefit__["a" /* MusicBenefitPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_music_style_music_style__["a" /* MusicStylePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_music_activity_music_activity__["a" /* MusicActivityPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_music_length_music_length__["a" /* MusicLengthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_select_music_style_select_music_style__["a" /* SelectMusicStylePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_music_profile_music_profile__["a" /* MusicProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_getting_started_getting_started__["a" /* GettingStartedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_setting_aim_setting_aim__["a" /* SettingAimPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_music_section_music_section__["a" /* MusicSectionPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_scheduling_week_scheduling_week__["a" /* SchedulingWeekPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_music_section_new_music_section_new__["a" /* MusicSectionNewPage */],
                __WEBPACK_IMPORTED_MODULE_31__components_pop_over_pop_over__["a" /* PopOverComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_audio_audio__["a" /* AudioProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_smart_audio_smart_audio__["a" /* SmartAudioProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_music_section_json_music_section_json__["a" /* MusicSectionJsonProvider */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_streaming_media__["a" /* StreamingMedia */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    //constructor
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/components/progress-bar/progress-bar.html"*/'<!-- Generated template for the ProgressBarComponent component -->\n\n<div class="progress-outer">\n\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AudioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AudioProvider = /** @class */ (function () {
    function AudioProvider(http) {
        this.http = http;
        console.log('Hello AudioProvider Provider');
    }
    AudioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AudioProvider);
    return AudioProvider;
}());

//# sourceMappingURL=audio.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartAudioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SmartAudioProvider = /** @class */ (function () {
    function SmartAudioProvider(http) {
        this.http = http;
        console.log('Hello SmartAudioProvider Provider');
    }
    SmartAudioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SmartAudioProvider);
    return SmartAudioProvider;
}());

//# sourceMappingURL=smart-audio.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tips_tips__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the MusicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicProfilePage = /** @class */ (function () {
    function MusicProfilePage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    MusicProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicProfilePage');
    };
    /**
   *Represents a function of back button.
   *@constructor
   */
    MusicProfilePage.prototype.closeModal = function () {
        //move to previous page on back button click
        this.navCtrl.pop();
    };
    /**
   *Represents a navigation functionality.
   *@constructor
   */
    MusicProfilePage.prototype.goToTipsPage = function () {
        //go to tips page on click of here hyperlink
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tips_tips__["a" /* TipsPage */]);
    };
    MusicProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musicprofile',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-profile/music-profile.html"*/'<!--\n\n  Generated template for the MusicProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>musicprofile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n<ion-content>\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center  class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("musicProfileTitle")}}</h1>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("musicProfileFirstText")}}.</p>\n\n          </ion-col>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("musicProfileSecondText")}} <a href="#" (click)="goToTipsPage()" class="pagelink">{{translate.instant("musicProfileHereText")}}.</a></p>\n\n          </ion-col>\n\n          <ion-item class="txt-block-email">\n\n            <ion-input type="email" placeholder="{{translate.instant(\'commonEmailText\')}}"></ion-input>\n\n            <button ion-button color="dark" class="btn-color" clear item-right>{{translate.instant("commonSend")}}</button>\n\n          </ion-item>\n\n          <ion-col col-12 class="bottom-txt">\n\n            <p>{{translate.instant("commonStoreText")}}.</p>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-profile/music-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]])
    ], MusicProfilePage);
    return MusicProfilePage;
}());

//# sourceMappingURL=music-profile.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__using_music_using_music__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__music_activity_music_activity__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 * Generated class for the TipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TipsPage = /** @class */ (function () {
    function TipsPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.translate.setDefaultLang('en');
    }
    TipsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TipsPage');
    };
    /**
 *Represents a Navigation functionality.
 *@constructor
 */
    TipsPage.prototype.goToUsingMusicInPersonalCare = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__using_music_using_music__["a" /* UsingMusicPage */]);
    };
    /**
 *Represents a Navigation functionality.
 *@constructor
 */
    TipsPage.prototype.goToUsingMusicActivity = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__music_activity_music_activity__["a" /* MusicActivityPage */]);
    };
    TipsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tips',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/tips/tips.html"*/'<!--\n\n  Generated template for the TipsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{translate.instant("tabsTitleTips")}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content id="tipsScroll">\n\n  <div class="tips_one_heading">\n\n    <ion-grid class="home">\n\n      <ion-row>\n\n        <ion-col class="tip_left" col-8>\n\n          <div class="tips_img"><img src="assets/imgs/guitar.jpg" width="100%"></div>\n\n          <h1>{{translate.instant("musicProfileTitle")}}</h1>\n\n          <p>{{translate.instant("musicFirstText")}}.<br><br>\n\n            {{translate.instant("musicSecondText")}}.<br><br>\n\n            {{translate.instant("musicThirdText")}}.<br><br>\n\n            {{translate.instant("musicFourthText")}}.<br><br>\n\n            {{translate.instant("musicFifthText")}}.<br><br>\n\n          <strong><i>{{translate.instant("musicSixthText")}}</i></strong>\n\n          </p>\n\n        </ion-col>\n\n        <ion-col class="tip_right" col-3 offset-1>\n\n          <h2>{{translate.instant("articlesText")}}</h2>\n\n          <ul>\n\n            <li><a (click)="goToUsingMusicInPersonalCare()">{{translate.instant("rightFirstText")}}</a></li>\n\n            <li><a (click)="goToUsingMusicActivity()" href="#">{{translate.instant("rightSecondText")}}</a></li>\n\n              <li><a href="#">{{translate.instant("rightThirdText")}}</a></li>\n\n          </ul>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/tips/tips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], TipsPage);
    return TipsPage;
}());

//# sourceMappingURL=tips.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsingMusicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_benefit_music_benefit__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pop_over_pop_over__ = __webpack_require__(138);
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
 * Generated class for the UsingMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsingMusicPage = /** @class */ (function () {
    function UsingMusicPage(navCtrl, navParams, translate, translateModule, popOverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.popOverCtrl = popOverCtrl;
        // set radio button default to second option
        this.startUsingMusicOption = 2;
        this.translate.setDefaultLang('en');
    }
    UsingMusicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsingMusicPage');
    };
    /**
    *Represents a functionality of back button.
    *@constructor
    *@param {string} val - The index of selected value.
    */
    UsingMusicPage.prototype.closeModal = function () {
        //Move to previous page on click of Back Button
        this.navCtrl.pop();
    };
    /**
 *Represents a Navigation functionality.
 *@constructor
 */
    UsingMusicPage.prototype.goToMusicBenefit = function () {
        //Move to Music Benefit Pafge on click og Next Button
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__music_benefit_music_benefit__["a" /* MusicBenefitPage */]);
    };
    /**
 *Represents a function to set selected radio button value.
 *@constructor
 *@param {string} myEvent - The index of selected value.
 */
    UsingMusicPage.prototype.setModuleOption = function (myEvent) {
        //Set Radio Button value in Radio Button parent variable
        console.log("selected radio button value = " + myEvent);
        this.startUsingMusicOption = myEvent;
    };
    /**
 *Represents a function to open popover.
 *@constructor
 *@param {string} myEvent - The index of selected value.
 */
    UsingMusicPage.prototype.presentPopover = function (myEvent) {
        //Open popover on click of help/query icon
        var popover = this.popOverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_pop_over_pop_over__["a" /* PopOverComponent */]);
        popover.present({
            ev: myEvent
        });
    };
    UsingMusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usingmusic',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/using-music/using-music.html"*/'<!--\n\n  Generated template for the UsingMusicPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>usingmusic</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content id="myModel">\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n\n\n        <ion-col text-center col-6 class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png">\n\n              {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("startUsingMusictitle")}}</h1>\n\n          <ion-list radio-group [(ngModel)]="startUsingMusicOption">\n\n              <!-- <ion-list radio-group [(ngModel)]="startUsingMusicOption" value="1"> -->\n\n                \n\n            <ion-item>\n\n                \n\n                      <ion-label style="color:black;">{{translate.instant("startUsingMusicFirstOption")}} &nbsp;  \n\n                        <ion-icon name="ios-help-circle-outline" (click)="presentPopover($event)"></ion-icon>  \n\n                        <!-- <ion-icon name="ios-help-circle-outline" tooltip="Help" positionV="top" [attr.duration]="10000" arrow></ion-icon>   -->\n\n                      </ion-label> \n\n                 <!-- <span class="round"> -->\n\n                  <ion-radio value="1" class="form-radio"(ionSelect)="setModuleOption($event)"></ion-radio>\n\n                  <!-- <input type="radio" name="demo" value="1" id="radio-one" class="form-radio" (ionChange)="selectedValue(1)"/>\n\n                  <label for="radio-one"></label> \n\n                  \n\n                </span> -->\n\n             </ion-item>\n\n              <ion-item>\n\n                  <ion-label style="color:black;">{{translate.instant("startUsingMusicSecondOption")}}  &nbsp;  \n\n                    <ion-icon name="ios-help-circle-outline" (click)="presentPopover($event)"></ion-icon> </ion-label>  \n\n                  <ion-radio value="2" class="form-radio" (ionSelect)="setModuleOption($event)"></ion-radio>\n\n                   <!-- <span class="round">\n\n                  <input type="radio" name="demo" value="2" id="radio-two" class="form-radio" checked />\n\n                  <label for="radio-two"></label>\n\n                </span> -->\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label style="color:black;">{{translate.instant("startUsingMusicThirdOption")}}  &nbsp;  \n\n                    <ion-icon name="ios-help-circle-outline" (click)="presentPopover($event)"></ion-icon> </ion-label>\n\n                  <ion-radio value="3" class="form-radio"(ionSelect)="setModuleOption($event)"></ion-radio>\n\n                  <!-- <span class="round">\n\n                  <input type="radio" name="demo" value="3" id="radio-three" class="form-radio" />\n\n                  <label for="radio-three"></label>\n\n                </span> -->\n\n              </ion-item>\n\n            \n\n          </ion-list>\n\n          <ion-col text-center>\n\n            <div class="next_bta" ><button (click)="goToMusicBenefit()">{{translate.instant("commonNext")}}</button></div>\n\n          </ion-col>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/using-music/using-music.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], UsingMusicPage);
    return UsingMusicPage;
}());

//# sourceMappingURL=using-music.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicSectionNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_music_section_json_music_section_json__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MusicSectionNewPage = /** @class */ (function () {
    function MusicSectionNewPage(navCtrl, navParams, translate, translateModule, trackJsonProvider, storage, streamingMedia) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.trackJsonProvider = trackJsonProvider;
        this.storage = storage;
        this.streamingMedia = streamingMedia;
        this.items_one = [
            { id: 1, name: 'Classical', active: true },
            { id: 2, name: 'Traditional Songs', active: false },
            { id: 3, name: 'Populer Music', active: false },
        ];
        this.items_two = [
            { id: 1, name: 'Calm', active: true },
            { id: 2, name: 'Stimulation', active: false },
            { id: 3, name: 'Concentration', active: false },
        ];
        this.activeCls = "";
        this.footerRowCls = "row";
        this.musicSectionCls = "step_one_heading";
        this.translate.setDefaultLang('en');
        // call MUsic Track list Json function and store returned json in a variable 'tracks'
        this.tracks = this.trackJsonProvider.createAudioJSON();
        console.log("Tracks = " + JSON.stringify(this.tracks));
        this.currentTrack = this.tracks[0];
        this.item_two = this.items_two[0];
        var activeCls = (this.navParams.data && typeof this.navParams.data.audio === "object") ? this.navParams.data.audio.name.toLocaleLowerCase() : "";
        this.musicSectionCls = activeCls === "" ? "step_one_heading" : "step_one_heading " + activeCls; //(this.navParams.data && typeof this.navParams.data.audio) ? this.navParams.data.audio.name.toLocaleLowerCase(): ""  
        this.footerRowCls = activeCls === "" ? "row" : "row " + activeCls;
        //get benefit value from storage 
        this.storage.get('benefilValue').then(function (res) {
            _this.benefitValue = res;
            console.log('selected benefit value = ' + _this.benefitValue);
            //assign color of background according to benefit value
            if (_this.benefitValue == 0) {
                _this.colorCode = '#b5ec73';
            }
            if (_this.benefitValue == 1) {
                _this.colorCode = '#ffb732';
            }
            if (_this.benefitValue == 2) {
                _this.colorCode = '#CF89CE';
            }
        });
    }
    MusicSectionNewPage.prototype.toggleClass_one = function (item) {
        var _this = this;
        Object.keys(this.items_one).forEach(function (key) {
            if (_this.items_one[key].id != item.id) {
                _this.items_one[key].active = false;
            }
            else {
                item.active = true;
            }
        });
    };
    MusicSectionNewPage.prototype.toggleClass_two = function (item) {
        var _this = this;
        Object.keys(this.items_two).forEach(function (key) {
            if (_this.items_two[key].id != item.id) {
                _this.items_two[key].active = false;
            }
            else {
                item.active = true;
            }
        });
    };
    /**
 *Represents a function to play a Track.
 *@constructor
 *@param {string} track - The row value of selected track.
 */
    MusicSectionNewPage.prototype.playTrack = function (track) {
        var _this = this;
        console.log('play track');
        // First stop any currently playing tracks
        if (this.currentTrack) {
            this.pauseTrack(this.currentTrack);
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
        this.audioProgress = setInterval(function () {
            if (track.progress < track.durationSeconds) {
                track.progress++;
            }
        }, track.durationSeconds * 1000);
    };
    /**
    *Represents a function to calculate progress value of currently playing track.
    *@constructor
    */
    MusicSectionNewPage.prototype.getProgressValue = function () {
        //calculate progress value of audio playing
        return Math.round(1 / (this.currentTrack.durationSeconds / 100) * this.currentTrack.laps);
    };
    /**
 *Represents a function to pause track.
 *@constructor
 *@param {string} track - The index of selected row.
 */
    MusicSectionNewPage.prototype.pauseTrack = function (track) {
        //pause current playing track
        track.playing = false;
        clearInterval(this.progressInterval);
    };
    /**
 *Represents a function to play next track.
 *@constructor
 */
    MusicSectionNewPage.prototype.nextTrack = function () {
        //play next track
        var index = this.tracks.indexOf(this.currentTrack);
        index >= this.tracks.length - 1 ? index = 0 : index++;
        this.playTrack(this.tracks[index]);
    };
    /**
 *Represents a function to play previous track.
 *@constructor
 */
    MusicSectionNewPage.prototype.prevTrack = function () {
        //play prev track
        var index = this.tracks.indexOf(this.currentTrack);
        index > 0 ? index-- : index = this.tracks.length - 1;
        this.playTrack(this.tracks[index]);
    };
    /**
 *Represents a functionality of back button.
 *@constructor
 */
    MusicSectionNewPage.prototype.closeModal = function () {
        // move to previous page
        this.navCtrl.pop();
    };
    MusicSectionNewPage.prototype.openAudioInFullScreen = function () {
        var audioUrl = '../assets/audio/ding.mp3';
        // Play an audio file (not recommended, since the screen will be plain black)
        this.streamingMedia.playAudio(audioUrl);
        // Play an audio file with options (all options optional)
        var options = {
            bgColor: "#FFFFFF",
            bgImage: "<SWEET_BACKGROUND_IMAGE>",
            bgImageScale: "fit",
            initFullscreen: false,
            keepAwake: false,
            successCallback: function () {
                console.log("Player closed without error.");
            },
            errorCallback: function (errMsg) {
                console.log("Error! " + errMsg);
            }
        };
        this.streamingMedia.playAudio(audioUrl, options);
        // Stop current audio
        this.streamingMedia.stopAudio();
        // Pause current audio (iOS only)
        this.streamingMedia.pauseAudio();
        // Resume current audio (iOS only)
        this.streamingMedia.resumeAudio();
    };
    MusicSectionNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-MusicSectionNewPage',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-section-new/music-section-new.html"*/'<!--\n  Generated template for the LibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <div class="step_one_heading" [ngStyle]="{\'background-color\': colorCode}">\n\n    <ion-row>\n      <ion-col text-center col-6 col-md-6 class="step_one">\n        <button class="back_btn" (click)="closeModal()"><img src="assets/imgs/back_arrow.png">\n          {{translate.instant("commonBack")}}</button>\n        <h1 text-center ion-text>{{translate.instant("PlaylistPage.title")}}</h1>\n        <ion-row class="listing">\n\n          <ion-col>\n            <ion-row class="audio_listing">\n              <ion-content fullscreen>\n                <ion-list no-lines>\n                  <button detail-none ion-item *ngFor="let track of tracks; let i = index;"\n                    (click)="track.playing ? pauseTrack(track) : playTrack(track)"\n                    [ngClass]="{ \'alternate\': i % 2, \'playing\': track.playing }">\n                    <ion-avatar item-left>\n                      <button *ngIf="!track.playing" (click)="playTrack(currentTrack)" class="play_list" ion-button\n                        icon-only>\n                        <ion-icon name="play"></ion-icon>\n                      </button>\n                      <button *ngIf="track.playing" (click)="pauseTrack(currentTrack)" class="play_list" ion-button\n                        icon-only>\n                        <ion-icon name="pause"></ion-icon>\n                      </button>\n                    </ion-avatar>\n                    <div float-left>{{track.title}}</div>\n                    <div float-right>{{track.durationString}}</div>\n                  </button>\n                </ion-list>\n\n              </ion-content>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-footer>\n          <ion-grid>\n            <ion-row class="footerRowCls">\n              <ion-col col-1>\n                <button (click)="prevTrack()" class="rewind" ion-button icon-only>\n                  <ion-icon name="rewind"></ion-icon>\n                </button>\n              </ion-col>\n\n              <ion-col col-2>\n                <button *ngIf="!currentTrack.playing" (click)="playTrack(currentTrack)" class="play" ion-button\n                  icon-only>\n                  <ion-icon name="play"></ion-icon>\n                </button>\n                <button *ngIf="currentTrack.playing" (click)="pauseTrack(currentTrack)" class="play" ion-button\n                  icon-only>\n                  <ion-icon name="pause"></ion-icon>\n                </button>\n              </ion-col>\n\n              <ion-col col-1>\n                <button (click)="nextTrack()" class="fastforward" ion-button icon-only>\n                  <ion-icon name="fastforward"></ion-icon>\n                </button>\n              </ion-col>\n\n\n              <ion-col class="volume_icon">\n                <button>\n                  <ion-icon name="ios-volume-up" class="ios_volume_icon"></ion-icon>\n                </button>\n                <ion-range min="1" max="100" step="1" [(ngModel)]="knobValues"></ion-range>\n              </ion-col>\n\n            </ion-row>\n            <button class="back_btn1 bck_btn_mobile" (click)="closeModal()"><img src="assets/imgs/back_arrow.png">\n              {{translate.instant("commonBack")}}</button>\n          </ion-grid>\n\n        </ion-footer>\n\n      </ion-col>\n      <ion-col text-center col-12 class = "bottomTagLineCol" (click)="openAudioInFullScreen()">\n              <span class="bottomTagLine" >{{translate.instant("PlaylistPage.footer.str1")}}\n                  <strong>{{translate.instant("PlaylistPage.footer.str2")}}</strong>\n                  {{translate.instant("PlaylistPage.footer.str3")}}\n                 <strong> {{translate.instant("PlaylistPage.footer.str4")}}</strong>\n              </span>\n          </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-section-new/music-section-new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */], __WEBPACK_IMPORTED_MODULE_3__providers_music_section_json_music_section_json__["a" /* MusicSectionJsonProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], MusicSectionNewPage);
    return MusicSectionNewPage;
}());

//# sourceMappingURL=music-section-new.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_length_music_length__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the MusicActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MusicActivityPage = /** @class */ (function () {
    function MusicActivityPage(navCtrl, navParams, translate, translateModule) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.translateModule = translateModule;
        this.choices = [];
        //assign default radio button to second
        this.selectedChoice = "1";
        this.isGroup = false;
        this.translate.setDefaultLang('en');
        //get data from parameters of previous page
        this.choices = this.translate.instant('CommonActivity.Choices');
        this.isGroup = navParams.data.isGroup;
    }
    MusicActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MusicActivityPage');
    };
    /**
 *Represents a functionality of back button.
 *@constructor
 */
    MusicActivityPage.prototype.closeModal = function () {
        //go to previous page on back click
        this.navCtrl.pop();
    };
    /**
    *Represents a Navigation functionaity.
    *@constructor
    */
    MusicActivityPage.prototype.goToMusicLength = function () {
        //go to next page
        var showCustomMusicStyle = false;
        if (this.selectedChoice === "0") {
            showCustomMusicStyle = true;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__music_length_music_length__["a" /* MusicLengthPage */], {
            updateMusicStyle: showCustomMusicStyle,
            isGroup: this.isGroup
        });
    };
    /**
  *Represents a function to assign value in variable of selected radio button.
  *@constructor
  */
    MusicActivityPage.prototype.changeChoice = function (val) {
        //assign selected radio button value
        this.selectedChoice = val;
        console.log("selecetd choice = " + this.selectedChoice);
    };
    MusicActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-musicactivity',template:/*ion-inline-start:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-activity/music-activity.html"*/'<!--\n\n  Generated template for the MusicActivityPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>musicactivity</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content id="myMusicActivity"> \n\n    <div class="step_one_heading">\n\n      <ion-list class="home">\n\n        <ion-row>\n\n          <ion-col col-3></ion-col>\n\n          <ion-col text-center class="step_one">\n\n            <button class="back_btn"  (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</button>\n\n            <h1 text-center ion-text>{{translate.instant("CommonActivity.Title")}}</h1>\n\n            <!-- <ul>\n\n              <li *ngFor="let choice of choices" >{{ choice }}\n\n                <span class="round">\n\n                  <input  type="radio" name="demo" [(ngModel)]="selectedChoice"  [value]="choice" id="radio-one" class="form-radio" />\n\n                  <label for="radio-one"></label>\n\n                </span>\n\n            </li>\n\n            </ul> -->\n\n            <ion-list radio-group [(ngModel)]="selectedChoice">\n\n                  \n\n                <ion-item *ngFor="let choice of choices;let i = index">              \n\n                      <ion-label style="color:black;">{{ choice }} </ion-label> \n\n                      <ion-radio value="{{i}}" class="form-radio" (ionSelect)="changeChoice(i)"></ion-radio>\n\n                 </ion-item>\n\n\n\n                 <ion-item>\n\n                    <ion-label style="color:black;">{{translate.instant("commonActivityFourthOption")}} \n\n                      <ion-icon name="arrow-forward" class="arrowIcon"></ion-icon></ion-label>  \n\n                 </ion-item>\n\n                 </ion-list>\n\n            <!-- <ul>\n\n              <li>{{translate.instant("commonActivityFourthOption")}} <span class="right-arrow-icon">\n\n                  <ion-icon name="arrow-forward" end></ion-icon>\n\n                  <label for="radio-four"></label>\n\n            </span></li>\n\n            </ul> -->\n\n            <ion-col text-center>\n\n                <div class="next_bta" ><button (click)="goToMusicLength()">{{translate.instant("commonNext")}}</button></div>\n\n            </ion-col>\n\n            <div class="back_btn1 bck_btn_mobile"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          </ion-col>\n\n          <ion-col col-3></ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n      \n\n    </div>\n\n    \n\n    </ion-content>\n\n'/*ion-inline-end:"/Users/a/Desktop/Musikind-26-02-2019/musikind/ios-app/src/pages/music-activity/music-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]])
    ], MusicActivityPage);
    return MusicActivityPage;
}());

//# sourceMappingURL=music-activity.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map