(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'tasklist', component: _task_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"] },
    { path: 'detail/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



// import { HostListener, Component } from '@angular/core';
class AppComponent {
    constructor() {
        this.title = 'Менеджер задач';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 1, consts: [[1, "menu", "mainMenu"], [1, "menu__item"], ["routerLink", "/dashboard", 1, "menuItem__content"], ["routerLink", "/tasklist", 1, "menuItem__content"], [1, "pageTitle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u0430\u0434\u0430\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".pageTitle[_ngcontent-%COMP%] {\n  padding: 0;\n  color: #fff;\n  text-shadow: 0 0 5px #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyMjI7XG59XG4iLCIucGFnZVRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyMjI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';



// import { MessagesComponent } from './messages/messages.component';



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"].withConfig({
                position: {
                    horizontal: {
                        position: 'right'
                    },
                    vertical: {
                        position: 'top'
                    }
                },
                behaviour: {
                    autoHide: 2000
                }
                // Custom options in here
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"],
        _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"],
        // MessagesComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"],
                    _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"],
                    // MessagesComponent,
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"].withConfig({
                        position: {
                            horizontal: {
                                position: 'right'
                            },
                            vertical: {
                                position: 'top'
                            }
                        },
                        behaviour: {
                            autoHide: 2000
                        }
                        // Custom options in here
                    }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ],
                providers: [],
                // providers: [{provide: APP_BASE_HREF, useValue : '/' }]
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");






function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DashboardComponent_nav_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E: ", ctx_r31.countConfirmed, "/", ctx_r31.tasks.length, "");
} }
function DashboardComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_ng_template_5_div_0_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const task_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.save(task_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Created by Alice Mortaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "from the Noun Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_5_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const task_r37 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.onSelect(task_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-confirmed", task_r37.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "isCofirmed", task_r37.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "isCofirmed", task_r37.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "isCofirmed", task_r37.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", task_r37.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r37.title);
} }
function DashboardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_ng_template_5_div_0_Template, 18, 7, "div", 6);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.tasks);
} }
function DashboardComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 \u043F\u0443\u0441\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { TASKS } from '../mock-tasks'; // remove on prod
class DashboardComponent {
    constructor(taskService, notifierService) {
        this.taskService = taskService;
        this.tasks = [];
        this.sortKey = 'title';
        this.sortWay = 'inc';
        this.page = 1;
        this.countConfirmed = 0;
        this.notifier = notifierService;
    }
    ngOnInit() {
        this.getTasks();
    }
    getTasks() {
        const params = {
            page: this.page,
            sortKey: this.sortKey,
            sortWay: this.sortWay,
            onMain: true,
        };
        this.taskService.getTasks(params).subscribe((data) => {
            console.log(data);
            this.tasks = data.results;
            this.pageData = data;
            this.calcConfirmed();
        });
    }
    calcConfirmed() {
        this.countConfirmed = 0;
        for (const task of this.tasks) {
            if (task.isCofirmed) {
                this.countConfirmed += 1;
            }
        }
    }
    save(task) {
        if (task.isCofirmed) {
            task.isCofirmed = false;
        }
        else {
            task.isCofirmed = true;
        }
        this.taskService.updateTask(task).subscribe(data => {
            console.log(data);
            // notify
            this.notifier.notify('success', 'Задача успешно обновлена!');
            this.calcConfirmed();
        });
    }
    onSelect(task) {
        this.selectedTask = task;
        // this.messageService.add(`TaskService: Selected task id=${task.id}`);
    }
    onClose() {
        this.selectedTask = null;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 11, vars: 5, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["class", "taskInfo", 4, "ngIf"], ["thenBlock", ""], ["elseBlock", ""], [3, "task", "taskChange"], [1, "taskInfo"], ["class", "task", 3, "task-confirmed", 4, "ngFor", "ngForOf"], [1, "task"], [1, "taskValue", "taskState"], [1, "legend", 3, "for"], ["type", "checkbox", 1, "legend__switcher", 3, "id", "checked", "name", "change"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "legend__icon"], ["d", "M67.624,72.538c-2.295-11.419-4.692-24.843-2.153-36.414c0.107-0.49,0.051-0.926-0.111-1.293   c-0.243-0.738-0.866-1.327-1.881-1.32c-12.609,0.119-25.143,1.758-37.752,1.875c-2.294,0.022-2.608,3.081-0.95,3.914   c-0.02,0.119-0.034,0.238-0.034,0.37c0,0-0.192,23.523,2.231,35.075c0,0,0.005,0.015,0.007,0.024   c-0.222,0.963,0.168,1.986,1.432,2.182c10.363,1.617,20.406-1.573,30.752-1.803c2.659-0.059,2.664-4.187,0-4.127   c-9.452,0.207-18.875,3.189-28.319,2.117c-2.211-10.998-1.973-22.651-1.978-33.469c0-0.081-0.015-0.151-0.024-0.227   c10.735-0.297,21.417-1.488,32.15-1.746c-1.863,11.68,0.366,24.572,2.651,35.934C64.17,76.245,68.146,75.137,67.624,72.538z", 1, "legend__icon_box"], ["d", "M21.444,51.573c6.405,6.409,12.812,12.809,19.217,19.214c1.751,1.754,4.596,1.275,5.877-0.755   c9.353-14.826,19.448-29.436,32.601-41.167c3.608-3.217-1.703-8.49-5.289-5.29c-13.596,12.127-24.106,27.36-33.775,42.683   c1.961-0.254,3.919-0.507,5.877-0.76c-6.405-6.405-12.812-12.807-19.215-19.214C23.324,42.869,18.034,48.159,21.444,51.573   L21.444,51.573z", 1, "legend__icon_check"], ["x", "0", "y", "115", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], ["x", "0", "y", "120", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], [1, "legend__text"], [1, "taskValue", "taskTitle"], [1, "taskValue", "taskControl"], ["type", "button", 1, "taskDetails", 3, "click"], [1, "task", "task-empty"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_nav_4_Template, 2, 2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_ng_template_7_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-task-detail", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskChange", function DashboardComponent_Template_app_task_detail_taskChange_9_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "notifier-container");
    } if (rf & 2) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length)("ngIfThen", _r32)("ngIfElse", _r34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.selectedTask);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n\n.taskInfo[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  background-color: #fff;\n  text-align: right;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: #fff;\n  min-height: 30px;\n  padding: 10px;\n  border-bottom: 1px solid #dedede;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.task-confirmed[_ngcontent-%COMP%] {\n  background: #8bc34a;\n  text-decoration: line-through;\n}\n\n.taskValue[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-self: center;\n}\n\n.taskTitle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.taskState[_ngcontent-%COMP%], .taskControl[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n\n.taskDetails[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background-color: #949494;\n  color: #fff;\n  outline: 0;\n  box-shadow: 0 1px 3px 0px #222;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.taskDetails[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-color: #f9ce4c;\n}\n\n.task-empty[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px 20px;\n}\n\n.legend[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin: 0;\n  color: #222;\n  position: relative;\n  cursor: pointer;\n  padding: 0 0 0 40px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  width: 18px;\n  height: 18px;\n  content: \"\";\n  display: inline-block;\n  box-shadow: 0px 1px 3px 0px #222;\n  vertical-align: middle;\n  margin: 0 7px 0 0;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  position: absolute;\n  top: 0px;\n  left: 5px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  background-color: #efefef;\n  box-shadow: 0px 1px 3px 0px #444;\n  border-color: #5a5a5a;\n}\n\n.legend[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.legend__icon[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  top: -8px;\n  left: 1px;\n  z-index: 5;\n}\n\n.legend__icon[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n\n.legend__icon_box[_ngcontent-%COMP%] {\n  fill: #5a5a5a;\n  display: none;\n}\n\n.legend__icon_check[_ngcontent-%COMP%] {\n  display: none;\n  fill: #5a5a5a;\n}\n\n.legend__switcher[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.legend__switcher[_ngcontent-%COMP%]:checked    + .legend__icon[_ngcontent-%COMP%]   .legend__icon_check[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.legend[_ngcontent-%COMP%]   .legend__text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -5px;\n  vertical-align: middle;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBRUEsNEJBQUE7RUFBQSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsV0FBQTtBQ0tGOztBREhBOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ09GOztBRE5FO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDUUo7O0FESkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ09GOztBREpBO0VBT0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FOYTtFQU9iLGtCQUFBO0VBZ0NBLGVBQUE7RUFDQSxtQkFBQTtBQzlCRjs7QURERTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUdBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNBSjs7QURHRTtFQUNFLHlCQS9CYTtFQWdDYixnQ0FBQTtFQUNBLHFCQS9Cb0I7QUM4QnhCOztBREtFO0VBQ0UsY0FBQTtBQ0hKOztBRFVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDUko7O0FEVUk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ1JOOztBRFdFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNUSjs7QURXRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDVEo7O0FEV0U7RUFDRSxhQUFBO0FDVEo7O0FEV0k7RUFDRSxjQUFBO0FDVE47O0FEWUU7RUFFRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG59XG4udGFza0luZm8ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnRhc2stY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZDogIzhiYzM0YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4udGFza1ZhbHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udGFza1RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFza1N0YXRlLFxuLnRhc2tDb250cm9sIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YXNrRGV0YWlscyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4ICMyMjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjljZTRjO1xuICB9XG59XG5cbi50YXNrLWVtcHR5IHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubGVnZW5kIHtcbiAgJGxlZ2VuZC1jb2xvcjogI2VmZWZlZjtcbiAgJGxlZ2VuZC1jb2xvci1icmlnaHQ6ICM0NDQ7XG4gICRsZWdlbmQtY29sb3ItYm9yZGVyOiAjNWE1YTVhO1xuICAkdGV4dC1jb2xvcjogIzIyMjtcblxuICAvLyBAaW5jbHVkZSBOZXVjaGE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAvLyBAaW5jbHVkZSBzaXplKDIwcHgsIDIwcHgpO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzIyMjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMCA3cHggMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgIC8vZm9yIGNoZWNrYm94XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuICAvLyAmLWFyY2hpdmUge1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsZWdlbmQtY29sb3I7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICRsZWdlbmQtY29sb3ItYnJpZ2h0O1xuICAgIGJvcmRlci1jb2xvcjogJGxlZ2VuZC1jb2xvci1ib3JkZXI7XG4gIH1cbiAgLy8gfVxuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLy8gd2l0aCBjaGVja2JveFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMCAwIDQwcHg7XG5cbiAgJl9faWNvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgbGVmdDogMXB4O1xuICAgIHotaW5kZXg6IDU7XG5cbiAgICB0ZXh0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAmX19pY29uX2JveCB7XG4gICAgZmlsbDogIzVhNWE1YTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICZfX2ljb25fY2hlY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmlsbDogIzVhNWE1YTtcbiAgfVxuICAmX19zd2l0Y2hlciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCArIC5sZWdlbmRfX2ljb24gLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLmxlZ2VuZF9fdGV4dCB7XG4gICAgLy8gQGluY2x1ZGUgTmV1Y2hhO1xuICAgIG1hcmdpbjogMCAwIDAgLTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG59XG4iLCJzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG59XG5cbi50YXNrSW5mbyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi50YXNrLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQ6ICM4YmMzNGE7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udGFza1ZhbHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50YXNrVGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRhc2tTdGF0ZSxcbi50YXNrQ29udHJvbCB7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrRGV0YWlscyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4ICMyMjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnRhc2tEZXRhaWxzOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItY29sb3I6ICNmOWNlNGM7XG59XG5cbi50YXNrLWVtcHR5IHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzIyMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMCAwIDQwcHg7XG59XG4ubGVnZW5kOjpiZWZvcmUge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAjMjIyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgN3B4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNXB4O1xufVxuLmxlZ2VuZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICM0NDQ7XG4gIGJvcmRlci1jb2xvcjogIzVhNWE1YTtcbn1cbi5sZWdlbmQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5sZWdlbmRfX2ljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICBsZWZ0OiAxcHg7XG4gIHotaW5kZXg6IDU7XG59XG4ubGVnZW5kX19pY29uIHRleHQge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZ2VuZF9faWNvbl9ib3gge1xuICBmaWxsOiAjNWE1YTVhO1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZpbGw6ICM1YTVhNWE7XG59XG4ubGVnZW5kX19zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGVnZW5kX19zd2l0Y2hlcjpjaGVja2VkICsgLmxlZ2VuZF9faWNvbiAubGVnZW5kX19pY29uX2NoZWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubGVnZW5kIC5sZWdlbmRfX3RleHQge1xuICBtYXJnaW46IDAgMCAwIC01cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function TaskDetailComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.task.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.task.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.task.user = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.task.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.task.isCofirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Created by Alice Mortaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "from the Noun Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.task.onMain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Created by Alice Mortaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "text", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "from the Noun Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.save(ctx_r50.task); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r41.task.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.task.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.task.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.task.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.task.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.task.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r41.task.onMain);
} }
class TaskDetailComponent {
    constructor(route, taskService, location, notifierService) {
        this.route = route;
        this.taskService = taskService;
        this.location = location;
        this.taskChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifier = notifierService;
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.onClose();
        }
    }
    ngOnInit() { }
    onClose() {
        this.task = null;
        this.taskChange.emit(this.task);
    }
    save(task) {
        this.taskService.updateTask(this.task).subscribe(data => {
            console.log(data);
            // notify
            this.notifier.notify('success', 'Задача успешно обновлена!');
        });
    }
}
TaskDetailComponent.ɵfac = function TaskDetailComponent_Factory(t) { return new (t || TaskDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"])); };
TaskDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailComponent, selectors: [["app-task-detail"]], hostBindings: function TaskDetailComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TaskDetailComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { task: "task" }, outputs: { taskChange: "taskChange" }, decls: 1, vars: 1, consts: [["class", "taskForm", "state", "visible", 4, "ngIf"], ["state", "visible", 1, "taskForm"], [1, "taskTitle"], ["type", "hidden", "name", "id", "required", "", 3, "value"], ["type", "text", "name", "title", "placeholder", "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "user", "placeholder", "\u0424\u0418\u041E", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", 1, "inputField", 3, "ngModel", "ngModelChange"], ["for", "editStatus", 1, "legend"], ["id", "editStatus", "type", "checkbox", "name", "isCofirmed", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "legend__icon"], ["d", "M67.624,72.538c-2.295-11.419-4.692-24.843-2.153-36.414c0.107-0.49,0.051-0.926-0.111-1.293   c-0.243-0.738-0.866-1.327-1.881-1.32c-12.609,0.119-25.143,1.758-37.752,1.875c-2.294,0.022-2.608,3.081-0.95,3.914   c-0.02,0.119-0.034,0.238-0.034,0.37c0,0-0.192,23.523,2.231,35.075c0,0,0.005,0.015,0.007,0.024   c-0.222,0.963,0.168,1.986,1.432,2.182c10.363,1.617,20.406-1.573,30.752-1.803c2.659-0.059,2.664-4.187,0-4.127   c-9.452,0.207-18.875,3.189-28.319,2.117c-2.211-10.998-1.973-22.651-1.978-33.469c0-0.081-0.015-0.151-0.024-0.227   c10.735-0.297,21.417-1.488,32.15-1.746c-1.863,11.68,0.366,24.572,2.651,35.934C64.17,76.245,68.146,75.137,67.624,72.538z", 1, "legend__icon_box"], ["d", "M21.444,51.573c6.405,6.409,12.812,12.809,19.217,19.214c1.751,1.754,4.596,1.275,5.877-0.755   c9.353-14.826,19.448-29.436,32.601-41.167c3.608-3.217-1.703-8.49-5.289-5.29c-13.596,12.127-24.106,27.36-33.775,42.683   c1.961-0.254,3.919-0.507,5.877-0.76c-6.405-6.405-12.812-12.807-19.215-19.214C23.324,42.869,18.034,48.159,21.444,51.573   L21.444,51.573z", 1, "legend__icon_check"], ["x", "0", "y", "115", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], ["x", "0", "y", "120", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], [1, "legend__text"], ["for", "editOnMain", 1, "legend"], ["id", "editOnMain", "type", "checkbox", "name", "onMain", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], [1, "btnGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "confirm", 1, "btn", "btnConfirm", 3, "click"], ["type", "button", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "btn", "btnClose", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"]], template: function TaskDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskDetailComponent_form_0_Template, 40, 7, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]], styles: [".taskForm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  max-width: 400px;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 2px 5px 1px #222;\n  top: 60px;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  max-width: 100%;\n  display: block;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-bottom-width: 2px;\n  outline: none;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 100%;\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: serif;\n}\n\n.inputField[_ngcontent-%COMP%]:focus {\n  border-color: teal;\n  -webkit-transition: none;\n  transition: none;\n}\n\ntextarea.inputField[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100%;\n  padding: 15px 10px;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  font-size: 16px;\n  padding: 0 10px;\n  background-color: #efefef;\n  cursor: pointer;\n  height: 30px;\n  border-radius: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: inline-block;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n\n.btnConfirm[_ngcontent-%COMP%] {\n  border: 1px solid #4b7b17;\n  background-color: #70a734;\n  color: #fff;\n}\n\n.btnConfirm[_ngcontent-%COMP%]:hover {\n  background-color: #97d451;\n}\n\n.btnClose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  padding: 0;\n  background-color: #555;\n  color: #fff;\n  font-size: 14px;\n}\n\n.btnClose[_ngcontent-%COMP%]:hover {\n  background-color: #c71414;\n}\n\n.btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: end;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.taskForm[_ngcontent-%COMP%]   .btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.legend[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin: 0 0 15px;\n  color: #222;\n  position: relative;\n  cursor: pointer;\n  padding: 0 0 0 40px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  width: 18px;\n  height: 18px;\n  content: \"\";\n  display: inline-block;\n  box-shadow: 0px 1px 3px 0px #222;\n  vertical-align: middle;\n  margin: 0 7px 0 0;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  position: absolute;\n  top: 0px;\n  left: 5px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  background-color: #efefef;\n  box-shadow: 0px 1px 3px 0px #444;\n  border-color: #5a5a5a;\n}\n\n.legend[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.legend__icon[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  top: -8px;\n  left: 1px;\n  z-index: 5;\n}\n\n.legend__icon[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n\n.legend__icon_box[_ngcontent-%COMP%] {\n  fill: #5a5a5a;\n  display: none;\n}\n\n.legend__icon_check[_ngcontent-%COMP%] {\n  display: none;\n  fill: #5a5a5a;\n}\n\n.legend__switcher[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.legend__switcher[_ngcontent-%COMP%]:checked    + .legend__icon[_ngcontent-%COMP%]   .legend__icon_check[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.legend[_ngcontent-%COMP%]   .legend__text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -5px;\n  vertical-align: middle;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtBQ0VKOztBREFJO0VBQ0UsY0FBQTtBQ0VOOztBREFJO0VBQ0UsZUFBQTtBQ0VOOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBT0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBTmE7RUFPYixrQkFBQTtFQWdDQSxlQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7O0FES0U7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFHQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTko7O0FEU0U7RUFDRSx5QkEvQmE7RUFnQ2IsZ0NBQUE7RUFDQSxxQkEvQm9CO0FDd0J4Qjs7QURXRTtFQUNFLGNBQUE7QUNUSjs7QURnQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkSjs7QURnQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ2ROOztBRGlCRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDZko7O0FEaUJFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNmSjs7QURpQkU7RUFDRSxhQUFBO0FDZko7O0FEaUJJO0VBQ0UsY0FBQTtBQ2ZOOztBRGtCRTtFQUVFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uYnRuR3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgLmJ0biB7XG4gICAgbWFyZ2luOiAwIDNweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG4udGFza0Zvcm0gLmJ0bkdyb3VwIC5idG4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGVnZW5kIHtcbiAgJGxlZ2VuZC1jb2xvcjogI2VmZWZlZjtcbiAgJGxlZ2VuZC1jb2xvci1icmlnaHQ6ICM0NDQ7XG4gICRsZWdlbmQtY29sb3ItYm9yZGVyOiAjNWE1YTVhO1xuICAkdGV4dC1jb2xvcjogIzIyMjtcblxuICAvLyBAaW5jbHVkZSBOZXVjaGE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgLy8gQGluY2x1ZGUgc2l6ZSgyMHB4LCAyMHB4KTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICMyMjI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgN3B4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAvL2ZvciBjaGVja2JveFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cbiAgLy8gJi1hcmNoaXZlIHtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVnZW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAkbGVnZW5kLWNvbG9yLWJyaWdodDtcbiAgICBib3JkZXItY29sb3I6ICRsZWdlbmQtY29sb3ItYm9yZGVyO1xuICB9XG4gIC8vIH1cblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC8vIHdpdGggY2hlY2tib3hcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xuXG4gICZfX2ljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIGxlZnQ6IDFweDtcbiAgICB6LWluZGV4OiA1O1xuXG4gICAgdGV4dCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9faWNvbl9ib3gge1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAmX19pY29uX2NoZWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gIH1cbiAgJl9fc3dpdGNoZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQgKyAubGVnZW5kX19pY29uIC5sZWdlbmRfX2ljb25fY2hlY2sge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5sZWdlbmRfX3RleHQge1xuICAgIC8vIEBpbmNsdWRlIE5ldWNoYTtcbiAgICBtYXJnaW46IDAgMCAwIC01cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufVxuIiwiLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uYnRuR3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbi5idG5Hcm91cCAuYnRuIHtcbiAgbWFyZ2luOiAwIDNweDtcbn1cbi5idG5Hcm91cCAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYnRuR3JvdXAgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4udGFza0Zvcm0gLmJ0bkdyb3VwIC5idG4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgY29sb3I6ICMyMjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xufVxuLmxlZ2VuZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzIyMjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDdweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5sZWdlbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAjNDQ0O1xuICBib3JkZXItY29sb3I6ICM1YTVhNWE7XG59XG4ubGVnZW5kOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubGVnZW5kX19pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogMXB4O1xuICB6LWluZGV4OiA1O1xufVxuLmxlZ2VuZF9faWNvbiB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fYm94IHtcbiAgZmlsbDogIzVhNWE1YTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fY2hlY2sge1xuICBkaXNwbGF5OiBub25lO1xuICBmaWxsOiAjNWE1YTVhO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXI6Y2hlY2tlZCArIC5sZWdlbmRfX2ljb24gLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxlZ2VuZCAubGVnZW5kX190ZXh0IHtcbiAgbWFyZ2luOiAwIDAgMCAtNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-detail',
                templateUrl: './task-detail.component.html',
                styleUrls: ['./task-detail.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






// import { TASKS } from './mock-tasks';
// import { PAGES } from './mock-pages';
class TaskService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.taskUrl = 'api/gettasks/';
        this.createURL = 'api/createtask/';
        this.updateURL = 'api/updatetask/';
        this.removeURL = 'api/removetask/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getTasks(params) {
        const options = {
            params: null
        };
        if (params.onMain) {
            options.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('page', params.page).set('sortKey', params.sortKey)
                .set('sortWay', params.sortWay).set('onMain', params.onMain);
        }
        else {
            options.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('page', params.page).set('sortKey', params.sortKey)
                .set('sortWay', params.sortWay).set('taskPerPage', params.taskPerPage);
        }
        console.log('options', options);
        return this.http.get(this.taskUrl, options);
        // return of(PAGES);
    }
    getTask(id) {
        const url = `${this.taskUrl}/${id}`;
        // this.messageService.add(`TaskService: fetched task id=${id}`);
        // return of(TASKS.find(task => task.id === id));
        return this.http.get(url);
    }
    addTask(task) {
        console.log('before send', task);
        return this.http.post(this.createURL, task, this.httpOptions);
    }
    updateTask(task) {
        console.log('before send', task);
        return this.http.post(this.updateURL, task, this.httpOptions);
    }
    deleteTask(data) {
        const id = typeof data.task === 'number' ? data.task : data.task.id;
        const page = data.page;
        console.log('delete task:', id);
        return this.http.post(this.removeURL, { id, page }, this.httpOptions);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");







function TaskComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
} }
function TaskComponent_ng_template_41_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.description);
} }
function TaskComponent_ng_template_41_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_template_41_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const task_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onSelect(task_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_template_41_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const task_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.delete(task_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskComponent_ng_template_41_div_0_div_15_Template, 3, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-opened", ctx_r7.descCtrl)("task-confirmed", task_r8.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.pub_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r8.description);
} }
function TaskComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskComponent_ng_template_41_div_0_Template, 16, 9, "div", 33);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
} }
function TaskComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 \u043F\u0443\u0441\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_form_47_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_form_47_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.isNewConfirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Created by Alice Mortaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "from the Noun Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_form_47_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.isNewOnMain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Created by Alice Mortaro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "from the Noun Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_47_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_47_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r22.add(_r14.value, _r15.value, _r16.value, _r17.value); _r14.value = ""; _r15.value = ""; _r16.value = ""; return _r17.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_47_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isNewConfirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isNewOnMain);
} }
function TaskComponent_nav_48_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_nav_48_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.setPage(ctx_r26.prev); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_nav_48_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_nav_48_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.setPage(ctx_r28.next); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_nav_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_nav_48_div_1_Template, 3, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskComponent_nav_48_div_5_Template, 3, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.prev);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.next);
} }
// import { Page } from '../page';
// import { TASKS } from '../mock-tasks'; // remove on prod
class TaskComponent {
    constructor(taskService, notifierService
    // private messageService: MessageService
    ) {
        this.taskService = taskService;
        this.tasks = [];
        // tasks: Task[] = TASKS; // remove on prod
        this.sortKey = 'title';
        this.sortWay = 'inc';
        this.page = 1;
        this.prev = null;
        this.next = null;
        this.taskPerPage = 5;
        this.isInserting = false;
        this.isNewConfirmed = false;
        this.isNewOnMain = false;
        this.descCtrl = false;
        this.notifier = notifierService;
    }
    // for createform
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.onClose();
        }
    }
    ngOnInit() {
        this.getTasks();
    }
    getTasks() {
        const params = {
            page: this.page,
            sortKey: this.sortKey,
            sortWay: this.sortWay,
            taskPerPage: this.taskPerPage,
        };
        this.taskService.getTasks(params).subscribe(data => {
            console.log(data);
            this.tasks = data.results;
            this.page = data.page;
            this.prev = data.prev;
            this.next = data.next;
            this.taskPerPage = data.taskPerPage;
        });
    }
    delete(task) {
        this.tasks = this.tasks.filter(h => h !== task);
        const sendData = {
            task,
            page: this.page,
        };
        this.taskService.deleteTask(sendData).subscribe(data => {
            console.log(data);
            this.page = data.page;
            // notify
            this.notifier.notify('info', 'Задача удалена');
            this.getTasks();
        });
    }
    add(taskTitle, taskDescribe, taskUser, taskEmail) {
        console.log(taskTitle, taskDescribe, taskUser, taskEmail, this.isNewConfirmed, this.isNewOnMain);
        if (!taskTitle || !taskUser || !taskEmail) {
            return;
        }
        const newtask = {
            title: taskTitle,
            description: taskDescribe,
            user: taskUser,
            email: taskEmail,
            isCofirmed: this.isNewConfirmed,
            onMain: this.isNewOnMain
        };
        this.isNewConfirmed = false;
        this.isNewOnMain = false;
        this.taskService.addTask({ newtask }).subscribe(task => {
            // this.tasks.push(task);
            console.log(task);
            this.page = 1;
            this.sortKey = 'pub_date';
            this.sortWay = 'dec';
            this.getTasks();
            // notify
            this.notifier.notify('success', 'Задача успешно добавлена!');
        });
    }
    onSelect(task) {
        this.selectedTask = task;
        // this.messageService.add(`TaskService: Selected task id=${task.id}`);
    }
    sort(key) {
        if (key === this.sortKey) {
            if (this.sortWay === 'inc') {
                this.sortWay = 'dec';
            }
            else {
                this.sortWay = 'inc';
            }
        }
        else {
            this.sortKey = key;
            this.sortWay = 'inc';
        }
        this.page = 1;
        this.getTasks();
    }
    setPage(page) {
        this.page = page;
        this.getTasks();
    }
    onInsert() {
        this.isInserting = true;
    }
    onClose() {
        this.isInserting = false;
        this.selectedTask = null;
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], hostBindings: function TaskComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TaskComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 49, vars: 8, consts: [[1, "pageTitle"], [1, ""], ["title", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443", 1, "createBtn", 3, "click"], [1, "fas", "fa-plus"], ["for", "descCtrl", 1, "legend"], ["id", "descCtrl", "type", "checkbox", "name", "newConfirmed", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "legend__icon"], ["d", "M67.624,72.538c-2.295-11.419-4.692-24.843-2.153-36.414c0.107-0.49,0.051-0.926-0.111-1.293   c-0.243-0.738-0.866-1.327-1.881-1.32c-12.609,0.119-25.143,1.758-37.752,1.875c-2.294,0.022-2.608,3.081-0.95,3.914   c-0.02,0.119-0.034,0.238-0.034,0.37c0,0-0.192,23.523,2.231,35.075c0,0,0.005,0.015,0.007,0.024   c-0.222,0.963,0.168,1.986,1.432,2.182c10.363,1.617,20.406-1.573,30.752-1.803c2.659-0.059,2.664-4.187,0-4.127   c-9.452,0.207-18.875,3.189-28.319,2.117c-2.211-10.998-1.973-22.651-1.978-33.469c0-0.081-0.015-0.151-0.024-0.227   c10.735-0.297,21.417-1.488,32.15-1.746c-1.863,11.68,0.366,24.572,2.651,35.934C64.17,76.245,68.146,75.137,67.624,72.538z", 1, "legend__icon_box"], ["d", "M21.444,51.573c6.405,6.409,12.812,12.809,19.217,19.214c1.751,1.754,4.596,1.275,5.877-0.755   c9.353-14.826,19.448-29.436,32.601-41.167c3.608-3.217-1.703-8.49-5.289-5.29c-13.596,12.127-24.106,27.36-33.775,42.683   c1.961-0.254,3.919-0.507,5.877-0.76c-6.405-6.405-12.812-12.807-19.215-19.214C23.324,42.869,18.034,48.159,21.444,51.573   L21.444,51.573z", 1, "legend__icon_check"], ["x", "0", "y", "115", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], ["x", "0", "y", "120", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], [1, "legend__text"], [1, "menu", "taskMenu"], [1, "menu__item", "taskTitle"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0443", 1, "menuBtn", "sortBtn", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-sort"], [1, "menu__item", "taskUser"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0438\u043C\u0435\u043D\u0438", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "taskEmail"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043F\u043E\u0447\u0442\u0435", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "taskDate"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0434\u0430\u0442\u0435", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "pageCtrlBox"], [1, "pageCtrl"], ["id", "taskPerPage", "name", "taskPerPage", "type", "number", "min", "5", "max", "50", 1, "input-number", "pageCtrl__item", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "pageCtrl__item", 3, "click"], ["class", "taskList", 4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "task", "taskChange"], ["class", "taskForm", "state", "visible", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "taskList"], ["class", "task", 3, "task-opened", "task-confirmed", 4, "ngFor", "ngForOf"], [1, "task"], [1, "taskHeader"], [1, "taskHeader__item", "taskTitle"], [1, "taskHeader__item", "taskUser"], [1, "taskHeader__item", "taskEmail"], [1, "taskHeader__item", "taskDate"], [1, "taskHeader__item", "btnGroup", "taskDate"], ["type", "button", "title", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C", 1, "btn", "taskEdit", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-edit"], ["type", "button", "title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "btn", "taskRemove", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-trash-alt"], ["class", "taskBody", 4, "ngIf"], [1, "taskBody"], [1, "task", "task-empty"], ["state", "visible", 1, "taskForm"], [1, "taskTitle"], ["type", "text", "name", "title", "placeholder", "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", "required", "", 1, "inputField"], ["taskTitle", ""], ["type", "text", "name", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "inputField"], ["taskDescribe", ""], ["type", "text", "name", "user", "placeholder", "\u0424\u0418\u041E", 1, "inputField"], ["taskUser", ""], ["type", "email", "name", "email", "placeholder", "Email", 1, "inputField"], ["taskEmail", ""], ["for", "newConfirmed", 1, "legend"], ["id", "newConfirmed", "type", "checkbox", "name", "newConfirmed", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], ["for", "newOnMain", 1, "legend"], ["id", "newOnMain", "type", "checkbox", "name", "newOnMain", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], [1, "btnGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "confirm", 1, "btn", "btnConfirm", 3, "click"], ["type", "button", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "btn", "btnClose", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"], [1, "pagination"], ["class", "pagination__item", 4, "ngIf"], [1, "pagination__item"], [1, "paginationContent"], ["title", "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "paginationContent", 3, "click"], ["title", "\u0421\u043B\u0435\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "paginationContent", 3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_3_listener() { return ctx.onInsert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_Template_input_ngModelChange_7_listener($event) { return ctx.descCtrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Created by Alice Mortaro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "from the Noun Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_20_listener() { return ctx.sort("title"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_24_listener() { return ctx.sort("user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_28_listener() { return ctx.sort("email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_32_listener() { return ctx.sort("pub_date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0414\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_Template_input_ngModelChange_37_listener($event) { return ctx.taskPerPage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_38_listener() { return ctx.getTasks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TaskComponent_div_40_Template, 1, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TaskComponent_ng_template_41_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TaskComponent_ng_template_43_Template, 2, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "app-task-detail", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskChange", function TaskComponent_Template_app_task_detail_taskChange_45_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TaskComponent_form_47_Template, 43, 2, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TaskComponent_nav_48_Template, 6, 3, "nav", 31);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.taskPerPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.selectedTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInserting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prev || ctx.next);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_5__["TaskDetailComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".pageTitle[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n}\n.pageTitle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.pageTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border: none;\n}\n.pageTitle[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.input-number[_ngcontent-%COMP%] {\n  width: 60px;\n  background-color: #fff;\n  border: 1px solid #666;\n  border-radius: 5px;\n  padding: 0 0 0 10px;\n  height: 30px;\n}\n.pageCtrlBox[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.pageCtrl[_ngcontent-%COMP%] {\n  align-self: center;\n  margin: 0 3px;\n}\n.pageCtrl[_ngcontent-%COMP%]   .pageCtrl__item[_ngcontent-%COMP%] {\n  border-radius: 0;\n  align-self: center;\n}\n.pageCtrl[_ngcontent-%COMP%]   .pageCtrl__item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.pageCtrl[_ngcontent-%COMP%]   .pageCtrl__item[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.taskTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.taskHeader[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  align-content: center;\n  min-height: 50px;\n  word-break: break-word;\n}\n.taskBody[_ngcontent-%COMP%] {\n  display: none;\n  background: #efefef;\n  padding: 5px 10px;\n}\n.taskHeader__item[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 0 5px;\n}\n.taskStateToggler[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  padding: 10px;\n  border: 1px solid #7b7b7b;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.taskStateToggler[_ngcontent-%COMP%]:hover {\n  background-color: #00000014;\n}\n.task[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.taskMsg[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  background-color: #00000005;\n  border-radius: 15px;\n  border: 1px solid #c3d5af;\n  margin: 5px;\n  display: none;\n}\n.taskMsg-visible[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.task-confirmed[_ngcontent-%COMP%] {\n  background-color: #d8ecc1;\n}\n.task.task-opened[_ngcontent-%COMP%]   .taskBody[_ngcontent-%COMP%] {\n  display: block;\n}\n.task.task-opened[_ngcontent-%COMP%]   .taskHeader[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 5px -4px #222;\n}\n.task[_ngcontent-%COMP%]   .taskTitle[_ngcontent-%COMP%], .taskMenu[_ngcontent-%COMP%]   .taskTitle[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.taskUser[_ngcontent-%COMP%], .taskEmail[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.taskDate[_ngcontent-%COMP%], .pageCtrlBox[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.task-empty[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px 20px;\n}\n.taskForm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  max-width: 400px;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 2px 5px 1px #222;\n  top: 60px;\n}\n.inputField[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  max-width: 100%;\n  display: block;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-bottom-width: 2px;\n  outline: none;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 100%;\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: serif;\n}\n.inputField[_ngcontent-%COMP%]:focus {\n  border-color: teal;\n  -webkit-transition: none;\n  transition: none;\n}\ntextarea.inputField[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100%;\n  padding: 15px 10px;\n  -webkit-transition: none;\n  transition: none;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #5a5a5a;\n  font-size: 16px;\n  padding: 0 10px;\n  background-color: #efefef;\n  cursor: pointer;\n  height: 30px;\n  border-radius: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: inline-block;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n.btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: end;\n}\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.taskForm[_ngcontent-%COMP%]   .btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.btnConfirm[_ngcontent-%COMP%] {\n  border: 1px solid #4b7b17;\n  background-color: #70a734;\n  color: #fff;\n}\n.btnConfirm[_ngcontent-%COMP%]:hover {\n  background-color: #97d451;\n}\n.btnClose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  padding: 0;\n  background-color: #555;\n  color: #fff;\n  font-size: 14px;\n}\n.btnClose[_ngcontent-%COMP%]:hover {\n  background-color: #c71414;\n}\n.sortBtn[_ngcontent-%COMP%] {\n  color: #616161;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 10px;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 11px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border: none;\n  outline: 0;\n}\n.sortBtn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #ffaa0c;\n  cursor: pointer;\n}\n.taskMenu[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 0 10px;\n}\n.taskMenu[_ngcontent-%COMP%]   .menuBtn[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n.pagination[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n.paginationContent[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 34px;\n  min-width: 34px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #5a5a5a;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.paginationContent[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #5a5a5a;\n  color: #fff;\n}\n.pagination__item[_ngcontent-%COMP%] {\n  padding: 0 3px;\n}\n.pagination__item[_ngcontent-%COMP%]:first-child   .paginationContent[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.pagination__item[_ngcontent-%COMP%]:last-child   .paginationContent[_ngcontent-%COMP%] {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.createBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  min-width: 30px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #5a5a5a;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n  font-size: 16px;\n  margin: 0 0 0 5px;\n}\n.createBtn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #5a5a5a;\n  color: #fff;\n}\n.taskRemove[_ngcontent-%COMP%] {\n  border-color: #c71414;\n  color: #c71414;\n}\n.taskRemove[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #c71414;\n}\n.legend[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin: 0 0 15px;\n  color: #222;\n  position: relative;\n  cursor: pointer;\n  padding: 0 0 0 40px;\n}\n.legend[_ngcontent-%COMP%]::before {\n  width: 18px;\n  height: 18px;\n  content: \"\";\n  display: inline-block;\n  box-shadow: 0px 1px 3px 0px #222;\n  vertical-align: middle;\n  margin: 0 7px 0 0;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  position: absolute;\n  top: 0px;\n  left: 5px;\n}\n.legend[_ngcontent-%COMP%]::before {\n  background-color: #efefef;\n  box-shadow: 0px 1px 3px 0px #444;\n  border-color: #5a5a5a;\n}\n.legend[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.legend__icon[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  top: -8px;\n  left: 1px;\n  z-index: 5;\n}\n.legend__icon[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n.legend__icon_box[_ngcontent-%COMP%] {\n  fill: #5a5a5a;\n  display: none;\n}\n.legend__icon_check[_ngcontent-%COMP%] {\n  display: none;\n  fill: #5a5a5a;\n}\n.legend__switcher[_ngcontent-%COMP%] {\n  display: none;\n}\n.legend__switcher[_ngcontent-%COMP%]:checked    + .legend__icon[_ngcontent-%COMP%]   .legend__icon_check[_ngcontent-%COMP%] {\n  display: block;\n}\n.legend[_ngcontent-%COMP%]   .legend__text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -5px;\n  vertical-align: middle;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7QUNFSjtBRENBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDSUY7QURIRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNLSjtBREpJO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQ01OO0FESkk7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FDTU47QUREQTtFQUNFLGlCQUFBO0FDSUY7QUREQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0lGO0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0lGO0FEREE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUY7QUREQTtFQUNFLDJCQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNJRjtBRERBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0lGO0FEREE7RUFDRSxxQkFBQTtBQ0lGO0FEREE7RUFDRSx5QkFBQTtBQ0lGO0FEREE7RUFDRSxjQUFBO0FDSUY7QURGQTtFQUNFLCtCQUFBO0FDS0Y7QURZQTs7RUFFRSxVQUFBO0FDVEY7QURZQTs7RUFFRSxVQUFBO0FDVEY7QURXQTs7RUFFRSxVQUFBO0FDUkY7QURXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUkY7QURZQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUNURjtBRFlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVEY7QURZQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1RGO0FEWUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNURjtBRFlBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBQ1RGO0FEWUE7RUFDRSx5QkFBQTtBQ1RGO0FEWUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLG9CQUFBO0FDVEY7QURVRTtFQUNFLGFBQUE7QUNSSjtBRFVJO0VBQ0UsY0FBQTtBQ1JOO0FEVUk7RUFDRSxlQUFBO0FDUk47QURZQTtFQUNFLFVBQUE7QUNURjtBRFlBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNURjtBRFlBO0VBQ0UseUJBQUE7QUNURjtBRFlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDVEY7QURZQTtFQUNFLHlCQUFBO0FDVEY7QURZQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1RGO0FEV0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1RKO0FEY0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUNYRjtBRFlFO0VBQ0UsY0FBQTtBQ1ZKO0FEZ0JBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDYkY7QURnQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNiRjtBRGVFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ2JKO0FEaUJBO0VBQ0UsY0FBQTtBQ2RGO0FEZUU7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FDYko7QURlRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUNiSjtBRGtCQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNmRjtBRGlCRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNmSjtBRG1CQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ2hCRjtBRGlCRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ2ZKO0FEbUJBO0VBT0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBTmE7RUFPYixrQkFBQTtFQWdDQSxlQUFBO0VBQ0EsbUJBQUE7QUNyREY7QURzQkU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFHQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDdkJKO0FEMEJFO0VBQ0UseUJBL0JhO0VBZ0NiLGdDQUFBO0VBQ0EscUJBL0JvQjtBQ094QjtBRDRCRTtFQUNFLGNBQUE7QUMxQko7QURpQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUMvQko7QURpQ0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQy9CTjtBRGtDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDaENKO0FEa0NFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNoQ0o7QURrQ0U7RUFDRSxhQUFBO0FDaENKO0FEa0NJO0VBQ0UsY0FBQTtBQ2hDTjtBRG1DRTtFQUVFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ2xDSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAmID4gZGl2IHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgaDIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAubGVnZW5kIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxufVxuLmlucHV0LW51bWJlciB7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5wYWdlQ3RybEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFnZUN0cmwge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAzcHg7XG4gIC5wYWdlQ3RybF9faXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuLnRhc2tUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFza0hlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi50YXNrQm9keSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4udGFza0hlYWRlcl9faXRlbSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi50YXNrU3RhdGVUb2dnbGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2I3YjdiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2tTdGF0ZVRvZ2dsZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XG59XG5cbi50YXNrIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFza01zZyB7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2Q1YWY7XG4gIG1hcmdpbjogNXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGFza01zZy12aXNpYmxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udGFzay1jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlY2MxO1xufVxuXG4udGFzay50YXNrLW9wZW5lZCAudGFza0JvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi50YXNrLnRhc2stb3BlbmVkIC50YXNrSGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMCA2cHggNXB4IC00cHggIzIyMjtcbn1cblxuLy8gLnRhc2tCb2R5IC5idG4ge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDU7XG4vLyAgIHdpZHRoOiAzMHB4O1xuLy8gICBtYXJnaW46IDAgM3B4IDVweDtcbi8vICAgaGVpZ2h0OiAzMHB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XG4vLyB9XG5cbi8vIC50YXNrQm9keSAuYnRuOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xuLy8gfVxuXG4udGFzayAudGFza1RpdGxlLFxuLnRhc2tNZW51IC50YXNrVGl0bGUge1xuICB3aWR0aDogMzAlO1xufVxuXG4udGFza1VzZXIsXG4udGFza0VtYWlsIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi50YXNrRGF0ZSxcbi5wYWdlQ3RybEJveCB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi50YXNrLWVtcHR5IHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4vLyBmb3JtXG4udGFza0Zvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMXB4ICMyMjI7XG4gIHRvcDogNjBweDtcbn1cblxuLmlucHV0RmllbGQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogc2VyaWY7XG59XG5cbi5pbnB1dEZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG50ZXh0YXJlYS5pbnB1dEZpZWxkIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzVhNWE1YTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuXG4uYnRuR3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgLmJ0biB7XG4gICAgbWFyZ2luOiAwIDNweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG4udGFza0Zvcm0gLmJ0bkdyb3VwIC5idG4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYnRuQ29uZmlybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjdiMTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGE3MzQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuQ29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2Q0NTE7XG59XG5cbi5idG5DbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG5DbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzE0MTQ7XG59XG5cbi5zb3J0QnRuIHtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogMDtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZhYTBjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyB0YXNrbWVudVxuLnRhc2tNZW51IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgLm1lbnVCdG4ge1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICB9XG59XG5cbi8vcGFnaW5hdGlvblxuXG4ucGFnaW5hdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZ2luYXRpb25Db250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtaW4td2lkdGg6IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnBhZ2luYXRpb25fX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDNweDtcbiAgJjpmaXJzdC1jaGlsZCAucGFnaW5hdGlvbkNvbnRlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIC5wYWdpbmF0aW9uQ29udGVudCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG59XG5cbi8vIGNyZWF0ZSBidXR0b25cbi5jcmVhdGVCdG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1YTVhNWE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnRhc2tSZW1vdmUge1xuICBib3JkZXItY29sb3I6ICNjNzE0MTQ7XG4gIGNvbG9yOiAjYzcxNDE0O1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xuICB9XG59XG5cbi5sZWdlbmQge1xuICAkbGVnZW5kLWNvbG9yOiAjZWZlZmVmO1xuICAkbGVnZW5kLWNvbG9yLWJyaWdodDogIzQ0NDtcbiAgJGxlZ2VuZC1jb2xvci1ib3JkZXI6ICM1YTVhNWE7XG4gICR0ZXh0LWNvbG9yOiAjMjIyO1xuXG4gIC8vIEBpbmNsdWRlIE5ldWNoYTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAvLyBAaW5jbHVkZSBzaXplKDIwcHgsIDIwcHgpO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzIyMjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMCA3cHggMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgIC8vZm9yIGNoZWNrYm94XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDVweDtcbiAgfVxuICAvLyAmLWFyY2hpdmUge1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsZWdlbmQtY29sb3I7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICRsZWdlbmQtY29sb3ItYnJpZ2h0O1xuICAgIGJvcmRlci1jb2xvcjogJGxlZ2VuZC1jb2xvci1ib3JkZXI7XG4gIH1cbiAgLy8gfVxuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLy8gd2l0aCBjaGVja2JveFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgMCAwIDQwcHg7XG5cbiAgJl9faWNvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgbGVmdDogMXB4O1xuICAgIHotaW5kZXg6IDU7XG5cbiAgICB0ZXh0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICAmX19pY29uX2JveCB7XG4gICAgZmlsbDogIzVhNWE1YTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICZfX2ljb25fY2hlY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmlsbDogIzVhNWE1YTtcbiAgfVxuICAmX19zd2l0Y2hlciB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCArIC5sZWdlbmRfX2ljb24gLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cbiAgLmxlZ2VuZF9fdGV4dCB7XG4gICAgLy8gQGluY2x1ZGUgTmV1Y2hhO1xuICAgIG1hcmdpbjogMCAwIDAgLTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG59XG4iLCIucGFnZVRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5wYWdlVGl0bGUgPiBkaXYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucGFnZVRpdGxlIGgyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLnBhZ2VUaXRsZSAubGVnZW5kIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5pbnB1dC1udW1iZXIge1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5wYWdlQ3RybEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wYWdlQ3RybCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDNweDtcbn1cbi5wYWdlQ3RybCAucGFnZUN0cmxfX2l0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ucGFnZUN0cmwgLnBhZ2VDdHJsX19pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4ucGFnZUN0cmwgLnBhZ2VDdHJsX19pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4udGFza1RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrSGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLnRhc2tCb2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi50YXNrSGVhZGVyX19pdGVtIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLnRhc2tTdGF0ZVRvZ2dsZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza1N0YXRlVG9nZ2xlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcbn1cblxuLnRhc2sge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrTXNnIHtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZDVhZjtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrTXNnLXZpc2libGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YXNrLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVjYzE7XG59XG5cbi50YXNrLnRhc2stb3BlbmVkIC50YXNrQm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFzay50YXNrLW9wZW5lZCAudGFza0hlYWRlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDVweCAtNHB4ICMyMjI7XG59XG5cbi50YXNrIC50YXNrVGl0bGUsXG4udGFza01lbnUgLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi50YXNrVXNlcixcbi50YXNrRW1haWwge1xuICB3aWR0aDogMjAlO1xufVxuXG4udGFza0RhdGUsXG4ucGFnZUN0cmxCb3gge1xuICB3aWR0aDogMTUlO1xufVxuXG4udGFzay1lbXB0eSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTVhNWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG4uYnRuR3JvdXAgLmJ0biB7XG4gIG1hcmdpbjogMCAzcHg7XG59XG4uYnRuR3JvdXAgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJ0bkdyb3VwIC5idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhc2tGb3JtIC5idG5Hcm91cCAuYnRuIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uc29ydEJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG4uc29ydEJ0biA6aG92ZXIge1xuICBjb2xvcjogI2ZmYWEwYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza01lbnUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnRhc2tNZW51IC5tZW51QnRuIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWE1YTVhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5wYWdpbmF0aW9uQ29udGVudDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdpbmF0aW9uX19pdGVtIHtcbiAgcGFkZGluZzogMCAzcHg7XG59XG4ucGFnaW5hdGlvbl9faXRlbTpmaXJzdC1jaGlsZCAucGFnaW5hdGlvbkNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5wYWdpbmF0aW9uX19pdGVtOmxhc3QtY2hpbGQgLnBhZ2luYXRpb25Db250ZW50IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmNyZWF0ZUJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMCAwIDVweDtcbn1cbi5jcmVhdGVCdG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGFza1JlbW92ZSB7XG4gIGJvcmRlci1jb2xvcjogI2M3MTQxNDtcbiAgY29sb3I6ICNjNzE0MTQ7XG59XG4udGFza1JlbW92ZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgY29sb3I6ICMyMjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xufVxuLmxlZ2VuZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzIyMjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDdweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5sZWdlbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAjNDQ0O1xuICBib3JkZXItY29sb3I6ICM1YTVhNWE7XG59XG4ubGVnZW5kOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubGVnZW5kX19pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogMXB4O1xuICB6LWluZGV4OiA1O1xufVxuLmxlZ2VuZF9faWNvbiB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fYm94IHtcbiAgZmlsbDogIzVhNWE1YTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fY2hlY2sge1xuICBkaXNwbGF5OiBub25lO1xuICBmaWxsOiAjNWE1YTVhO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXI6Y2hlY2tlZCArIC5sZWdlbmRfX2ljb24gLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxlZ2VuZCAubGVnZW5kX190ZXh0IHtcbiAgbWFyZ2luOiAwIDAgMCAtNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task',
                templateUrl: './task.component.html',
                styleUrls: ['./task.component.scss']
            }]
    }], function () { return [{ type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] }]; }, { handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mirehiko/Projects/mirehiko/angular/angapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map