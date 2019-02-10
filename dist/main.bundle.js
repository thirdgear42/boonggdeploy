webpackJsonp([2,6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loginInfo = {
            first_name: 'Sudhir',
            last_name: 'Devkar',
            avatar: 'ay.jpeg',
            title: 'Senior Developer'
        };
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(178),
            styles: [__webpack_require__(170)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctHeight */
/* unused harmony export detectBody */
/* harmony export (immutable) */ __webpack_exports__["a"] = smoothlyMenu;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
*/
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeigh = jQuery('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();
    if (navbarHeigh > wrapperHeigh) {
        pageWrapper.css("min-height", navbarHeigh + "px");
    }
    if (navbarHeigh < wrapperHeigh) {
        if (navbarHeigh < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeigh + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeigh > wrapperHeigh) {
            pageWrapper.css("min-height", navbarHeigh + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
//# sourceMappingURL=app.helpers.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_topnavbar_topnavbar_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_rent_footer_rent_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_copyright_footer_copyright_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_top_header_top_header_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__homepage_hero_homepage_hero_component__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* Navigation */],
                __WEBPACK_IMPORTED_MODULE_5__components_topnavbar_topnavbar_component__["a" /* Topnavbar */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_footer_rent_footer_rent_component__["a" /* footerRent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_copyright_footer_copyright_component__["a" /* footerCopyright */],
                __WEBPACK_IMPORTED_MODULE_9__components_top_header_top_header_component__["a" /* topHeader */],
                __WEBPACK_IMPORTED_MODULE_13__homepage_hero_homepage_hero_component__["a" /* HomepageHeroComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* appRoutes */])],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });

var appRoutes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__["a" /* HomeComponent */]
    },
    // {
    //   path: "terms",
    //   component: terms
    // },
    {
        path: "search",
        loadChildren: "./pages/others/others.module#OthersModule"
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_login__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return footerCopyright; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var footerCopyright = /** @class */ (function () {
    function footerCopyright(router) {
        this.router = router;
    }
    footerCopyright.prototype.ngOnInit = function () { };
    footerCopyright.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    var _a, _b;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */]) === "function" ? _a : Object)
    ], footerCopyright.prototype, "loginInfo", void 0);
    footerCopyright = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: "footerCopyright",
            template: __webpack_require__(179)
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" ? _b : Object])
    ], footerCopyright);
    return footerCopyright;
}());

//# sourceMappingURL=footer-copyright.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_login__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return footerRent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var footerRent = /** @class */ (function () {
    function footerRent(router) {
        this.router = router;
    }
    footerRent.prototype.ngOnInit = function () { };
    footerRent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    var _a, _b;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */]) === "function" ? _a : Object)
    ], footerRent.prototype, "loginInfo", void 0);
    footerRent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: 'footerRent',
            template: __webpack_require__(180)
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" ? _b : Object])
    ], footerRent);
    return footerRent;
}());

//# sourceMappingURL=footer-rent.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_login__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigation; });
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
 * Created by andrew.yang on 2/6/2017.
 */



var Navigation = /** @class */ (function () {
    function Navigation(router) {
        this.router = router;
    }
    Navigation.prototype.ngOnInit = function () { };
    Navigation.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    var _a, _b;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_login__["a" /* Login */]) === "function" ? _a : Object)
    ], Navigation.prototype, "loginInfo", void 0);
    Navigation = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: 'navigation',
            template: __webpack_require__(181)
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" ? _b : Object])
    ], Navigation);
    return Navigation;
}());

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var topHeader = /** @class */ (function () {
    function topHeader() {
    }
    topHeader.prototype.ngOnInit = function () { };
    topHeader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: "topHeader",
            template: __webpack_require__(182)
        })
    ], topHeader);
    return topHeader;
}());

//# sourceMappingURL=top-header.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topnavbar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Topnavbar = /** @class */ (function () {
    function Topnavbar() {
    }
    Topnavbar.prototype.ngOnInit = function () {
    };
    Topnavbar.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* smoothlyMenu */])();
    };
    Topnavbar.prototype.logout = function () {
        localStorage.clear();
        // location.href='http://to_login_page';
    };
    Topnavbar = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: 'topnavbar',
            template: __webpack_require__(183)
        })
    ], Topnavbar);
    return Topnavbar;
}());

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageHeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomepageHeroComponent = /** @class */ (function () {
    function HomepageHeroComponent() {
    }
    HomepageHeroComponent.prototype.ngOnInit = function () { };
    HomepageHeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: "HomepageHeroComponent",
            template: __webpack_require__(184)
        })
    ], HomepageHeroComponent);
    return HomepageHeroComponent;
}());

//# sourceMappingURL=homepage-hero.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<topHeader></topHeader>\r\n<topnavbar></topnavbar>\r\n<router-outlet></router-outlet>\r\n<!-- \r\n<div id=\"wrapper\">\r\n  <navigation [loginInfo]=\"loginInfo\" *ngIf=\"loginInfo\"></navigation>\r\n  <div id=\"page-wrapper\" class=\"gray-bg\">\r\n  </div>\r\n</div> -->\r\n<footerRent></footerRent>\r\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<section id=\"copyrightContent\">\r\n  <div class=\"container\">\r\n    <div class=\"row partnerWithUsRow\">\r\n      <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6 noSideSpace\">\r\n        <p>Rental Agreement | Tarriff | Refund and Cancellation | Sitemap</p>\r\n        <div class=\"social-icons\">\r\n          <a\r\n            class=\"btn btn-circle facebook-icon\"\r\n            href=\"https://www.facebook.com/boongg.in\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-facebook facebook\"></i></a\r\n          ><a\r\n            class=\"btn btn-circle gplus-icon\"\r\n            href=\"https://plus.google.com/u/1/106452075538059773907\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-google-plus gplus\"></i></a\r\n          ><a\r\n            class=\"btn btn-circle twitter-icon\"\r\n            href=\"https://twitter.com/boongg_\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-twitter twitter\"></i></a\r\n          ><a\r\n            class=\"btn btn-circle instagram-icon\"\r\n            href=\"https://instagram.com/boongg\"\r\n            target=\"_blank\"\r\n            ><i class=\"fa fa-instagram instagram\"></i\r\n          ></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-6 col-xs-6 col-lg-6 actionBtnPartner\">\r\n        <p>© 2018 - 2019 Onepoint Bike Services Pvt Ltd. All Rights Reserved.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n  <div>\r\n    <section id=\"footerSeoContent\">\r\n      <div class=\"container\">\r\n        <div class=\"row boonggInfoFooter\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12\">\r\n            <p>\r\n              Boongg is aggregator service in the business of bike rentals. We at Boongg\r\n              aim to be a one stop shop for rent-a-bike services in pune. Bid adieu to\r\n              expensive maintenance and fuel cost. With Boongg you can hire bikes for self\r\n              drive by the hour, day or week and have them delivered right at your\r\n              doorstep. At Boongg we offer not only rent but buy, sell and servicing as\r\n              well.\r\n            </p>\r\n            <br />\r\n          </div>\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 col-lg-12\">\r\n            <div class=\"row rightFooterLinks\">\r\n              <div class=\"col-md-3 col-lg-3 col-xs-6 col-sm-6\">\r\n                <ul>\r\n                  <li>Bike for rent in Swargate</li>\r\n                  <li>Bike for rent in Hinjewadi</li>\r\n                  <li>Bike for rent in Kothrud</li>\r\n                  <li>Bike for rent in Sinhagad Road</li>\r\n                  <li>Bike for rent in Shanivar wada</li>\r\n                  <li>Bike for rent in Sarasbag</li>\r\n                  <li>Bike for rent in Bhimashankar</li>\r\n                  <li>Bike for rent in Katraj</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-3 col-lg-3 col-xs-6 col-sm-6\">\r\n                <ul>\r\n                  <li>Bike for rent in Chandani Chawk</li>\r\n                  <li>Bike for rent in Shivaji Nagar</li>\r\n                  <li>Bike for rent in Pimpri-chinchwad</li>\r\n                  <li>Bike for rent in Koregaon Park</li>\r\n                  <li>Bike for rent in Viman Nagar</li>\r\n                  <li>Bike for rent in Baner</li>\r\n                  <li>Bike for rent in Talegaon</li>\r\n                  <li>Bike for rent in Jangli Maharaj Road</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-3 col-lg-3 col-xs-6 col-sm-6\">\r\n                <ul>\r\n                  <li>Honda Activa for rent</li>\r\n                  <li>Yamaha FZ for rent</li>\r\n                  <li>Pulsar 150 for rent</li>\r\n                  <li>Honda Dio for rent</li>\r\n                  <li>Royal Enfield 350 for rent</li>\r\n                  <li>Avenger 220 Cruise for rent</li>\r\n                  <li>Avenger 220 Street for rent</li>\r\n                  <li>Dominar 400 ABS for rent</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-3 col-lg-3 col-xs-6 col-sm-6\">\r\n                <ul>\r\n                  <li>Honda Activa for rent</li>\r\n                  <li>Yamaha FZ for rent</li>\r\n                  <li>Pulsar 150 for rent</li>\r\n                  <li>Honda Dio for rent</li>\r\n                  <li>Royal Enfield 350 for rent</li>\r\n                  <li>Avenger 220 Cruise for rent</li>\r\n                  <li>Avenger 220 Street for rent</li>\r\n                  <li>Dominar 400 ABS for rent</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <footerCopyright></footerCopyright>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\r\n    <div class=\"sidebar-collapse\">\r\n        <ul class=\"nav metismenu\" id=\"side-menu\">\r\n            <li class=\"nav-header\">\r\n                <div class=\"dropdown profile-element\">\r\n                    <span>\r\n                        <img alt=\"image\" class=\"img-circle\" width=\"80px\"\r\n                             src=\"./assets/img/avatar/{{loginInfo.avatar}}\" />\r\n                    </span>\r\n                    <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">\r\n                      <span class=\"clear\">\r\n                          <span class=\"block m-t-xs\">\r\n                          <strong class=\"font-bold\">{{loginInfo.first_name}} {{loginInfo.last_name}}</strong>\r\n                      </span>\r\n                          <span class=\"text-muted text-xs block\">{{loginInfo.title}}</span>\r\n                      </span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"logo-element\">\r\n                    SWWCC\r\n                </div>\r\n            </li>\r\n            <li [ngClass]=\"{active: activeRoute('home')}\">\r\n                <a [routerLink]=\"['./home']\"><i class=\"fa fa-dashboard\"></i> <span class=\"nav-label\">Dashboards</span></a>\r\n            </li>\r\n            <li [ngClass]=\"{active: activeRoute('others')}\">\r\n                <a [routerLink]=\"['./others']\"><i class=\"fa fa-desktop\"></i> <span class=\"nav-label\">Others</span></a>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid topNav\">\r\n  <div class=\"row\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-dark topHeaderStripe\">\r\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              <li class=\"nav-item dropdown\">\r\n                <a\r\n                  class=\"nav-link dropdown-toggle\"\r\n                  href=\"#\"\r\n                  id=\"navbarDropdown\"\r\n                  role=\"button\"\r\n                  data-toggle=\"dropdown\"\r\n                  aria-haspopup=\"true\"\r\n                  aria-expanded=\"false\"\r\n                >\r\n                  Choose Your City\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Pune</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Mumbai</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"#\">Coming Soon Bangalore</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"border-bottom\">\r\n          <nav\r\n            class=\"navbar navbar-static-top white-bg\"\r\n            role=\"navigation\"\r\n            style=\"margin-bottom: 0\"\r\n          >\r\n            <div class=\"navbar-header\">\r\n              <a class=\"\">\r\n                <img\r\n                  class=\"logoImage\"\r\n                  routerLink=\"/home\"\r\n                  src=\"../src/assets/img/logo.png\"\r\n                />\r\n              </a>\r\n            </div>\r\n\r\n            <!-- <ul class=\"nav navbar-top-links navbar-right\">\r\n              <li> -->\r\n            <div class=\"dropdown\">\r\n              <a\r\n                class=\"dropdown-toggle\"\r\n                id=\"dropdownMenuButton\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                aria-expanded=\"false\"\r\n              >\r\n                <img class=\"rightSidebarIcon\" src=\"../src/assets/img/icons/profile.svg\" />\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n                <a class=\"dropdown-item\" href=\"#\">Login</a>\r\n                <!-- <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n              </div>\r\n            </div>\r\n            <!-- </li>\r\n             \r\n            </ul> -->\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid homepageHeroImage\">\n  <div class=\"row\">\n    <div class=\"container\">\n      <div class=\"row searchBlockHome\">\n        <h4 class=\"homepageHeading\">START YOUR DREAM ADVENTURE</h4>\n        <p>OWN NEW EXPERIENCES NOT BIKES.</p>\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n          <div class=\"container\">\n            <div class=\"row heroboxRow\">\n              <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a\n                    class=\"nav-link active\"\n                    id=\"home-tab\"\n                    data-toggle=\"tab\"\n                    href=\"#home\"\n                    role=\"tab\"\n                    aria-controls=\"home\"\n                    aria-selected=\"true\"\n                    >BIKE RENTAL</a\n                  >\n                </li>\n                <li class=\"nav-item\">\n                  <a\n                    class=\"nav-link\"\n                    id=\"profile-tab\"\n                    data-toggle=\"tab\"\n                    href=\"#profile\"\n                    role=\"tab\"\n                    aria-controls=\"profile\"\n                    aria-selected=\"false\"\n                    >USED BIKE</a\n                  >\n                </li>\n                <li class=\"nav-item\">\n                  <a\n                    class=\"nav-link\"\n                    id=\"contact-tab\"\n                    data-toggle=\"tab\"\n                    href=\"#contact\"\n                    role=\"tab\"\n                    aria-controls=\"contact\"\n                    aria-selected=\"false\"\n                    >BIKE SERVICE</a\n                  >\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"container\">\n            <div class=\"row heroboxRow\">\n              <div class=\"tab-content homeHeroBox\" id=\"myTabContent\">\n                <div\n                  class=\"tab-pane fade show active\"\n                  id=\"home\"\n                  role=\"tabpanel\"\n                  aria-labelledby=\"home-tab\"\n                >\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <p class=\"SearchTitle\">\n                        Fully serviced and verified bikes on rent.\n                      </p>\n                      <div class=\"col-sm-6\">\n                        <span class=\"searchInputHeading\">Start Date</span>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          type=\"date\"\n                          [(ngModel)]=\"datetimepicker4\"\n                          value=\"2019-02-10\"\n                        />\n                        <!-- <div class=\"input-group date\" (click)=\"datetimepicker();\">\n                          <input type=\"text\" class=\"form-control\" />\n                          <span class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\n                          </span>\n                        </div> -->\n\n                        <!-- <input\n                          [owlDateTime]=\"dt1\"\n                          [owlDateTimeTrigger]=\"dt1\"\n                          placeholder=\"Date Time\"\n                        />\n                        <owl-date-time #dt1></owl-date-time> -->\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <span class=\"searchInputHeading\">End Date</span>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          type=\"date\"\n                          [(ngModel)]=\"datetimepicker5\"\n                          value=\"2019-02-11\"\n                        />\n                      </div>\n                    </div>\n                    <div class=\"row searchbtn\">\n                      <button type=\"button\" class=\"btn btn-danger\" routerLink=\"/search\">\n                        Rent Bike at Lowest Price\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div\n                  class=\"tab-pane fade\"\n                  id=\"profile\"\n                  role=\"tabpanel\"\n                  aria-labelledby=\"profile-tab\"\n                >\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <p class=\"SearchTitle\">\n                        Instantly search and reserve cerfied used bikes.\n                      </p>\n                      <div class=\"col-sm-6\">\n                        <span class=\"searchInputHeading\">Brand</span>\n                        <select name=\"brand\" class=\"form-control\">\n                          <option value=\"honda\">HONDA</option>\n                          <option value=\"bajaj\">BAJAJ</option>\n                          <option value=\"suzuki\">SUZUKI</option>\n                          <option value=\"tvs\">TVS</option>\n                          <option value=\"hero\">HERO</option>\n                          <option value=\"yamaha\">YAMAHA</option>\n                          <option value=\"re\">Rotal Enfield</option>\n                          <option value=\"ktm\">KTM</option>\n                        </select>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <span class=\"searchInputHeading\">Modal</span>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          [(ngModel)]=\"datetimepicker4\"\n                        />\n                      </div>\n                    </div>\n                    <div class=\"row searchbtn\">\n                      <button type=\"button\" class=\"btn btn-danger\">\n                        SEARCH YOUR DREAM BIKE\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div\n                  class=\"tab-pane fade\"\n                  id=\"contact\"\n                  role=\"tabpanel\"\n                  aria-labelledby=\"contact-tab\"\n                >\n                  <div class=\"container\">\n                    <div class=\"row\">\n                      <p class=\"SearchTitle\">\n                        Bike servicing with Pick up and Drop.\n                      </p>\n                      <div class=\"col-sm-6\">\n                        <span class=\"searchInputHeading\">Service Type</span>\n                        <select name=\"service_type\" class=\"form-control\">\n                          <option value=\"full_service\">Full Service</option>\n                          <option value=\"breakdown_assistance\"\n                            >Breakdown Assistance</option\n                          >\n                          <option value=\"general_service\">General Service</option>\n                          <option value=\"service_mentanance\">Service & Mentanance</option>\n                          <option value=\"insured_accident\">Insured Accident</option>\n                          <option value=\"uninsured_accident\">Un-insured Accident</option>\n                        </select>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <span class=\"searchInputHeading\">Location</span>\n                        <select name=\"location\" class=\"form-control\">\n                          <option value=\"balewadi\">Balewadi</option>\n                          <option value=\"hinjewadi\">Hinjewadi</option>\n                          <option value=\"kothrud\">Kothrud</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row searchbtn\">\n                      <button type=\"button\" class=\"btn btn-danger\">\n                        BOOK AN APPOINTMENT\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<HomepageHeroComponent></HomepageHeroComponent>\r\n<div class=\"wrapper wrapper-content pageHeight\">\r\n  <section id=\"whychooseus\">\r\n    <div class=\"container contentChooseus\">\r\n      <div class=\"row\">\r\n        <h3>Why Choose us?</h3>\r\n        <p class=\"sectionSubHeading\">\r\n          We simplified bike rentals, so you can focus on what's important to you.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row whyChooseUsBlock\">\r\n        <div class=\"col-md-4 com-lg-4 col-sm-4 com-xs-4\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/helmet.png\" /></div>\r\n          <h4 class=\"feature-title\">Complementary Helmet</h4>\r\n          <p class=\"feature-sub-title\">\r\n            Your safety is our priority. We provide complementary helmet with every ride.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4 com-lg-4 col-sm-4 com-xs-4\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/zero.png\" /></div>\r\n          <h4 class=\"feature-title\">Zero Deposit</h4>\r\n          <p class=\"feature-sub-title\">\r\n            At Boongg you pay only for what you use. We don't take any deposite.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4 com-lg-4 col-sm-4 com-xs-4\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/offer.png\" /></div>\r\n          <h4 class=\"feature-title\">Lowest Price Gurenty</h4>\r\n          <p class=\"feature-sub-title\">\r\n            You can count on us for the best bike rental prices in the city!\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"howWeWork\">\r\n    <div class=\"container contentHowitWork\">\r\n      <div class=\"row\">\r\n        <h3>How it works?</h3>\r\n        <p class=\"sectionSubHeading\">\r\n          We simplified bike rentals, so you can focus on what's important to you.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row howitWorkBlock\">\r\n        <div class=\"col-md-3 com-lg-3 col-sm-3 com-xs-3\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/hiw1.svg\" /></div>\r\n          <p>Set the date of your ride and then search for the bike that you want.</p>\r\n        </div>\r\n        <div class=\"col-md-3 com-lg-3 col-sm-3 com-xs-3\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/hiw2.svg\" /></div>\r\n          <p>\r\n            Choose out of various bikes that best suits the trip you’re about to take.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-3 com-lg-3 col-sm-3 com-xs-3\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/hiw3.svg\" /></div>\r\n          <p>Get suited up and head to the pick-up location to get your ride.</p>\r\n        </div>\r\n        <div class=\"col-md-3 com-lg-3 col-sm-3 com-xs-3\">\r\n          <div class=\"chooseImage\"><img src=\"./src/assets/img/hiw4.svg\" /></div>\r\n          <p>Get ready to roll and have a nice time tripping!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"queryBlock\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-lg-3 hidden-sm hidden-xs\">\r\n          <img src=\"./src/assets/img/contact.png\" />\r\n        </div>\r\n        <div class=\"col-md-9 col-lg-9 col-sm-12 col-xs-12 infoBlock\">\r\n          <h3>Any Query Any Question</h3>\r\n          <p class=\"sectionSubHeading\">\r\n            If you have any doubts, please visit our <a href=\"/faq\">FAQ Section.</a>\r\n          </p>\r\n          <p class=\"sectionSubHeading\">\r\n            Have an issue or want to know about how things work? Just ring us up! We would\r\n            love to hear you out!\r\n          </p>\r\n          <h5 style=\"font-size: 3em;\">+91-7776-011-333</h5>\r\n          <p class=\"detailsContact\">\r\n            Whatsapp , Call, Sms (All Days 09:00AM to 09:00PM IST).\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/**
 * Created by andrew.yang on 5/18/2017.
 */
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: "home",
            template: __webpack_require__(185)
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/others/others.module": [
		239,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 91;


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.bundle.js.map