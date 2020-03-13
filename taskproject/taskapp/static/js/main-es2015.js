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
function DashboardComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_ng_template_4_div_0_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const task_r34 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.save(task_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_4_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const task_r34 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.onSelect(task_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "->");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-confirmed", task_r34.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "changeStatus", task_r34.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "isCofirmed", task_r34.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", task_r34.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "changeStatus", task_r34.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r34.title);
} }
function DashboardComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_ng_template_4_div_0_Template, 10, 7, "div", 4);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.tasks);
} }
function DashboardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
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
        });
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
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 10, vars: 4, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "task", "taskChange"], ["class", "task", 3, "task-confirmed", 4, "ngFor", "ngForOf"], [1, "task"], [1, "taskValue", "taskState"], [1, "check"], ["type", "checkbox", 3, "id", "checked", "name", "change"], [3, "for"], [1, "taskValue", "taskTitle"], [1, "taskValue", "taskControl"], ["type", "button", 1, "taskDetails", 3, "click"], [1, "task", "task-empty"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-task-detail", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskChange", function DashboardComponent_Template_app_task_detail_taskChange_8_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "notifier-container");
    } if (rf & 2) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length)("ngIfThen", _r29)("ngIfElse", _r31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.selectedTask);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: #fff;\n  min-height: 30px;\n  padding: 10px;\n  border-bottom: 1px solid #dedede;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.task-confirmed[_ngcontent-%COMP%] {\n  background: #8bc34a;\n  text-decoration: line-through;\n}\n\n.taskValue[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-self: center;\n}\n\n.taskTitle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.taskState[_ngcontent-%COMP%], .taskControl[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n\n.taskDetails[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background-color: #949494;\n  color: #fff;\n  outline: 0;\n  box-shadow: 0 1px 3px 0px #222;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.taskDetails[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-color: #f9ce4c;\n}\n\n.task-empty[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUVBLDRCQUFBO0VBQUEsb0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QURGQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNNRjs7QURMRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ09KOztBREhBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG59XG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnRhc2stY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZDogIzhiYzM0YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4udGFza1ZhbHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udGFza1RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFza1N0YXRlLFxuLnRhc2tDb250cm9sIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YXNrRGV0YWlscyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NDk0OTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4ICMyMjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjljZTRjO1xuICB9XG59XG5cbi50YXNrLWVtcHR5IHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuIiwic2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnRhc2stY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZDogIzhiYzM0YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YXNrVmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza1N0YXRlLFxuLnRhc2tDb250cm9sIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2tEZXRhaWxzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcbiAgY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggIzIyMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4udGFza0RldGFpbHM6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2Y5Y2U0Yztcbn1cblxuLnRhc2stZW1wdHkge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59Il19 */"] });
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
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.task.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.task.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.task.user = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.task.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.task.isCofirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.task.onMain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.save(ctx_r47.task); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r38.task.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.task.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.task.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.task.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.task.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.task.isCofirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r38.task.onMain);
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
    } }, inputs: { task: "task" }, outputs: { taskChange: "taskChange" }, decls: 1, vars: 1, consts: [["class", "taskForm", "state", "visible", 4, "ngIf"], ["state", "visible", 1, "taskForm"], [1, "taskTitle"], ["type", "hidden", "name", "id", "required", "", 3, "value"], ["type", "text", "name", "title", "placeholder", "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "user", "placeholder", "\u0424\u0418\u041E", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", 1, "inputField", 3, "ngModel", "ngModelChange"], [1, "check"], ["id", "editStatus", "type", "checkbox", "name", "isCofirmed", 3, "ngModel", "ngModelChange"], ["for", "editStatus"], ["id", "editOnMain", "type", "checkbox", "name", "onMain", 3, "ngModel", "ngModelChange"], ["for", "editOnMain"], [1, "btnGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "confirm", 1, "btn", "btnConfirm", 3, "click"], ["type", "button", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "btn", "btnClose", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"]], template: function TaskDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskDetailComponent_form_0_Template, 23, 7, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]], styles: [".taskForm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  max-width: 400px;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 2px 5px 1px #222;\n  top: 60px;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  max-width: 100%;\n  display: block;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-bottom-width: 2px;\n  outline: none;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 100%;\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: serif;\n}\n\n.inputField[_ngcontent-%COMP%]:focus {\n  border-color: teal;\n  -webkit-transition: none;\n  transition: none;\n}\n\ntextarea.inputField[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100%;\n  padding: 15px 10px;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  font-size: 16px;\n  padding: 0 10px;\n  background-color: #efefef;\n  cursor: pointer;\n  height: 30px;\n  border-radius: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: inline-block;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n\n.btnConfirm[_ngcontent-%COMP%] {\n  border: 1px solid #4b7b17;\n  background-color: #70a734;\n  color: #fff;\n}\n\n.btnConfirm[_ngcontent-%COMP%]:hover {\n  background-color: #97d451;\n}\n\n.btnClose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  padding: 0;\n  background-color: #555;\n  color: #fff;\n  font-size: 14px;\n}\n\n.btnClose[_ngcontent-%COMP%]:hover {\n  background-color: #c71414;\n}\n\n.btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: end;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.taskForm[_ngcontent-%COMP%]   .btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtBQ0VKOztBREFJO0VBQ0UsY0FBQTtBQ0VOOztBREFJO0VBQ0UsZUFBQTtBQ0VOOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFza0Zvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMXB4ICMyMjI7XG4gIHRvcDogNjBweDtcbn1cblxuLmlucHV0RmllbGQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogc2VyaWY7XG59XG5cbi5pbnB1dEZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG50ZXh0YXJlYS5pbnB1dEZpZWxkIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuXG4uYnRuQ29uZmlybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjdiMTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGE3MzQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuQ29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2Q0NTE7XG59XG5cbi5idG5DbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG5DbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzE0MTQ7XG59XG5cbi5idG5Hcm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDAgM3B4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cbi50YXNrRm9ybSAuYnRuR3JvdXAgLmJ0biB7XG4gIHdpZHRoOiA1MCU7XG59XG4iLCIudGFza0Zvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMXB4ICMyMjI7XG4gIHRvcDogNjBweDtcbn1cblxuLmlucHV0RmllbGQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogc2VyaWY7XG59XG5cbi5pbnB1dEZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG50ZXh0YXJlYS5pbnB1dEZpZWxkIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xufVxuXG4uYnRuQ29uZmlybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjdiMTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MGE3MzQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuQ29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5N2Q0NTE7XG59XG5cbi5idG5DbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG5DbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzE0MTQ7XG59XG5cbi5idG5Hcm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuLmJ0bkdyb3VwIC5idG4ge1xuICBtYXJnaW46IDAgM3B4O1xufVxuLmJ0bkdyb3VwIC5idG46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5idG5Hcm91cCAuYnRuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi50YXNrRm9ybSAuYnRuR3JvdXAgLmJ0biB7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"] });
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
            options.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', params.page).set('sortKey', params.sortKey).set('sortWay', params.sortWay);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function TaskComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function TaskComponent_ng_template_23_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_template_23_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onSelect(task_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_template_23_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.delete(task_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.pub_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.description);
} }
function TaskComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskComponent_ng_template_23_div_0_Template, 18, 5, "div", 20);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
} }
function TaskComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 \u043F\u0443\u0441\u0442 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_form_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_form_29_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.isNewConfirmed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_form_29_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.isNewOnMain = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_29_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041E\u0442\u043C\u0435\u043D\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_29_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r20.add(_r12.value, _r13.value, _r14.value, _r15.value); _r12.value = ""; _r13.value = ""; _r14.value = ""; return _r15.value = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_29_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isNewConfirmed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isNewOnMain);
} }
function TaskComponent_nav_30_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_nav_30_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.setPage(ctx_r24.prev); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_nav_30_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_nav_30_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.setPage(ctx_r26.next); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_nav_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_nav_30_div_1_Template, 3, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskComponent_nav_30_div_5_Template, 3, 0, "div", 55);
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
        // pageData: Page;
        this.sortKey = 'title';
        this.sortWay = 'inc';
        this.page = 1;
        this.prev = null;
        this.next = null;
        this.isInserting = false;
        this.isNewConfirmed = false;
        this.isNewOnMain = false;
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
            sortWay: this.sortWay
        };
        this.taskService.getTasks(params).subscribe(data => {
            console.log(data);
            this.tasks = data.results;
            this.page = data.page;
            this.prev = data.prev;
            this.next = data.next;
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
    } }, decls: 31, vars: 6, consts: [[1, ""], ["title", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443", 1, "createBtn", 3, "click"], [1, "fas", "fa-plus"], [1, "menu", "taskMenu"], [1, "menu__item", "taskTitle"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0443", 1, "menuBtn", "sortBtn", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-sort"], [1, "menu__item", "taskUser"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0438\u043C\u0435\u043D\u0438", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "taskEmail"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043F\u043E\u0447\u0442\u0435", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "taskDate"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0434\u0430\u0442\u0435", 1, "menuBtn", "sortBtn", 3, "click"], ["class", "taskList", 4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "task", "taskChange"], ["class", "taskForm", "state", "visible", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "taskList"], ["class", "task", 4, "ngFor", "ngForOf"], [1, "task"], [1, "taskHeader"], [1, "taskHeader__item", "taskTitle"], [1, "taskHeader__item", "taskUser"], [1, "taskHeader__item", "taskEmail"], [1, "taskHeader__item", "taskDate"], [1, "taskHeader__item", "btnGroup", "taskDate"], ["type", "button", "title", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C", 1, "btn", "taskEdit", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-edit"], ["type", "button", "title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "btn", "taskRemove", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-trash-alt"], [1, "taskBody"], [1, "task", "task-empty"], ["state", "visible", 1, "taskForm"], [1, "taskTitle"], ["type", "text", "name", "title", "placeholder", "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", "required", "", 1, "inputField"], ["taskTitle", ""], ["type", "text", "name", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "inputField"], ["taskDescribe", ""], ["type", "text", "name", "user", "placeholder", "\u0424\u0418\u041E", 1, "inputField"], ["taskUser", ""], ["type", "email", "name", "email", "placeholder", "Email", 1, "inputField"], ["taskEmail", ""], [1, "check"], ["id", "editStatus", "type", "checkbox", "name", "newConfirmed", 3, "ngModel", "ngModelChange"], ["for", "editStatus"], ["id", "editOnMain", "type", "checkbox", "name", "newOnMain", 3, "ngModel", "ngModelChange"], ["for", "editOnMain"], [1, "btnGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "confirm", 1, "btn", "btnConfirm", 3, "click"], ["type", "button", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "btn", "btnClose", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"], [1, "pagination"], ["class", "pagination__item", 4, "ngIf"], [1, "pagination__item"], [1, "paginationContent"], ["title", "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "paginationContent", 3, "click"], ["title", "\u0421\u043B\u0435\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "paginationContent", 3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_2_listener() { return ctx.onInsert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_6_listener() { return ctx.sort("title"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_10_listener() { return ctx.sort("user"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_14_listener() { return ctx.sort("email"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_18_listener() { return ctx.sort("pub_date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0414\u0430\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskComponent_div_22_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskComponent_ng_template_23_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TaskComponent_ng_template_25_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-task-detail", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskChange", function TaskComponent_Template_app_task_detail_taskChange_27_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TaskComponent_form_29_Template, 26, 2, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TaskComponent_nav_30_Template, 6, 3, "nav", 18);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.selectedTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInserting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prev || ctx.next);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".taskTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.taskHeader[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  align-content: center;\n  min-height: 50px;\n  word-break: break-word;\n}\n\n.taskBody[_ngcontent-%COMP%] {\n  padding: 0 5px;\n  display: none;\n}\n\n.taskHeader__item[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 0 5px;\n}\n\n.taskStateToggler[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  padding: 10px;\n  border: 1px solid #7b7b7b;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.taskStateToggler[_ngcontent-%COMP%]:hover {\n  background-color: #00000014;\n}\n\n.task[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n\n.taskMsg[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  background-color: #00000005;\n  border-radius: 15px;\n  border: 1px solid #c3d5af;\n  margin: 5px;\n  display: none;\n}\n\n.taskMsg-visible[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.task-confirmed[_ngcontent-%COMP%] {\n  background-color: #d8ecc1;\n}\n\n.task.task-opened[_ngcontent-%COMP%]   .taskBody[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.taskBody[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #00000005;\n  width: 30px;\n  margin: 0 3px 5px;\n  height: 30px;\n  text-align: center;\n  padding: 0;\n  border: 1px solid #7b7b7b;\n}\n\n.taskBody[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #00000014;\n}\n\n.task[_ngcontent-%COMP%]   .taskTitle[_ngcontent-%COMP%], .taskMenu[_ngcontent-%COMP%]   .taskTitle[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.taskUser[_ngcontent-%COMP%], .taskEmail[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.taskDate[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.task-empty[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px 20px;\n}\n\n.taskForm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  max-width: 400px;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 2px 5px 1px #222;\n  top: 60px;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  max-width: 100%;\n  display: block;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-bottom-width: 2px;\n  outline: none;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 100%;\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: serif;\n}\n\n.inputField[_ngcontent-%COMP%]:focus {\n  border-color: teal;\n  -webkit-transition: none;\n  transition: none;\n}\n\ntextarea.inputField[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100%;\n  padding: 15px 10px;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #5a5a5a;\n  font-size: 16px;\n  padding: 0 10px;\n  background-color: #efefef;\n  cursor: pointer;\n  height: 30px;\n  border-radius: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: inline-block;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n\n.btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: end;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.taskForm[_ngcontent-%COMP%]   .btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.btnConfirm[_ngcontent-%COMP%] {\n  border: 1px solid #4b7b17;\n  background-color: #70a734;\n  color: #fff;\n}\n\n.btnConfirm[_ngcontent-%COMP%]:hover {\n  background-color: #97d451;\n}\n\n.btnClose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  padding: 0;\n  background-color: #555;\n  color: #fff;\n  font-size: 14px;\n}\n\n.btnClose[_ngcontent-%COMP%]:hover {\n  background-color: #c71414;\n}\n\n.sortBtn[_ngcontent-%COMP%] {\n  color: #616161;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 10px;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 11px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border: none;\n  outline: 0;\n}\n\n.sortBtn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #ffaa0c;\n  cursor: pointer;\n}\n\n.taskMenu[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 0 10px;\n}\n\n.taskMenu[_ngcontent-%COMP%]   .menuBtn[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.paginationContent[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 34px;\n  min-width: 34px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #5a5a5a;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.paginationContent[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #5a5a5a;\n  color: #fff;\n}\n\n.pagination__item[_ngcontent-%COMP%] {\n  padding: 0 3px;\n}\n\n.pagination__item[_ngcontent-%COMP%]:first-child   .paginationContent[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.pagination__item[_ngcontent-%COMP%]:last-child   .paginationContent[_ngcontent-%COMP%] {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.createBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  min-width: 30px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #5a5a5a;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n  font-size: 16px;\n  margin: 0 0 0 5px;\n}\n\n.createBtn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #5a5a5a;\n  color: #fff;\n}\n\n.taskRemove[_ngcontent-%COMP%] {\n  border-color: #c71414;\n  color: #c71414;\n}\n\n.taskRemove[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #c71414;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBOztFQUVFLFVBQUE7QUNDRjs7QURFQTs7RUFFRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7QUNDRjs7QURBRTtFQUNFLGFBQUE7QUNFSjs7QURBSTtFQUNFLGNBQUE7QUNFTjs7QURBSTtFQUNFLGVBQUE7QUNFTjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FDREY7O0FERUU7RUFDRSxjQUFBO0FDQUo7O0FETUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURNQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0hGOztBREtFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBREtFO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQ0hKOztBREtFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQ0hKOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRE9FO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFNBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDTkY7O0FET0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2tIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udGFza0JvZHkge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tIZWFkZXJfX2l0ZW0ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udGFza1N0YXRlVG9nZ2xlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrU3RhdGVUb2dnbGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xufVxuXG4udGFzayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrTXNnIHtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZDVhZjtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrTXNnLXZpc2libGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YXNrLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVjYzE7XG59XG5cbi50YXNrLnRhc2stb3BlbmVkIC50YXNrQm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFza0JvZHkgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogMCAzcHggNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3Yjtcbn1cblxuLnRhc2tCb2R5IC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XG59XG5cbi50YXNrIC50YXNrVGl0bGUsXG4udGFza01lbnUgLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi50YXNrVXNlcixcbi50YXNrRW1haWwge1xuICB3aWR0aDogMjAlO1xufVxuLnRhc2tEYXRlIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLnRhc2stZW1wdHkge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi8vIGZvcm1cbi50YXNrRm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAxcHggIzIyMjtcbiAgdG9wOiA2MHB4O1xufVxuXG4uaW5wdXRGaWVsZCB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbn1cblxuLmlucHV0RmllbGQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRlYWw7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbnRleHRhcmVhLmlucHV0RmllbGQge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWE1YTVhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG59XG5cbi5idG5Hcm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDAgM3B4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cbi50YXNrRm9ybSAuYnRuR3JvdXAgLmJ0biB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5idG5Db25maXJtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiN2IxNztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwYTczNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG5Db25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZDQ1MTtcbn1cblxuLmJ0bkNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bkNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MTQxNDtcbn1cblxuLnNvcnRCdG4ge1xuICBjb2xvcjogIzYxNjE2MTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwO1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICNmZmFhMGM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIHRhc2ttZW51XG4udGFza01lbnUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMCAxMHB4O1xuICAubWVudUJ0biB7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gIH1cbn1cblxuLy9wYWdpbmF0aW9uXG5cbi5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWE1YTVhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4ucGFnaW5hdGlvbl9faXRlbSB7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICAmOmZpcnN0LWNoaWxkIC5wYWdpbmF0aW9uQ29udGVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgfVxuICAmOmxhc3QtY2hpbGQgLnBhZ2luYXRpb25Db250ZW50IHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIH1cbn1cblxuLy8gY3JlYXRlIGJ1dHRvblxuLmNyZWF0ZUJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMCAwIDVweDtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4udGFza1JlbW92ZSB7XG4gIGJvcmRlci1jb2xvcjogI2M3MTQxNDtcbiAgY29sb3I6ICNjNzE0MTQ7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzE0MTQ7XG4gIH1cbn1cbiIsIi50YXNrVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2tIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udGFza0JvZHkge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tIZWFkZXJfX2l0ZW0ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udGFza1N0YXRlVG9nZ2xlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrU3RhdGVUb2dnbGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xufVxuXG4udGFzayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrTXNnIHtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZDVhZjtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrTXNnLXZpc2libGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YXNrLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVjYzE7XG59XG5cbi50YXNrLnRhc2stb3BlbmVkIC50YXNrQm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFza0JvZHkgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogMCAzcHggNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3Yjtcbn1cblxuLnRhc2tCb2R5IC5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTQ7XG59XG5cbi50YXNrIC50YXNrVGl0bGUsXG4udGFza01lbnUgLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi50YXNrVXNlcixcbi50YXNrRW1haWwge1xuICB3aWR0aDogMjAlO1xufVxuXG4udGFza0RhdGUge1xuICB3aWR0aDogMTUlO1xufVxuXG4udGFzay1lbXB0eSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTVhNWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG4uYnRuR3JvdXAgLmJ0biB7XG4gIG1hcmdpbjogMCAzcHg7XG59XG4uYnRuR3JvdXAgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJ0bkdyb3VwIC5idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhc2tGb3JtIC5idG5Hcm91cCAuYnRuIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uc29ydEJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG4uc29ydEJ0biA6aG92ZXIge1xuICBjb2xvcjogI2ZmYWEwYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza01lbnUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnRhc2tNZW51IC5tZW51QnRuIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWE1YTVhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5wYWdpbmF0aW9uQ29udGVudDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdpbmF0aW9uX19pdGVtIHtcbiAgcGFkZGluZzogMCAzcHg7XG59XG4ucGFnaW5hdGlvbl9faXRlbTpmaXJzdC1jaGlsZCAucGFnaW5hdGlvbkNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5wYWdpbmF0aW9uX19pdGVtOmxhc3QtY2hpbGQgLnBhZ2luYXRpb25Db250ZW50IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmNyZWF0ZUJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMCAwIDVweDtcbn1cbi5jcmVhdGVCdG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGFza1JlbW92ZSB7XG4gIGJvcmRlci1jb2xvcjogI2M3MTQxNDtcbiAgY29sb3I6ICNjNzE0MTQ7XG59XG4udGFza1JlbW92ZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufSJdfQ== */"] });
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