(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _recover_recover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recover/recover.component */ "./src/app/recover/recover.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pricings_pricings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricings/pricings.component */ "./src/app/pricings/pricings.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'recover', component: _recover_recover_component__WEBPACK_IMPORTED_MODULE_5__["RecoverComponent"] },
    { path: 'pricing', component: _pricings_pricings_component__WEBPACK_IMPORTED_MODULE_7__["PricingsComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n  <app-footer *ngIf=\"hasFooter()\"></app-footer>\n</main>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'kepler';
    }
    AppComponent.prototype.hasFooter = function () {
        var routesWithHeader = ['/home', '/pricing'];
        return routesWithHeader.includes(this._router.url);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _pricings_pricings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricings/pricings.component */ "./src/app/pricings/pricings.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _recover_recover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./recover/recover.component */ "./src/app/recover/recover.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _pricings_pricings_component__WEBPACK_IMPORTED_MODULE_7__["PricingsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"],
                _recover_recover_component__WEBPACK_IMPORTED_MODULE_12__["RecoverComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slice slice-lg bg-secondary\">\n  <div class=\"container\">\n    <div class=\"row row-grid\">\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-1-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">Choose the best solution for your business</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-2-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">How to find the right design for your specific product</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-3-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">How to win buyers and influence sales with marketing</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row row-grid\">\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-4-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">Choose the best solution for your business</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-5-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">How to find the right design for your specific product</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-6-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">How to win buyers and influence sales with marketing</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row row-grid\">\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-1-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">Choose the best solution for your business</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-2-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">How to find the right design for your specific product</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-3-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog.html#\" class=\"h5 lh-150\">How to win buyers and influence sales with marketing</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Load more -->\n    <div class=\"mt-lg text-center\">\n      <a href=\"blog.html#\" class=\"btn btn-dark btn-circle shadow\">Load more</a>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg bg-secondary\" data-delimiter-before=\"1\" data-delimiter-after=\"1\">\n  <div class=\"container\">\n    <div class=\"mb-md text-center\">\n      <h3 class=\"heading h2\">Latest from the blog</h3>\n      <div class=\"fluid-paragraph mt-3\">\n        <p class=\"lead\">Start building fast, beautiful and modern looking websites in no time using our theme.</p>\n      </div>\n    </div>\n    <div class=\"row row-grid\">\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-1-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog-article.html#\" class=\"h5 lh-150\">Choose the best solution for your business</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-2-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog-article.html#\" class=\"h5 lh-150\">How to find the right design for your specific product</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card shadow-sm shadow--hover\">\n          <img src=\"../assets/img/prv/img-3-800x600.jpg\" class=\"card-img-top\">\n          <div class=\"card-body py-5 text-center\">\n            <a href=\"blog-article.html#\" class=\"h5 lh-150\">How to win buyers and influence sales with marketing</a>\n            <h6 class=\"text-muted mt-4 mb-0\">25 April, 2018</h6>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"row\">\n              <div class=\"col text-center\">\n                <ul class=\"list-inline mb-0\">\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-share mr-1 text-muted\"></i> 131</a>\n                  </li>\n                  <li class=\"list-inline-item pr-4\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-eye mr-1 text-muted\"></i> 255</a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                    <a href=\"blog-article.html#\" class=\"text-light\"><i class=\"fas fa-comments mr-1 text-muted\"></i> 14</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"bg-cover bg-size--cover\" style=\"height: 600px; background-image: url('../assets/img/backgrounds/img-14.jpg'); background-position: top center;\">\n</section>\n<section class=\"slice\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-9\">\n        <!-- Article body -->\n        <article>\n          <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n          <p class=\"lead\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim\n            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit\n          </p>\n          <h5>First thing you need to do</h5>\n          <figure class=\"figure\">\n            <img alt=\"Image\" src=\"../assets/img/prv/img-3-800x600.jpg\" class=\"img-fluid rounded\">\n            <figcaption class=\"mt-3 text-muted\">Figure one: Type here your description</figcaption>\n          </figure>\n          <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n          <h5>Second thing you need to do</h5>\n          <figure class=\"figure\">\n            <img alt=\"Image\" src=\"../assets/img/prv/img-4-800x600.jpg\" class=\"img-fluid rounded\">\n            <figcaption class=\"mt-3 text-muted\">Figure two: Type here your description</figcaption>\n          </figure>\n          <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        </article>\n        <hr>\n        <h5 class=\"mb-4\">Comments</h5>\n        <div class=\"p-5 bg-secondary border rounded\">\n          <div class=\"media\">\n            <img class=\"rounded-circle shadow mr-4\" src=\"../assets/img/prv/team-1-800x800.jpg\" style=\"width: 64px;\" alt=\"Generic placeholder image\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0\">Media heading</h5>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n                lacinia congue felis in faucibus.\n              </p>\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Like</a>\n                </li>\n                <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Reply</a>\n                </li>\n                <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Report</a>\n                </li>\n              </ul>\n              <div class=\"media mt-5\">\n                <a class=\"pr-4\" href=\"blog-article.html#\">\n                  <img src=\"../assets/img/prv/team-2-800x800.jpg\" class=\"rounded-circle shadow\" style=\"width: 64px;\" alt=\"Generic placeholder image\">\n                </a>\n                <div class=\"media-body\">\n                  <h5 class=\"mt-0\">Media heading</h5>\n                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n                    Donec lacinia congue felis in faucibus.\n                  </p>\n                  <ul class=\"list-inline\">\n                    <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Like</a>\n                    </li>\n                    <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Reply</a>\n                    </li>\n                    <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Report</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"media mt-5\">\n            <img class=\"rounded-circle shadow mr-4\" src=\"../assets/img/prv/team-3-800x800.jpg\" style=\"width: 64px;\" alt=\"Generic placeholder image\">\n            <div class=\"media-body\">\n              <h5 class=\"mt-0\">Media heading</h5>\n              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec\n                lacinia congue felis in faucibus.\n              </p>\n              <ul class=\"list-inline\">\n                <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Like</a>\n                </li>\n                <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Reply</a>\n                </li>\n                <li class=\"list-inline-item\"><a href=\"blog-article.html#\" class=\"text-light\">Report</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- Comment form -->\n          <h5 class=\"mt-5 mb-4\">Add you comment</h5>\n          <form class=\"form-secondary\" role=\"form\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label class=\"sr-only\">Your name</label>\n                  <input class=\"form-control form-control-lg\" placeholder=\"Your name\" type=\"text\">\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  <label class=\"sr-only\">Email address</label>\n                  <input class=\"form-control form-control-lg\" placeholder=\"Email address\" type=\"text\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\">Phone number</label>\n              <input class=\"form-control form-control-lg\" placeholder=\"Phone number\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\">Type your message</label>\n              <textarea class=\"form-control form-control-lg textarea-autosize\" rows=\"3\" placeholder=\"Type your message\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary shadow mt-4\">Reply</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg\">\n  <div class=\"container\">\n    <div class=\"mb-md text-center\">\n      <h3 class=\"heading h3\">Free updates and support</h3>\n      <div class=\"fluid-paragraph text-center mt-4\">\n        <p class=\"lead lh-180\">You get all Bootstrap components fully customized. Besides, you receive another numerous plugins out of the box and ready to use.</p>\n      </div>\n    </div>\n    <div class=\"row row-grid\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0\" data-animate-hover=\"1\">\n          <div class=\"animate-this\">\n            <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-3-800x600.jpg\" alt=\"Image description\">\n          </div>\n          <div class=\"pt-4\">\n            <h5 class=\"card-title\">Free updates</h5>\n            <p class=\"card-text\">Each theme comes with updates for the life of the theme. This means you'll never pay for any bug-fixes and compatibility upgrades for your theme, ever.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0\" data-animate-hover=\"1\">\n          <div class=\"animate-this\">\n            <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-2-800x600.jpg\" alt=\"Image description\">\n          </div>\n          <div class=\"pt-4\">\n            <h5 class=\"card-title\">Licenses</h5>\n            <p class=\"card-text\">All our themes have three simple licenses. Free, Multiple and Exteneded Use license are availabled and you can learn more <a href=\"landing-5.html#\">here</a>.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0\" data-animate-hover=\"1\">\n          <div class=\"animate-this\">\n            <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-1-800x600.jpg\" alt=\"Image description\">\n          </div>\n          <div class=\"pt-4\">\n            <h5 class=\"card-title\">Technical support</h5>\n            <p class=\"card-text\">We're here to help with your Purpose UI questions. Shoot us an email at support@webpixels.io and we'll get back to you ASAP.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-10\">\n        <div class=\"mb-md text-center\">\n          <h3 class=\"heading h3 mb-4\">Our projects</h3>\n          <div class=\"fluid-paragraph text-center\">\n            <p class=\"lead lh-180\">You get all Bootstrap components fully customized. Besides, you receive another 5 plugins out of the box and ready to use.</p>\n          </div>\n        </div>\n        <div class=\"row row-grid\">\n          <div class=\"col-lg-6\">\n            <a href=\"landing-portfolio.html#\" class=\"card border-0\" data-animate-hover=\"1\">\n              <div class=\"animate-this\">\n                <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-1-800x600.jpg\">\n                <span class=\"mask bg-dark alpha-3\"></span>\n                <span class=\"mask mask--hover bg-gradient-primary alpha-4\"></span>\n                <div class=\"card-img-overlay d-flex\">\n                  <div class=\"col pt-2\">\n                    <h4 class=\"h3 text-white text-capitalize mb-1\">The pineapple's story</h4>\n                    <h6 class=\"text-white\">Identity &amp; Web Design</h6>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-6\">\n            <a href=\"landing-portfolio.html#\" class=\"card border-0\" data-animate-hover=\"1\">\n              <div class=\"animate-this\">\n                <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-2-800x600.jpg\">\n                <span class=\"mask bg-dark alpha-3\"></span>\n                <span class=\"mask mask--hover bg-gradient-primary alpha-4\"></span>\n                <div class=\"card-img-overlay d-flex\">\n                  <div class=\"col pt-2\">\n                    <h4 class=\"h3 text-white text-capitalize mb-1\">Beautiful colors from nature</h4>\n                    <h6 class=\"text-white\">Branding</h6>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n        <div class=\"row row-grid\">\n          <div class=\"col-lg-6\">\n            <a href=\"landing-portfolio.html#\" class=\"card border-0\" data-animate-hover=\"1\">\n              <div class=\"animate-this\">\n                <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-3-800x600.jpg\">\n                <span class=\"mask bg-dark alpha-3\"></span>\n                <span class=\"mask mask--hover bg-gradient-primary alpha-4\"></span>\n                <div class=\"card-img-overlay d-flex\">\n                  <div class=\"col pt-2\">\n                    <h4 class=\"h3 text-white text-capitalize mb-1\">Golden beauty</h4>\n                    <h6 class=\"text-white\">Identity &amp; Web Design</h6>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          <div class=\"col-lg-6\">\n            <a href=\"landing-portfolio.html#\" class=\"card border-0\" data-animate-hover=\"1\">\n              <div class=\"animate-this\">\n                <img class=\"rounded z-depth-3 img-fluid\" src=\"../assets/img/prv/img-1-800x600.jpg\">\n                <span class=\"mask bg-dark alpha-3\"></span>\n                <span class=\"mask mask--hover bg-gradient-primary alpha-4\"></span>\n                <div class=\"card-img-overlay d-flex\">\n                  <div class=\"col pt-2\">\n                    <h4 class=\"h3 text-white text-capitalize mb-1\">Living dangerously</h4>\n                    <h6 class=\"text-white\">Marketing</h6>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n        <div class=\"text-center mt-md\">\n          <a href=\"landing-portfolio.html#\" class=\"btn btn-sm btn-primary btn-circle\">Load more</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer footer-dark bg-primary bg-cover bg-size--cover\" style=\"background-image: url('../assets/img/backgrounds/light-texture.svg'); background-position: center center;\">\n  <div class=\"container\">\n    <div class=\"row pt-md\">\n      <div class=\"col-lg-4 mb-5 mb-lg-0\">\n        <a routerLink=\"/home\">\n          <img src=\"assets/img/brand/logo_light.png\" alt=\"Footer logo\" style=\"height: 32px;margin-bottom: 1em;\">\n        </a>\n        <p class=\"text-sm\">A unique and beautiful collection of UI elements that are all flexible and modular. A complete and customizable solution to building the website of your dreams.</p>\n      </div>\n      <div class=\"col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0\">\n        <h6 class=\"heading mb-3\">Account</h6>\n        <ul class=\"list-unstyled\">\n          <li><a routerLink=\"/home\">Profile</a>\n          </li>\n          <li><a routerLink=\"/home\">Settings</a>\n          </li>\n          <li><a routerLink=\"/home\">Billing</a>\n          </li>\n          <li><a routerLink=\"/home\">Notifications</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0\">\n        <h6 class=\"heading mb-3\">About</h6>\n        <ul class=\"list-unstyled text-small\">\n          <li><a routerLink=\"/home\">Services</a>\n          </li>\n          <li><a routerLink=\"/home\">Contact</a>\n          </li>\n          <li><a routerLink=\"/home\">Careers</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-lg-2 col-sm-4 mb-5 mb-lg-0\">\n        <h6 class=\"heading mb-3\">Company</h6>\n        <ul class=\"list-unstyled\">\n          <li><a routerLink=\"/home\">Terms</a>\n          </li>\n          <li><a routerLink=\"/home\">Privacy</a>\n          </li>\n          <li><a routerLink=\"/home\">Support</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row align-items-center justify-content-md-between py-4 mt-4 delimiter-top\">\n      <div class=\"col-md-6\">\n        <div class=\"copyright text-sm font-weight-bold text-center text-md-left\">\n          &copy; 2018 <a routerLink=\"/home\" class=\"font-weight-bold\" target=\"_blank\">Kepler</a>. All rights reserved.\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav justify-content-center justify-content-md-end mt-3 mt-md-0\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home\"target=\"_blank\">\n              <i class=\"fab fa-dribbble\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" routerLink=\"/home\" target=\"_blank\">\n              <i class=\"fab fa-instagram\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home\" target=\"_blank\">\n              <i class=\"fab fa-github\"></i>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home\" target=\"_blank\">\n              <i class=\"fab fa-facebook\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-transparent\">\n  <!-- SEARCH -->\n  <div id=\"search-main\" class=\"navbar-search\">\n    <div class=\"container\">\n      <!-- Search Input -->\n      <form class=\"navbar-search-form\" role=\"form\">\n        <div class=\"form-group\">\n          <div class=\"input-group input-group-transparent\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"far fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Type and hit enter ...\">\n          </div>\n        </div>\n      </form>\n      <!-- Search Dropdown -->\n      <div class=\"navbar-search-suggestions\">\n        <h6>Search Suggestions</h6>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <ul class=\"list-unstyled mb-0\">\n              <li><a routerLink=\"/home\" class=\"list-link\"><i class=\"far fa-search\"></i><span>macbook pro</span> in Laptops</a></li>\n              <li><a routerLink=\"/home\" class=\"list-link\"><i class=\"far fa-search\"></i><span>iphone 8</span> in Smartphones</a></li>\n              <li><a routerLink=\"/home\" class=\"list-link\"><i class=\"far fa-search\"></i><span>macbook pro</span> in Laptops</a></li>\n              <li><a routerLink=\"/home\" class=\"list-link\"><i class=\"far fa-search\"></i><span>beats pro solo 3</span> in Headphones</a></li>\n              <li><a routerLink=\"/home\" class=\"list-link\"><i class=\"far fa-search\"></i><span>smasung galaxy 10</span> in Phones</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- TOPBAR -->\n  <div id=\"navbar-top-main\" class=\"navbar-top border-bottom\" [ngClass]=\"{'navbar-dark bg-dark':isDark(),'navbar-light bg-white':!isDark()}\">\n    <div class=\"container\">\n      <div class=\"navbar-nav align-items-center\">\n        <!-- <div class=\"d-none d-lg-inline-block\"><span class=\"navbar-text mr-3\">Purpose - Website UI Kit</span></div> -->\n        <div>\n          <ul class=\"nav\">\n            <li class=\"nav-item dropdown ml-lg-2 dropdown-animate\" data-toggle=\"hover\">\n              <!-- Current Language -->\n              <a routerLink=\"/home\" class=\"nav-link px-0\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <img alt=\"Image placeholder\" src=\"assets/img/icons/flags/us.svg\">\n                <span class=\"d-none d-lg-inline-block\">United States</span>\n                <span class=\"d-lg-none\">EN</span>\n              </a>\n              <!-- Dropdown Languages -->\n              <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-arrow\">\n                <a routerLink=\"/home\" class=\"dropdown-item\"><img alt=\"Spanish\" src=\"assets/img/icons/flags/es.svg\">Spanish</a>\n                <a routerLink=\"/home\" class=\"dropdown-item\"><img alt=\"Romanian\" src=\"assets/img/icons/flags/ro.svg\">Romanian</a>\n                <a routerLink=\"/home\" class=\"dropdown-item\"><img alt=\"Greek\" src=\"assets/img/icons/flags/gr.svg\">Greek</a>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"ml-auto\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\"><a routerLink=\"/home\" class=\"nav-link\">Support</a></li>\n            <li class=\"nav-item\"><a routerLink=\"/home\" class=\"nav-link\" data-action=\"search-open\" data-target=\"#search-main\"><i class=\"far fa-search\"></i></a></li>\n            <li class=\"nav-item\"><a routerLink=\"/home\" class=\"nav-link\"><i class=\"far fa-shopping-cart\"></i></a></li>\n            <li class=\"nav-item\"><a routerLink=\"/home\" class=\"nav-link\"><i class=\"far fa-user-circle\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- MAIN NAVBAR -->\n  <nav class=\"navbar navbar-main navbar-expand-lg navbar-fixed-top navbar-transparent\" id=\"navbar-main\" [ngClass]=\"{'navbar-dark bg-dark':isDark(),'navbar-light bg-white':!isDark()}\">\n    <div class=\"container\">\n      <!-- Logo -->\n      <a routerLink=\"/home\" class=\"navbar-brand mr-lg-5\"><img alt=\"Kepler\" [src]=\"isDark() ? 'assets/img/brand/logo_light.png' : 'assets/img/brand/logo_dark.png'\" style=\"height:30px;\"></a>\n      <!-- Menu Mobile -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main-collapse\" aria-controls=\"navbar-main-collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <!-- Menu Desktop -->\n      <div class=\"collapse navbar-collapse\" id=\"navbar-main-collapse\">\n        <!-- Right Menu -->\n        <ul class=\"navbar-nav align-items-lg-center\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-link\">Accueil</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/pricing\" routerLinkActive=\"active\" class=\"nav-link\" role=\"button\">Pricing</a>\n          </li>\n          <!-- Dropdown -->\n          <li class=\"nav-item dropdown dropdown-animate\" data-toggle=\"hover\">\n            <a routerLink=\"/home\" class=\"nav-link\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n            <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-arrow py-0\">\n              <div class=\"list-group\">\n                <a routerLink=\"/home\" class=\"list-group-item list-group-item-action\">\n                  <div class=\"media d-flex align-items-center\">\n                    <img alt=\"#\" src=\"assets/img/icons/dusk/svg/browser-window.svg\" class=\"img-saturate\" style=\"width:50px;\">\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-1\">Landing Pages</h6>\n                      <p class=\"mb-0\">A great point to start from.</p>\n                    </div>\n                  </div>\n                </a>\n                <a routerLink=\"/home\" class=\"list-group-item list-group-item-action\">\n                  <div class=\"media d-flex align-items-center\">\n                    <img alt=\"#\" src=\"assets/img/icons/dusk/svg/ios-photos.svg\" class=\"img-saturate\" style=\"width:50px;\">\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-1\">Secondary Pages</h6>\n                      <p class=\"mb-0\">Build your website with these demos.</p>\n                    </div>\n                  </div>\n                </a>\n                <a routerLink=\"/home\" class=\"list-group-item list-group-item-action\">\n                  <div class=\"media d-flex align-items-center\">\n                    <img alt=\"#\" src=\"assets/img/icons/dusk/svg/maintenance.svg\" class=\"img-saturate\" style=\"width:50px;\">\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-1\">Account Pages</h6>\n                      <p class=\"mb-0\">Account management made easy.</p>\n                    </div>\n                  </div>\n                </a>\n                <a routerLink=\"/home\" class=\"list-group-item list-group-item-action\">\n                  <div class=\"media d-flex align-items-center\">\n                    <img alt=\"Image placeholder\" src=\"assets/img/icons/dusk/svg/in-progress.svg\" class=\"img-saturate\" style=\"width:50px;\">\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-1\">Shop Pages</h6>\n                      <p class=\"mb-0\">Explore the full ecommerce website flow.</p>\n                    </div>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <!-- Left Menu -->\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/login\" routerLinkActive=\"active\" class=\"nav-link\">Connexion</a>\n          </li>\n          <li class=\"nav-item mr-0\">\n            <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"nav-link d-lg-none\">Inscription</a>\n            <a routerLink=\"/register\" [ngClass]=\"{'btn-white ':isDark(),'btn-primary':!isDark()}\" class=\"btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex\">\n              <span class=\"btn-inner--icon\"><i class=\"far fa-user-circle\"></i></span>\n              <span class=\"btn-inner--text\">Inscription</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_router) {
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isDark = function () {
        var routesWithDarkCss = ['/home', '/pricing', '/404'];
        return routesWithDarkCss.includes(this._router.url);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slice slice-sm bg-secondary\">\n  <div class=\"container h-100vh d-flex align-items-center\">\n    <div class=\"col\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6 col-lg-5 col-xl-4\">\n          <div class=\"text-center mb-4\">\n            <img class=\"mb-4\" src=\"../assets/img/brand/purpose-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n            <h6 class=\"h3\">Welcome back</h6>\n            <p class=\"text-muted mb-0\">Sign in to your account to continue</p>\n          </div>\n          <span class=\"clearfix\"></span>\n          <form role=\"form\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Email address</label>\n              <div class=\"input-group input-group-transparent\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-user\"></i></span>\n                </div>\n                <input type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"name@example.com\">\n              </div>\n            </div>\n            <div class=\"form-group mb-4\">\n              <div class=\"d-flex align-items-center justify-content-between\">\n                <div>\n                  <label class=\"form-control-label\">Password</label>\n                </div>\n                <div class=\"mb-2\">\n                  <a routerLink=\"/recover\" class=\"small text-light text-unerline--dashed\">Lost password?</a>\n                </div>\n              </div>\n              <div class=\"input-group input-group-transparent\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-key\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" id=\"input-password\" placeholder=\"Password\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"far fa-eye\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center mb-3\">\n              <button type=\"button\" class=\"btn btn-block btn-primary\">Sign in</button>\n            </div>\n            <div class=\"text-center\">\n              <small>Not registered?</small>\n              <a routerLink=\"/register\" class=\"small font-weight-bold\">&nbsp;Create an account</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slice slice-xl bg-primary bg-cover bg-size--cover\" style=\"background-image: url('../assets/img/backgrounds/light-texture.svg'); background-position: center center;\">\n  <div class=\"bg-absolute-cover bg-size--contain d-flex align-items-center\">\n    <figure class=\"w-100\">\n      <svg preserveAspectRatio=\"none\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1506.3 578.7\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"shape-fill-purple\" d=\"M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z\"/>\n        <path class=\"shape-fill-green\" d=\"M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z\"/>\n        <path class=\"shape-fill-teal\" d=\"M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z\"/>\n        <path class=\"shape-fill-yellow\" d=\"M 330.588 185.515 C 331.035 184.361 332.064 183.533 333.286 183.344 L 344.736 181.565 C 345.958 181.374 347.189 181.852 347.965 182.815 L 355.23 191.841 C 356.006 192.805 356.209 194.11 355.762 195.264 L 351.578 206.068 C 351.131 207.222 350.102 208.05 348.88 208.24 L 337.43 210.019 C 336.208 210.209 334.977 209.732 334.201 208.768 L 326.936 199.742 C 326.16 198.778 325.957 197.474 326.404 196.32 L 330.588 185.515 Z\"/>\n        <path class=\"shape-fill-blue\" d=\"M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z\"/>\n        <path class=\"shape-fill-gray-dark\" d=\"M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z\"/>\n        <path class=\"shape-fill-orange\" d=\"M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z\"/>\n        <path class=\"shape-fill-red\" d=\"M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z\"/>\n      </svg>\n    </figure>\n  </div>\n  <div class=\"py-lg-5\">\n    <div class=\"container position-relative zindex-100\">\n      <div class=\"row row-grid justify-content-around align-items-center\">\n        <div class=\"col-lg-6\">\n          <div class=\"text-center\">\n            <img src=\"assets/img/brand/icon.png\" style=\"width:120px;\">\n            <h2 class=\"text-white my-4\">\n              <span class=\"display-4 font-weight-bold\">Welcome to Kepler !</span>\n            </h2>\n            <p class=\"lead text-white\">Kepler is a unique and beautiful collection of UI elements that are all flexible and modular. A complete and customizable solution to building the website of your dreams.</p>\n            <div class=\"mt-5\">\n              <a routerLink=\"/home\" class=\"btn btn-white btn-circle btn-translate--hover btn-icon mr-sm-4 scroll-me\">\n                <span class=\"btn-inner--text\">Explore Features</span>\n                <span class=\"btn-inner--icon\"><i class=\"fas fa-angle-right\"></i></span>\n              </a>\n              <a routerLink=\"/home\" class=\"btn btn-danger btn-circle btn-translate--hover btn-icon d-none d-sm-inline-block scroll-me\">\n                <span class=\"btn-inner--icon\"><i class=\"fas fa-file-alt\"></i></span>\n                <span class=\"btn-inner--text\">Page Examples</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a routerLink=\"/home\" class=\"tongue tongue-bottom tongue-white scroll-me\">\n    <i class=\"far fa-angle-down\"></i>\n  </a>\n</section>\n\n<!--\n<section class=\"section-rotate\">\n  <div class=\"section-inner bg-gradient-primary\"></div>\n  <div class=\"pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block\">\n    <img alt=\"\" src=\"assets/img/svg/work-chat.svg\" class=\"img-fluid\">\n  </div>\n  <div class=\"bg-absolute-cover bg-size--contain d-flex align-items-center\">\n    <figure class=\"w-100\">\n      <svg preserveAspectRatio=\"none\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1506.3 578.7\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path class=\"shape-fill-purple\" d=\"M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z\"\n        />\n        <path class=\"shape-fill-green\" d=\"M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z\"\n        />\n        <path class=\"shape-fill-teal\" d=\"M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z\"\n        />\n        <path class=\"shape-fill-blue\" d=\"M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z\"\n        />\n        <path class=\"shape-fill-gray-dark\" d=\"M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z\"\n        />\n        <path class=\"shape-fill-orange\" d=\"M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z\"\n        />\n        <path class=\"shape-fill-red\" d=\"M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z\"\n        />\n      </svg>\n    </figure>\n  </div>\n  <div class=\"container pt-lg pb-xl-md position-relative zindex-100\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 text-center text-lg-left\">\n        <a routerLink=\"/home\" class=\"alert alert-news\" data-toggle=\"tooltip\" data-original-title=\"See changelog\">\n          <span class=\"badge badge-pill badge-warning\">New</span>\n          <span class=\"alert-content\">E-commerce module, new app pages and features</span>\n          <i class=\"far fa-angle-right\"></i>\n        </a>\n        <div class=\"\">\n          <h2 class=\"text-white my-4\">\n            <span class=\"display-4 font-weight-light\">See it. Love it</span>\n            <span class=\"d-block\">Kepler <strong class=\"font-weight-light\">Website UI Kit</strong></span>\n          </h2>\n          <p class=\"lead text-white\">A unique and beautiful collection of UI elements that are all flexible and modular. A complete and customizable solution to building the website of your dreams.</p>\n          <div class=\"mt-5\">\n            <a routerLink=\"/home\" class=\"btn btn-dark btn-circle btn-translate--hover btn-icon mr-sm-4 scroll-me\">\n              <span class=\"btn-inner--text\">Page Examples</span>\n              <span class=\"btn-inner--icon\"><i class=\"fas fa-angle-right\"></i></span>\n            </a>\n            <a routerLink=\"/home\" class=\"btn btn-outline-white btn-circle btn-translate--hover btn-icon d-none d-xl-inline-block scroll-me\">\n              <span class=\"btn-inner--icon\"><i class=\"fas fa-file-alt\"></i></span>\n              <span class=\"btn-inner--text\">Explore Features</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>-->\n\n<section class=\"slice slice-lg delimiter-bottom\">\n  <div class=\"container\">\n    <div class=\"mb-lg text-center\">\n      <h6 class=\"text-uppercase ls-2 text-muted font-weight-700\">Services</h6>\n      <h3 class=\"h2 mb-3\">Page Examples</h3>\n      <!--<h3 class=\"mt-4\">Built for <strong class=\"font-weight-700\">awesomeness</strong></h3>-->\n      <div class=\"fluid-paragraph text-center\">\n        <p class=\"lead mb-0\">Explore the live examples of the pre-built page layouts that were made with customization and re-usablity in mind. Let us amaze you with a level of quality in design and code never seen before in a Bootstrap theme.</p>\n      </div>\n    </div>\n    <div class=\"row row-grid text-center\">\n      <div class=\"col-lg-4\">\n        <div>\n          <div class=\"icon text-primary mb-3 img-center no-inline-flex\">\n            <img src=\"assets/img/icons/dusk/png/code.png\" class=\"img-fluid\">\n          </div>\n          <h5 class=\"h5\">Clever markup</h5>\n          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div>\n          <div class=\"icon text-primary mb-3 img-center no-inline-flex\">\n            <img src=\"assets/img/icons/dusk/png/toolbar-top.png\" class=\"img-fluid\">\n          </div>\n          <h5 class=\"h5\">Responsive design</h5>\n          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div>\n          <div class=\"icon text-primary mb-3 img-center no-inline-flex\">\n            <img src=\"assets/img/icons/dusk/png/online-support.png\" class=\"img-fluid\">\n          </div>\n          <h5 class=\"h5\">Technical support</h5>\n          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row row-grid text-center\">\n      <div class=\"col-lg-4\">\n        <div>\n          <div class=\"icon text-primary mb-3 img-center no-inline-flex\">\n            <img src=\"assets/img/icons/dusk/png/administrative-tools.png\" class=\"img-fluid\">\n          </div>\n          <h5 class=\"h5\">Clever markup</h5>\n          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div>\n          <div class=\"icon text-primary mb-3 img-center no-inline-flex\">\n            <img src=\"assets/img/icons/dusk/png/business.png\" class=\"img-fluid\">\n          </div>\n          <h5 class=\"h5\">Responsive design</h5>\n          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div>\n          <div class=\"icon text-primary mb-3 img-center no-inline-flex\">\n            <img src=\"assets/img/icons/dusk/png/desktop-download.png\" class=\"img-fluid\">\n          </div>\n          <h5 class=\"h5\">Technical support</h5>\n          <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice delimiter-bottom\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mb-md\">\n      <div class=\"col-lg-8\">\n        <div class=\"media\">\n          <img class=\"rounded-circle mr-4\" src=\"../assets/img/prv/team-1-800x800.jpg\" style=\"width: 80px;\" alt=\"Generic placeholder image\">\n          <div class=\"media-body\">\n            <p class=\"lead\">\"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio vestibulum in vulputate at tempus viverra.\"</p>\n            <span class=\"text-muted mt-4\">John Doe — Web Designer at Kepler</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"blurable--hover\">\n      <a routerLink=\"/home\">\n        <div class=\"row blurable-item\">\n          <div class=\"col-lg-2 col-md-3 col-4 mb-4 mb-md-0\">\n            <div class=\"px-4 py-4\">\n              <img src=\"../assets/img/prv/partners/brand-1.png\" class=\"img-fluid img-grayscale\">\n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-4 mb-4 mb-md-0\">\n            <div class=\"px-4 py-4\">\n              <img src=\"../assets/img/prv/partners/brand-2.png\" class=\"img-fluid img-grayscale\">\n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-4 mb-4 mb-md-0\">\n            <div class=\"px-4 py-4\">\n              <img src=\"../assets/img/prv/partners/brand-3.png\" class=\"img-fluid img-grayscale\">\n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-4 mb-4 mb-md-0\">\n            <div class=\"px-4 py-4\">\n              <img src=\"../assets/img/prv/partners/brand-4.png\" class=\"img-fluid img-grayscale\">\n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-4 mb-4 mb-md-0\">\n            <div class=\"px-4 py-4\">\n              <img src=\"../assets/img/prv/partners/brand-5.png\" class=\"img-fluid img-grayscale\">\n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-3 col-4 mb-4 mb-md-0\">\n            <div class=\"px-4 py-4\">\n              <img src=\"../assets/img/prv/partners/brand-6.png\" class=\"img-fluid img-grayscale\">\n            </div>\n          </div>\n        </div>\n        <span class=\"blurable-hidden btn btn-sm btn-info btn-circle\">See all customers</span>\n      </a>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg pt-100\" data-delimiter-after=\"1\">\n  <div class=\"container\">\n    <div class=\"row row-grid align-items-center justify-content-around\">\n      <div class=\"col-lg-5\">\n        <div class=\"bg-circles d-none\">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n        <img src=\"assets/img/svg/static_assets.svg\" class=\"img-center img-fluid w-75 mx-auto\">\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"pr-md-4\">\n          <h1 class=\"h3\">Made with the latest technologies</h1>\n          <p class=\"lead\">We use the latest technologies and tools in order to create a better code that not only works great, but it is easy easy to work with too.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg\">\n  <div class=\"container\">\n    <div class=\"row row-grid align-items-center justify-content-around\">\n      <div class=\"col-lg-5 order-lg-2\">\n        <img src=\"assets/img/svg/hello.svg\" class=\"img-center img-fluid w-75\">\n      </div>\n      <div class=\"col-lg-5 order-lg-1\">\n        <div class=\"pr-md-4\">\n          <h1 class=\"h3\">Built by developers for developers</h1>\n          <p class=\"lead\">We are developers too and we know exactly what you need. You don't only need a theme, but also great tools in order to ease the process. And this is exactly what we offer you.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg bg-secondary\">\n  <span class=\"tongue tongue-top\"><i class=\"fas fa-angle-up\"></i></span>\n  <div class=\"container\">\n    <div class=\"row justify-content-center align-items-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h3 class=\"h3 font-weight-400\">I am ready to start a new project with <span class=\"font-weight-700\">Kepler</span> UI Kit.</h3>\n        <div class=\"mt-5\">\n          <a routerLink=\"/home\" target=\"_blank\" class=\"btn btn-primary btn-circle btn-translate--hover px-4\">Purchase now<span class=\"badge badge-pill badge-danger\">$49 USD</span></a>\n          <a href=\"mailto:support@kepler.io\" class=\"btn btn-link\">Have an issue?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"spotlight bg-primary bg-cover bg-size--cover\" data-spotlight=\"fullscreen\" style=\"background-image: url('../assets/img/backgrounds/light-texture.svg'); background-position: center center;\">\n  <span class=\"mask bg-primary alpha-4\"></span>\n  <div class=\"spotlight-holder py-lg pt-lg-xl\">\n    <div class=\"container d-flex align-items-center\">\n      <div class=\"col\">\n        <div class=\"row cols-xs-space align-items-end text-center text-md-left justify-content-center\">\n          <div class=\"col-lg-7\">\n            <div class=\"text-center\">\n              <h2 class=\"text-white my-4\">\n                <span class=\"display-4 font-weight-bold\">404</span>\n                <!--<span class=\"d-block d-lg-inline font-weight-light\">UI Kit</span>-->\n              </h2>\n              <p class=\"lead text-white\">Désolé mais cette page n'existe pas.</p>\n              <div class=\"mt-5\">\n                <a href=\"/home\" class=\"btn btn-white btn-circle btn-translate--hover btn-icon mr-sm-4 scroll-me\">\n                  <span class=\"btn-inner--icon\"><i class=\"fas fa-arrow-left\"></i></span>\n                  <span class=\"btn-inner--text\">Revenir à l'accueil</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pricings/pricings.component.css":
/*!*************************************************!*\
  !*** ./src/app/pricings/pricings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pricings/pricings.component.html":
/*!**************************************************!*\
  !*** ./src/app/pricings/pricings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slice slice-lg pb-250 bg-primary bg-cover bg-size--cover\" style=\"background-image: url('../assets/img/backgrounds/light-texture.svg'); background-position: center center;\">\n  <div class=\"container pt-lg\">\n    <div class=\"row row-grid justify-content-center\">\n      <div class=\"col-lg-6 text-center\">\n        <h6 class=\"text-uppercase ls-2 text-white font-weight-700\">Pricing</h6>\n        <h2 class=\"heading h1 text-white\">Choose the best plan for your business</h2>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"slice\">\n  <div class=\"container\">\n    <div class=\"row row-grid justify-content-center mt--200\">\n      <div class=\"col-lg-9\">\n        <div class=\"card-deck flex-column flex-md-row\">\n          <div class=\"card card-pricing zoom-in shadow-lg px-4 mx-0 mb-4\">\n            <div class=\"card-header py-md text-center border-0\">\n              <h4 class=\"mb-4\">Developer Plan</h4>\n              <p class=\"text-muted\">With each purchase you get a pack of high quality components and page layouts to start building your website instantly.</p>\n              <a href=\"pricing-comparison.html#\" class=\"btn btn-sm btn-primary btn-icon btn-circle btn-translate--hover mt-4\">\n                <span class=\"btn-inner--icon\"><i class=\"far fa-angle-right\"></i></span>\n                <span class=\"btn-inner--text\">I want this plan</span>\n              </a>\n            </div>\n          </div>\n          <div class=\"card card-pricing px-4 mx-0 mb-4\">\n            <div class=\"card-header py-md text-center border-0\">\n              <h4 class=\"mb-4\">Free Plan</h4>\n              <p class=\"text-muted\">With each purchase you get a pack of high quality components and page layouts to start building your website instantly.</p>\n              <a href=\"pricing-comparison.html#\" class=\"btn btn-sm btn-dark btn-icon btn-circle btn-translate--hover mt-4\">\n                <span class=\"btn-inner--icon\"><i class=\"far fa-angle-right\"></i></span>\n                <span class=\"btn-inner--text\">I want this plan</span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <table class=\"table mt-lg\">\n          <thead>\n          <tr>\n            <th class=\"px-0 bg-transparent\" scope=\"col\"><span class=\"text-muted font-weight-700\">Features</span>\n            </th>\n            <th class=\"text-center bg-transparent\" scope=\"col\"><span class=\"text-dark\">Developer Plan</span>\n            </th>\n            <th class=\"text-center bg-transparent\" scope=\"col\"><span class=\"text-dark\">Free Plan</span>\n            </th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td class=\"px-0\">IMAP/POP Support</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">Email Forwarding</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">Active Sync</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">Multiple domain hosting</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\"><small class=\"text-muted\">Limited to 1 domain only</small>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">Additional storage upgrade</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">30MB Attachment Limit</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\">-</td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">Password protected / Expiry links</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\">-</td>\n          </tr>\n          <tr>\n            <td class=\"px-0\">Unlimited Custom Apps</td>\n            <td class=\"text-center\"><i class=\"far fa-check text-success\"></i>\n            </td>\n            <td class=\"text-center\">-</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Call to action -->\n<section class=\"slice slice-lg bg-secondary\">\n  <span class=\"tongue tongue-top\"><i class=\"far fa-angle-up\"></i></span>\n  <div class=\"container\">\n    <div class=\"row justify-content-center align-items-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h3 class=\"font-weight-400\">I am ready to start a new project with <span class=\"font-weight-700\">Purpose</span> UI Kit.</h3>\n        <div class=\"mt-5\">\n          <a href=\"https://themes.getbootstrap.com/product/purpose-website-ui-kit/\" target=\"_blank\" class=\"btn btn-primary btn-circle btn-translate--hover px-4\">Purchase now<span class=\"badge badge-pill badge-danger text-sm\">$49 USD</span></a>\n          <a href=\"mailto:support@webpixels.io\" class=\"btn btn-link\">Have an issue?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--\n<section class=\"slice slice-lg bg-secondary\">\n  <div class=\"container pt-lg-md\">\n    <div class=\"row row-grid\">\n      <div class=\"col-lg-5\">\n        <h2 class=\"heading h1\">Simple pricing for<br>\n          unlimited access.\n        </h2>\n        <p class=\"lead my-4\">When you purchase Purpose you get a pack of high quality components and page layouts to start building your website instantly.</p>\n        <small>Try free for 14 days, no credit card required.</small>\n        <div class=\"mt-5\">\n          <a href=\"pricing-simple.html#\" class=\"btn btn-primary btn-circle mr-lg-4\">Start free trial</a>\n          <a href=\"https://www.youtube.com/watch?v=mqpwDJpI3Rc\" class=\"btn btn-outline-dark btn-icon btn-circle px-4\" data-fancybox>\n            <span class=\"btn-inner--icon\"><i class=\"fas fa-play\"></i></span>\n            <span class=\"btn-inner--text\">Play video</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-3 offset-lg-1\">\n        <div class=\"card card-pricing popular box-shadow-3 text-center px-3 mb-4\">\n          <span class=\"h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white box-shadow-2\">Team</span>\n          <div class=\"card-header py-5\">\n            <h1 class=\"h1 font-weight-700 text-primary text-center mb-0\" data-pricing-value=\"30\">$<span class=\"price\">49</span><span class=\"h6 text-muted ml-2\">/ per month</span></h1>\n          </div>\n          <div class=\"card-body py-4\">\n            <ul class=\"list-unstyled mb-0\">\n              <li>Up to 5 users</li>\n              <li>Basic support on Github</li>\n              <li>Monthly updates</li>\n              <li>Free cancelation</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"card card-pricing text-center px-3 mb-4\">\n          <span class=\"h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white box-shadow-2\">Designer</span>\n          <div class=\"card-header py-5\">\n            <h1 class=\"h1 font-weight-700 text-primary text-center mb-0\" data-pricing-value=\"30\">$<span class=\"price\">29</span><span class=\"h6 text-muted ml-2\">/ per month</span></h1>\n          </div>\n          <div class=\"card-body py-4\">\n            <ul class=\"list-unstyled mb-0\">\n              <li>Up to 5 users</li>\n              <li>Basic support on Github</li>\n              <li>Monthly updates</li>\n              <li>Free cancelation</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"slice slice-lg bg-secondary delimiter-top delimiter-bottom\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5\">\n        <div class=\"mb-md\">\n          <h4 class=\"h5\">How do I upload my work?</h4>\n          <p class=\"mt-3\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n        </div>\n        <div class=\"mb-md\">\n          <h4 class=\"h5\">Which license do I need?</h4>\n          <p class=\"mt-3\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n        </div>\n        <div class=\"mb-md\">\n          <h4 class=\"h5\">How do I get a receipt for my purchase?</h4>\n          <p class=\"mt-3\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-5 offset-lg-1\">\n        <div class=\"mb-md\">\n          <h4 class=\"h5\">How can I get a refund?</h4>\n          <p class=\"mt-3\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n        </div>\n        <div class=\"mb-md\">\n          <h4 class=\"h5\">How do I get access to a theme I purchased?</h4>\n          <p class=\"mt-3\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n        </div>\n        <div>\n          <h4 class=\"h5\">How do I upload my work?</h4>\n          <p class=\"mt-3\">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section> -->\n\n"

/***/ }),

/***/ "./src/app/pricings/pricings.component.ts":
/*!************************************************!*\
  !*** ./src/app/pricings/pricings.component.ts ***!
  \************************************************/
/*! exports provided: PricingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingsComponent", function() { return PricingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingsComponent = /** @class */ (function () {
    function PricingsComponent() {
    }
    PricingsComponent.prototype.ngOnInit = function () {
    };
    PricingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricings',
            template: __webpack_require__(/*! ./pricings.component.html */ "./src/app/pricings/pricings.component.html"),
            styles: [__webpack_require__(/*! ./pricings.component.css */ "./src/app/pricings/pricings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingsComponent);
    return PricingsComponent;
}());



/***/ }),

/***/ "./src/app/recover/recover.component.css":
/*!***********************************************!*\
  !*** ./src/app/recover/recover.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/recover/recover.component.html":
/*!************************************************!*\
  !*** ./src/app/recover/recover.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slice slice-sm bg-secondary\">\n  <div class=\"container h-100vh d-flex align-items-center\">\n    <div class=\"col\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-6 col-lg-5 col-xl-4\">\n          <div class=\"text-center mb-4\">\n            <img class=\"mb-4\" src=\"../assets/img/brand/purpose-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n            <h6 class=\"h3\">Reset password</h6>\n            <p class=\"text-muted mb-0\">Enter your email below to proceed</p>\n          </div>\n          <span class=\"clearfix\"></span>\n          <form role=\"form\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Email address</label>\n              <div class=\"input-group input-group-transparent\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-user\"></i></span>\n                </div>\n                <input type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"name@example.com\">\n              </div>\n            </div>\n            <div class=\"text-center mb-3\">\n              <button type=\"button\" class=\"btn btn-block btn-primary\">Reset password</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/recover/recover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/recover/recover.component.ts ***!
  \**********************************************/
/*! exports provided: RecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverComponent", function() { return RecoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecoverComponent = /** @class */ (function () {
    function RecoverComponent() {
    }
    RecoverComponent.prototype.ngOnInit = function () {
    };
    RecoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recover',
            template: __webpack_require__(/*! ./recover.component.html */ "./src/app/recover/recover.component.html"),
            styles: [__webpack_require__(/*! ./recover.component.css */ "./src/app/recover/recover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecoverComponent);
    return RecoverComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"slice slice-lg bg-secondary\">\n  <div class=\"container h-100vh d-flex align-items-center\">\n    <div class=\"col\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-8 col-lg-6\">\n          <div class=\"text-center mb-4\">\n            <img class=\"mb-4\" src=\"../assets/img/brand/purpose-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\n            <h6 class=\"h3\">Create your free account</h6>\n            <p class=\"text-muted mb-0\">Made by developers developers</p>\n          </div>\n          <span class=\"clearfix\"></span>\n          <form role=\"form\">\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Email address</label>\n              <div class=\"input-group input-group-transparent\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-user\"></i></span>\n                </div>\n                <input type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"name@example.com\">\n              </div>\n            </div>\n            <div class=\"form-group mb-4\">\n              <label class=\"form-control-label\">Password</label>\n              <div class=\"input-group input-group-transparent\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-key\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" id=\"input-password\" placeholder=\"********\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"far fa-eye\"></i>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-control-label\">Confirm password</label>\n              <div class=\"input-group input-group-transparent\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-key\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control\" id=\"input-password-confirm\" placeholder=\"********\">\n              </div>\n            </div>\n            <div class=\"my-4\">\n              <div class=\"custom-control custom-checkbox\">\n                <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                  <span>I agree to the <a routerLink=\"/terms-and-conditions\">Terms and Conditions</a> and <a routerLink=\"/privacy-policy\">Privacy Policy</a>.</span>\n                </label>\n              </div>\n            </div>\n            <div class=\"row align-items-center\">\n              <div class=\"col-sm-7\">\n                <button type=\"submit\" class=\"btn btn-primary mb-3 mb-sm-0\">Create account</button>\n              </div>\n              <div class=\"col-sm-5 text-sm-right\">\n                <span class=\"small d-sm-block d-md-inline\">Already registered?</span>\n                <a routerLink=\"/login\" class=\"small font-weight-bold\">&nbsp;Sign in</a>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dorianlannay/Apps/kepler/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map