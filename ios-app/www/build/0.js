webpackJsonp([0],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratulationsPageModule", function() { return CongratulationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__congratulations__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CongratulationsPageModule = /** @class */ (function () {
    function CongratulationsPageModule() {
    }
    CongratulationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__congratulations__["a" /* CongratulationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__congratulations__["a" /* CongratulationsPage */]),
            ],
        })
    ], CongratulationsPageModule);
    return CongratulationsPageModule;
}());

//# sourceMappingURL=congratulations.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratulationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    };
    CongratulationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-congratulations',template:/*ion-inline-start:"d:\Mansoor\music ios app\13feb19\musikind\ios-app\src\pages\congratulations\congratulations.html"*/'<!--\n\n  Generated template for the CongratulationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!--<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>congratulations</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>-->\n\n\n\n\n\n<ion-content>\n\n  <div class="step_one_heading">\n\n    <ion-list class="home">\n\n      <ion-row>\n\n        <ion-col col-3></ion-col>\n\n        <ion-col text-center col-6 class="step_one">\n\n          <div class="back_btn"><a href="#" (click)="closeModal()"><img src="assets/imgs/back_arrow.png"> {{translate.instant("commonBack")}}</a></div>\n\n          <h1 text-center ion-text>{{translate.instant("congratulationsTitle")}}</h1>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("congratulationsFirstText")}}</p>\n\n          </ion-col>\n\n          <ion-col col-12 text-left>\n\n            <p class="first-txt">{{translate.instant("congratulationsSecondText")}}</p>\n\n          </ion-col>\n\n          <ion-col text-center>\n\n            <div class="next_bta"><button>{{translate.instant("congratulationsButton")}}</button></div>\n\n          </ion-col>\n\n          <ion-col col-12 class="bottom-txt">\n\n            <p (click)="goToHomePage()">{{translate.instant("congratulationsBottomText")}}.</p>\n\n          </ion-col>\n\n        </ion-col>\n\n        <ion-col col-3></ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  </ion-content>'/*ion-inline-end:"d:\Mansoor\music ios app\13feb19\musikind\ios-app\src\pages\congratulations\congratulations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]])
    ], CongratulationsPage);
    return CongratulationsPage;
}());

//# sourceMappingURL=congratulations.js.map

/***/ })

});
//# sourceMappingURL=0.js.map