webpackJsonp([0,6],{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__others_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__others_routes__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OthersModule = /** @class */ (function () {
    function OthersModule() {
    }
    OthersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__others_routes__["a" /* othersRoutes */])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__others_component__["a" /* OthersComponent */]
            ],
        })
    ], OthersModule);
    return OthersModule;
}());

//# sourceMappingURL=others.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OthersComponent = /** @class */ (function () {
    function OthersComponent() {
        this.bikeSearchDetails = {
            results: [
                {
                    key: "5be051ff33ac694839004af1",
                    brand: "Bajaj",
                    modelName: "Avenger Street 150",
                    weekDayPrice: 650,
                    weekEndPrice: 750,
                    address: "Kothrud",
                    quantity: 1,
                    rentCalculated: 4750,
                    thumbUrl: "./src/assets/img/bikes/Avenger Street 150.png"
                },
                {
                    key: "5be26bfb33ac694839004afa",
                    brand: "Honda",
                    modelName: "Activa 110cc",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Balewadi",
                    quantity: 3,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Activa 110cc.png"
                },
                {
                    key: "5be26dcc33ac694839004afd",
                    brand: "Honda",
                    modelName: "Activa 3G",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Balewadi",
                    quantity: 3,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Activa 3G.png"
                },
                {
                    key: "5be41e3f33ac694839004b10",
                    brand: "HERO",
                    modelName: "SPLENDOR PRO",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Kothrud",
                    quantity: 2,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/SPLENDOR PRO.png"
                },
                {
                    key: "5be57c6333ac694839004b20",
                    brand: "Honda",
                    modelName: "Activa 3G",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Kothrud",
                    quantity: 1,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Activa 3G.png"
                },
                {
                    key: "5be913cb33ac694839004b32",
                    brand: "Honda",
                    modelName: "Activa 3G",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 10,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Activa 3G.png"
                },
                {
                    key: "5be9177733ac694839004b37",
                    brand: "SUZUKI",
                    modelName: "GIXXER",
                    weekDayPrice: 500,
                    weekEndPrice: 600,
                    address: "Hinjewadi",
                    quantity: 1,
                    rentCalculated: 3700,
                    thumbUrl: "./src/assets/img/bikes/GIXXER.png"
                },
                {
                    key: "5bf0487580f0932bf2d6ea5a",
                    brand: "Bajaj",
                    modelName: "Pulsar 150 AS",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Pulsar 150 AS.png"
                },
                {
                    key: "5be9183f33ac694839004b3a",
                    brand: "Bajaj",
                    modelName: "Pulsar 220",
                    weekDayPrice: 700,
                    weekEndPrice: 800,
                    address: "Hinjewadi",
                    quantity: 6,
                    rentCalculated: 5100,
                    thumbUrl: "./src/assets/img/bikes/Pulsar 220.png"
                },
                {
                    key: "5be91cbc33ac694839004b3f",
                    brand: "SUZUKI",
                    modelName: "ACCESS 125",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 1,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/ACCESS 125.png"
                },
                {
                    key: "5be91d4533ac694839004b42",
                    brand: "Honda",
                    modelName: "Activa 110cc",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 12,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Activa 110cc.png"
                },
                {
                    key: "5be921b333ac694839004b4d",
                    brand: "Bajaj",
                    modelName: "Pulsar 180",
                    weekDayPrice: 600,
                    weekEndPrice: 700,
                    address: "Hinjewadi",
                    quantity: 1,
                    rentCalculated: 4400,
                    thumbUrl: "./src/assets/img/bikes/Pulsar 180.png"
                },
                {
                    key: "5be923e333ac694839004b50",
                    brand: "HERO",
                    modelName: "MAESTRO",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 3,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/MAESTRO.png"
                },
                {
                    key: "5be9262733ac694839004b53",
                    brand: "TVS",
                    modelName: "JUPITER",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 12,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/JUPITER.png"
                },
                {
                    key: "5be9287333ac694839004b5a",
                    brand: "HERO",
                    modelName: "DUET",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 6,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/DUET.png"
                },
                {
                    key: "5be92a7633ac694839004b61",
                    brand: "HERO",
                    modelName: "PLEASURE",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 2,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/PLEASURE.png"
                },
                {
                    key: "5be953ff33ac694839004b8a",
                    brand: "Bajaj",
                    modelName: "Avenger Cruise 220",
                    weekDayPrice: 700,
                    weekEndPrice: 800,
                    address: "Hinjewadi",
                    quantity: 2,
                    rentCalculated: 5100,
                    thumbUrl: "./src/assets/img/bikes/Avenger Cruise 220.png"
                },
                {
                    key: "5be9548b33ac694839004b8f",
                    brand: "Honda",
                    modelName: "Honda Activa-i",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Hinjewadi",
                    quantity: 1,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Honda Activa-i.png"
                },
                {
                    key: "5befe56480f0932bf2d6ea23",
                    brand: "Bajaj",
                    modelName: "Pulsar 150",
                    weekDayPrice: 500,
                    weekEndPrice: 600,
                    address: "Balewadi",
                    quantity: 1,
                    rentCalculated: 3700,
                    thumbUrl: "./src/assets/img/bikes/Pulsar 150.png"
                },
                {
                    key: "5befee2080f0932bf2d6ea2c",
                    brand: "Bajaj",
                    modelName: "Pulsar 220",
                    weekDayPrice: 700,
                    weekEndPrice: 800,
                    address: "Balewadi",
                    quantity: 2,
                    rentCalculated: 5100,
                    thumbUrl: "./src/assets/img/bikes/Pulsar 220.png"
                },
                {
                    key: "5befeefa80f0932bf2d6ea2f",
                    brand: "Bajaj",
                    modelName: "Avenger Street 150",
                    weekDayPrice: 600,
                    weekEndPrice: 700,
                    address: "Balewadi",
                    quantity: 2,
                    rentCalculated: 4400,
                    thumbUrl: "./src/assets/img/bikes/Avenger Street 150.png"
                },
                {
                    key: "5bf0321680f0932bf2d6ea42",
                    brand: "Bajaj",
                    modelName: "Avenger Cruise 220",
                    weekDayPrice: 700,
                    weekEndPrice: 800,
                    address: "Balewadi",
                    quantity: 2,
                    rentCalculated: 5100,
                    thumbUrl: "./src/assets/img/bikes/Avenger Cruise 220.png"
                },
                {
                    key: "5bf033ec80f0932bf2d6ea45",
                    brand: "Bajaj",
                    modelName: "Avenger Street 220",
                    weekDayPrice: 700,
                    weekEndPrice: 800,
                    address: "Balewadi",
                    quantity: 2,
                    rentCalculated: 5100,
                    thumbUrl: "./src/assets/img/bikes/Avenger Street 220.png"
                },
                {
                    key: "5bf0378580f0932bf2d6ea4c",
                    brand: "Bajaj",
                    modelName: "Discover 125cc",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Balewadi",
                    quantity: 2,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Discover 125cc.png"
                },
                {
                    key: "5bf0397180f0932bf2d6ea51",
                    brand: "TVS",
                    modelName: "JUPITER",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Balewadi",
                    quantity: 1,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/JUPITER.png"
                },
                {
                    key: "5c2628db30d36e5e178368c8",
                    brand: "HERO",
                    modelName: "GLAMOUR",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/GLAMOUR.png"
                },
                {
                    key: "5c2c6c374643865fdf6147af",
                    brand: "Honda",
                    modelName: "Activa 4G",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 3,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Activa 4G.png"
                },
                {
                    key: "5c2c7f124643865fdf6147b5",
                    brand: "Honda",
                    modelName: "Dio",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 3,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Dio.png"
                },
                {
                    key: "5c2c8f9a4643865fdf6147d2",
                    brand: "Bajaj",
                    modelName: "Avenger Street 220",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Avenger Street 220.png"
                },
                {
                    key: "5c2c90984643865fdf6147d9",
                    brand: "Bajaj",
                    modelName: "Discover 125cc",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Discover 125cc.png"
                },
                {
                    key: "5c2c92614643865fdf6147e4",
                    brand: "Honda",
                    modelName: "CB HORNET",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/CB HORNET.png"
                },
                {
                    key: "5c2c92ab4643865fdf6147e7",
                    brand: "Honda",
                    modelName: "NEO",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/NEO.png"
                },
                {
                    key: "5c2f397177109c6b09ba9819",
                    brand: "SUZUKI",
                    modelName: "ACCESS 125",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/ACCESS 125.png"
                },
                {
                    key: "5c332275acfc997b12558c50",
                    brand: "HERO",
                    modelName: "DUET",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Balewadi",
                    quantity: 1,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/DUET.png"
                },
                {
                    key: "5c332475acfc997b12558c55",
                    brand: "Honda",
                    modelName: "Honda Activa-i",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Honda Activa-i.png"
                },
                {
                    key: "5c33280bacfc997b12558c61",
                    brand: "Honda",
                    modelName: "Dio",
                    weekDayPrice: 350,
                    weekEndPrice: 450,
                    address: "Balewadi",
                    quantity: 1,
                    rentCalculated: 2650,
                    thumbUrl: "./src/assets/img/bikes/Dio.png"
                },
                {
                    key: "5c3498c9acfc997b12558c81",
                    brand: "Honda",
                    modelName: "Activa 125cc",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 2,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/Activa 125cc.png"
                },
                {
                    key: "5c4c6a91ae561a375099af46",
                    brand: "TVS",
                    modelName: "APACHE RTR 160",
                    weekDayPrice: 0,
                    weekEndPrice: 0,
                    address: "",
                    quantity: 1,
                    rentCalculated: 0,
                    thumbUrl: "./src/assets/img/bikes/APACHE RTR 160.png"
                },
                {
                    key: "5be91ed933ac694839004b48",
                    brand: "TVS",
                    modelName: "APACHE RTR 160",
                    weekDayPrice: 500,
                    weekEndPrice: 600,
                    address: "Hinjewadi",
                    quantity: 3,
                    rentCalculated: 3700,
                    thumbUrl: "./src/assets/img/bikes/APACHE RTR 160.png"
                }
            ],
            totalQuantity: 101,
            isRentPage: true,
            brands: [
                {
                    _id: "5a605e7e9f4a6b55325829ee",
                    brandName: "Honda",
                    __v: 0,
                    models: [
                        "Activa 125cc",
                        "Activa 4G",
                        "Activa 3G",
                        "Activa 110cc",
                        "Honda Activa-i",
                        "Shine",
                        "CB Shine",
                        "Dio",
                        "Unicorn",
                        "CBR 250",
                        "CB HORNET",
                        "NEO"
                    ]
                },
                {
                    _id: "5a670bd363954132dfc0d576",
                    brandName: "Bajaj",
                    __v: 2,
                    models: [
                        "CT100",
                        "Platina",
                        "Discover 110cc",
                        "Discover 125cc",
                        "V12",
                        "V15",
                        "Pulsar 135",
                        "Pulsar 150",
                        "Pulsar 150 AS",
                        "Pulsar 150 NS",
                        "Pulsar 160 RS",
                        "Pulsar 180",
                        "Pulsar 200",
                        "Pulsar 220",
                        "Avenger Street 150",
                        "Avenger Street 220",
                        "Avenger Cruise 220"
                    ]
                },
                {
                    _id: "5a677e3963954132dfc0d577",
                    brandName: "TVS",
                    __v: 0,
                    models: [
                        "JUPITER",
                        "APACHE RTR 160",
                        "SCOOTY PEPT PLUS",
                        "APACHE RTR 200",
                        "VICTOR",
                        "STAR CITY PLUS",
                        "APACHE RTR180",
                        "SCOOTY ZEST",
                        "WEGO",
                        "XL 100"
                    ]
                },
                {
                    _id: "5a677e7163954132dfc0d578",
                    brandName: "SUZUKI",
                    __v: 0,
                    models: [
                        "GIXXER SF",
                        "GIXXER",
                        "ACCESS 125",
                        "HAYABUSA",
                        "HAYATE",
                        "LETS",
                        "GSX R1000"
                    ]
                },
                {
                    _id: "5a677eb063954132dfc0d579",
                    brandName: "HERO",
                    __v: 0,
                    models: [
                        "GLAMOUR",
                        "HF DELUXE",
                        "MAESTRO",
                        "DUET",
                        "PASSION PRO",
                        "SPLENDOR PLUS",
                        "SUPER SPLENDOR",
                        "SPLENDOR PRO",
                        "PLEASURE",
                        "XTREME",
                        "SPLENDOR I SMART",
                        "HF DAWN",
                        "DELUXE ECO",
                        "PASSION XPRO",
                        "XTREME 200S"
                    ]
                },
                {
                    _id: "5a677ee763954132dfc0d57a",
                    brandName: "YAMAHA",
                    __v: 0,
                    models: [
                        "FZ V2",
                        "FZ25",
                        "FAZER25",
                        "R15 V2",
                        "FZ S",
                        "FASCINO",
                        "FAZER V2",
                        "SZ R",
                        "CYGNUS RAY ZR",
                        "ALPHA",
                        "SALUTO RX",
                        "RAY Z",
                        "RX 100"
                    ]
                },
                {
                    _id: "5a76f23bf2260c6578a70dc9",
                    brandName: "Royal Enfield",
                    __v: 0,
                    models: [
                        "Classic 350",
                        "Electra 350",
                        "Bullet 350",
                        "Thunderbird 350",
                        "Classic 500",
                        "Thunderbird 500",
                        "Bullet 500",
                        "Himalayan",
                        "Continental GT 650",
                        "Standard"
                    ]
                },
                {
                    _id: "5c0e37b676c3714e0a6657c2",
                    brandName: "Harley Davidson",
                    __v: 0,
                    models: ["Street 750"]
                }
            ],
            locality: [
                {
                    _id: "5a66ffdd63954132dfc0d56b",
                    name: "Hinjewadi",
                    latitude: 0,
                    longitude: 0,
                    _city: "5a66ffb063954132dfc0d568",
                    isActive: true,
                    __v: 0
                },
                {
                    _id: "5a66fff963954132dfc0d56d",
                    name: "Balewadi",
                    latitude: 0,
                    longitude: 0,
                    _city: "5a66ffb063954132dfc0d568",
                    isActive: true,
                    __v: 0
                },
                {
                    _id: "5a67000563954132dfc0d56e",
                    name: "Kothrud",
                    latitude: 0,
                    longitude: 0,
                    _city: "5a66ffb063954132dfc0d568",
                    isActive: true,
                    __v: 0
                }
            ]
        };
    }
    OthersComponent.prototype.ngOnInit = function () { };
    OthersComponent.prototype.selectModel = function (selectedBrand) {
        console.log(selectedBrand);
        var resultModel = this.bikeSearchDetails.brands.filter(function (model) { return model.brandName == selectedBrand; });
        console.log(resultModel);
    };
    OthersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Component */])({
            selector: "app-others",
            template: __webpack_require__(242)
        }),
        __metadata("design:paramtypes", [])
    ], OthersComponent);
    return OthersComponent;
}());

//# sourceMappingURL=others.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__others_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return othersRoutes; });

var othersRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_0__others_component__["a" /* OthersComponent */]
    }
];
//# sourceMappingURL=others.routes.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row bikeFliterOptions\">\r\n    <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12\">\r\n      <div class=\"filter-item\">\r\n        <div class=\"filter-brand\">\r\n          <p>Select Brand</p>\r\n          <select\r\n            class=\"form-control select2-hidden-accessible\"\r\n            [(ngModel)]=\"selectedBrand\"\r\n            (ngModelChange)=\"selectModel(selectedBrand)\"\r\n          >\r\n            <option\r\n              *ngFor=\"let brands of bikeSearchDetails.brands\"\r\n              [value]=\"brands.brandName\"\r\n              >{{ brands.brandName }}</option\r\n            >\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12\">\r\n      <div class=\"filter-item\">\r\n        <div class=\"filter-brand\">\r\n          <p>Select Modal</p>\r\n          <select class=\"form-control select2-hidden-accessible\"\r\n            ><option *ngFor=\"let model of bikeSearchDetails.brands.models\">{{\r\n              model\r\n            }}</option></select\r\n          >\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12\">\r\n      <div class=\"filter-item\">\r\n        <div class=\"filter-brand\">\r\n          <p>Select Location</p>\r\n          <select class=\"form-control select2-hidden-accessible\">\r\n            <option *ngFor=\"let location of bikeSearchDetails.locality\">{{\r\n              location.name\r\n            }}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 col-lg-4 col-sm-12 col-xs-12\">\r\n      <div class=\"filter-item\">\r\n        <div class=\"filter-brand\">\r\n          <p>&nbsp;</p>\r\n          <button\r\n            class=\"btn-rent-list-search btn btn-danger\"\r\n            id=\"btn-rent-list-search\"\r\n            type=\"submit\"\r\n          >\r\n            <i class=\"fa fa-filter\"></i> Apply Filter</button\r\n          ><button\r\n            class=\"btn btn-danger\"\r\n            id=\"btn-rent-clear-search\"\r\n            type=\"reset\"\r\n            style=\"margin:auto 1em;\"\r\n          >\r\n            <i class=\"fa fa-close\"></i> Clear Filter\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"searchBlock\">\r\n      <p class=\"search-count\">\r\n        <i class=\"fa fa-search\"></i> Showing\r\n        <strong>{{ bikeSearchDetails.totalQuantity }} bike(s)</strong>&nbsp;for your\r\n        selected criteria\r\n      </p>\r\n      <div class=\"row\">\r\n        <div\r\n          class=\"col-md-4 col-sm-12 col-xs-12\"\r\n          *ngFor=\"let bike of bikeSearchDetails.results\"\r\n        >\r\n          <div class=\"bike-item\">\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 noSideSpace\">\r\n                  <p class=\"searchBikeName\">{{ bike.brand }} {{ bike.modelName }}</p>\r\n                </div>\r\n                <!-- <div class=\"col-md-4 col-lg-4 col-sm-4 col-xs-4 noSideSpace\">\r\n                <img class=\"boonggAssuredBadge\" src=\"/images/boonggAssured.png\" />\r\n              </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12 noSideSpace\">\r\n                  <div class=\"bikeImagePlace\">\r\n                    <img class=\"imageBikeSearch\" [src]=\"bike.thumbUrl\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"actualPrice\">\r\n                    <i class=\"fa fa-rupee\"> </i><span>{{ bike.weekDayPrice }} / Day</span>\r\n                  </div>\r\n                  <div class=\"oldPrice\">\r\n                    <p class=\"locationSearchbike\" [hidden]=\"bike.address == ''\">\r\n                      Available At - {{ bike.address }}\r\n                    </p>\r\n                    <p class=\"locationSearchbike\" [hidden]=\"bike.address != ''\">\r\n                      This bike is currently out of stock.\r\n                    </p>\r\n                    <i class=\"fa fa-rupee\"> </i><span>{{ bike.weekEndPrice }} / Day</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row bookNowBtnSearch\">\r\n                <button class=\"btn btn-danger add-to-cart\" [hidden]=\"bike.address == ''\">\r\n                  Book Now\r\n                </button>\r\n                <button\r\n                  class=\"btn btn-danger disabled add-to-cart\"\r\n                  [hidden]=\"bike.address != ''\"\r\n                >\r\n                  All Booked\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map