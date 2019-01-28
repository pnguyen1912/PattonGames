(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"text-align:center\">\n  <div style=\"background-color: red;color:white\"><b><h1>GamePacks</h1></b></div>\n  <img src=\"assets/blank.png\" height=\"50%\" alt=\"\">\n  <div id=\"main1\" style=\"display: block\">\n    <div>\n      <ion-button (click)=\"newlogin()\">Login</ion-button>\n    </div>\n    <div>\n      <ion-button (click)=\"newsignup()\"> Sign Up </ion-button>\n    </div>\n  </div>\n\n  <div id=\"login\" style=\"display: none\">\n    <div>\n      <ion-list>\n        <ion-item>\n      <ion-input [(ngModel)]=\"email\" type=\"email\" placeholder=\"Enter Email\" required></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Enter Password\" required></ion-input>\n      <!-- <input type=\"password\" placeholder=\"Confirm Password\" required> -->\n    </ion-item></ion-list></div>\n    <ion-button (click)=\"login()\">Login</ion-button>\n\n\n\n    <div>\n      <ion-button (click)=\"goBack1()\">Back</ion-button>\n    </div>\n\n  </div>\n\n\n\n\n\n\n  <div id=\"signup\" style=\"display:none\">\n\n    <ion-list>\n      <ion-item>\n        <ion-input required type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input required type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <label for=\"date\">Date of Birth</label>\n        <ion-input slot='end' required type=\"date\" placeholder=\"Date of Birth\" [(ngModel)]=\"DOB\"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div>\n      <ion-button (click)=\"goBack1()\">Back</ion-button>\n    </div>\n    <div>\n      <ion-button (click)=\"register()\">Register</ion-button>\n    </div>\n</div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('giftbox1.png') no-repeat center center; }\n\nion-input {\n  --background:red;\n  color: white; }\n\nion-button {\n  --background:red;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wbmd1eWVuL0lvbmljQXBwL3NwYWNlQXBwL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQWEsRUFDaEI7O0FBRUQ7RUFDSSxpQkFBYTtFQUNiLGFBQ0osRUFBQzs7QUFDRDtFQUNJLGlCQUFhO0VBQ2IsYUFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9naWZ0Ym94MS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciA7XG59XG5cbmlvbi1pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6cmVkO1xuICAgIGNvbG9yOndoaXRlXG59XG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDpyZWQ7XG4gICAgY29sb3I6IHdoaXRlXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cognito.service */ "./src/app/cognito.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../restapi.service */ "./src/app/restapi.service.ts");
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






var LoginPage = /** @class */ (function () {
    function LoginPage(api, router, cognitoService, alertCtrl, toastCtrl) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.cognitoService = cognitoService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        if (this.cognitoService.getAuthenticatedUser() != null) {
            this.api.getData();
            setTimeout(function () {
                _this.router.navigate(['/main']);
            }, 1000);
            console.log(this.cognitoService.getAuthenticatedUser());
            this.cognitoService.getAuthenticatedUser().getSession(function (err, session) {
                if (err) {
                    alert(err);
                    return;
                }
                console.log('session validity: ' + session.isValid());
            });
        }
    }
    ;
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.newlogin = function () {
        var main1 = document.getElementById('main1');
        var login = document.getElementById('login');
        var signup = document.getElementById('signup');
        main1.style.display = 'none';
        login.style.display = 'block';
        signup.style.display = 'none';
    };
    LoginPage.prototype.newsignup = function () {
        var main1 = document.getElementById('main1');
        var login = document.getElementById('login');
        var signup = document.getElementById('signup');
        main1.style.display = 'none';
        login.style.display = 'none';
        signup.style.display = 'block';
    };
    LoginPage.prototype.goBack1 = function () {
        var main1 = document.getElementById('main1');
        var login = document.getElementById('login');
        var signup = document.getElementById('signup');
        main1.style.display = 'block';
        login.style.display = 'none';
        signup.style.display = 'none';
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.cognitoService.authenticate(this.email, this.password).then(function (res) {
            console.log("User logged in");
            console.log(res);
            console.log(res['idToken']['jwtToken']);
            _this.api.getData();
            setTimeout(function () {
                _this.router.navigate(['/main']);
            }, 1000);
            _this.presentToast();
        }, function (err) {
            console.log("user not logged in!");
            console.log(err);
        });
    };
    LoginPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'You were Signed In',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        //  this.api.User.gender = this.gender
        //  this.api.User.DOB = this.DOB
        var _this = this;
        //  console.log(this.api.User)
        this.cognitoService.signUp(this.email, this.password).then(function (res) {
            _this.promptVerificationCode();
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.promptVerificationCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: "Enter Verfication Code",
                            inputs: [{
                                    name: "VerificationCode",
                                    placeholder: "Verification Code"
                                }],
                            buttons: [{
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (data) {
                                        console.log("Cancel clicked");
                                    }
                                },
                                {
                                    text: "Verify",
                                    handler: function (data) {
                                        _this.verifyUser(data.VerificationCode);
                                    }
                                }
                            ]
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
    LoginPage.prototype.verifyUser = function (VerificationCode) {
        var _this = this;
        this.cognitoService.confirmUser(VerificationCode, this.email).then(function (res) {
            console.log(res);
            _this.successAlert();
        }, function (err) {
            alert(err.message);
        });
    };
    LoginPage.prototype.successAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Success",
                            message: "You are now registered!",
                            buttons: ["Sweet!"]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.onDidDismiss().then(function () {
                            _this.router.navigate(['/main']);
                        });
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onChange = function (SelectedValue) {
        console.log("Selected", SelectedValue);
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alogin',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_restapi_service__WEBPACK_IMPORTED_MODULE_4__["RestapiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map