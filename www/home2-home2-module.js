(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home2-home2-module"],{

/***/ "./src/app/home2/home2.module.ts":
/*!***************************************!*\
  !*** ./src/app/home2/home2.module.ts ***!
  \***************************************/
/*! exports provided: Home2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2PageModule", function() { return Home2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home2.page */ "./src/app/home2/home2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home2_page__WEBPACK_IMPORTED_MODULE_5__["Home2Page"]
    }
];
var Home2PageModule = /** @class */ (function () {
    function Home2PageModule() {
    }
    Home2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home2_page__WEBPACK_IMPORTED_MODULE_5__["Home2Page"]]
        })
    ], Home2PageModule);
    return Home2PageModule;
}());



/***/ }),

/***/ "./src/app/home2/home2.page.html":
/*!***************************************!*\
  !*** ./src/app/home2/home2.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <video id='video' src=\"assets/tamar.MOV\" autoplay height=\"820px\"></video>\n\n  <div padding id='char' style=\"display:none\">\n    <h1 style=\"text-align:center\">Pick your character</h1>\n    <br><br><br>\n    <div style=\"display:inline-block;text-align: center\">\n      <img (click)='pick1()' height=\"200px\" src=\"assets/game3/Ben.png\" alt=\"\">\n      <ion-card>\n        <h1>B-Jammin</h1>\n        <p>\"Every one is</p>\n        <p>a real coder\"</p>\n        <p>Super: Change</p>\n        <p>rating to 9</p>\n      </ion-card>\n    </div>\n\n    <div style=\"display:inline-block; float: right; text-align: center\">\n      <img (click)='pick2()' height=\"200px\" src=\"assets/game3/Will.png\" alt=\"\">\n      <ion-card>\n        <h1>WilD-</h1>\n        <p>\"Believe in</p>\n        <p>your self\"</p>\n        <p>Super: User</p>\n        <p>power twice</p>\n      </ion-card>\n    </div>\n\n\n    <div style=\"text-align:center;\">\n      <ion-button style=\"color:black\" (click)='menu()'>Back to Menu</ion-button>\n    </div>\n  </div>\n\n<div style=\"display:none\" id='game'>\n  <div > \n   <div id='cpucard' ></div> <img style=\" width : 35%\" id='cpu' src=\"assets/game3/empty.png\" alt=\"\">\n   <!-- <h1>{{this.cpuscore}}</h1> -->\n    <h1 id='cputalk' style=\"float:right;padding-right:10px\">CPU Score: {{this.cpuscore}}</h1>\n</div>\n\n  <div id='deck'>\n    <div id='current' style=\"display:none\" >\n<img id='cpucard1' style=\"width:25%\" src=\"assets/photos/back.png\" alt=\"\">\n<img id='usercard1' style=\"width: 25%;float:right\" src=\"assets/photos/back.png\" alt=\"\"></div>\n  </div>\n\n  <div style=\"text-align:right\"> <img style=\"width : 35%\" id='user' src=\"assets/game3/empty.png\" alt=\"\"> \n    <h1 style=\"float:left; padding-left: 10px\">Your Score: {{this.userscore}}</h1>\n  <div id='usercard'></div></div>\n  <div style=\"text-align:center;\">\n      <ion-button style=\"color:black\" (click)='menu()'>Back to Menu</ion-button>\n    </div></div>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home2/home2.page.scss":
/*!***************************************!*\
  !*** ./src/app/home2/home2.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: gray; }\n\nion-button {\n  --background: white; }\n\nion-card {\n  --background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbmd1eWVuL0lvbmljQXBwL3NwYWNlQXBwL3NyYy9hcHAvaG9tZTIvaG9tZTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWEsRUFDaEI7O0FBRUQ7RUFDSSxvQkFBYSxFQUNoQjs7QUFDRDtFQUNJLG9CQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZTIvaG9tZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiBncmF5O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tY2FyZHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home2/home2.page.ts":
/*!*************************************!*\
  !*** ./src/app/home2/home2.page.ts ***!
  \*************************************/
/*! exports provided: Home2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Page", function() { return Home2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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



var Home2Page = /** @class */ (function () {
    function Home2Page(router, alertCtrl) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.icstars = {
            'patton': 1,
            'shanta': 1,
            'touly': 5,
            'cesar': 8,
            'kazi': 6,
            'channel': 3,
            'marquise': 10,
            'DJ': 7,
            'maday': 3,
            'james': 2,
            'manny': 5,
            'daniel': 2,
            'khalil': 4,
            'tamar': 5,
            'jordan': 9,
            'alan': 1,
        };
        this.super = {
            'patton': 1,
            'shanta': 1,
            'touly': 5,
            'cesar': 8,
            'kazi': 6,
            'channel': 3,
            'marquise': 10,
            'DJ': 7,
            'maday': 3,
            'james': 2,
            'manny': 5,
            'daniel': 2,
            'khalil': 4,
            'tamar': 5,
            'jordan': 9,
            'alan': 1,
        };
        this.user = {};
        this.cpu = {};
        this.sortable = [];
        this.cpuscore = 0;
        this.userscore = 0;
        this.currentcpu = "";
    }
    Home2Page.prototype.compare = function (x, y) {
        var temp = this.icstars[x];
        var temp1 = this.icstars[y];
        // console.log(temp)
        if (temp == temp1) {
            console.log('tie');
        }
        else if (temp > temp1) {
            this.cpuscore++;
        }
        else if (temp1 > temp) {
            this.userscore++;
        }
    };
    Home2Page.prototype.playgame = function () {
        var _this = this;
        document.getElementById('game').style.display = 'block';
        document.getElementById('char').style.display = 'none';
        var cpu = document.getElementById('cpu');
        var user = document.getElementById('user');
        if (this.pick == 1) {
            user.src = "assets/game3/Ben.png";
            cpu.src = "assets/game3/Will.png";
        }
        else {
            cpu.src = "assets/game3/Ben.png";
            user.src = "assets/game3/Will.png";
        }
        for (var vehicle in this.icstars) {
            this.sortable.push(vehicle);
        }
        this.sortable.sort(function (a, b) {
            return 0.5 - Math.random();
        });
        var _loop_1 = function (i) {
            console.log(this_1.sortable[i]);
            var deck = document.getElementById('deck');
            var img = document.createElement('img');
            img.src = "assets/photos/" + this_1.sortable[i] + ".jpg";
            img.style.width = '25%';
            img.id = "" + this_1.sortable[i];
            img.onclick = function (async) { return _this.moneyAlert(img.id); };
            deck.append(img);
        };
        var this_1 = this;
        for (var i = 0; i < this.sortable.length; i++) {
            _loop_1(i);
        }
    };
    Home2Page.prototype.moneyAlert = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(x);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: x,
                                subHeader: this.icstars[x],
                                message: this.super[x],
                                buttons: [{
                                        text: "Cancel"
                                    }, {
                                        text: "Pick",
                                        handler: function () {
                                            _this.user[x] = _this.icstars[x];
                                            _this.sortable.splice(_this.sortable.indexOf(x), 1);
                                            console.log(_this.sortable);
                                            console.log(_this.user);
                                            var x1 = document.getElementById("" + x);
                                            var user = document.getElementById('usercard');
                                            user.append(x1);
                                            x1.onclick = function (async) { return _this.playAlert(x); };
                                            _this.cpupick();
                                        }
                                    }]
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
    Home2Page.prototype.playAlert = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(x);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: x,
                                subHeader: this.icstars[x],
                                message: this.super[x],
                                buttons: [{
                                        text: "Cancel"
                                    }, {
                                        text: 'Play',
                                        handler: function () {
                                            var x1 = document.getElementById("" + x);
                                            document.getElementById('current').style.display = 'block';
                                            _this.cputurn();
                                            var user = document.getElementById('usercard1');
                                            user.src = "assets/photos/" + x + ".jpg";
                                            x1.style.display = 'none';
                                            _this.compare(_this.currentcpu, x);
                                        }
                                    }]
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
    Home2Page.prototype.cputurn = function () {
        // let deck = <HTMLInputElement> document.getElementById('deck')
        var temp = Object.keys(this.cpu);
        var card = Math.floor(Math.random() * temp.length);
        console.log(card);
        var temp111 = temp[card];
        console.log(temp111);
        var img1 = document.getElementById("" + temp111);
        img1.style.display = 'none';
        var img = document.getElementById("cpucard1");
        img.src = "assets/photos/" + temp111 + ".jpg";
        // deck.append(img)
        this.currentcpu = temp111;
        delete this.cpu[temp111];
        console.log(this.cpu);
    };
    Home2Page.prototype.cpupick = function () {
        var r = Math.floor(Math.random() * this.sortable.length);
        console.log(r);
        var name = this.sortable[r];
        this.cpu[name] = this.icstars[name];
        this.sortable.splice(r, 1);
        console.log(this.sortable);
        console.log(this.cpu);
        var hide = document.getElementById(name);
        hide.style.display = 'none';
        var cpu = document.getElementById('cpucard');
        var newimg = document.createElement('img');
        newimg.src = "assets/photos/back.png";
        newimg.id = "" + name;
        newimg.style.width = '25%';
        cpu.append(newimg);
        // if (this.sortable.length == 0) {
        //   document.getElementById('cputalk').innerHTML = 'Pick 1st player'
        // }
    };
    Home2Page.prototype.ngOnInit = function () {
        document.querySelector('video').addEventListener('ended', function () {
            console.log('Video has ended!');
            document.getElementById('video').style.display = 'none';
            document.getElementById('char').style.display = 'block';
        }, false);
    };
    Home2Page.prototype.pick1 = function () {
        this.pick = 1;
        console.log(this.pick);
        this.playgame();
        // document.getElementById('char').style.display = 'none'
    };
    Home2Page.prototype.pick2 = function () {
        this.pick = 2;
        console.log(this.pick);
        this.playgame();
        // document.getElementById('char').style.display = 'none'
    };
    Home2Page.prototype.menu = function () {
        this.router.navigate(['/main']);
    };
    Home2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home2',
            template: __webpack_require__(/*! ./home2.page.html */ "./src/app/home2/home2.page.html"),
            styles: [__webpack_require__(/*! ./home2.page.scss */ "./src/app/home2/home2.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], Home2Page);
    return Home2Page;
}());



/***/ })

}]);
//# sourceMappingURL=home2-home2-module.js.map