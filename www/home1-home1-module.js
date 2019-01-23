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

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>home1</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n    <div style=\"text-align:center\" id='play'>\n  \n    <ion-button style=\"color: red\" (click)='menu()'>Back to Menu</ion-button>\n    </div>\n   \n<img (click)='fish1()' id='fish' style=\"float: right;height: 21%;\" src=\"assets/icon/fish.png\" alt=\"\">\n<img (click)='holo1()' id='holo'style=\"float: left;height: 21%;\"src=\"assets/icon/holo.png\" alt=\"\">\n<img (click)='shrimp1()' id='shrimp' style=\"float: right;height: 21%;\"src=\"assets/icon/shrimp.png\" alt=\"\">\n<img (click)='crab1()' id='crab' style=\"float: left;height: 21%;\"src=\"assets/icon/crab.png\" alt=\"\">\n<img (click)='deer1()' id='deer' style=\"float: right;height: 21%;\"src=\"assets/icon/deer.png\" alt=\"\">\n<img (click)='chicken1()' id='chicken' style=\"float: left;height: 21%;\"src=\"assets/icon/chicken.png\" alt=\"\">\n\n<h1 style=\"position: absolute;bottom: 4%; text-align:center\">Your coin:{{this.coin}}</h1>\n\n<ion-button style=\"color: red;position:absolute;bottom: 10%\" (click)='roll()'>ROLL</ion-button>\n\n<img style=\"height: 14.5%;\" id='result' src=\"assets/icon/blank.png\" alt=\"\">\n<img style=\"height: 14.5%;\" id='result1' src=\"assets/icon/blank.png\" alt=\"\">\n<img style=\"height: 14.5%;\" id='result2' src=\"assets/icon/blank.png\" alt=\"\">\n</ion-content>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home1Page = /** @class */ (function () {
    function Home1Page(router) {
        this.router = router;
        this.coin = 20;
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
        if (this.coin > 0) {
            this.coin = this.coin - 1;
        }
        else {
            console.log('no money');
        }
    };
    Home1Page.prototype.menu = function () {
        this.router.navigate(['/main']);
    };
    Home1Page.prototype.fish1 = function () {
        this.betting();
        this.betfish++;
        console.log("fish " + this.betfish);
    };
    Home1Page.prototype.chicken1 = function () {
        this.betting();
        this.betchicken++;
        console.log("chicken " + this.betchicken);
    };
    Home1Page.prototype.crab1 = function () {
        this.betting();
        this.betcrab++;
        console.log("crab " + this.betcrab);
    };
    Home1Page.prototype.shrimp1 = function () {
        this.betting();
        this.betshrimp++;
        console.log("shrimp " + this.betshrimp);
    };
    Home1Page.prototype.holo1 = function () {
        this.betting();
        this.betholo++;
        console.log("holo " + this.betholo);
    };
    Home1Page.prototype.deer1 = function () {
        this.betting();
        this.betdeer++;
        console.log("deer " + this.betdeer);
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
                        _this.coin = _this.coin + _this.betfish * 2;
                        break;
                    case 1:
                        result_1.src = 'assets/icon/chicken.png';
                        _this.coin = _this.coin + _this.betchicken * 2;
                        break;
                    case 2:
                        result_1.src = 'assets/icon/crab.png';
                        _this.coin = _this.coin + _this.betcrab * 2;
                        break;
                    case 3:
                        result_1.src = 'assets/icon/deer.png';
                        _this.coin = _this.coin + _this.betdeer * 2;
                        break;
                    case 4:
                        result_1.src = 'assets/icon/holo.png';
                        _this.coin = _this.coin + _this.betholo * 2;
                        break;
                    case 5:
                        result_1.src = 'assets/icon/shrimp.png';
                        _this.coin = _this.coin + _this.betshrimp * 2;
                        break;
                }
            }, 500);
            setTimeout(function () {
                switch (r1_1) {
                    case 0:
                        result1_1.src = 'assets/icon/fish.png';
                        _this.coin = _this.coin + _this.betfish * 2;
                        break;
                    case 1:
                        result1_1.src = 'assets/icon/chicken.png';
                        _this.coin = _this.coin + _this.betchicken * 2;
                        break;
                    case 2:
                        result1_1.src = 'assets/icon/crab.png';
                        _this.coin = _this.coin + _this.betcrab * 2;
                        break;
                    case 3:
                        result1_1.src = 'assets/icon/deer.png';
                        _this.coin = _this.coin + _this.betdeer * 2;
                        break;
                    case 4:
                        result1_1.src = 'assets/icon/holo.png';
                        _this.coin = _this.coin + _this.betholo * 2;
                        break;
                    case 5:
                        result1_1.src = 'assets/icon/shrimp.png';
                        _this.coin = _this.coin + _this.betshrimp * 2;
                        break;
                }
            }, 1000);
            setTimeout(function () {
                switch (r2_1) {
                    case 0:
                        result2_1.src = 'assets/icon/fish.png';
                        _this.coin = _this.coin + _this.betfish * 2;
                        break;
                    case 1:
                        result2_1.src = 'assets/icon/chicken.png';
                        _this.coin = _this.coin + _this.betchicken * 2;
                        break;
                    case 2:
                        result2_1.src = 'assets/icon/crab.png';
                        _this.coin = _this.coin + _this.betcrab * 2;
                        break;
                    case 3:
                        result2_1.src = 'assets/icon/deer.png';
                        _this.coin = _this.coin + _this.betdeer * 2;
                        break;
                    case 4:
                        result2_1.src = 'assets/icon/holo.png';
                        _this.coin = _this.coin + _this.betholo * 2;
                        break;
                    case 5:
                        result2_1.src = 'assets/icon/shrimp.png';
                        _this.coin = _this.coin + _this.betshrimp * 2;
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
    Home1Page.prototype.ngOnInit = function () { };
    Home1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home1',
            template: __webpack_require__(/*! ./home1.page.html */ "./src/app/home1/home1.page.html"),
            styles: [__webpack_require__(/*! ./home1.page.scss */ "./src/app/home1/home1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Home1Page);
    return Home1Page;
}());



/***/ })

}]);
//# sourceMappingURL=home1-home1-module.js.map