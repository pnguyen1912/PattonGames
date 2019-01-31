(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home1-home1-module"],{

/***/ "./src/app/home1/home1.module.ts":
/*!***************************************!*\
  !*** ./src/app/home1/home1.module.ts ***!
  \***************************************/
/*! exports provided: Home1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1PageModule", function() { return Home1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home1.page */ "./src/app/home1/home1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home1_page__WEBPACK_IMPORTED_MODULE_5__["Home1Page"]
    }
];
var Home1PageModule = /** @class */ (function () {
    function Home1PageModule() {
    }
    Home1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home1_page__WEBPACK_IMPORTED_MODULE_5__["Home1Page"]]
        })
    ], Home1PageModule);
    return Home1PageModule;
}());



/***/ }),

/***/ "./src/app/home1/home1.page.html":
/*!***************************************!*\
  !*** ./src/app/home1/home1.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>home1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n    <video style=\"display:none;float:right\" id='video' src=\"assets/30svid.mov\"  height=\"812px\"></video> \n\n    <div style=\"text-align:center\" id='play'>\n  \n    <ion-button style=\"color: red\" (click)='menu()'>Back to Menu</ion-button>\n    </div>\n   \n<img (click)='fish1()' id='fish' style=\"float: right;height: 21%;\" src=\"assets/icon/fish.png\" alt=\"\">\n<img (click)='holo1()' id='holo'style=\"float: left;height: 21%;\"src=\"assets/icon/holo.png\" alt=\"\">\n<img (click)='shrimp1()' id='shrimp' style=\"float: right;height: 21%;\"src=\"assets/icon/shrimp.png\" alt=\"\">\n<img (click)='crab1()' id='crab' style=\"float: left;height: 21%;\"src=\"assets/icon/crab.png\" alt=\"\">\n<img (click)='deer1()' id='deer' style=\"float: right;height: 21%;\"src=\"assets/icon/deer.png\" alt=\"\">\n<img (click)='chicken1()' id='chicken' style=\"float: left;height: 21%;\"src=\"assets/icon/chicken.png\" alt=\"\">\n\n<h1 id='roll1' style=\"position: absolute;bottom: 4%; text-align:center\">Your coin:{{this.api.User.holopoint}}</h1>\n\n<ion-button id='roll' style=\"color: red;position:absolute;bottom: 10%\" (click)='roll()'>ROLL</ion-button>\n\n<img style=\"height: 14.5%;\" id='result' src=\"assets/icon/blank.png\" alt=\"\">\n<img style=\"height: 14.5%;\" id='result1' src=\"assets/icon/blank.png\" alt=\"\">\n<img style=\"height: 14.5%;\" id='result2' src=\"assets/icon/blank.png\" alt=\"\">\n<ion-icon (click)='newplayer()' style=\"font-size: 500%;float:right\" name=\"help\"></ion-icon>\n<ion-button id='coin' style='float:right;color:red' (click)='tutor()'>More Coin</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home1/home1.page.scss":
/*!***************************************!*\
  !*** ./src/app/home1/home1.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #c13341; }\n\nion-button {\n  --background:white  ; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbmd1eWVuL0lvbmljQXBwL3NwYWNlQXBwL3NyYy9hcHAvaG9tZTEvaG9tZTEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxxQkFBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUxL2hvbWUxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzEzMzQxO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6d2hpdGUgIDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home1/home1.page.ts":
/*!*************************************!*\
  !*** ./src/app/home1/home1.page.ts ***!
  \*************************************/
/*! exports provided: Home1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Page", function() { return Home1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restapi.service */ "./src/app/restapi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Home1Page = /** @class */ (function () {
    function Home1Page(router, alertCtrl, api) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.betfish = 0;
        this.betdeer = 0;
        this.betchicken = 0;
        this.betcrab = 0;
        this.betholo = 0;
        this.betshrimp = 0;
        this.rolled = false;
        this.winning = false;
    }
    // info() {
    //   let chicken = document.getElementById('chicken')
    //   let holo = document.getElementById('holo')
    //   let deer = document.getElementById('deer')
    //   let shrimp = document.getElementById('shrimp')
    //   let crab = document.getElementById('crab')
    //   let fish = document.getElementById('fish')
    // }
    Home1Page.prototype.betting = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'No money'
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home1Page.prototype.menu = function () {
        this.api.postData();
        this.router.navigate(['/main']);
    };
    Home1Page.prototype.fish1 = function () {
        if (this.api.User.holopoint > 0) {
            this.api.User.holopoint--;
            this.betfish++;
            console.log("fish " + this.betfish);
        }
        else {
            this.betting();
        }
    };
    Home1Page.prototype.chicken1 = function () {
        if (this.api.User.holopoint > 0) {
            this.api.User.holopoint--;
            this.betchicken++;
            console.log("chicken " + this.betchicken);
        }
        else {
            this.betting();
        }
    };
    Home1Page.prototype.shrimp1 = function () {
        if (this.api.User.holopoint > 0) {
            this.api.User.holopoint--;
            this.betshrimp++;
            console.log("shrimp " + this.betshrimp);
        }
        else {
            this.betting();
        }
    };
    Home1Page.prototype.crab1 = function () {
        if (this.api.User.holopoint > 0) {
            this.api.User.holopoint--;
            this.betcrab++;
            console.log("crab " + this.betcrab);
        }
        else {
            this.betting();
        }
    };
    Home1Page.prototype.deer1 = function () {
        if (this.api.User.holopoint > 0) {
            this.api.User.holopoint--;
            this.betdeer++;
            console.log("deer " + this.betdeer);
        }
        else {
            this.betting();
        }
    };
    Home1Page.prototype.holo1 = function () {
        if (this.api.User.holopoint > 0) {
            this.api.User.holopoint--;
            this.betholo++;
            console.log("holo " + this.betholo);
        }
        else {
            this.betting();
        }
    };
    Home1Page.prototype.roll = function () {
        var _this = this;
        if (this.rolled == false) {
            this.rolled = true;
            var roll = document.getElementById('roll');
            var result_1 = document.getElementById('result');
            var result1_1 = document.getElementById('result1');
            var result2_1 = document.getElementById('result2');
            result_1.src = 'assets/icon/blank.png';
            result1_1.src = 'assets/icon/blank.png';
            result2_1.src = 'assets/icon/blank.png';
            var a_1 = setInterval(function () {
                var random = Math.floor(Math.random() * 6);
                switch (random) {
                    case 0:
                        result_1.src = 'assets/icon/fish.png';
                        break;
                    case 1:
                        result_1.src = 'assets/icon/chicken.png';
                        break;
                    case 2:
                        result_1.src = 'assets/icon/crab.png';
                        break;
                    case 3:
                        result_1.src = 'assets/icon/deer.png';
                        break;
                    case 4:
                        result_1.src = 'assets/icon/holo.png';
                        break;
                    case 5:
                        result_1.src = 'assets/icon/shrimp.png';
                        break;
                }
            }, 20);
            setTimeout(function () {
                clearInterval(a_1);
            }, 450);
            var b_1 = setInterval(function () {
                var random = Math.floor(Math.random() * 6);
                switch (random) {
                    case 0:
                        result1_1.src = 'assets/icon/fish.png';
                        break;
                    case 1:
                        result1_1.src = 'assets/icon/chicken.png';
                        break;
                    case 2:
                        result1_1.src = 'assets/icon/crab.png';
                        break;
                    case 3:
                        result1_1.src = 'assets/icon/deer.png';
                        break;
                    case 4:
                        result1_1.src = 'assets/icon/holo.png';
                        break;
                    case 5:
                        result1_1.src = 'assets/icon/shrimp.png';
                        break;
                }
            }, 20);
            setTimeout(function () {
                clearInterval(b_1);
            }, 950);
            var c_1 = setInterval(function () {
                var random = Math.floor(Math.random() * 6);
                switch (random) {
                    case 0:
                        result2_1.src = 'assets/icon/fish.png';
                        break;
                    case 1:
                        result2_1.src = 'assets/icon/chicken.png';
                        break;
                    case 2:
                        result2_1.src = 'assets/icon/crab.png';
                        break;
                    case 3:
                        result2_1.src = 'assets/icon/deer.png';
                        break;
                    case 4:
                        result2_1.src = 'assets/icon/holo.png';
                        break;
                    case 5:
                        result2_1.src = 'assets/icon/shrimp.png';
                        break;
                }
            }, 20);
            setTimeout(function () {
                clearInterval(c_1);
            }, 1450);
            var r_1 = Math.floor(Math.random() * 6);
            console.log(r_1);
            var r1_1 = Math.floor(Math.random() * 6);
            console.log(r1_1);
            var r2_1 = Math.floor(Math.random() * 6);
            console.log(r2_1);
            setTimeout(function () {
                switch (r_1) {
                    case 0:
                        result_1.src = 'assets/icon/fish.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betfish * 2;
                        break;
                    case 1:
                        result_1.src = 'assets/icon/chicken.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betchicken * 2;
                        break;
                    case 2:
                        result_1.src = 'assets/icon/crab.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betcrab * 2;
                        break;
                    case 3:
                        result_1.src = 'assets/icon/deer.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betdeer * 2;
                        break;
                    case 4:
                        result_1.src = 'assets/icon/holo.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betholo * 2;
                        break;
                    case 5:
                        result_1.src = 'assets/icon/shrimp.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betshrimp * 2;
                        break;
                }
            }, 500);
            setTimeout(function () {
                switch (r1_1) {
                    case 0:
                        result1_1.src = 'assets/icon/fish.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betfish * 2;
                        break;
                    case 1:
                        result1_1.src = 'assets/icon/chicken.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betchicken * 2;
                        break;
                    case 2:
                        result1_1.src = 'assets/icon/crab.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betcrab * 2;
                        break;
                    case 3:
                        result1_1.src = 'assets/icon/deer.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betdeer * 2;
                        break;
                    case 4:
                        result1_1.src = 'assets/icon/holo.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betholo * 2;
                        break;
                    case 5:
                        result1_1.src = 'assets/icon/shrimp.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betshrimp * 2;
                        break;
                }
            }, 1000);
            setTimeout(function () {
                switch (r2_1) {
                    case 0:
                        result2_1.src = 'assets/icon/fish.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betfish * 2;
                        break;
                    case 1:
                        result2_1.src = 'assets/icon/chicken.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betchicken * 2;
                        break;
                    case 2:
                        result2_1.src = 'assets/icon/crab.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betcrab * 2;
                        break;
                    case 3:
                        result2_1.src = 'assets/icon/deer.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betdeer * 2;
                        break;
                    case 4:
                        result2_1.src = 'assets/icon/holo.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betholo * 2;
                        break;
                    case 5:
                        result2_1.src = 'assets/icon/shrimp.png';
                        _this.api.User.holopoint = _this.api.User.holopoint + _this.betshrimp * 2;
                        break;
                }
            }, 1500);
            setTimeout(function () {
                _this.betfish = 0;
                _this.betholo = 0;
                _this.betshrimp = 0;
                _this.betchicken = 0;
                _this.betcrab = 0;
                _this.betdeer = 0;
                _this.rolled = false;
            }, 1520);
        }
        else {
            console.log('rolling');
        }
    };
    Home1Page.prototype.newplayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'How to play',
                            message: 'Place your bet by clicking on each icon<br>3 dices will be rolled<br>x2 if your bet appeart once<br>x4 if your bet appear twice<br>x6 if your bet appear 3 times'
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home1Page.prototype.tutor = function () {
        var _this = this;
        document.getElementById('video').style.display = 'block';
        document.getElementById('roll').style.display = 'none';
        document.getElementById('roll1').style.display = 'none';
        document.getElementById('coin').style.display = 'none';
        var video = document.getElementById('video');
        video.play();
        document.querySelector('video').addEventListener('ended', function () {
            console.log('Video has ended!');
            document.getElementById('video').style.display = 'none';
            document.getElementById('roll').style.display = 'block';
            document.getElementById('roll1').style.display = 'block';
            document.getElementById('coin').style.display = 'block';
            _this.api.User.holopoint = _this.api.User.holopoint + 10;
            _this.coin();
        }, false);
    };
    Home1Page.prototype.coin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Congratulation!',
                            message: 'You earn 10 Holo coin'
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Home1Page.prototype.ngOnInit = function () { };
    Home1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home1',
            template: __webpack_require__(/*! ./home1.page.html */ "./src/app/home1/home1.page.html"),
            styles: [__webpack_require__(/*! ./home1.page.scss */ "./src/app/home1/home1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _restapi_service__WEBPACK_IMPORTED_MODULE_3__["RestapiService"]])
    ], Home1Page);
    return Home1Page;
}());



/***/ })

}]);
//# sourceMappingURL=home1-home1-module.js.map