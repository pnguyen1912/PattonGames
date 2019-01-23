(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n  <div style=\"text-align:center\" id='play'>\n    <img src=\"assets/solo.png\" alt=\"\">\n<img src=\"assets/spades.jpg\" alt=\"\"><br>\n <b> <ion-button style=\"color: green\" (click)='play()'>Play</ion-button><br>\n<ion-button style=\"color: green\" (click)='menu()'>Back to Menu</ion-button></b>\n\n</div>\n  <div id='game' style=\"display:none\">\n<div style=\"text-align:center\">\n  <img  id='img3'style=\"width: 30%\" src=\"assets/back.png\" alt=\"\">\n  <p id='score3'>Score: 0</p>\n</div>\n<div>\n  <img id='img2' style=\"width: 30%;display: inline-block\" src=\"assets/back.png\" alt=\"\">\n\n  <img id='img4' style=\"width: 30%;display: inline-block;float: right\" src=\"assets/back.png\" alt=\"\">\n</div>\n<div> <p id='score2'style=\"display: inline-block\">Score: 0</p>\n<p id='score4' style=\"display: inline-block;float: right;\">Score: 0</p></div>\n\n<div style=\"text-align:center\">\n  <img id='img1' style=\"width: 30%\" src=\"assets/blank.png\" alt=\"\">\n</div>\n<div style=\"text-align:center\">\n<p id='score1'>Score: 0</p></div>\n  <div id='player1'></div>\n</div>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: green\n; }\n\nion-button {\n  --background: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbmd1eWVuL0lvbmljQXBwL3NwYWNlQXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJO0NBQWEsRUFDaEI7O0FBRUQ7RUFDSSxvQkFBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogZ3JlZW5cbn1cblxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var HomePage = /** @class */ (function () {
    function HomePage(AlertCtrl, router) {
        this.AlertCtrl = AlertCtrl;
        this.router = router;
        this.cards = [
            { num: '14', suit: 'H', played: false }, { num: '02', suit: 'H', played: false }, { num: '03', suit: 'H', played: false }, { num: '04', suit: 'H', played: false }, { num: '05', suit: 'H', played: false }, { num: '06', suit: 'H', played: false }, { num: '07', suit: 'H', played: false }, { num: '08', suit: 'H', played: false }, { num: '09', suit: 'H', played: false }, { num: '10', suit: 'H', played: false }, { num: '11', suit: 'H', played: false }, { num: '12', suit: 'H', played: false }, { num: '13', suit: 'H', played: false },
            { num: '14', suit: 'D', played: false }, { num: '02', suit: 'D', played: false }, { num: '03', suit: 'D', played: false }, { num: '04', suit: 'D', played: false }, { num: '05', suit: 'D', played: false }, { num: '06', suit: 'D', played: false }, { num: '07', suit: 'D', played: false }, { num: '08', suit: 'D', played: false }, { num: '09', suit: 'D', played: false }, { num: '10', suit: 'D', played: false }, { num: '11', suit: 'D', played: false }, { num: '12', suit: 'D', played: false }, { num: '13', suit: 'D', played: false },
            { num: '14', suit: 'S', played: false }, { num: '02', suit: 'S', played: false }, { num: '03', suit: 'S', played: false }, { num: '04', suit: 'S', played: false }, { num: '05', suit: 'S', played: false }, { num: '06', suit: 'S', played: false }, { num: '07', suit: 'S', played: false }, { num: '08', suit: 'S', played: false }, { num: '09', suit: 'S', played: false }, { num: '10', suit: 'S', played: false }, { num: '11', suit: 'S', played: false }, { num: '12', suit: 'S', played: false }, { num: '13', suit: 'S', played: false },
            { num: '14', suit: 'C', played: false }, { num: '02', suit: 'C', played: false }, { num: '03', suit: 'C', played: false }, { num: '04', suit: 'C', played: false }, { num: '05', suit: 'C', played: false }, { num: '06', suit: 'C', played: false }, { num: '07', suit: 'C', played: false }, { num: '08', suit: 'C', played: false }, { num: '09', suit: 'C', played: false }, { num: '10', suit: 'C', played: false }, { num: '11', suit: 'C', played: false }, { num: '12', suit: 'C', played: false }, { num: '13', suit: 'C', played: false },
        ];
        this.player1 = [];
        this.player2 = [];
        this.player3 = [];
        this.player4 = [];
        // cards ={
        //   1 : '1H',  2 : '2H', 3 :'3H',  4 : '4H',  5: '5H',  6:'6H',  7:'7H',  8:'8H',  9:'9H',  10:'10H',  11:'11H',  12:'12H',  13:'13H',
        // 14: '1D', 15:'2D',16:'3D',17:'4D',18:'5D',19:'6D',20:'7D',21:'8D',22:'9D',23:'10D',24:'11D',25:'12D',26:'13D',
        // 27:'1S',28:'2S',29:'3S',30:'4S',31:'5S',32:'6S',33:'7S',34:'8S',35:'9S',36:'10S',37:'11S',38:'12S',39:'13S',
        // 40:'1C',41:'2C',42:'3C',43:'4C',44:'5C',45:'6C',46:'7C',47:'8C',48:'9C',49:'10C',50:'11C',51:'12C',52:'13C'
        // }
        // player1={
        //   1: '',
        //   2:'',
        //   3:'',
        //   4:'',
        //   5:'',
        //   6:'',
        //   7:'',
        //   8:'',
        //   9:'',
        //   10:'',
        //   11:'',
        //   12:'',
        //   13:'',
        // }
        // player2={
        //   1: '',
        //   2:'',
        //   3:'',
        //   4:'',
        //   5:'',
        //   6:'',
        //   7:'',
        //   8:'',
        //   9:'',
        //   10:'',
        //   11:'',
        //   12:'',
        //   13:'',
        // }
        // player3={
        //   1: '',
        //   2:'',
        //   3:'',
        //   4:'',
        //   5:'',
        //   6:'',
        //   7:'',
        //   8:'',
        //   9:'',
        //   10:'',
        //   11:'',
        //   12:'',
        //   13:'',
        // }
        // player4={
        //   1: '',
        //   2:'',
        //   3:'',
        //   4:'',
        //   5:'',
        //   6:'',
        //   7:'',
        //   8:'',
        //   9:'',
        //   10:'',
        //   11:'',
        //   12:'',
        //   13:'',
        // }
        // dealed = []
        this.currentplay = '';
        this.turn = true;
        this.round = 1;
        this.currentplay2 = '';
        this.currentplay3 = '';
        this.currentplay4 = '';
        this.player1score = 0;
        this.player2score = 0;
        this.player3score = 0;
        this.player4score = 0;
        this.played1 = false;
        this.played2 = false;
        this.played3 = false;
        this.played4 = false;
        this.turn1 = false;
        this.turn2 = false;
        this.turn3 = false;
        this.turn4 = false;
        this.gamestarted = false;
    }
    HomePage.prototype.menu = function () {
        this.router.navigate(['/main']);
    };
    HomePage.prototype.play = function () {
        var _this = this;
        document.getElementById('play').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        var j, x, i;
        // for (i = 52 - 1; i > 0; i--) {
        //     j = Math.floor(Math.random() * (i + 1));
        //     x = this.cards[i];
        //     this.cards[i] = this.cards[j];
        //     this.cards[j] = x;
        // }
        this.cards.sort(function (a, b) { return 0.5 - Math.random(); });
        console.log(this.cards);
        for (i = 0; i <= 12; i++) {
            this.player1[i] = this.cards[i];
        }
        // console.log(this.player1)
        this.player1.sort(function (a, b) { return a.num - b.num; });
        // this.player1.sort(function (a, b) {
        //   return ('' + a.attr).localeCompare(b.attr)});
        console.log(this.player1);
        var _loop_1 = function () {
            var player1 = document.getElementById('player1');
            var now = document.createElement('img');
            now.src = "assets/PNG/" + this_1.player1[i].num + this_1.player1[i].suit + ".png";
            now.id = this_1.player1[i].num + this_1.player1[i].suit;
            now.style.width = '14%';
            this_1.player1[i].played = true;
            now.onclick = function (async) { return _this.classFunction1(now.id); };
            player1.append(now);
        };
        var this_1 = this;
        for (i = 12; i >= 0; i--) {
            _loop_1();
        }
        for (i = 12; i >= 0; i--) {
            this.player2[i] = this.cards[i + 13];
        }
        console.log(this.player2);
        for (i = 12; i >= 0; i--) {
            this.player3[i] = this.cards[i + 26];
        }
        console.log(this.player3);
        for (i = 12; i >= 0; i--) {
            this.player4[i] = this.cards[i + 39];
        }
        console.log(this.player4);
    };
    HomePage.prototype.cantplay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertCtrl.create({
                            header: 'it has to be same suit'
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
    HomePage.prototype.annwinner = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertCtrl.create({
                            header: "winner is " + a,
                            subHeader: "play again?",
                            buttons: [{ text: 'No',
                                    handler: function () {
                                        document.getElementById('game').style.display = 'none';
                                        document.getElementById('play').style.display = 'block';
                                    } },
                                { text: 'Yes',
                                    handler: function () {
                                        _this.play();
                                        _this.round = 1;
                                        // let i=0
                                        _this.player1 = [];
                                        _this.player2 = [];
                                        _this.player3 = [];
                                        _this.player4 = [];
                                    },
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
    HomePage.prototype.cantspade = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertCtrl.create({
                            header: 'Cant start with space'
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
    HomePage.prototype.notturn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertCtrl.create({
                            header: 'Wait til your turn'
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
    HomePage.prototype.classFunction1 = function (clicked_id) {
        var _this = this;
        // this.cantplay();
        console.log(clicked_id);
        if (this.turn == true) {
            if (clicked_id.charAt(2) == 'S' && this.gamestarted == false) {
                this.cantspade();
            }
            else {
                this.gamestarted = true;
                var clicked = document.getElementById("" + clicked_id);
                clicked.style.display = 'none';
                this.currentplay = clicked_id;
                var player1spot = document.getElementById('img1');
                player1spot.src = "assets/PNG/" + clicked_id + ".png";
                this.turn = false;
                this.played1 = true;
                setTimeout(function () {
                    while (_this.played2 == false) {
                        if (_this.played2 == false) {
                            _this.cputurn2(clicked_id);
                        }
                        if (_this.played2 == false) {
                            _this.cpuspade2(clicked_id);
                        }
                        if (_this.played2 == false) {
                            _this.cpurandom2(clicked_id);
                        }
                    }
                }, 500);
                this.played2 = false;
                setTimeout(function () {
                    while (_this.played3 == false) {
                        _this.cputurn3(clicked_id);
                        if (_this.played3 == false) {
                            _this.cpuspade3(clicked_id);
                        }
                        if (_this.played3 == false) {
                            _this.cpurandom3(clicked_id);
                        }
                    }
                }, 1000);
                this.played3 = false;
                setTimeout(function () {
                    while (_this.played4 == false) {
                        _this.cputurn4(clicked_id);
                        if (_this.played4 == false) {
                            _this.cpuspade4(clicked_id);
                        }
                        if (_this.played4 == false) {
                            _this.cpurandom4(clicked_id);
                        }
                    }
                }, 1500);
                this.played4 = false;
                setTimeout(function () {
                    _this.winner(_this.currentplay, _this.currentplay2, _this.currentplay3, _this.currentplay4);
                    _this.turn = true;
                    _this.round++;
                }, 3000);
                setTimeout(function () {
                    if (_this.round == 14) {
                        if (_this.player1score > _this.player2score && _this.player1score > _this.player2score && _this.player1score > _this.player4score) {
                            _this.annwinner('Player 1');
                        }
                        if (_this.player2score > _this.player1score && _this.player2score > _this.player3score && _this.player2score > _this.player4score) {
                            _this.annwinner('Player 2');
                        }
                        if (_this.player3score > _this.player1score && _this.player3score > _this.player2score && _this.player3score > _this.player4score) {
                            _this.annwinner('Player 3');
                        }
                        if (_this.player4score > _this.player1score && _this.player4score > _this.player2score && _this.player4score > _this.player3score) {
                            _this.annwinner('Player 4');
                        }
                    }
                }, 3001);
            }
        }
        else {
            this.notturn();
        }
    };
    HomePage.prototype.comparenum = function (a, x, y, z) {
        if (a > x && a > y && a > z) {
            console.log('player1 wins');
            this.player1score++;
            document.getElementById('score1').innerHTML = "Score :" + this.player1score;
            this.turn = true;
            var img1 = document.getElementById('img1');
            img1.src = 'assets/blank.png';
            var img2 = document.getElementById('img2');
            img2.src = 'assets/back.png';
            var img3 = document.getElementById('img3');
            img3.src = 'assets/back.png';
            var img4 = document.getElementById('img4');
            img4.src = 'assets/back.png';
        }
        else if (x > a && x > y && x > z) {
            console.log('player2 wins');
            this.player2score++;
            document.getElementById('score2').innerHTML = "Score :" + this.player2score;
            var img1 = document.getElementById('img1');
            img1.src = 'assets/blank.png';
            var img2 = document.getElementById('img2');
            img2.src = 'assets/back.png';
            var img3 = document.getElementById('img3');
            img3.src = 'assets/back.png';
            var img4 = document.getElementById('img4');
            img4.src = 'assets/back.png';
        }
        else if (y > a && y > x && y > z) {
            console.log('player3 wins');
            this.player3score++;
            document.getElementById('score3').innerHTML = "Score :" + this.player3score;
            var img1 = document.getElementById('img1');
            img1.src = 'assets/blank.png';
            var img2 = document.getElementById('img2');
            img2.src = 'assets/back.png';
            var img3 = document.getElementById('img3');
            img3.src = 'assets/back.png';
            var img4 = document.getElementById('img4');
            img4.src = 'assets/back.png';
        }
        else if (z > a && z > x && z > y) {
            console.log('player4 wins');
            this.player4score++;
            document.getElementById('score4').innerHTML = "Score :" + this.player4score;
            var img1 = document.getElementById('img1');
            img1.src = 'assets/blank.png';
            var img2 = document.getElementById('img2');
            img2.src = 'assets/back.png';
            var img3 = document.getElementById('img3');
            img3.src = 'assets/back.png';
            var img4 = document.getElementById('img4');
            img4.src = 'assets/back.png';
        }
    };
    HomePage.prototype.winner = function (aa, xx, yy, zz) {
        // console.log(aa)
        var a = parseInt(aa.substring(0, 2));
        var as = aa.substring(2, 3);
        console.log(as);
        // console.log(a)
        var x = xx.num;
        // console.log(xx.suit)
        var y = yy.num;
        var z = zz.num;
        if (as == xx.suit && as == yy.suit && as == zz.suit) {
            this.comparenum(a, x, y, z);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != xx.suit) {
            this.comparenum(a, 0, y, z);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != yy.suit) {
            this.comparenum(a, x, 0, z);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != zz.suit) {
            this.comparenum(a, x, y, 0);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != xx.suit && as != yy.suit) {
            this.comparenum(a, 0, 0, z);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != xx.suit && as != zz.suit) {
            this.comparenum(a, 0, y, 0);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != yy.suit && as != zz.suit) {
            this.comparenum(a, x, 0, 0);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S' && as != xx.suit && as != yy.suit && as != zz.suit) {
            this.comparenum(a, 0, 0, 0);
        }
        else if (as == 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit != 'S') {
            this.comparenum(a, 0, 0, 0);
        }
        else if (as == 'S' && xx.suit == 'S' && yy.suit != 'S' && zz.suit != 'S') {
            this.comparenum(a, x, 0, 0);
        }
        else if (as == 'S' && xx.suit != 'S' && yy.suit == 'S' && zz.suit != 'S') {
            this.comparenum(a, 0, y, 0);
        }
        else if (as == 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit == 'S') {
            this.comparenum(a, 0, 0, z);
        }
        else if (as == 'S' && xx.suit == 'S' && yy.suit == 'S' && zz.suit != 'S') {
            this.comparenum(a, x, y, 0);
        }
        else if (as == 'S' && xx.suit != 'S' && yy.suit == 'S' && zz.suit == 'S') {
            this.comparenum(a, 0, y, z);
        }
        else if (as == 'S' && xx.suit == 'S' && yy.suit != 'S' && zz.suit == 'S') {
            this.comparenum(a, x, 0, z);
        }
        else if (as != 'S' && xx.suit == 'S' && yy.suit != 'S' && zz.suit != 'S') {
            this.comparenum(0, x, 0, 0);
        }
        else if (as != 'S' && xx.suit == 'S' && yy.suit == 'S' && zz.suit != 'S') {
            this.comparenum(0, x, y, 0);
        }
        else if (as != 'S' && xx.suit == 'S' && yy.suit != 'S' && zz.suit == 'S') {
            this.comparenum(0, x, 0, z);
        }
        else if (as != 'S' && xx.suit == 'S' && yy.suit == 'S' && zz.suit == 'S') {
            this.comparenum(0, x, y, z);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit == 'S' && zz.suit != 'S') {
            this.comparenum(0, 0, y, 0);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit == 'S' && zz.suit == 'S') {
            this.comparenum(0, 0, y, z);
        }
        else if (as != 'S' && xx.suit != 'S' && yy.suit != 'S' && zz.suit == 'S') {
            this.comparenum(0, 0, 0, z);
        }
    };
    HomePage.prototype.cputurn2 = function (clicked_id2) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player2spot = document.getElementById('img2');
            if (this.player2[i].played == false && (this.player2[i].suit == clicked_id2.charAt(2))) {
                player2spot.src = "assets/PNG/" + this.player2[i].num + this.player2[i].suit + ".png";
                this.player2[i].played = true;
                this.currentplay2 = this.player2[i];
                console.log(this.currentplay2);
                this.played2 = true;
                return;
                // } else if (this.player2[i].played == false && this.player2[i].suit =='S'){
                //   player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}}`
                //   this.player2[i].played = true
                //   this.currentplay2 = this.player2[i]
                //   console.log(this.currentplay2)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cpuspade2 = function (clicked_id2) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player2spot = document.getElementById('img2');
            if (this.player2[i].played == false && (this.player2[i].suit == 'S')) {
                player2spot.src = "assets/PNG/" + this.player2[i].num + this.player2[i].suit + ".png";
                this.player2[i].played = true;
                this.currentplay2 = this.player2[i];
                console.log(this.currentplay2);
                this.played2 = true;
                return;
                // } else if (this.player2[i].played == false && this.player2[i].suit =='S'){
                //   player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}}`
                //   this.player2[i].played = true
                //   this.currentplay2 = this.player2[i]
                //   console.log(this.currentplay2)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cpurandom2 = function (clicked_id2) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player2spot = document.getElementById('img2');
            if (this.player2[i].played == false) {
                player2spot.src = "assets/PNG/" + this.player2[i].num + this.player2[i].suit + ".png";
                this.player2[i].played = true;
                this.currentplay2 = this.player2[i];
                console.log(this.currentplay2);
                this.played2 = true;
                return;
                // } else if (this.player2[i].played == false && this.player2[i].suit =='S'){
                //   player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}}`
                //   this.player2[i].played = true
                //   this.currentplay2 = this.player2[i]
                //   console.log(this.currentplay2)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cputurn3 = function (clicked_id3) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player3spot = document.getElementById('img3');
            if (this.player3[i].played == false && (this.player3[i].suit == clicked_id3.charAt(2))) {
                player3spot.src = "assets/PNG/" + this.player3[i].num + this.player3[i].suit + ".png";
                this.player3[i].played = true;
                this.currentplay3 = this.player3[i];
                console.log(this.currentplay3);
                this.played3 = true;
                return;
                // }else if (this.player3[i].played == false && this.player3[i].suit =='S'){
                //   player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}}`
                //   this.player3[i].played = true
                //   this.currentplay3 = this.player3[i]
                //   console.log(this.currentplay3)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cpuspade3 = function (clicked_id3) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player3spot = document.getElementById('img3');
            if (this.player3[i].played == false && (this.player3[i].suit == 'S')) {
                player3spot.src = "assets/PNG/" + this.player3[i].num + this.player3[i].suit + ".png";
                this.player3[i].played = true;
                this.currentplay3 = this.player3[i];
                console.log(this.currentplay3);
                this.played3 = true;
                return;
                // }else if (this.player3[i].played == false && this.player3[i].suit =='S'){
                //   player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}}`
                //   this.player3[i].played = true
                //   this.currentplay3 = this.player3[i]
                //   console.log(this.currentplay3)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cpurandom3 = function (clicked_id3) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player3spot = document.getElementById('img3');
            if (this.player3[i].played == false) {
                player3spot.src = "assets/PNG/" + this.player3[i].num + this.player3[i].suit + ".png";
                this.player3[i].played = true;
                this.currentplay3 = this.player3[i];
                console.log(this.currentplay3);
                this.played3 = true;
                return;
                // }else if (this.player3[i].played == false && this.player3[i].suit =='S'){
                //   player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}}`
                //   this.player3[i].played = true
                //   this.currentplay3 = this.player3[i]
                //   console.log(this.currentplay3)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cputurn4 = function (clicked_id) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player4spot = document.getElementById('img4');
            if (this.player4[i].played == false && (this.player4[i].suit == clicked_id.charAt(2))) {
                player4spot.src = "assets/PNG/" + this.player4[i].num + this.player4[i].suit + ".png";
                this.player4[i].played = true;
                this.currentplay4 = this.player4[i];
                console.log(this.currentplay4);
                this.played4 = true;
                return;
                // } else if (this.player4[i].played == false && this.player4[i].suit =='S'){
                //   player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}}`
                //   this.player4[i].played = true
                //   this.currentplay4 = this.player4[i]
                //   console.log(this.currentplay4)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cpuspade4 = function (clicked_id) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player4spot = document.getElementById('img4');
            if (this.player4[i].played == false && (this.player4[i].suit == 'S')) {
                player4spot.src = "assets/PNG/" + this.player4[i].num + this.player4[i].suit + ".png";
                this.player4[i].played = true;
                this.currentplay4 = this.player4[i];
                console.log(this.currentplay4);
                this.played4 = true;
                return;
                // } else if (this.player4[i].played == false && this.player4[i].suit =='S'){
                //   player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}}`
                //   this.player4[i].played = true
                //   this.currentplay4 = this.player4[i]
                //   console.log(this.currentplay4)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage.prototype.cpurandom4 = function (clicked_id) {
        var i = 0;
        for (i; i <= 12; i++) {
            var player4spot = document.getElementById('img4');
            if (this.player4[i].played == false) {
                player4spot.src = "assets/PNG/" + this.player4[i].num + this.player4[i].suit + ".png";
                this.player4[i].played = true;
                this.currentplay4 = this.player4[i];
                console.log(this.currentplay4);
                this.played4 = true;
                return;
                // } else if (this.player4[i].played == false && this.player4[i].suit =='S'){
                //   player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}}`
                //   this.player4[i].played = true
                //   this.currentplay4 = this.player4[i]
                //   console.log(this.currentplay4)
                //   return
            }
            else {
                console.log('hi');
            }
        }
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map