webpackJsonp([1,4],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_application_result__ = __webpack_require__(516);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsResultsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewsResultsComponent = (function (_super) {
    __extends(ViewsResultsComponent, _super);
    function ViewsResultsComponent() {
        _super.call(this);
    }
    ViewsResultsComponent.prototype.getActivityResults = function (id) {
        this.getActivity(id);
    };
    ViewsResultsComponent.prototype.ngOnInit = function () {
    };
    ViewsResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-views-results',
            template: __webpack_require__(690),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], ViewsResultsComponent);
    return ViewsResultsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_application_result__["a" /* BaseApplicationResult */]));
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/views-results.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApplication; });
var BaseApplication = (function () {
    function BaseApplication() {
        console.log('app base constructor');
    }
    BaseApplication.prototype.showName = function () {
        console.log('Outputting name from base class: ' + this.name);
    };
    BaseApplication.prototype.showVersion = function () {
        console.log('Outputting version from base class: ' + this.version);
    };
    BaseApplication.prototype.init = function () {
        this.showName();
        this.showVersion();
    };
    return BaseApplication;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/base-application.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(515);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppApplicationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppApplicationComponent = (function () {
    function AppApplicationComponent() {
    }
    AppApplicationComponent.prototype.showName = function () {
        console.log('Outputting name from base class: ' + this.name);
    };
    AppApplicationComponent.prototype.showVersion = function () {
        console.log('Outputting version from base class: ' + this.version);
    };
    AppApplicationComponent.prototype.ngOnInit = function () {
        console.log("hey hey");
    };
    AppApplicationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-app-application',
            template: __webpack_require__(684),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppApplicationComponent);
    return AppApplicationComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app-application.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_application__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDaypartsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppDaypartsComponent = (function (_super) {
    __extends(AppDaypartsComponent, _super);
    function AppDaypartsComponent() {
        _super.call(this);
        this.name = "Dayparts";
        this.version = "1.2.3.4.5";
    }
    AppDaypartsComponent.prototype.ngOnInit = function () {
        this.showName();
        this.showVersion();
    };
    AppDaypartsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-app-dayparts',
            template: __webpack_require__(685),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppDaypartsComponent);
    return AppDaypartsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_application__["a" /* BaseApplication */]));
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app-dayparts.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHomeComponent = (function () {
    function AppHomeComponent() {
    }
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    AppHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-app-home',
            template: __webpack_require__(686),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppHomeComponent);
    return AppHomeComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app-home.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppProfileComponent = (function () {
    function AppProfileComponent() {
    }
    AppProfileComponent.prototype.ngOnInit = function () {
    };
    AppProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-app-profile',
            template: __webpack_require__(687),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppProfileComponent);
    return AppProfileComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app-profile.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppUsersComponent = (function () {
    function AppUsersComponent() {
    }
    AppUsersComponent.prototype.ngOnInit = function () {
    };
    AppUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-app-users',
            template: __webpack_require__(688),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppUsersComponent);
    return AppUsersComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app-users.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_application__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_results_views_results_component__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppViewsComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppViewsComponent = (function (_super) {
    __extends(AppViewsComponent, _super);
    // @ViewChild allows you to call into the instance of the component specified in the entryComponents array above
    // http://stackoverflow.com/questions/35140674/calling-a-function-in-a-child-angular2-component
    function AppViewsComponent(route) {
        _super.call(this);
        this.route = route;
        this.name = "Views";
        this.version = "10.9.8.7.6";
        this.sampleActivities = ['11', '22', '33', '44', '55'];
    }
    AppViewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init(); // function in super BaseApplication
        this.sub = this.route.params.subscribe(function (params) {
            // this.activityId = +params['id']; // (+) converts string 'id' to a number
            _this.activityId = params['activityId']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
            if (_this.activityId) {
                _this.vrc.getActivityResults(_this.activityId);
            }
        });
    };
    AppViewsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__views_results_views_results_component__["a" /* ViewsResultsComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__views_results_views_results_component__["a" /* ViewsResultsComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__views_results_views_results_component__["a" /* ViewsResultsComponent */]) === 'function' && _a) || Object)
    ], AppViewsComponent.prototype, "vrc", void 0);
    AppViewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-app-views',
            template: __webpack_require__(689),
            styles: [__webpack_require__(679)],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__views_results_views_results_component__["a" /* ViewsResultsComponent */]] // other components to be used inside of this component (formerly was an attribute called "directives")
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], AppViewsComponent);
    return AppViewsComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_2__base_application__["a" /* BaseApplication */]));
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app-views.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(691),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_primary_nav_primary_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_secondary_nav_secondary_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_dayparts_app_dayparts_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_views_app_views_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_profile_app_profile_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_users_app_users_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_application_app_application_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_home_app_home_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_views_views_results_views_results_component__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_primary_nav_primary_component__["a" /* NavPrimaryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_secondary_nav_secondary_component__["a" /* NavSecondaryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_dayparts_app_dayparts_component__["a" /* AppDaypartsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_views_app_views_component__["a" /* AppViewsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_profile_app_profile_component__["a" /* AppProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_users_app_users_component__["a" /* AppUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__app_application_app_application_component__["a" /* AppApplicationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_home_app_home_component__["a" /* AppHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__app_views_views_results_views_results_component__["a" /* ViewsResultsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_13__app_home_app_home_component__["a" /* AppHomeComponent */]
                    },
                    {
                        path: 'app/views',
                        children: [
                            {
                                path: '',
                                component: __WEBPACK_IMPORTED_MODULE_9__app_views_app_views_component__["a" /* AppViewsComponent */]
                            },
                            {
                                path: ':activityId',
                                component: __WEBPACK_IMPORTED_MODULE_9__app_views_app_views_component__["a" /* AppViewsComponent */]
                            }
                        ],
                    },
                    {
                        path: 'app/dayparts',
                        component: __WEBPACK_IMPORTED_MODULE_8__app_dayparts_app_dayparts_component__["a" /* AppDaypartsComponent */]
                    },
                    {
                        path: 'profile',
                        component: __WEBPACK_IMPORTED_MODULE_10__app_profile_app_profile_component__["a" /* AppProfileComponent */]
                    },
                    {
                        path: 'users',
                        component: __WEBPACK_IMPORTED_MODULE_11__app_users_app_users_component__["a" /* AppUsersComponent */]
                    },
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    },
                    {
                        path: '**',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
// {
//   path: 'app/views',
//     component: AppViewsComponent
// },
// {
//   path: 'app/views/:activityId',
//     component: AppViewsComponent
// },
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/app.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApplicationResult; });
var BaseApplicationResult = (function () {
    function BaseApplicationResult() {
    }
    BaseApplicationResult.prototype.getActivity = function (id) {
        this.activityId = id;
        this.hasResults = true;
    };
    return BaseApplicationResult;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/base-application-result.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavPrimaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavPrimaryComponent = (function () {
    function NavPrimaryComponent() {
    }
    NavPrimaryComponent.prototype.ngOnInit = function () {
    };
    NavPrimaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-nav-primary',
            template: __webpack_require__(692),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavPrimaryComponent);
    return NavPrimaryComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/nav-primary.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavSecondaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavSecondaryComponent = (function () {
    function NavSecondaryComponent() {
    }
    NavSecondaryComponent.prototype.ngOnInit = function () {
    };
    NavSecondaryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'siq-nav-secondary',
            template: __webpack_require__(693),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavSecondaryComponent);
    return NavSecondaryComponent;
}());
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/nav-secondary.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/kevinkmp/git/kevinkmp.github.io/src/environment.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".main {\n  padding-top: 50px;\n}\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-application (base class) works!\n</p>\n<div>\n  name: {{ name }}<br/>\n  version: {{ version }}\n</div>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-dayparts works!\n</p>\n\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-home works!\n</p>\n\n<h2>SwiftIQ Sample Shell App</h2>\n\n<p>\n  I created this app after reading a bunch of articles and tutorials for <a href=\"https://angular.io/\" target=\"_blank\">\n  Angular2</a>. I wanted to see if it was actually as easy as some of the tutorials made it seem.\n  For the most part it was. There were a few things that took a bit of researching to figure out,\n  most of the time this was due to the articles and videos dealing with now outdated beta versions\n  of Angular2.\n</p>\n\n<p>\n  This sample app was created using the <a href=\"https://cli.angular.io/\" target=\"_blank\">angular-cli</a> tool inside of\n  <a href=\"https://www.jetbrains.com/webstorm/\" target=\"_blank\">WebStorm</a>. Boy does this ever help to speed things up!\n</p>\n\n<h3>Features</h3>\n<ol>\n  <li>\n    <b>Navigation Components</b> - I created two components for navigation, nav-primary and nav-secondary.\n  </li>\n  <li>\n    <b>Class Inheritance</b> - I created two <i>base classes</i>, BaseApplication and BaseApplicationResult. Some of the\n    components in this application extend these base classes.\n  </li>\n  <li>\n    <b>Nested Components</b> - The \"Views\" application page has a nested component which acts to show results.\n  </li>\n  <li>\n    <b>angular-cli</b> - This tool (which you can run from the terminal inside of WebStorm) makes creating components as\n    easy as typing \"ng generate component my-sample\". Still too long? \"ng g c my-sample\". This creates a folder\n    \"my-sample\", and inside of the folder it makes four files:<br/>\n    my-sample.component.css<br/>\n    my-sample.component.html<br/>\n    my-sample.component.spec.ts (automatically generated unit tests)<br/>\n    my-sample.component.ts (TypeScript file for the component)\n  </li>\n</ol>\n\n<h3>Resources</h3>\n<p>\n  I've been reading and watching a bunch of links, articles, tutorials and videos in the time leading up to making this\n  sample app. I'll link to some of the most helpful here:\n</p>\n\n<ul>\n  <li>\n    <a href=\"https://www.youtube.com/watch?v=DBjPIabiRNg\" target=\"_blank\">\n      Angular 2 Intro Tutorial</a>: A guy who looks like Seth Rogen explains Angular2. I found this quite useful.\n  </li>\n  <li>\n    <a href=\"https://angular-2-training-book.rangle.io/\" target=\"_blank\">\n      Rangle.io Angular 2 Training Book\n    </a>\n  </li>\n  <li>\n    <a href=\"https://github.com/angular/angular-cli#prerequisites\" target=\"_blank\">\n      Angular-CLI Prerequisites\n    </a>: Take note of this!\n  </li>\n  <li>\n    <a href=\"https://www.sitepoint.com/ultimate-angular-cli-reference/\" target=\"_blank\">\n      Angular-CLI Cheatsheet\n    </a>\n  </li>\n  <li>\n    <a href=\"https://github.com/valor-software/ng2-bootstrap/blob/development/docs/getting-started/ng-cli.md\" target=\"_blank\">\n    Use Bootstrap with Angular2</a>: Not much to this, but for reference\n  </li>\n  <li>\n    <a href=\"https://angular-2-training-book.rangle.io/handout/routing/routeparams.html\" target=\"_blank\">\n      Using Route Parameters\n    </a>\n  </li>\n  <li>\n    <a href=\"http://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/\" target=\"_blank\">\n    Useful article and video on Navigation and Routing\n    </a>\n  </li>\n  <li>\n    <a href=\"http://stackoverflow.com/questions/39034643/ng-serve-doesnt-generate-dist-folder-anymore-with-new-angular-cli-webpack-beta\" target=\"_blank\">\n    FYI: Angular-cli only generates 'dist' folder after ng build\n    </a>; 'ng serve' works only in-memory now\n  </li>\n\n</ul>\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-profile works!\n</p>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-users works!\n</p>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-views works!\n</p>\n<h4>Select an Activity</h4>\n<ul>\n  <li *ngFor=\"let a of sampleActivities\">\n    <a [routerLink]=\"['/app/views', a]\">\n      {{ a }}\n    </a>\n  </li>\n</ul>\n\n<siq-views-results></siq-views-results>\n\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hasResults\">\n  <p>\n    views-results works!\n  </p>\n\n  <p>Showing details for activity <span class=\"h4\">{{ activityId }}</span> here</p>\n</div>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n\n  <siq-nav-primary></siq-nav-primary>\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-3 col-md-2 sidebar\">\n        <siq-nav-secondary></siq-nav-secondary>\n      </div>\n\n      <div class=\"col-sm-9\">\n\n        <router-outlet>\n          <h1>\n            {{title}}\n          </h1>\n        </router-outlet>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <nav class=\"navbar navbar-fixed-top navbar-dark navbar-inverse\">\n    <div class=\"container\">\n      <a class=\"nav navbar-nav\" routerLink=\"/\">SwiftIQ</a>\n      <ul class=\"nav navbar-nav\"\n          routerLinkActive=\"active\"\n      >\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\">My Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/users\">Manage Users</a>\n        </li>\n        <li>\n          <a >API Docs</a>\n        </li>\n        <li>\n          <a >Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"col-sm-3 col-md-2 sidebar\">-->\n<div class=\"sidebar\">\n  <ul class=\"nav nav-sidebar\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/app/views\">Views</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/app/dayparts\">Dayparts</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[713]);
//# sourceMappingURL=main.bundle.map