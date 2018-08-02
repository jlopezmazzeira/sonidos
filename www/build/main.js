webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_animales__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage() {
        this.animales = [];
        this.audio = new Audio();
        this.reordenando = false;
        this.animales = __WEBPACK_IMPORTED_MODULE_1__data_data_animales__["a" /* ANIMALES */].slice(0); //Para clonar un objeto y sea distinto al verdadero
    }
    HomePage.prototype.reproducir = function (animal) {
        console.log(animal);
        this.pausar_audio(animal);
        if (animal.reproduciendo) {
            animal.reproduciendo = false;
            return;
        }
        this.audio.src = animal.audio;
        this.audio.load();
        this.audio.play();
        animal.reproduciendo = true;
        this.audioTiempo = setTimeout(function () { return animal.reproduciendo = false; }, animal.duracion * 1000);
    };
    HomePage.prototype.pausar_audio = function (animalSel) {
        clearTimeout(this.audioTiempo);
        this.audio.pause();
        this.audio.currentTime = 0;
        for (var _i = 0, _a = this.animales; _i < _a.length; _i++) {
            var animal = _a[_i];
            if (animal.nombre != animalSel.nombre) {
                animal.reproduciendo = false;
            }
        }
    };
    HomePage.prototype.borrar_animal = function (idx) {
        this.animales.splice(idx, 1);
    };
    HomePage.prototype.refrescar_animales = function (refresher) {
        var _this = this;
        console.log('Iniciando la operación');
        setTimeout(function () {
            console.log('Termino el refresh');
            _this.animales = __WEBPACK_IMPORTED_MODULE_1__data_data_animales__["a" /* ANIMALES */].slice(0);
            refresher.complete();
        }, 1500);
    };
    HomePage.prototype.reordenar_animales = function (indices) {
        console.log(indices);
        this.animales = Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* reorderArray */])(this.animales, indices);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/sonidos/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sonidos App\n    </ion-title>\n    <ion-buttons end>\n      	<button ion-button *ngIf="!ordenando" (click)="ordenando = true">\n      		Ordenando\n      	</button>\n      	<button ion-button *ngIf="ordenando" (click)="ordenando = false">\n      		Listo\n      	</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-refresher [enabled]="!ordenando" (ionRefresh)="refrescar_animales($event)">\n    	<ion-refresher-content></ion-refresher-content>\n  	</ion-refresher>\n\n	<ion-list [reorder]="ordenando" (ionItemReorder)="reordenar_animales($event)">\n		<ion-item-sliding *ngFor="let animal of animales; let i = index">\n		  	<ion-item (click)="reproducir(animal)">\n		    	<ion-avatar item-left>\n		      		<img [src]="animal.imagen">\n		    	</ion-avatar>\n		    	<h2>{{ animal.nombre}}</h2>\n		    	<ion-icon *ngIf="!animal.reproduciendo" name="play" item-right></ion-icon>\n		    	<ion-icon *ngIf="animal.reproduciendo" name="pause" item-right></ion-icon>\n		    	<p>Ugh. As if.</p>\n		  	</ion-item>\n		    <ion-item-options side="right">\n		    	<button ion-button color="danger" (click)="borrar_animal( i )">\n		        	<ion-icon name="trash"></ion-icon>\n		        	Eliminar\n		      	</button>\n		    </ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/var/www/html/sonidos/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/sonidos/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/sonidos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANIMALES; });
var ANIMALES = [
    {
        nombre: "Caballo",
        imagen: "assets/animales/caballo.png",
        audio: "assets/sonidos/caballo.mp3",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Cabra",
        imagen: "assets/animales/cabra.png",
        audio: "assets/sonidos/cabra.wav",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Cerdo",
        imagen: "assets/animales/cerdo.png",
        audio: "assets/sonidos/cerdo.wav",
        duracion: 2,
        reproduciendo: false
    },
    {
        nombre: "Gallo",
        imagen: "assets/animales/gallo.png",
        audio: "assets/sonidos/gallo.mp3",
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: "Mono",
        imagen: "assets/animales/mono.png",
        audio: "assets/sonidos/mono.mp3",
        duracion: 8,
        reproduciendo: false
    },
    {
        nombre: "Perro",
        imagen: "assets/animales/perro.png",
        audio: "assets/sonidos/perro.mp3",
        duracion: 5,
        reproduciendo: false
    },
    {
        nombre: "Serpiente",
        imagen: "assets/animales/serpiente.png",
        audio: "assets/sonidos/serpiente.mp3",
        duracion: 2,
        reproduciendo: false
    },
    {
        nombre: "Tigre",
        imagen: "assets/animales/tigre.png",
        audio: "assets/sonidos/tigre.mp3",
        duracion: 2,
        reproduciendo: false
    }
];
//# sourceMappingURL=data.animales.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map