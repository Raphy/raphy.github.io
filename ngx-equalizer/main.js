(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-equalizer/fesm5/ngx-equalizer.js":
/*!***************************************************!*\
  !*** ./dist/ngx-equalizer/fesm5/ngx-equalizer.js ***!
  \***************************************************/
/*! exports provided: EqualizerService, EqualizeDirective, EqualizerDirective, NgxEqualizerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualizerService", function() { return EqualizerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualizeDirective", function() { return EqualizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualizerDirective", function() { return EqualizerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxEqualizerModule", function() { return NgxEqualizerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualizerService = /** @class */ (function () {
    function EqualizerService() {
    }
    /**
     * Equalize the height of the specified elementRefs
     */
    /**
     * Equalize the height of the specified elementRefs
     * @param {?} elementRefs
     * @return {?}
     */
    EqualizerService.prototype.equalizeElements = /**
     * Equalize the height of the specified elementRefs
     * @param {?} elementRefs
     * @return {?}
     */
    function (elementRefs) {
        // Reset the height styles
        elementRefs.forEach((/**
         * @param {?} elementRef
         * @return {?}
         */
        function (elementRef) { return elementRef.nativeElement.style.height = null; }));
        // Retrieve the max height
        /** @type {?} */
        var maxHeight = elementRefs
            .map((/**
         * @param {?} elementRef
         * @return {?}
         */
        function (elementRef) { return elementRef.nativeElement.getBoundingClientRect().height; }))
            .reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            return curr > prev ? curr : prev;
        }), 0);
        // Set the max height to all elements
        elementRefs.forEach((/**
         * @param {?} elementRef
         * @return {?}
         */
        function (elementRef) { return elementRef.nativeElement.style.height = maxHeight + "px"; }));
    };
    EqualizerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return EqualizerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualizeDirective = /** @class */ (function () {
    function EqualizeDirective() {
    }
    EqualizeDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[equalize]',
                },] }
    ];
    return EqualizeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualizerDirective = /** @class */ (function () {
    function EqualizerDirective(equalizerService) {
        this.equalizerService = equalizerService;
    }
    /**
     * @return {?}
     */
    EqualizerDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.equalize();
    };
    /**
     * @private
     * @return {?}
     */
    EqualizerDirective.prototype.onWindowResize = /**
     * @private
     * @return {?}
     */
    function () {
        this.children.map((/**
         * @param {?} child
         * @return {?}
         */
        function (child) { return console.log(((/** @type {?} */ (child.nativeElement))).innerHTML); }));
        this.equalize();
    };
    /**
     * @return {?}
     */
    EqualizerDirective.prototype.equalize = /**
     * @return {?}
     */
    function () {
        if (!this.children) {
            return;
        }
        this.equalizerService.equalizeElements(this.children.toArray());
    };
    EqualizerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[equalizer]',
                },] }
    ];
    /** @nocollapse */
    EqualizerDirective.ctorParameters = function () { return [
        { type: EqualizerService }
    ]; };
    EqualizerDirective.propDecorators = {
        children: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [EqualizeDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
        onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return EqualizerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxEqualizerModule = /** @class */ (function () {
    function NgxEqualizerModule() {
    }
    NgxEqualizerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        EqualizerDirective,
                        EqualizeDirective
                    ],
                    imports: [],
                    exports: [
                        EqualizerDirective,
                        EqualizeDirective
                    ],
                    providers: [
                        EqualizerService
                    ]
                },] }
    ];
    return NgxEqualizerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-equalizer.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <header>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"jumbotron mt-2\">\n          <h1 class=\"display-4\">ngx-equalize</h1>\n          <p class=\"lead\">\n            This library is inspired from <a href=\"https://github.com/skrajewski/Equalizer\" target=\"_blank\">equalizer</a> jQuery library to keep HTML elements with equal height.<br/>\n            The library is compatible with Angular 4+ because of its low peer dependencies.\n          </p>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-auto\">\n              <a class=\"github-button\" href=\"https://github.com/Raphy/ngx-equalizer\" data-size=\"large\" data-show-count=\"true\" aria-label=\"Star Raphy/ngx-equalizer on GitHub\" target=\"_blank\">Star</a>\n            </div>\n            <div class=\"col-auto\">\n              <a class=\"github-button\" href=\"https://github.com/Raphy/ngx-equalizer/fork\" data-size=\"large\" aria-label=\"Fork Raphy/ngx-equalizer on GitHub\" target=\"_blank\">Fork</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n\n  <div class=\"row mb-4\">\n    <div class=\"col\">\n      <h2>Basic usage</h2>\n\n      <p>The provided directives will do the job !</p>\n\n      <ngb-tabset equalizer>\n        <ngb-tab title=\"Preview\">\n          <ng-template ngbTabContent>\n            <div class=\"row equalizer\" equalizer>\n              <div class=\"col equalize\" equalize>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare bibendum magna at consequat. Morbi ultrices, augue eget condimentum commodo, lacus odio sodales odio, non suscipit libero enim nec odio.\n              </div>\n              <div class=\"col equalize\" equalize>\n                Sed lorem elit, bibendum sed varius in, pretium vitae ipsum.<br/>Curabitur vulputate mi risus, vitae pulvinar est egestas quis. Phasellus porta lacus eget velit condimentum, ac iaculis lacus volutpat.\n              </div>\n              <div class=\"col equalize\" equalize>\n                Donec quam felis, vulputate non egestas facilisis, sagittis ac odio. Aliquam tincidunt, enim commodo congue volutpat, libero erat tempus massa, eu vehicula risus eros in metus. Etiam convallis, neque quis pellentesque sodales, metus leo gravida magna, dictum ullamcorper metus lectus eget erat. Vestibulum in leo a urna lacinia dapibus a at lacus.\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.module.ts\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.basic['app.module.ts'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.component.ts\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.basic['app.component.ts'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.component.html\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.basic['app.component.html'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.component.scss\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.basic['app.component.scss'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2>Using service</h2>\n\n      <p>The service will only equalize once and if the DOM change, you have to equalize again.</p>\n\n      <ngb-tabset equalizer>\n        <ngb-tab title=\"Preview\">\n          <ng-template ngbTabContent>\n            <div class=\"row equalizer\">\n              <div #paragraph1 class=\"col equalize\">\n                Vivamus at orci sed nibh bibendum ultrices a a odio. Nullam pretium dolor massa, eu pretium enim ornare et. Sed et lorem eu massa iaculis sodales. Nulla gravida sapien ac ex mattis, sed accumsan ex egestas.\n              </div>\n              <div #paragraph2 class=\"col equalize\">\n                Duis nisl dui, dapibus quis volutpat eget, tincidunt quis augue. Maecenas vulputate vitae lorem nec rhoncus. Etiam aliquet, arcu eget tristique eleifend, augue magna pharetra nunc, a volutpat mi enim at velit. Etiam quis suscipit risus, vel gravida eros. Nam consequat vehicula lacus, ac tristique mi lacinia id.\n              </div>\n              <div #paragraph3 class=\"col equalize\">\n                Maecenas mollis hendrerit mi, facilisis consequat enim venenatis ac.\n              </div>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.module.ts\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.service['app.module.ts'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.component.ts\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.service['app.component.ts'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.component.html\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.service['app.component.html'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"app.component.scss\">\n          <ng-template ngbTabContent>\n            <pre equalize><code>{{ snippets.service['app.component.scss'] }}</code></pre>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n\n  <footer class=\"mt-4\">\n    <p class=\"text-center\">\n      Made with ♥ by <a href=\"https://github.com/Raphy\" target=\"_blank\">Raphy</a><br/>\n    </p>\n  </footer>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".equalizer {\n  border: 2px solid #fffa00; }\n  .equalizer .equalize {\n    border: 1px solid #ff07ec; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhcGh5L0RldmVsb3BtZW50L1JhcGh5L25neC1lcXVhbGl6ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQTtFQUQzQjtJQUlJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVxdWFsaXplciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZhMDA7XG5cbiAgLmVxdWFsaXplIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwN2VjO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_equalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-equalizer */ "./dist/ngx-equalizer/fesm5/ngx-equalizer.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(equalizerService) {
        this.equalizerService = equalizerService;
        this.snippets = {
            basic: {
                'app.module.ts': "import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { NgxEqualizerModule } from 'ngx-equalizer';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxEqualizerModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}",
                'app.component.ts': "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n})\nexport class AppComponent {\n}",
                'app.component.html': "<div class=\"row equalizer\" equalizer>\n  <div class=\"col equalize\" equalize>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare bibendum magna at consequat.\n    Morbi ultrices, augue eget condimentum commodo, lacus odio sodales odio, non suscipit libero enim nec odio.\n  </div>\n  <div class=\"col equalize\" equalize>\n    Sed lorem elit, bibendum sed varius in, pretium vitae ipsum.<br/>Curabitur vulputate mi risus, vitae pulvinar est egestas quis.\n    Phasellus porta lacus eget velit condimentum, ac iaculis lacus volutpat.\n  </div>\n  <div class=\"col equalize\" equalize>\n    Donec quam felis, vulputate non egestas facilisis, sagittis ac odio.\n    Aliquam tincidunt, enim commodo congue volutpat, libero erat tempus massa, eu vehicula risus eros in metus.\n    Etiam convallis, neque quis pellentesque sodales, metus leo gravida magna, dictum ullamcorper metus lectus eget erat.\n    Vestibulum in leo a urna lacinia dapibus a at lacus.\n  </div>\n</div>",
                'app.component.scss': ".equalizer {\n  border: 2px solid #fffa00;\n\n  .equalize {\n    border: 1px solid #ff07ec;\n  }\n}"
            },
            service: {
                'app.module.ts': "import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { NgxEqualizerModule } from 'ngx-equalizer';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxEqualizerModule,\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n}",
                'app.component.ts': "import { AfterViewInit, Component } from '@angular/core';\nimport { EqualizerService } from 'ngx-equalizer';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss']\n})\nexport class AppComponent implements AfterViewInit {\n  @ViewChild('paragraph1', {read: ElementRef})\n  paragraph1: ElementRef;\n\n  @ViewChild('paragraph2', {read: ElementRef})\n  paragraph2: ElementRef;\n\n  @ViewChild('paragraph3', {read: ElementRef})\n  paragraph3: ElementRef;\n\n  constructo(private readonly equalizerService: EqualizerService) {\n  }\n\n  ngAfterViewInit(): void {\n    this.equalizerService.equalizeElements([\n      this.paragraph1,\n      this.paragraph2,\n      this.paragraph3,\n    ]);\n  }\n}",
                'app.component.html': "<div class=\"row equalizer\">\n  <div #paragraph1 class=\"col equalize\">\n    Vivamus at orci sed nibh bibendum ultrices a a odio. Nullam pretium dolor massa, eu pretium enim ornare et.\n    Sed et lorem eu massa iaculis sodales. Nulla gravida sapien ac ex mattis, sed accumsan ex egestas.\n  </div>\n  <div #paragraph2 class=\"col equalize\">\n    Duis nisl dui, dapibus quis volutpat eget, tincidunt quis augue. Maecenas vulputate vitae lorem nec rhoncus.\n    Etiam aliquet, arcu eget tristique eleifend, augue magna pharetra nunc, a volutpat mi enim at velit.\n    Etiam quis suscipit risus, vel gravida eros. Nam consequat vehicula lacus, ac tristique mi lacinia id.\n  </div>\n  <div #paragraph3 class=\"col equalize\">\n    Maecenas mollis hendrerit mi, facilisis consequat enim venenatis ac.\n  </div>\n</div>",
                'app.component.scss': ".equalizer {\n  border: 2px solid #fffa00;\n\n  .equalize {\n    border: 1px solid #ff07ec;\n  }\n}"
            }
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.equalizerService.equalizeElements([
            this.paragraph1,
            this.paragraph2,
            this.paragraph3,
        ]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paragraph1', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "paragraph1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paragraph2', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "paragraph2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paragraph3', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "paragraph3", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_equalizer__WEBPACK_IMPORTED_MODULE_2__["EqualizerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_equalizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-equalizer */ "./dist/ngx-equalizer/fesm5/ngx-equalizer.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_equalizer__WEBPACK_IMPORTED_MODULE_4__["NgxEqualizerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTabsetModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/raphy/Development/Raphy/ngx-equalizer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map