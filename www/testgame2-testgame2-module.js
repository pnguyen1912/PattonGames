(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testgame2-testgame2-module"],{

/***/ "./src/app/testgame2/testgame2.module.ts":
/*!***********************************************!*\
  !*** ./src/app/testgame2/testgame2.module.ts ***!
  \***********************************************/
/*! exports provided: Testgame2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testgame2PageModule", function() { return Testgame2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _testgame2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testgame2.page */ "./src/app/testgame2/testgame2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _testgame2_page__WEBPACK_IMPORTED_MODULE_5__["Testgame2Page"]
    }
];
var Testgame2PageModule = /** @class */ (function () {
    function Testgame2PageModule() {
    }
    Testgame2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_testgame2_page__WEBPACK_IMPORTED_MODULE_5__["Testgame2Page"]]
        })
    ], Testgame2PageModule);
    return Testgame2PageModule;
}());



/***/ }),

/***/ "./src/app/testgame2/testgame2.page.html":
/*!***********************************************!*\
  !*** ./src/app/testgame2/testgame2.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>testgame2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <h1 (click)=\"start()\" id='time' style=\"position:absolute; padding: 150px; text-align:center\">05:00</h1>\n    <img src=\"assets/icon/blank.png\" alt=\"\">\n    <!-- <ion-button id='start' (click)='start()'>Start</ion-button> -->\n    <!-- <ion-button id='pause' style=\"display:none\" (click)='pause()'>Pause</ion-button>\n    <ion-button id='resume' style=\"display:none\" (click)='resume()'>Resume</ion-button> -->\n  </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/testgame2/testgame2.page.scss":
/*!***********************************************!*\
  !*** ./src/app/testgame2/testgame2.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RnYW1lMi90ZXN0Z2FtZTIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/testgame2/testgame2.page.ts":
/*!*********************************************!*\
  !*** ./src/app/testgame2/testgame2.page.ts ***!
  \*********************************************/
/*! exports provided: Testgame2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testgame2Page", function() { return Testgame2Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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


var Testgame2Page = /** @class */ (function () {
    function Testgame2Page(alertCtrl) {
        this.alertCtrl = alertCtrl;
        // Engine = Matter.Engine
        //         Render = Matter.Render
        //         Runner = Matter.Runner
        //         Composites = Matter.Composites
        //         Events = Matter.Events
        //         Constraint = Matter.Constraint
        //         MouseConstraint = Matter.MouseConstraint
        //         Mouse = Matter.Mouse
        //         World = Matter.World
        //         Bodies = Matter.Bodies
        //         engine = this.Engine.create()
        //         world = this.engine.world;
        this.minute = 4;
        this.second = 60;
        this.paused = false;
        this.started = false;
    }
    Testgame2Page.prototype.start = function () {
        var _this = this;
        var time = document.getElementById('time');
        // document.getElementById('start').style.display = 'none'
        // document.getElementById('pause').style.display = 'block'
        if (this.started == false) {
            this.started = true;
            time.onclick = function (async) { return _this.pause(); };
            var run_1 = setInterval(function () {
                if (_this.paused == false) {
                    _this.second--;
                    if (_this.second >= 10) {
                        time.innerHTML = "0" + _this.minute + ":" + _this.second;
                    }
                    else {
                        time.innerHTML = "0" + _this.minute + ":0" + _this.second;
                    }
                    if (_this.second == 0 && _this.minute > 0) {
                        _this.second = 60;
                        _this.minute--;
                    }
                    else if (_this.minute == 0 && _this.second == 0) {
                        _this.moneyAlert();
                        clearInterval(run_1);
                    }
                }
            }, 1000);
        }
    };
    Testgame2Page.prototype.pause = function () {
        var _this = this;
        this.paused = true;
        console.log('hi');
        var time = document.getElementById('time');
        time.onclick = function (async) { return _this.resume(); };
        // document.getElementById('pause').style.display = 'none'
        // document.getElementById('resume').style.display = 'block'
    };
    Testgame2Page.prototype.resume = function () {
        var _this = this;
        // document.getElementById('pause').style.display = 'block'
        // document.getElementById('resume').style.display = 'none'
        this.paused = false;
        console.log('hello');
        var time = document.getElementById('time');
        time.onclick = function (async) { return _this.pause(); };
    };
    Testgame2Page.prototype.moneyAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Time's up!"
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
    Testgame2Page.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mycanvas'),
        __metadata("design:type", Object)
    ], Testgame2Page.prototype, "canvasEl", void 0);
    Testgame2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testgame2',
            template: __webpack_require__(/*! ./testgame2.page.html */ "./src/app/testgame2/testgame2.page.html"),
            styles: [__webpack_require__(/*! ./testgame2.page.scss */ "./src/app/testgame2/testgame2.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], Testgame2Page);
    return Testgame2Page;
}());



/***/ })

}]);
//# sourceMappingURL=testgame2-testgame2-module.js.map