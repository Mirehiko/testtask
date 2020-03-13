function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/task/task.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./task-detail/task-detail.component */
    "./src/app/task-detail/task-detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'tasklist',
      component: _task_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]
    }, {
      path: 'detail/:id',
      component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { HostListener, Component } from '@angular/core';


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Менеджер задач';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 1,
      consts: [[1, "menu", "mainMenu"], [1, "menu__item"], ["routerLink", "/dashboard", 1, "menuItem__content"], ["routerLink", "/tasklist", 1, "menuItem__content"], [1, "pageTitle"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".pageTitle[_ngcontent-%COMP%] {\n  padding: 0;\n  color: #fff;\n  text-shadow: 0 0 5px #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyMjI7XG59XG4iLCIucGFnZVRpdGxlIHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICMyMjI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/task/task.component.ts");
    /* harmony import */


    var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./task-detail/task-detail.component */
    "./src/app/task-detail/task-detail.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts"); // import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
    // import { InMemoryDataService } from './in-memory-data.service';
    // import { MessagesComponent } from './messages/messages.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"].withConfig({
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
        } // Custom options in here

      }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"], // MessagesComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_8__["TaskDetailComponent"], // MessagesComponent,
          _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierModule"].withConfig({
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
            } // Custom options in here

          }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          providers: [],
          // providers: [{provide: APP_BASE_HREF, useValue : '/' }]
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../task-detail/task-detail.component */
    "./src/app/task-detail/task-detail.component.ts");

    function DashboardComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function DashboardComponent_ng_template_4_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DashboardComponent_ng_template_4_div_0_Template_input_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var task_r36 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.save(task_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "text", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Created by Alice Mortaro");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "text", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "from the Noun Project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_4_div_0_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var task_r36 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r39.onSelect(task_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "->");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-confirmed", task_r36.isCofirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "isCofirmed", task_r36.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "isCofirmed", task_r36.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "isCofirmed", task_r36.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", task_r36.isCofirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r36.title);
      }
    }

    function DashboardComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_ng_template_4_div_0_Template, 18, 7, "div", 4);
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.tasks);
      }
    }

    function DashboardComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 \u043F\u0443\u0441\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    } // import { TASKS } from '../mock-tasks'; // remove on prod


    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(taskService, notifierService) {
        _classCallCheck(this, DashboardComponent);

        this.taskService = taskService;
        this.tasks = [];
        this.sortKey = 'title';
        this.sortWay = 'inc';
        this.page = 1;
        this.notifier = notifierService;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTasks();
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          var _this = this;

          var params = {
            page: this.page,
            sortKey: this.sortKey,
            sortWay: this.sortWay,
            onMain: true
          };
          this.taskService.getTasks(params).subscribe(function (data) {
            console.log(data);
            _this.tasks = data.results;
            _this.pageData = data;
          });
        }
      }, {
        key: "save",
        value: function save(task) {
          var _this2 = this;

          if (task.isCofirmed) {
            task.isCofirmed = false;
          } else {
            task.isCofirmed = true;
          }

          this.taskService.updateTask(task).subscribe(function (data) {
            console.log(data); // notify

            _this2.notifier.notify('success', 'Задача успешно обновлена!');
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(task) {
          this.selectedTask = task; // this.messageService.add(`TaskService: Selected task id=${task.id}`);
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.selectedTask = null;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 10,
      vars: 4,
      consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "task", "taskChange"], ["class", "task", 3, "task-confirmed", 4, "ngFor", "ngForOf"], [1, "task"], [1, "taskValue", "taskState"], [1, "legend", 3, "for"], ["type", "checkbox", 1, "legend__switcher", 3, "id", "checked", "name", "change"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "legend__icon"], ["d", "M67.624,72.538c-2.295-11.419-4.692-24.843-2.153-36.414c0.107-0.49,0.051-0.926-0.111-1.293   c-0.243-0.738-0.866-1.327-1.881-1.32c-12.609,0.119-25.143,1.758-37.752,1.875c-2.294,0.022-2.608,3.081-0.95,3.914   c-0.02,0.119-0.034,0.238-0.034,0.37c0,0-0.192,23.523,2.231,35.075c0,0,0.005,0.015,0.007,0.024   c-0.222,0.963,0.168,1.986,1.432,2.182c10.363,1.617,20.406-1.573,30.752-1.803c2.659-0.059,2.664-4.187,0-4.127   c-9.452,0.207-18.875,3.189-28.319,2.117c-2.211-10.998-1.973-22.651-1.978-33.469c0-0.081-0.015-0.151-0.024-0.227   c10.735-0.297,21.417-1.488,32.15-1.746c-1.863,11.68,0.366,24.572,2.651,35.934C64.17,76.245,68.146,75.137,67.624,72.538z", 1, "legend__icon_box"], ["d", "M21.444,51.573c6.405,6.409,12.812,12.809,19.217,19.214c1.751,1.754,4.596,1.275,5.877-0.755   c9.353-14.826,19.448-29.436,32.601-41.167c3.608-3.217-1.703-8.49-5.289-5.29c-13.596,12.127-24.106,27.36-33.775,42.683   c1.961-0.254,3.919-0.507,5.877-0.76c-6.405-6.405-12.812-12.807-19.215-19.214C23.324,42.869,18.034,48.159,21.444,51.573   L21.444,51.573z", 1, "legend__icon_check"], ["x", "0", "y", "115", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], ["x", "0", "y", "120", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], [1, "legend__text"], [1, "taskValue", "taskTitle"], [1, "taskValue", "taskControl"], ["type", "button", 1, "taskDetails", 3, "click"], [1, "task", "task-empty"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 1, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-task-detail", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskChange", function DashboardComponent_Template_app_task_detail_taskChange_8_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "notifier-container");
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length)("ngIfThen", _r31)("ngIfElse", _r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.selectedTask);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  background-color: #fff;\n  min-height: 30px;\n  padding: 10px;\n  border-bottom: 1px solid #dedede;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.task-confirmed[_ngcontent-%COMP%] {\n  background: #8bc34a;\n  text-decoration: line-through;\n}\n\n.taskValue[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-self: center;\n}\n\n.taskTitle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.taskState[_ngcontent-%COMP%], .taskControl[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n\n.taskDetails[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  background-color: #949494;\n  color: #fff;\n  outline: 0;\n  box-shadow: 0 1px 3px 0px #222;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.taskDetails[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-color: #f9ce4c;\n}\n\n.task-empty[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px 20px;\n}\n\n.legend[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin: 0;\n  color: #222;\n  position: relative;\n  cursor: pointer;\n  padding: 0 0 0 40px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  width: 18px;\n  height: 18px;\n  content: \"\";\n  display: inline-block;\n  box-shadow: 0px 1px 3px 0px #222;\n  vertical-align: middle;\n  margin: 0 7px 0 0;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  position: absolute;\n  top: 0px;\n  left: 5px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  background-color: #efefef;\n  box-shadow: 0px 1px 3px 0px #444;\n  border-color: #5a5a5a;\n}\n\n.legend[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.legend__icon[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  top: -8px;\n  left: 1px;\n  z-index: 5;\n}\n\n.legend__icon[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n\n.legend__icon_box[_ngcontent-%COMP%] {\n  fill: #5a5a5a;\n  display: none;\n}\n\n.legend__icon_check[_ngcontent-%COMP%] {\n  display: none;\n  fill: #5a5a5a;\n}\n\n.legend__switcher[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.legend__switcher[_ngcontent-%COMP%]:checked    + .legend__icon[_ngcontent-%COMP%]   .legend__icon_check[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.legend[_ngcontent-%COMP%]   .legend__text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -5px;\n  vertical-align: middle;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUVBLDRCQUFBO0VBQUEsb0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QURGQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNNRjs7QURMRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ09KOztBREhBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURIQTtFQU9FLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFdBTmE7RUFPYixrQkFBQTtFQWdDQSxlQUFBO0VBQ0EsbUJBQUE7QUMvQkY7O0FEQUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFHQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDREo7O0FESUU7RUFDRSx5QkEvQmE7RUFnQ2IsZ0NBQUE7RUFDQSxxQkEvQm9CO0FDNkJ4Qjs7QURNRTtFQUNFLGNBQUE7QUNKSjs7QURXRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1RKOztBRFdJO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNUTjs7QURZRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDVko7O0FEWUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ1ZKOztBRFlFO0VBQ0UsYUFBQTtBQ1ZKOztBRFlJO0VBQ0UsY0FBQTtBQ1ZOOztBRGFFO0VBRUUsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuLnRhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi50YXNrLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQ6ICM4YmMzNGE7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnRhc2tWYWx1ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRhc2tTdGF0ZSxcbi50YXNrQ29udHJvbCB7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFza0RldGFpbHMge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xuICBjb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDBweCAjMjIyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1jb2xvcjogI2Y5Y2U0YztcbiAgfVxufVxuXG4udGFzay1lbXB0eSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmxlZ2VuZCB7XG4gICRsZWdlbmQtY29sb3I6ICNlZmVmZWY7XG4gICRsZWdlbmQtY29sb3ItYnJpZ2h0OiAjNDQ0O1xuICAkbGVnZW5kLWNvbG9yLWJvcmRlcjogIzVhNWE1YTtcbiAgJHRleHQtY29sb3I6ICMyMjI7XG5cbiAgLy8gQGluY2x1ZGUgTmV1Y2hhO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgLy8gQGluY2x1ZGUgc2l6ZSgyMHB4LCAyMHB4KTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICMyMjI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgN3B4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAvL2ZvciBjaGVja2JveFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cbiAgLy8gJi1hcmNoaXZlIHtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVnZW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAkbGVnZW5kLWNvbG9yLWJyaWdodDtcbiAgICBib3JkZXItY29sb3I6ICRsZWdlbmQtY29sb3ItYm9yZGVyO1xuICB9XG4gIC8vIH1cblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC8vIHdpdGggY2hlY2tib3hcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xuXG4gICZfX2ljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIGxlZnQ6IDFweDtcbiAgICB6LWluZGV4OiA1O1xuXG4gICAgdGV4dCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9faWNvbl9ib3gge1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAmX19pY29uX2NoZWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gIH1cbiAgJl9fc3dpdGNoZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQgKyAubGVnZW5kX19pY29uIC5sZWdlbmRfX2ljb25fY2hlY2sge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5sZWdlbmRfX3RleHQge1xuICAgIC8vIEBpbmNsdWRlIE5ldWNoYTtcbiAgICBtYXJnaW46IDAgMCAwIC01cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufVxuIiwic2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnRhc2stY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZDogIzhiYzM0YTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YXNrVmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza1N0YXRlLFxuLnRhc2tDb250cm9sIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2tEZXRhaWxzIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0OTQ5NDtcbiAgY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggIzIyMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4udGFza0RldGFpbHM6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1jb2xvcjogI2Y5Y2U0Yztcbn1cblxuLnRhc2stZW1wdHkge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5sZWdlbmQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMjIyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAwIDAgNDBweDtcbn1cbi5sZWdlbmQ6OmJlZm9yZSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICMyMjI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCA3cHggMCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA1cHg7XG59XG4ubGVnZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzQ0NDtcbiAgYm9yZGVyLWNvbG9yOiAjNWE1YTVhO1xufVxuLmxlZ2VuZDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmxlZ2VuZF9faWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IDFweDtcbiAgei1pbmRleDogNTtcbn1cbi5sZWdlbmRfX2ljb24gdGV4dCB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGVnZW5kX19pY29uX2JveCB7XG4gIGZpbGw6ICM1YTVhNWE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubGVnZW5kX19pY29uX2NoZWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmlsbDogIzVhNWE1YTtcbn1cbi5sZWdlbmRfX3N3aXRjaGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX3N3aXRjaGVyOmNoZWNrZWQgKyAubGVnZW5kX19pY29uIC5sZWdlbmRfX2ljb25fY2hlY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5sZWdlbmQgLmxlZ2VuZF9fdGV4dCB7XG4gIG1hcmdpbjogMCAwIDAgLTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/message.service.ts":
  /*!************************************!*\
    !*** ./src/app/message.service.ts ***!
    \************************************/

  /*! exports provided: MessageService */

  /***/
  function srcAppMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageService", function () {
      return MessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MessageService =
    /*#__PURE__*/
    function () {
      function MessageService() {
        _classCallCheck(this, MessageService);

        this.messages = [];
      }

      _createClass(MessageService, [{
        key: "add",
        value: function add(message) {
          this.messages.push(message);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.messages = [];
        }
      }]);

      return MessageService;
    }();

    MessageService.ɵfac = function MessageService_Factory(t) {
      return new (t || MessageService)();
    };

    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MessageService,
      factory: MessageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/mock-tasks.ts":
  /*!*******************************!*\
    !*** ./src/app/mock-tasks.ts ***!
    \*******************************/

  /*! exports provided: TASKS */

  /***/
  function srcAppMockTasksTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TASKS", function () {
      return TASKS;
    });

    var TASKS = [{
      id: 1,
      title: 'Task Title 1',
      description: 'Some text here',
      user: 'Mirehiko',
      email: 'mirehiko@gmail.ru',
      isCofirmed: true,
      onMain: true,
      pub_date: '2020.03.01'
    }, {
      id: 2,
      title: 'Task Title 2',
      description: 'Some text here',
      user: 'Mirehiko',
      email: 'mirehiko@gmail.ru',
      isCofirmed: false,
      onMain: true,
      pub_date: '2020.03.01'
    }, {
      id: 3,
      title: 'Task Title 3',
      description: 'Some text here',
      user: 'Mirehiko',
      email: 'mirehiko@gmail.ru',
      isCofirmed: false,
      onMain: false,
      pub_date: '2020.03.01'
    }, {
      id: 4,
      title: 'Task Title 4',
      description: 'Some text here',
      user: 'Mirehiko',
      email: 'mirehiko@gmail.ru',
      isCofirmed: false,
      onMain: false,
      pub_date: '2020.03.01'
    }];
    /***/
  },

  /***/
  "./src/app/task-detail/task-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/task-detail/task-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: TaskDetailComponent */

  /***/
  function srcAppTaskDetailTaskDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function () {
      return TaskDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TaskDetailComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.task.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "textarea", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_textarea_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.task.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.task.user = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.task.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.task.isCofirmed = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskDetailComponent_form_0_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.task.onMain = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_34_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041E\u0442\u043C\u0435\u043D\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.save(ctx_r49.task);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041F\u0440\u0438\u043D\u044F\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailComponent_form_0_Template_button_click_38_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r40.task.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.task.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.task.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.task.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.task.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.task.isCofirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.task.onMain);
      }
    }

    var TaskDetailComponent =
    /*#__PURE__*/
    function () {
      function TaskDetailComponent(route, taskService, location, notifierService) {
        _classCallCheck(this, TaskDetailComponent);

        this.route = route;
        this.taskService = taskService;
        this.location = location;
        this.taskChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifier = notifierService;
      }

      _createClass(TaskDetailComponent, [{
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          if (event.key === 'Escape') {
            this.onClose();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClose",
        value: function onClose() {
          this.task = null;
          this.taskChange.emit(this.task);
        }
      }, {
        key: "save",
        value: function save(task) {
          var _this3 = this;

          this.taskService.updateTask(this.task).subscribe(function (data) {
            console.log(data); // notify

            _this3.notifier.notify('success', 'Задача успешно обновлена!');
          });
        }
      }]);

      return TaskDetailComponent;
    }();

    TaskDetailComponent.ɵfac = function TaskDetailComponent_Factory(t) {
      return new (t || TaskDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]));
    };

    TaskDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskDetailComponent,
      selectors: [["app-task-detail"]],
      hostBindings: function TaskDetailComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TaskDetailComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        task: "task"
      },
      outputs: {
        taskChange: "taskChange"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "taskForm", "state", "visible", 4, "ngIf"], ["state", "visible", 1, "taskForm"], [1, "taskTitle"], ["type", "hidden", "name", "id", "required", "", 3, "value"], ["type", "text", "name", "title", "placeholder", "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "user", "placeholder", "\u0424\u0418\u041E", 1, "inputField", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", 1, "inputField", 3, "ngModel", "ngModelChange"], ["for", "editStatus", 1, "legend"], ["id", "editStatus", "type", "checkbox", "name", "isCofirmed", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "legend__icon"], ["d", "M67.624,72.538c-2.295-11.419-4.692-24.843-2.153-36.414c0.107-0.49,0.051-0.926-0.111-1.293   c-0.243-0.738-0.866-1.327-1.881-1.32c-12.609,0.119-25.143,1.758-37.752,1.875c-2.294,0.022-2.608,3.081-0.95,3.914   c-0.02,0.119-0.034,0.238-0.034,0.37c0,0-0.192,23.523,2.231,35.075c0,0,0.005,0.015,0.007,0.024   c-0.222,0.963,0.168,1.986,1.432,2.182c10.363,1.617,20.406-1.573,30.752-1.803c2.659-0.059,2.664-4.187,0-4.127   c-9.452,0.207-18.875,3.189-28.319,2.117c-2.211-10.998-1.973-22.651-1.978-33.469c0-0.081-0.015-0.151-0.024-0.227   c10.735-0.297,21.417-1.488,32.15-1.746c-1.863,11.68,0.366,24.572,2.651,35.934C64.17,76.245,68.146,75.137,67.624,72.538z", 1, "legend__icon_box"], ["d", "M21.444,51.573c6.405,6.409,12.812,12.809,19.217,19.214c1.751,1.754,4.596,1.275,5.877-0.755   c9.353-14.826,19.448-29.436,32.601-41.167c3.608-3.217-1.703-8.49-5.289-5.29c-13.596,12.127-24.106,27.36-33.775,42.683   c1.961-0.254,3.919-0.507,5.877-0.76c-6.405-6.405-12.812-12.807-19.215-19.214C23.324,42.869,18.034,48.159,21.444,51.573   L21.444,51.573z", 1, "legend__icon_check"], ["x", "0", "y", "115", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], ["x", "0", "y", "120", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], [1, "legend__text"], ["for", "editOnMain", 1, "legend"], ["id", "editOnMain", "type", "checkbox", "name", "onMain", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], [1, "btnGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "confirm", 1, "btn", "btnConfirm", 3, "click"], ["type", "button", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "btn", "btnClose", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"]],
      template: function TaskDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskDetailComponent_form_0_Template, 40, 7, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]],
      styles: [".taskForm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  max-width: 400px;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 2px 5px 1px #222;\n  top: 60px;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  max-width: 100%;\n  display: block;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-bottom-width: 2px;\n  outline: none;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 100%;\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: serif;\n}\n\n.inputField[_ngcontent-%COMP%]:focus {\n  border-color: teal;\n  -webkit-transition: none;\n  transition: none;\n}\n\ntextarea.inputField[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100%;\n  padding: 15px 10px;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  font-size: 16px;\n  padding: 0 10px;\n  background-color: #efefef;\n  cursor: pointer;\n  height: 30px;\n  border-radius: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: inline-block;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n\n.btnConfirm[_ngcontent-%COMP%] {\n  border: 1px solid #4b7b17;\n  background-color: #70a734;\n  color: #fff;\n}\n\n.btnConfirm[_ngcontent-%COMP%]:hover {\n  background-color: #97d451;\n}\n\n.btnClose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  padding: 0;\n  background-color: #555;\n  color: #fff;\n  font-size: 14px;\n}\n\n.btnClose[_ngcontent-%COMP%]:hover {\n  background-color: #c71414;\n}\n\n.btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: end;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.taskForm[_ngcontent-%COMP%]   .btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.legend[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin: 0 0 15px;\n  color: #222;\n  position: relative;\n  cursor: pointer;\n  padding: 0 0 0 40px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  width: 18px;\n  height: 18px;\n  content: \"\";\n  display: inline-block;\n  box-shadow: 0px 1px 3px 0px #222;\n  vertical-align: middle;\n  margin: 0 7px 0 0;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  position: absolute;\n  top: 0px;\n  left: 5px;\n}\n\n.legend[_ngcontent-%COMP%]::before {\n  background-color: #efefef;\n  box-shadow: 0px 1px 3px 0px #444;\n  border-color: #5a5a5a;\n}\n\n.legend[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.legend__icon[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  top: -8px;\n  left: 1px;\n  z-index: 5;\n}\n\n.legend__icon[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n\n.legend__icon_box[_ngcontent-%COMP%] {\n  fill: #5a5a5a;\n  display: none;\n}\n\n.legend__icon_check[_ngcontent-%COMP%] {\n  display: none;\n  fill: #5a5a5a;\n}\n\n.legend__switcher[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.legend__switcher[_ngcontent-%COMP%]:checked    + .legend__icon[_ngcontent-%COMP%]   .legend__icon_check[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.legend[_ngcontent-%COMP%]   .legend__text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -5px;\n  vertical-align: middle;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtBQ0NGOztBREFFO0VBQ0UsYUFBQTtBQ0VKOztBREFJO0VBQ0UsY0FBQTtBQ0VOOztBREFJO0VBQ0UsZUFBQTtBQ0VOOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBT0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBTmE7RUFPYixrQkFBQTtFQWdDQSxlQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7O0FES0U7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFHQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTko7O0FEU0U7RUFDRSx5QkEvQmE7RUFnQ2IsZ0NBQUE7RUFDQSxxQkEvQm9CO0FDd0J4Qjs7QURXRTtFQUNFLGNBQUE7QUNUSjs7QURnQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNkSjs7QURnQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ2ROOztBRGlCRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDZko7O0FEaUJFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNmSjs7QURpQkU7RUFDRSxhQUFBO0FDZko7O0FEaUJJO0VBQ0UsY0FBQTtBQ2ZOOztBRGtCRTtFQUVFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZGV0YWlsL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uYnRuR3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgLmJ0biB7XG4gICAgbWFyZ2luOiAwIDNweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG4udGFza0Zvcm0gLmJ0bkdyb3VwIC5idG4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGVnZW5kIHtcbiAgJGxlZ2VuZC1jb2xvcjogI2VmZWZlZjtcbiAgJGxlZ2VuZC1jb2xvci1icmlnaHQ6ICM0NDQ7XG4gICRsZWdlbmQtY29sb3ItYm9yZGVyOiAjNWE1YTVhO1xuICAkdGV4dC1jb2xvcjogIzIyMjtcblxuICAvLyBAaW5jbHVkZSBOZXVjaGE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgLy8gQGluY2x1ZGUgc2l6ZSgyMHB4LCAyMHB4KTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICMyMjI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgN3B4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAvL2ZvciBjaGVja2JveFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cbiAgLy8gJi1hcmNoaXZlIHtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVnZW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAkbGVnZW5kLWNvbG9yLWJyaWdodDtcbiAgICBib3JkZXItY29sb3I6ICRsZWdlbmQtY29sb3ItYm9yZGVyO1xuICB9XG4gIC8vIH1cblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC8vIHdpdGggY2hlY2tib3hcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xuXG4gICZfX2ljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIGxlZnQ6IDFweDtcbiAgICB6LWluZGV4OiA1O1xuXG4gICAgdGV4dCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9faWNvbl9ib3gge1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAmX19pY29uX2NoZWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gIH1cbiAgJl9fc3dpdGNoZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQgKyAubGVnZW5kX19pY29uIC5sZWdlbmRfX2ljb25fY2hlY2sge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5sZWdlbmRfX3RleHQge1xuICAgIC8vIEBpbmNsdWRlIE5ldWNoYTtcbiAgICBtYXJnaW46IDAgMCAwIC01cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufVxuIiwiLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uYnRuR3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbi5idG5Hcm91cCAuYnRuIHtcbiAgbWFyZ2luOiAwIDNweDtcbn1cbi5idG5Hcm91cCAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYnRuR3JvdXAgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4udGFza0Zvcm0gLmJ0bkdyb3VwIC5idG4ge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgY29sb3I6ICMyMjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xufVxuLmxlZ2VuZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzIyMjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDdweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5sZWdlbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAjNDQ0O1xuICBib3JkZXItY29sb3I6ICM1YTVhNWE7XG59XG4ubGVnZW5kOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubGVnZW5kX19pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogMXB4O1xuICB6LWluZGV4OiA1O1xufVxuLmxlZ2VuZF9faWNvbiB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fYm94IHtcbiAgZmlsbDogIzVhNWE1YTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fY2hlY2sge1xuICBkaXNwbGF5OiBub25lO1xuICBmaWxsOiAjNWE1YTVhO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXI6Y2hlY2tlZCArIC5sZWdlbmRfX2ljb24gLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxlZ2VuZCAubGVnZW5kX190ZXh0IHtcbiAgbWFyZ2luOiAwIDAgMCAtNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task-detail',
          templateUrl: './task-detail.component.html',
          styleUrls: ['./task-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
        }];
      }, {
        task: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        taskChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/task.service.ts":
  /*!*********************************!*\
    !*** ./src/app/task.service.ts ***!
    \*********************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./message.service */
    "./src/app/message.service.ts"); // import { TASKS } from './mock-tasks';
    // import { PAGES } from './mock-pages';


    var TaskService =
    /*#__PURE__*/
    function () {
      function TaskService(http, messageService) {
        _classCallCheck(this, TaskService);

        this.http = http;
        this.messageService = messageService;
        this.taskUrl = 'api/gettasks/';
        this.createURL = 'api/createtask/';
        this.updateURL = 'api/updatetask/';
        this.removeURL = 'api/removetask/';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(TaskService, [{
        key: "getTasks",
        value: function getTasks(params) {
          var options = {
            params: null
          };

          if (params.onMain) {
            options.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', params.page).set('sortKey', params.sortKey).set('sortWay', params.sortWay).set('onMain', params.onMain);
          } else {
            options.params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('page', params.page).set('sortKey', params.sortKey).set('sortWay', params.sortWay);
          }

          console.log('options', options);
          return this.http.get(this.taskUrl, options); // return of(PAGES);
        }
      }, {
        key: "getTask",
        value: function getTask(id) {
          var url = "".concat(this.taskUrl, "/").concat(id); // this.messageService.add(`TaskService: fetched task id=${id}`);
          // return of(TASKS.find(task => task.id === id));

          return this.http.get(url);
        }
      }, {
        key: "addTask",
        value: function addTask(task) {
          console.log('before send', task);
          return this.http.post(this.createURL, task, this.httpOptions);
        }
      }, {
        key: "updateTask",
        value: function updateTask(task) {
          console.log('before send', task);
          return this.http.post(this.updateURL, task, this.httpOptions);
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(data) {
          var id = typeof data.task === 'number' ? data.task : data.task.id;
          var page = data.page;
          console.log('delete task:', id);
          return this.http.post(this.removeURL, {
            id: id,
            page: page
          }, this.httpOptions);
        }
      }]);

      return TaskService;
    }();

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/task/task.component.ts":
  /*!****************************************!*\
    !*** ./src/app/task/task.component.ts ***!
    \****************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mock_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mock-tasks */
    "./src/app/mock-tasks.ts");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../task-detail/task-detail.component */
    "./src/app/task-detail/task-detail.component.ts"); // import { Page } from '../page';
    // remove on prod


    function TaskComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
      }
    }

    function TaskComponent_ng_template_37_div_0_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.description);
      }
    }

    function TaskComponent_ng_template_37_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_template_37_div_0_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var task_r8 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.onSelect(task_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_template_37_div_0_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var task_r8 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.delete(task_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskComponent_ng_template_37_div_0_div_15_Template, 3, 1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r8 = ctx.$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("task-opened", ctx_r7.descCtrl);

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
      }
    }

    function TaskComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskComponent_ng_template_37_div_0_Template, 16, 7, "div", 29);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tasks);
      }
    }

    function TaskComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 \u043F\u0443\u0441\u0442 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskComponent_form_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 46, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 48, 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 50, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_form_43_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.isNewConfirmed = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_form_43_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.isNewOnMain = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_43_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041E\u0442\u043C\u0435\u043D\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_43_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r22.add(_r14.value, _r15.value, _r16.value, _r17.value);
          _r14.value = "";
          _r15.value = "";
          _r16.value = "";
          return _r17.value = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_form_43_Template_button_click_41_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isNewConfirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.isNewOnMain);
      }
    }

    function TaskComponent_nav_44_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_nav_44_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.setPage(ctx_r26.prev);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "prev");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskComponent_nav_44_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_nav_44_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.setPage(ctx_r28.next);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskComponent_nav_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_nav_44_div_1_Template, 3, 0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskComponent_nav_44_div_5_Template, 3, 0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.prev);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.next);
      }
    }

    var TaskComponent =
    /*#__PURE__*/
    function () {
      function TaskComponent(taskService, notifierService // private messageService: MessageService
      ) {
        _classCallCheck(this, TaskComponent);

        this.taskService = taskService; // tasks: Task[] = [];

        this.tasks = _mock_tasks__WEBPACK_IMPORTED_MODULE_1__["TASKS"]; // remove on prod

        this.sortKey = 'title';
        this.sortWay = 'inc';
        this.page = 1;
        this.prev = null;
        this.next = null;
        this.isInserting = false;
        this.isNewConfirmed = false;
        this.isNewOnMain = false;
        this.descCtrl = false;
        this.notifier = notifierService;
      } // for createform


      _createClass(TaskComponent, [{
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          if (event.key === 'Escape') {
            this.onClose();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTasks();
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          var _this4 = this;

          var params = {
            page: this.page,
            sortKey: this.sortKey,
            sortWay: this.sortWay
          };
          this.taskService.getTasks(params).subscribe(function (data) {
            console.log(data);
            _this4.tasks = data.results;
            _this4.page = data.page;
            _this4.prev = data.prev;
            _this4.next = data.next;
          });
        }
      }, {
        key: "delete",
        value: function _delete(task) {
          var _this5 = this;

          this.tasks = this.tasks.filter(function (h) {
            return h !== task;
          });
          var sendData = {
            task: task,
            page: this.page
          };
          this.taskService.deleteTask(sendData).subscribe(function (data) {
            console.log(data);
            _this5.page = data.page; // notify

            _this5.notifier.notify('info', 'Задача удалена');

            _this5.getTasks();
          });
        }
      }, {
        key: "add",
        value: function add(taskTitle, taskDescribe, taskUser, taskEmail) {
          var _this6 = this;

          console.log(taskTitle, taskDescribe, taskUser, taskEmail, this.isNewConfirmed, this.isNewOnMain);

          if (!taskTitle || !taskUser || !taskEmail) {
            return;
          }

          var newtask = {
            title: taskTitle,
            description: taskDescribe,
            user: taskUser,
            email: taskEmail,
            isCofirmed: this.isNewConfirmed,
            onMain: this.isNewOnMain
          };
          this.isNewConfirmed = false;
          this.isNewOnMain = false;
          this.taskService.addTask({
            newtask: newtask
          }).subscribe(function (task) {
            // this.tasks.push(task);
            console.log(task);
            _this6.page = 1;
            _this6.sortKey = 'pub_date';
            _this6.sortWay = 'dec';

            _this6.getTasks(); // notify


            _this6.notifier.notify('success', 'Задача успешно добавлена!');
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(task) {
          this.selectedTask = task; // this.messageService.add(`TaskService: Selected task id=${task.id}`);
        }
      }, {
        key: "sort",
        value: function sort(key) {
          if (key === this.sortKey) {
            if (this.sortWay === 'inc') {
              this.sortWay = 'dec';
            } else {
              this.sortWay = 'inc';
            }
          } else {
            this.sortKey = key;
            this.sortWay = 'inc';
          }

          this.page = 1;
          this.getTasks();
        }
      }, {
        key: "setPage",
        value: function setPage(page) {
          this.page = page;
          this.getTasks();
        }
      }, {
        key: "onInsert",
        value: function onInsert() {
          this.isInserting = true;
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.isInserting = false;
          this.selectedTask = null;
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ɵfac = function TaskComponent_Factory(t) {
      return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]));
    };

    TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskComponent,
      selectors: [["app-task"]],
      hostBindings: function TaskComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TaskComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 45,
      vars: 7,
      consts: [[1, "pageTitle"], [1, ""], ["title", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443", 1, "createBtn", 3, "click"], [1, "fas", "fa-plus"], ["for", "descCtrl", 1, "legend"], ["id", "descCtrl", "type", "checkbox", "name", "newConfirmed", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 100 125", "enable-background", "new 0 0 100 100", 0, "xml", "space", "preserve", 1, "legend__icon"], ["d", "M67.624,72.538c-2.295-11.419-4.692-24.843-2.153-36.414c0.107-0.49,0.051-0.926-0.111-1.293   c-0.243-0.738-0.866-1.327-1.881-1.32c-12.609,0.119-25.143,1.758-37.752,1.875c-2.294,0.022-2.608,3.081-0.95,3.914   c-0.02,0.119-0.034,0.238-0.034,0.37c0,0-0.192,23.523,2.231,35.075c0,0,0.005,0.015,0.007,0.024   c-0.222,0.963,0.168,1.986,1.432,2.182c10.363,1.617,20.406-1.573,30.752-1.803c2.659-0.059,2.664-4.187,0-4.127   c-9.452,0.207-18.875,3.189-28.319,2.117c-2.211-10.998-1.973-22.651-1.978-33.469c0-0.081-0.015-0.151-0.024-0.227   c10.735-0.297,21.417-1.488,32.15-1.746c-1.863,11.68,0.366,24.572,2.651,35.934C64.17,76.245,68.146,75.137,67.624,72.538z", 1, "legend__icon_box"], ["d", "M21.444,51.573c6.405,6.409,12.812,12.809,19.217,19.214c1.751,1.754,4.596,1.275,5.877-0.755   c9.353-14.826,19.448-29.436,32.601-41.167c3.608-3.217-1.703-8.49-5.289-5.29c-13.596,12.127-24.106,27.36-33.775,42.683   c1.961-0.254,3.919-0.507,5.877-0.76c-6.405-6.405-12.812-12.807-19.215-19.214C23.324,42.869,18.034,48.159,21.444,51.573   L21.444,51.573z", 1, "legend__icon_check"], ["x", "0", "y", "115", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], ["x", "0", "y", "120", "fill", "#000000", "font-size", "5px", "font-weight", "bold", "font-family", "'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"], [1, "legend__text"], [1, "menu", "taskMenu"], [1, "menu__item", "taskTitle"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0443", 1, "menuBtn", "sortBtn", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-sort"], [1, "menu__item", "taskUser"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0438\u043C\u0435\u043D\u0438", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "taskEmail"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043F\u043E\u0447\u0442\u0435", 1, "menuBtn", "sortBtn", 3, "click"], [1, "menu__item", "taskDate"], ["title", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u0434\u0430\u0442\u0435", 1, "menuBtn", "sortBtn", 3, "click"], ["class", "taskList", 4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "task", "taskChange"], ["class", "taskForm", "state", "visible", 4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "taskList"], ["class", "task", 3, "task-opened", 4, "ngFor", "ngForOf"], [1, "task"], [1, "taskHeader"], [1, "taskHeader__item", "taskTitle"], [1, "taskHeader__item", "taskUser"], [1, "taskHeader__item", "taskEmail"], [1, "taskHeader__item", "taskDate"], [1, "taskHeader__item", "btnGroup", "taskDate"], ["type", "button", "title", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C", 1, "btn", "taskEdit", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-edit"], ["type", "button", "title", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", 1, "btn", "taskRemove", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-trash-alt"], ["class", "taskBody", 4, "ngIf"], [1, "taskBody"], [1, "task", "task-empty"], ["state", "visible", 1, "taskForm"], [1, "taskTitle"], ["type", "text", "name", "title", "placeholder", "\u0418\u043C\u044F \u0437\u0430\u0434\u0430\u0447\u0438", "required", "", 1, "inputField"], ["taskTitle", ""], ["type", "text", "name", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "inputField"], ["taskDescribe", ""], ["type", "text", "name", "user", "placeholder", "\u0424\u0418\u041E", 1, "inputField"], ["taskUser", ""], ["type", "email", "name", "email", "placeholder", "Email", 1, "inputField"], ["taskEmail", ""], ["for", "newConfirmed", 1, "legend"], ["id", "newConfirmed", "type", "checkbox", "name", "newConfirmed", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], ["for", "newOnMain", 1, "legend"], ["id", "newOnMain", "type", "checkbox", "name", "newOnMain", 1, "legend__switcher", 3, "ngModel", "ngModelChange"], [1, "btnGroup"], ["type", "button", 1, "btn", 3, "click"], ["type", "confirm", 1, "btn", "btnConfirm", 3, "click"], ["type", "button", "title", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C", 1, "btn", "btnClose", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-times"], [1, "pagination"], ["class", "pagination__item", 4, "ngIf"], [1, "pagination__item"], [1, "paginationContent"], ["title", "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "paginationContent", 3, "click"], ["title", "\u0421\u043B\u0435\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", 1, "paginationContent", 3, "click"]],
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_3_listener() {
            return ctx.onInsert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.descCtrl = $event;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_20_listener() {
            return ctx.sort("title");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_24_listener() {
            return ctx.sort("user");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0418\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_28_listener() {
            return ctx.sort("email");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_32_listener() {
            return ctx.sort("pub_date");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0414\u0430\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TaskComponent_div_36_Template, 1, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TaskComponent_ng_template_37_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TaskComponent_ng_template_39_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-task-detail", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskChange", function TaskComponent_Template_app_task_detail_taskChange_41_listener() {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "notifier-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TaskComponent_form_43_Template, 43, 2, "form", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TaskComponent_nav_44_Template, 6, 3, "nav", 27);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasks.length)("ngIfThen", _r1)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx.selectedTask);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInserting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prev || ctx.next);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailComponent"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierContainerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
      styles: [".pageTitle[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n  border-bottom: 1px solid #ccc;\n}\n.pageTitle[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.pageTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border: none;\n}\n.pageTitle[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n.taskTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.taskHeader[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  align-content: center;\n  min-height: 50px;\n  word-break: break-word;\n}\n.taskBody[_ngcontent-%COMP%] {\n  display: none;\n  background: #efefef;\n  padding: 5px 10px;\n}\n.taskHeader__item[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 0 5px;\n}\n.taskStateToggler[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  padding: 10px;\n  border: 1px solid #7b7b7b;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.taskStateToggler[_ngcontent-%COMP%]:hover {\n  background-color: #00000014;\n}\n.task[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  position: relative;\n}\n.taskMsg[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  background-color: #00000005;\n  border-radius: 15px;\n  border: 1px solid #c3d5af;\n  margin: 5px;\n  display: none;\n}\n.taskMsg-visible[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.task-confirmed[_ngcontent-%COMP%] {\n  background-color: #d8ecc1;\n}\n.task.task-opened[_ngcontent-%COMP%]   .taskBody[_ngcontent-%COMP%] {\n  display: block;\n}\n.task.task-opened[_ngcontent-%COMP%]   .taskHeader[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 5px -4px #222;\n}\n.task[_ngcontent-%COMP%]   .taskTitle[_ngcontent-%COMP%], .taskMenu[_ngcontent-%COMP%]   .taskTitle[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.taskUser[_ngcontent-%COMP%], .taskEmail[_ngcontent-%COMP%] {\n  width: 20%;\n}\n.taskDate[_ngcontent-%COMP%] {\n  width: 15%;\n}\n.task-empty[_ngcontent-%COMP%] {\n  color: #666;\n  font-style: italic;\n  padding: 10px 20px;\n}\n.taskForm[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 10px;\n  max-width: 400px;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  left: 10px;\n  right: 10px;\n  box-shadow: 0 2px 5px 1px #222;\n  top: 60px;\n}\n.inputField[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 10px;\n  max-width: 100%;\n  display: block;\n  margin-bottom: 15px;\n  border: 1px solid #ddd;\n  border-bottom-width: 2px;\n  outline: none;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  width: 100%;\n  border-radius: 5px;\n  font-size: 14px;\n  font-family: serif;\n}\n.inputField[_ngcontent-%COMP%]:focus {\n  border-color: teal;\n  -webkit-transition: none;\n  transition: none;\n}\ntextarea.inputField[_ngcontent-%COMP%] {\n  min-height: 100px;\n  min-width: 100%;\n  padding: 15px 10px;\n  -webkit-transition: none;\n  transition: none;\n}\n.btn[_ngcontent-%COMP%] {\n  border: 1px solid #5a5a5a;\n  font-size: 16px;\n  padding: 0 10px;\n  background-color: #efefef;\n  cursor: pointer;\n  height: 30px;\n  border-radius: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: inline-block;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d6d6d6;\n}\n.btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: end;\n}\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.taskForm[_ngcontent-%COMP%]   .btnGroup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.btnConfirm[_ngcontent-%COMP%] {\n  border: 1px solid #4b7b17;\n  background-color: #70a734;\n  color: #fff;\n}\n.btnConfirm[_ngcontent-%COMP%]:hover {\n  background-color: #97d451;\n}\n.btnClose[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  height: 25px;\n  width: 25px;\n  text-align: center;\n  padding: 0;\n  background-color: #555;\n  color: #fff;\n  font-size: 14px;\n}\n.btnClose[_ngcontent-%COMP%]:hover {\n  background-color: #c71414;\n}\n.sortBtn[_ngcontent-%COMP%] {\n  color: #616161;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 10px;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: transparent;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 11px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border: none;\n  outline: 0;\n}\n.sortBtn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #ffaa0c;\n  cursor: pointer;\n}\n.taskMenu[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 0 10px;\n}\n.taskMenu[_ngcontent-%COMP%]   .menuBtn[_ngcontent-%COMP%] {\n  padding: 0 5px;\n}\n.pagination[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n.paginationContent[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 34px;\n  min-width: 34px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #5a5a5a;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.paginationContent[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #5a5a5a;\n  color: #fff;\n}\n.pagination__item[_ngcontent-%COMP%] {\n  padding: 0 3px;\n}\n.pagination__item[_ngcontent-%COMP%]:first-child   .paginationContent[_ngcontent-%COMP%] {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.pagination__item[_ngcontent-%COMP%]:last-child   .paginationContent[_ngcontent-%COMP%] {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.createBtn[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  min-width: 30px;\n  text-align: center;\n  background-color: #fff;\n  border: 2px solid #5a5a5a;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 18px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  border-radius: 5px;\n  font-size: 16px;\n  margin: 0 0 0 5px;\n}\n.createBtn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #5a5a5a;\n  color: #fff;\n}\n.taskRemove[_ngcontent-%COMP%] {\n  border-color: #c71414;\n  color: #c71414;\n}\n.taskRemove[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #c71414;\n}\n.legend[_ngcontent-%COMP%] {\n  font-size: 16px;\n  display: block;\n  margin: 0 0 15px;\n  color: #222;\n  position: relative;\n  cursor: pointer;\n  padding: 0 0 0 40px;\n}\n.legend[_ngcontent-%COMP%]::before {\n  width: 18px;\n  height: 18px;\n  content: \"\";\n  display: inline-block;\n  box-shadow: 0px 1px 3px 0px #222;\n  vertical-align: middle;\n  margin: 0 7px 0 0;\n  border-radius: 5px;\n  border: 1px solid transparent;\n  position: absolute;\n  top: 0px;\n  left: 5px;\n}\n.legend[_ngcontent-%COMP%]::before {\n  background-color: #efefef;\n  box-shadow: 0px 1px 3px 0px #444;\n  border-color: #5a5a5a;\n}\n.legend[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.legend__icon[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  top: -8px;\n  left: 1px;\n  z-index: 5;\n}\n.legend__icon[_ngcontent-%COMP%]   text[_ngcontent-%COMP%] {\n  opacity: 0;\n  display: none;\n}\n.legend__icon_box[_ngcontent-%COMP%] {\n  fill: #5a5a5a;\n  display: none;\n}\n.legend__icon_check[_ngcontent-%COMP%] {\n  display: none;\n  fill: #5a5a5a;\n}\n.legend__switcher[_ngcontent-%COMP%] {\n  display: none;\n}\n.legend__switcher[_ngcontent-%COMP%]:checked    + .legend__icon[_ngcontent-%COMP%]   .legend__icon_check[_ngcontent-%COMP%] {\n  display: block;\n}\n.legend[_ngcontent-%COMP%]   .legend__text[_ngcontent-%COMP%] {\n  margin: 0 0 0 -5px;\n  vertical-align: middle;\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pcmVoaWtvL1Byb2plY3RzL21pcmVoaWtvL2FuZ3VsYXIvYW5nYXBwL3NyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7QUNFSjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjtBREVBO0VBQ0UsMkJBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7QUNDRjtBRENBO0VBQ0UsK0JBQUE7QUNFRjtBRGVBOztFQUVFLFVBQUE7QUNaRjtBRGVBOztFQUVFLFVBQUE7QUNaRjtBRGNBO0VBQ0UsVUFBQTtBQ1hGO0FEY0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1hGO0FEZUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDWkY7QURlQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNaRjtBRGVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDWkY7QURlQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EscUJBQUE7QUNaRjtBRGVBO0VBQ0UseUJBQUE7QUNaRjtBRGVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtBQ1pGO0FEYUU7RUFDRSxhQUFBO0FDWEo7QURhSTtFQUNFLGNBQUE7QUNYTjtBRGFJO0VBQ0UsZUFBQTtBQ1hOO0FEZUE7RUFDRSxVQUFBO0FDWkY7QURlQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDWkY7QURlQTtFQUNFLHlCQUFBO0FDWkY7QURlQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1pGO0FEZUE7RUFDRSx5QkFBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNaRjtBRGNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNaSjtBRGlCQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQ2RGO0FEZUU7RUFDRSxjQUFBO0FDYko7QURtQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNoQkY7QURtQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUNoQkY7QURrQkU7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDaEJKO0FEb0JBO0VBQ0UsY0FBQTtBQ2pCRjtBRGtCRTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUNoQko7QURrQkU7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FDaEJKO0FEcUJBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2xCRjtBRG9CRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNsQko7QURzQkE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNuQkY7QURvQkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNsQko7QURzQkE7RUFPRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FOYTtFQU9iLGtCQUFBO0VBZ0NBLGVBQUE7RUFDQSxtQkFBQTtBQ3hERjtBRHlCRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUdBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUMxQko7QUQ2QkU7RUFDRSx5QkEvQmE7RUFnQ2IsZ0NBQUE7RUFDQSxxQkEvQm9CO0FDSXhCO0FEK0JFO0VBQ0UsY0FBQTtBQzdCSjtBRG9DRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2xDSjtBRG9DSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDbENOO0FEcUNFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7QUNuQ0o7QURxQ0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ25DSjtBRHFDRTtFQUNFLGFBQUE7QUNuQ0o7QURxQ0k7RUFDRSxjQUFBO0FDbkNOO0FEc0NFO0VBRUUsa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDckNKIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICYgPiBkaXYge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICBoMiB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5sZWdlbmQge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG59XG5cbi50YXNrVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2tIZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4udGFza0JvZHkge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLnRhc2tIZWFkZXJfX2l0ZW0ge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4udGFza1N0YXRlVG9nZ2xlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrU3RhdGVUb2dnbGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE0O1xufVxuXG4udGFzayB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhc2tNc2cge1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA1O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNkNWFmO1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRhc2tNc2ctdmlzaWJsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRhc2stY29uZmlybWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZWNjMTtcbn1cblxuLnRhc2sudGFzay1vcGVuZWQgLnRhc2tCb2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGFzay50YXNrLW9wZW5lZCAudGFza0hlYWRlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDVweCAtNHB4ICMyMjI7XG59XG5cbi8vIC50YXNrQm9keSAuYnRuIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDA1O1xuLy8gICB3aWR0aDogMzBweDtcbi8vICAgbWFyZ2luOiAwIDNweCA1cHg7XG4vLyAgIGhlaWdodDogMzBweDtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjN2I3YjdiO1xuLy8gfVxuXG4vLyAudGFza0JvZHkgLmJ0bjpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcbi8vIH1cblxuLnRhc2sgLnRhc2tUaXRsZSxcbi50YXNrTWVudSAudGFza1RpdGxlIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLnRhc2tVc2VyLFxuLnRhc2tFbWFpbCB7XG4gIHdpZHRoOiAyMCU7XG59XG4udGFza0RhdGUge1xuICB3aWR0aDogMTUlO1xufVxuXG4udGFzay1lbXB0eSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLy8gZm9ybVxuLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTVhNWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIC5idG4ge1xuICAgIG1hcmdpbjogMCAzcHg7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuLnRhc2tGb3JtIC5idG5Hcm91cCAuYnRuIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uc29ydEJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmYWEwYztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLy8gdGFza21lbnVcbi50YXNrTWVudSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIC5tZW51QnRuIHtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgfVxufVxuXG4vL3BhZ2luYXRpb25cblxuLnBhZ2luYXRpb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzRweDtcbiAgbWluLXdpZHRoOiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1YTVhNWE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5wYWdpbmF0aW9uX19pdGVtIHtcbiAgcGFkZGluZzogMCAzcHg7XG4gICY6Zmlyc3QtY2hpbGQgLnBhZ2luYXRpb25Db250ZW50IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICB9XG4gICY6bGFzdC1jaGlsZCAucGFnaW5hdGlvbkNvbnRlbnQge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgfVxufVxuXG4vLyBjcmVhdGUgYnV0dG9uXG4uY3JlYXRlQnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWE1YTVhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogMCAwIDAgNXB4O1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE1YTVhO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi50YXNrUmVtb3ZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzcxNDE0O1xuICBjb2xvcjogI2M3MTQxNDtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3MTQxNDtcbiAgfVxufVxuXG4ubGVnZW5kIHtcbiAgJGxlZ2VuZC1jb2xvcjogI2VmZWZlZjtcbiAgJGxlZ2VuZC1jb2xvci1icmlnaHQ6ICM0NDQ7XG4gICRsZWdlbmQtY29sb3ItYm9yZGVyOiAjNWE1YTVhO1xuICAkdGV4dC1jb2xvcjogIzIyMjtcblxuICAvLyBAaW5jbHVkZSBOZXVjaGE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgLy8gQGluY2x1ZGUgc2l6ZSgyMHB4LCAyMHB4KTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4ICMyMjI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgN3B4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAvL2ZvciBjaGVja2JveFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cbiAgLy8gJi1hcmNoaXZlIHtcbiAgJjo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVnZW5kLWNvbG9yO1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAkbGVnZW5kLWNvbG9yLWJyaWdodDtcbiAgICBib3JkZXItY29sb3I6ICRsZWdlbmQtY29sb3ItYm9yZGVyO1xuICB9XG4gIC8vIH1cblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC8vIHdpdGggY2hlY2tib3hcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xuXG4gICZfX2ljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIGxlZnQ6IDFweDtcbiAgICB6LWluZGV4OiA1O1xuXG4gICAgdGV4dCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJl9faWNvbl9ib3gge1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAmX19pY29uX2NoZWNrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZpbGw6ICM1YTVhNWE7XG4gIH1cbiAgJl9fc3dpdGNoZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQgKyAubGVnZW5kX19pY29uIC5sZWdlbmRfX2ljb25fY2hlY2sge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIC5sZWdlbmRfX3RleHQge1xuICAgIC8vIEBpbmNsdWRlIE5ldWNoYTtcbiAgICBtYXJnaW46IDAgMCAwIC01cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxufVxuIiwiLnBhZ2VUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4ucGFnZVRpdGxlID4gZGl2IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnBhZ2VUaXRsZSBoMiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wYWdlVGl0bGUgLmxlZ2VuZCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4udGFza1RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrSGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxuLnRhc2tCb2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi50YXNrSGVhZGVyX19pdGVtIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDVweDtcbn1cblxuLnRhc2tTdGF0ZVRvZ2dsZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza1N0YXRlVG9nZ2xlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAxNDtcbn1cblxuLnRhc2sge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrTXNnIHtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwNTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZDVhZjtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrTXNnLXZpc2libGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50YXNrLWNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGVjYzE7XG59XG5cbi50YXNrLnRhc2stb3BlbmVkIC50YXNrQm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGFzay50YXNrLW9wZW5lZCAudGFza0hlYWRlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDVweCAtNHB4ICMyMjI7XG59XG5cbi50YXNrIC50YXNrVGl0bGUsXG4udGFza01lbnUgLnRhc2tUaXRsZSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi50YXNrVXNlcixcbi50YXNrRW1haWwge1xuICB3aWR0aDogMjAlO1xufVxuXG4udGFza0RhdGUge1xuICB3aWR0aDogMTUlO1xufVxuXG4udGFzay1lbXB0eSB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnRhc2tGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDFweCAjMjIyO1xuICB0b3A6IDYwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xufVxuXG4uaW5wdXRGaWVsZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxudGV4dGFyZWEuaW5wdXRGaWVsZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YTVhNWE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuLmJ0bkdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG4uYnRuR3JvdXAgLmJ0biB7XG4gIG1hcmdpbjogMCAzcHg7XG59XG4uYnRuR3JvdXAgLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmJ0bkdyb3VwIC5idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhc2tGb3JtIC5idG5Hcm91cCAuYnRuIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0bkNvbmZpcm0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGI3YjE3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhNzM0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bkNvbmZpcm06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkNDUxO1xufVxuXG4uYnRuQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuQ2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4uc29ydEJ0biB7XG4gIGNvbG9yOiAjNjE2MTYxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG4uc29ydEJ0biA6aG92ZXIge1xuICBjb2xvcjogI2ZmYWEwYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza01lbnUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnRhc2tNZW51IC5tZW51QnRuIHtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnaW5hdGlvbkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1pbi13aWR0aDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWE1YTVhO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5wYWdpbmF0aW9uQ29udGVudDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNWE1YTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdpbmF0aW9uX19pdGVtIHtcbiAgcGFkZGluZzogMCAzcHg7XG59XG4ucGFnaW5hdGlvbl9faXRlbTpmaXJzdC1jaGlsZCAucGFnaW5hdGlvbkNvbnRlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5wYWdpbmF0aW9uX19pdGVtOmxhc3QtY2hpbGQgLnBhZ2luYXRpb25Db250ZW50IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmNyZWF0ZUJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzVhNWE1YTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDAgMCAwIDVweDtcbn1cbi5jcmVhdGVCdG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YTVhNWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGFza1JlbW92ZSB7XG4gIGJvcmRlci1jb2xvcjogI2M3MTQxNDtcbiAgY29sb3I6ICNjNzE0MTQ7XG59XG4udGFza1JlbW92ZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcxNDE0O1xufVxuXG4ubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDAgMTVweDtcbiAgY29sb3I6ICMyMjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIDAgMCA0MHB4O1xufVxuLmxlZ2VuZDo6YmVmb3JlIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggIzIyMjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwIDdweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5sZWdlbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCAjNDQ0O1xuICBib3JkZXItY29sb3I6ICM1YTVhNWE7XG59XG4ubGVnZW5kOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubGVnZW5kX19pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogMXB4O1xuICB6LWluZGV4OiA1O1xufVxuLmxlZ2VuZF9faWNvbiB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fYm94IHtcbiAgZmlsbDogIzVhNWE1YTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZWdlbmRfX2ljb25fY2hlY2sge1xuICBkaXNwbGF5OiBub25lO1xuICBmaWxsOiAjNWE1YTVhO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZ2VuZF9fc3dpdGNoZXI6Y2hlY2tlZCArIC5sZWdlbmRfX2ljb24gLmxlZ2VuZF9faWNvbl9jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxlZ2VuZCAubGVnZW5kX190ZXh0IHtcbiAgbWFyZ2luOiAwIDAgMCAtNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task',
          templateUrl: './task.component.html',
          styleUrls: ['./task.component.scss']
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]
        }, {
          type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
        }];
      }, {
        handleKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:keydown', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mirehiko/Projects/mirehiko/angular/angapp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map