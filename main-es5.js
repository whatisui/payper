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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n<div class=\"\" *ngIf=\"loader\" style=\"text-align: center;\">\n  Loading\n  <span class=\"uk-icon   loader\" uk-icon=\"icon: thumbnails\"></span> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"!loader\">\n    <span class=\"uk-icon iconss\" uk-icon=\"icon: nut\"></span>\n\n\n    <div class=\"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin\" uk-grid>\n\n        <div class=\"uk-card-media-left uk-cover-container\">\n\n            <img src=\"https://creativecoderone.github.io/tyre/assets/Cover_UIUX_4.gif\" width=\"100%\" alt=\"\" uk-cover>\n            <canvas width=\"300\" height=\"300\"></canvas>\n        </div>\n        <div class=\"\" *ngIf=\"logo\">\n            <div class=\"uk-card-body\" style=\"    border: 1px dotted #1e88e5;\n            margin: 10px;\n            margin-top: 10px;box-shadow: 0px 0px 4px 4px gainsboro;\">\n                <h3 style=\"color: black; \">\n                    Register\n                    <kbd (click)=\"logo = false\" uk-toggle=\"target: #new-overlay\"\n                        style=\"float: right;text-align: center;\">Login <i class=\"fas fa-user    \"></i></kbd>\n                </h3>\n\n                <fieldset>\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.username\" name=\"login.username\" type=\"text\"\n                            placeholder=\"Username\">\n                    </div>\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.password\" name=\"login.password\" type=\"password\"\n                            placeholder=\"Password\">\n                    </div>\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.cpassword\" name=\"login.cpassword\" type=\"password\"\n                            placeholder=\"Confirm Password\">\n                    </div>\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.mobile\" name=\"login.mobile\" type=\"text\"\n                            placeholder=\"Mobile\">\n                    </div>\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.email\" name=\"login.email\" type=\"email\"\n                            placeholder=\"Email\">\n                    </div>\n                    <button class=\"uk-button uk-button-primary btn-block\" (click)=\"register()\">Register</button>\n\n                    <div class=\"alert alert-sucess\" *ngIf=\"srm\">\n                        {{msg}}\n                    </div>\n                </fieldset>\n            </div>\n        </div>\n        <div *ngIf=\"!logo\">\n            <div class=\"uk-card-body\" style=\"    border: 1px dotted #1e88e5;\n            margin: 10px;\n            margin-top: 10px;box-shadow: 0px 0px 4px 4px gainsboro;\">\n                <h3 style=\"color:black\" class=\"uk-legend\">Login <kbd (click)=\"logo = true\"\n                        uk-toggle=\"target: #new-overlay\" style=\"float: right;text-align: center;\">New User <i\n                            class=\"fas fa-user    \"></i></kbd>\n                </h3>\n                <fieldset class=\"uk-fieldset\">\n\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.username\" name=\"login.username\" type=\"text\"\n                            placeholder=\"Username\">\n                    </div>\n                    <div class=\"uk-margin\">\n                        <input class=\"uk-input\" [(ngModel)]=\"login.password\" name=\"login.password\" type=\"password\"\n                            placeholder=\"Password\">\n                    </div>\n                    <button uk-tootip=\"Please enter Username and Password\" [disabled]=\"login?.username == ''&& login?.password == ''\" (click)=\"logins()\"\n                        class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom\">Login</button>\n                    <kbd style=\"float: right;text-align: center;\">Forget password <i class=\"fas fa-key    \"></i></kbd>\n                    <br>\n                    <div class=\"alert alert-sucess\" *ngIf=\"srm\">\n                        {{msg}}\n                    </div>\n                </fieldset>\n                <hr>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<div class=\"\" *ngIf=\"loader\" style=\"text-align: center;\">\n    Taking you to Dashboard\n    <span class=\"uk-icon   loader\" uk-icon=\"icon: nut\"></span>\n</div>\n\n<div id=\"snackbar\">{{msg}}</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/roman/roman.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roman/roman.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRomanRomanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row fixed-top\" style=\"z-index: 0;\">\n    <div class=\"col-2\">\n        <a uk-tooltip=\"LOGO\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: nut\"></span>\n        </a>\n    </div>\n    <div class=\"col-2\">\n        <a uk-toggle=\"target: #profile-flip\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: user\"></span>\n        </a>\n    </div>\n    <div class=\"col-2\">\n        <a uk-toggle=\"target: #intro-flip\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: star\"></span>\n        </a>\n    </div>\n    <div class=\"col-2\">\n        <a uk-toggle=\"target: #users-flip\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: cart\"></span>\n            <b>{{reqa.length}}</b>\n        </a>\n    </div>\n    <div class=\"col-2\">\n        <a (click)=\"logs()\" uk-tooltip=\"logout\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: home\"></span>\n        </a>\n    </div>\n    <div class=\"col-2\">\n        <a uk-tooltip=\"Info\">\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: info\"></span>\n        </a>\n    </div>\n</div>\n<br>\n<br>\n<br>\n<div class=\"container\" *ngIf=\"!loader\">\n    <div class=\"uk-card uk-card-body uk-card-default\">\n        <h3>Board\n            <span class=\"uk-icon uk-margin-small-right\"\n                uk-tooltip=\"Amount calculator and disbursal request has been taken place here.\"\n                uk-icon=\"icon: info\"></span>\n\n        </h3>\n\n        <div class=\"badge badge-primary\">\n            <i class=\"fas fa-rupee-sign    \"></i>\n            {{amount}}\n        </div>\n        <div class=\"uk-margin\">\n            <kbd> <label for=\"uk-range\">Amount required*</label></kbd>\n            <input class=\"uk-range\" type=\"range\" (change)=\"getvat($event,'a')\" [(ngModel)]=\"amount\" name=\"amount\"\n                value=\"1000\" min=\"1000\" max=\"10000\" step=\"100\">\n        </div>\n        <div class=\"badge badge-primary\">\n            <i class=\"fas fa-calendar-alt    \"></i>\n            {{tenure}}\n        </div>\n        <div class=\"uk-margin\">\n            <kbd> <label for=\"uk-range\">Tenure looking for* <small>In weeks</small> </label></kbd>\n            <input class=\"uk-range\" type=\"range\" (change)=\"getvat($event,'b')\" [(ngModel)]=\"tenure\" name=\"tenure\"\n                value=\"1\" min=\"1\" max=\"12\" step=\"1\">\n        </div>\n\n        <table class=\"text-center uk-table\" style=\"width: 100%;\">\n            <thead>\n                <tr>\n                    <td>\n                        <kbd>Amount</kbd>\n                    </td>\n                    <td>\n                        <i class=\"fas fa-rupee-sign    \"></i>\n                        {{amount}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <kbd>Weeks</kbd>\n                    </td>\n                    <td>\n                        <i class=\"fas fa-calendar-alt    \"></i>\n                        {{tenure}}\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <kbd>VAT</kbd>\n                    </td>\n                    <td>\n                        <i class=\"fas fa-plus\"></i>\n                        {{interest}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <kbd>\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            Weekly\n                        </kbd>\n                    </td>\n                    <td>\n                        {{weekly|number:'1.0-0'}} /week\n                    </td>\n                </tr>\n            </thead>\n\n        </table>\n\n\n        <div (click)=\"requests()\" class=\"uk-button btn-block uk-button-primary oright\">\n            <i class=\"fas fa-rupee-sign\"></i>\n            {{topay}}&nbsp;\n            <span class=\"uk-icon uk-margin-small-right\" uk-icon=\"icon: arrow-right\"></span>\n        </div>\n\n    </div>\n</div>\n\n\n<div id=\"profile-flip\" uk-offcanvas=\"flip: true; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n        <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n        <h6 style=\"color: black;\"> <span class=\"uk-icon \" uk-icon=\"icon: user\"></span> Profile</h6>\n        <hr>\n\n        <div class=\"card mb-3\">\n            <img [src]=\"userp?.profile_pic_url_hd\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body text-secondry\" style=\"color: black;\">\n                <div class=\"card-title\" style=\"color: black;\">\n                    {{userp?.full_name}}\n                </div>\n                <p class=\"card-text\">\n                    {{userp?.biography}}\n                </p>\n                <p class=\"card-text\"><small class=\"text-muted\">\n                        <span class=\"uk-icon \" uk-icon=\"icon: instagram\"></span>\n                        {{userp?.username}}\n                    </small></p>\n                <div class=\"card-text\"><b class=\"text-muted\">\n                        <span class=\"badge badge-danger\">Giver</span>\n                        <span class=\"badge badge-warning\">Taker</span>\n                    </b>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"users-flip\" uk-offcanvas=\"flip: true; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n        <button class=\"uk-offcanvas-close\" style=\"color: black;\" type=\"button\" uk-close></button>\n        <h5 style=\" color: black; \"> <span class=\"uk-icon \" uk-icon=\"icon: users\"></span> Requests</h5>\n        <!--  -->\n        <div *ngIf=\"reqa.length == 0\">\n            <br>\n            <div class=\"alert alert-warning\">\n                No requests has been made.</div>\n        </div>\n        <div class=\"\" *ngIf=\"reqa.length > 0\">\n            <div class=\"uk-card uk-card-default\" style=\"padding: 10px;overflow: auto;margin: 5px 0px;\"\n                *ngFor=\"let item of reqa; let i=index\">\n                <div class=\"pic\">\n                    <img [src]=\"item?.pic\" width=\"80%\" style=\"margin:auto;display: block;padding: 10px;\" alt=\"...\">\n                </div>\n                <div class=\"uk-card-title\" style=\"font-size: 14px;\">\n                    <b> {{item?.fullname}}</b>\n                    <div class=\"badge\" style=\"float: right;\">\n                        <!-- <i class=\"fas fa-circle\" style=\"color: chartreuse;\"></i> -->\n                    </div>\n                </div>\n\n                <div class=\"uk-card-title\" style=\"font-size: 14px;\">{{item?.date|date:'medium'}}\n                    <div class=\"badge\" style=\"float: right;\">\n                        <!-- <i class=\"fas fa-circle\" style=\"color: chartreuse;\"></i> -->\n                    </div>\n                </div>\n\n                <div class=\"row\" style=\"font-size: 10px;margin-top: 5px;\">\n                    <div class=\"col-4\">\n                        <i class=\"fas fa-rupee-sign \"></i>&nbsp;{{item?.amount}}\n                    </div>\n                    <div class=\"col-4\">\n                        <i class=\"fas fa-calendar-alt    \"></i>&nbsp;{{item?.weekly|number:'1.0-0'}}/{{item?.tenure}}\n                    </div>\n                    <div class=\"col-4\">\n                        <i class=\"fas fa-rupee-sign   \"></i>&nbsp;{{item?.vat|number:'1.0-0'}}\n                    </div>\n                </div>\n\n                <div class=\"card-text\" style=\"font-size: 22px;margin-top: 5px;\">\n                    <!-- <div class=\"badge badge-success\" style=\"float: left;\">\n                    <i class=\"fas fa-plus    \"></i>\n                </div>\n                <div class=\"badge badge-warning\" style=\"float: left;\">\n                    <i class=\"fas fa-minus    \"></i>\n                </div> -->\n                    <div class=\"\" style=\"float: right;\" (click)=\"delrequest(item)\">\n                        <i class=\"fa fa-trash  text-danger  \"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"intro-flip\" uk-offcanvas=\"flip: true; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n        <app-info></app-info>\n    </div>\n</div>\n\n<div class=\"\" *ngIf=\"loader\" style=\"text-align: center;\">\n    Requesting\n    <span class=\"uk-icon   loader\" uk-icon=\"icon: nut\"></span>\n</div>\n<div id=\"snackbar\">{{msg}}</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sub/info/info.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub/info/info.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSubInfoInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"uk-offcanvas-close\" type=\"button\" style=\"color: black;\" uk-close></button>\n<h6 style=\"color: black;\"> <span class=\"uk-icon \" uk-icon=\"icon: star\"></span> Features</h6>\n<hr>\n<div>\n    The earliest release of our product <span class=\"uk-icon \" uk-icon=\"icon: thumbnails\"></span>\n    is about to provide funding help to the people who are seeking money.\n    <hr>\n    We are providing funding factility in weekly basis.\n    <hr>\n    Legal notices wil be released\n    <hr>\n    <div class=\"badge badge-primary\">\n        Thank you\n    </div>\n</div>\n\n<div id=\"intro-flip\" uk-offcanvas=\"flip: true; overlay: true\">\n    <div class=\"uk-offcanvas-bar\">\n        <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n        <h3> <span class=\"uk-icon \" uk-icon=\"icon: star\"></span> Features</h3>\n        <hr>\n        <div>\n            The earliest release of our product <span class=\"uk-icon \" uk-icon=\"icon: thumbnails\"></span>\n            is about to provide funding help to the people who are seeking money.\n            <hr>\n            We are providing funding factility in weekly basis.\n            <hr>\n            Legal notices wil be released\n            <hr>\n            <div class=\"badge badge-primary\">\n                -Thank you\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _roman_roman_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./roman/roman.component */
    "./src/app/roman/roman.component.ts");

    var routes = [{
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'down',
      component: _roman_roman_component__WEBPACK_IMPORTED_MODULE_4__["RomanComponent"]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader {\n  text-align: center;\n  font-size: 24px;\n  float: center;\n  animation: rotate 2s infinite alternate-reverse;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxsb2FucHJvXFxzcmNcXGFwcFxccm9tYW4vLi5cXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSwrQkFBQTtZQUFBLHVCQUFBO0VDQ047RURDRTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNDTjtBQUNGOztBRFBBO0VBQ0k7SUFDSSwrQkFBQTtZQUFBLHVCQUFBO0VDQ047RURDRTtJQUNJLGlDQUFBO1lBQUEseUJBQUE7RUNDTjtBQUNGIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2UgO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufSIsIi5sb2FkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZmxvYXQ6IGNlbnRlcjtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */";
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'loanpro';
        this.loader = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          //Add 'implements OnInit' to the class.
          console.log(document.readyState);
          this.loader = true;

          if (document.readyState === 'interactive') {
            this.loader = false;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _roman_roman_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./roman/roman.component */
    "./src/app/roman/roman.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _sub_info_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sub/info/info.component */
    "./src/app/sub/info/info.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _roman_roman_component__WEBPACK_IMPORTED_MODULE_8__["RomanComponent"], _sub_info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/gun.service.ts":
  /*!********************************!*\
    !*** ./src/app/gun.service.ts ***!
    \********************************/

  /*! exports provided: GunService */

  /***/
  function srcAppGunServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GunService", function () {
      return GunService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var GunService =
    /*#__PURE__*/
    function () {
      function GunService(http) {
        _classCallCheck(this, GunService);

        this.http = http;
      }

      _createClass(GunService, [{
        key: "inst",
        value: function inst(user) {
          return this.http.get('https://www.instagram.com/' + user + '/?__a=1');
        }
      }, {
        key: "login",
        value: function login(data) {
          return this.http.post('https://backendpro.herokuapp.com/login', data);
        }
      }, {
        key: "register",
        value: function register(data) {
          return this.http.post('https://backendpro.herokuapp.com/register', data);
        }
      }, {
        key: "usercheck",
        value: function usercheck(data) {
          return this.http.post('https://backendpro.herokuapp.com/usercheck', data);
        }
      }, {
        key: "reqboard",
        value: function reqboard(data) {
          return this.http.post('https://backendpro.herokuapp.com/reqboard', data);
        }
      }, {
        key: "getrequests",
        value: function getrequests() {
          return this.http.get('https://backendpro.herokuapp.com/getrequests');
        }
      }, {
        key: "getonerequests",
        value: function getonerequests(data) {
          return this.http.post('https://backendpro.herokuapp.com/getonerequests', data);
        }
      }, {
        key: "delrequest",
        value: function delrequest(data) {
          return this.http.post('https://backendpro.herokuapp.com/delrequest', data);
        }
      }]);

      return GunService;
    }();

    GunService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GunService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GunService);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uk-card {\n  box-shadow: 0px 0px 5px 5px gainsboro;\n}\n\n.uk-offcanvas-bar {\n  background-color: black;\n  color: white;\n  border-right: 2px solid coral;\n}\n\nh3 {\n  color: white;\n}\n\n.iconss {\n  position: absolute;\n  margin: 15px;\n  z-index: 1001;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvZ2luL0M6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxsb2FucHJvXFxzcmNcXGFwcFxccm9tYW4vLi5cXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDSUYiLCJmaWxlIjoiLi4vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWstY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IGdhaW5zYm9ybztcclxufVxyXG4udWstb2ZmY2FudmFzLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGNvcmFsO1xyXG59XHJcbmgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmljb25zcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG59XHJcbiIsIi51ay1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IGdhaW5zYm9ybztcbn1cblxuLnVrLW9mZmNhbnZhcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBjb3JhbDtcbn1cblxuaDMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pY29uc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMTVweDtcbiAgei1pbmRleDogMTAwMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _gun_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../gun.service */
    "./src/app/gun.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loc, router, location) {
        _classCallCheck(this, LoginComponent);

        this.loc = loc;
        this.router = router;
        this.location = location;
        this.loader = false;
        this.logo = false;
        this.goo = false;
        this.msg = "";
        this.enter = true;
        this.login = {
          username: "",
          password: "",
          cpassword: '',
          mobile: "",
          email: "",
          date: new Date(),
          update: 0
        };
        this.cpassword = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logins",
        value: function logins() {
          var _this = this;

          this.enter = false;
          this.logdata = true;
          this.loader = true;
          this.loc.usercheck(this.login).subscribe(function (ccc) {
            if (ccc['status'] === false) {
              _this.loc.login(_this.login).subscribe(function (data) {
                _this.logdata = false;

                if (data['status'] === true) {
                  console.log(data, data['msg']);

                  _this.eat(data['msg'], 1);

                  _this.logdata = false;
                  _this.loader = false;
                  window.localStorage.setItem("username", data['username']);
                  window.localStorage.setItem("logged", data['username']);
                  window.localStorage.setItem("update", data['update']);
                  window.localStorage.setItem("_id", data['_id']);

                  _this.router.navigate(['/down']);

                  window.localStorage.setItem("state", "true");
                } else {
                  _this.eat(data['msg'], 2);

                  _this.logdata = false;
                  _this.enter = true;
                  _this.loader = false;
                  window.localStorage.setItem("state", "false");
                }
              });
            } else {
              _this.logdata = false;
              _this.enter = true;

              _this.eat('Username not exists', 2);

              _this.loader = false;
            }
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this2 = this;

          this.enter = false; // delete this.login.lucky;
          // delete this.login.phrase;

          this.logdata = true;
          this.loc.usercheck(this.login).subscribe(function (ccc) {
            if (ccc['status'] === true) {
              if (_this2.login.password === _this2.login.cpassword) {
                _this2.loc.register(_this2.login).subscribe(function (data) {
                  _this2.logdata = undefined;
                  _this2.enter = true;
                  _this2.reg = true;
                  _this2.regData = data['msg'];

                  if (data['status'] === true) {
                    _this2.eat(data['msg'], 1);

                    _this2.srm = true;
                  } else {
                    _this2.eat(data['msg'], 2);
                  }
                });
              } else {
                _this2.logdata = undefined;
                _this2.enter = true;
                _this2.reg = true;

                _this2.eat('Password not matched', 2);
              }
            } else {
              _this2.logdata = undefined;
              _this2.enter = true;
              _this2.reg = true;

              _this2.eat(ccc['msg'], 2);
            }
          });
        }
      }, {
        key: "eat",
        value: function eat(msg, color) {
          this.msg = msg;
          var x = document.getElementById("snackbar");

          if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
          } else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
          } else {
            x.style.backgroundColor = "#ef5350";
          }

          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 5000);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _gun_service__WEBPACK_IMPORTED_MODULE_3__["GunService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/roman/roman.component.scss":
  /*!********************************************!*\
    !*** ./src/app/roman/roman.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRomanRomanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".badge {\n  border-radius: 0px;\n}\n\ntable {\n  padding: 5px;\n}\n\ntable .td {\n  text-align: left;\n}\n\n.ct {\n  color: black;\n  text-align: left;\n  /* padding: 5px; */\n  margin-top: 10px;\n  display: flow-root;\n}\n\n.uk-offcanvas-bar {\n  background-color: white;\n  color: black;\n  border-left: 2px solid coral;\n  z-index: 9999;\n}\n\nh3 {\n  color: black;\n}\n\nkbd {\n  float: left;\n}\n\ntable td {\n  text-align: right;\n}\n\n.col-2 {\n  text-align: center;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRG9jdW1lbnRzXFxsb2FucHJvXFxzcmNcXGFwcFxccm9tYW4vcm9tYW4uY29tcG9uZW50LnNjc3MiLCJyb21hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQUU7RUFDRSxnQkFBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRiIsImZpbGUiOiJyb21hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZSB7XHJcbiAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG50YWJsZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIC50ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLmN0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvKiBwYWRkaW5nOiA1cHg7ICovXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbG93LXJvb3Q7XHJcbn1cclxuLnVrLW9mZmNhbnZhcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGNvcmFsO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuaDMge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxua2JkIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG50YWJsZSB7XHJcbiAgLy8gICBkaXNwbGF5OiBncmlkO1xyXG4gIHRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbC0yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuXHJcbi8vIDxuYXYgY2xhc3M9XCJ1ay1uYXZiYXItY29udGFpbmVyIHVrLW1hcmdpblwiIHVrLW5hdmJhcj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJ1ay1uYXZiYXItbGVmdCBcIj5cclxuLy8gICAgICAgICA8dWwgY2xhc3M9XCJ1ay1uYXZiYXItbmF2XCI+XHJcbi8vICAgICAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWstaWNvbiB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIiB1ay1pY29uPVwiaWNvbjogbnV0XCI+PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICA8bGk+XHJcbi8vICAgICAgICAgICAgICAgICA8YSB1ay10b2dnbGU9XCJ0YXJnZXQ6ICNwcm9maWxlLWZsaXBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVrLWljb24gdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCIgdWstaWNvbj1cImljb246IHVzZXJcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgICAgIDxhIHVrLXRvZ2dsZT1cInRhcmdldDogI2ludHJvLWZsaXBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVrLWljb24gdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCIgdWstaWNvbj1cImljb246IHN0YXJcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgIDwvbGk+XHJcbi8vICAgICAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgICAgIDxhIHVrLXRvZ2dsZT1cInRhcmdldDogI3VzZXJzLWZsaXBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVrLWljb24gdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCIgdWstaWNvbj1cImljb246IGNhcnRcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGI+e3tyZXFhLmxlbmd0aH19PC9iPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8L2xpPlxyXG5cclxuLy8gICAgICAgICAgICAgPGxpPlxyXG4vLyAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImxvZ3MoKVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWstaWNvbiB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIiB1ay1pY29uPVwiaWNvbjogaG9tZVwiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICAgICAgPCEtLSA8bGk+XHJcbi8vICAgICAgICAgICAgICAgICA8YSB1ay10b29sdGlwPVwiVjAuMVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWstaWNvbiB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIiB1ay1pY29uPVwiaWNvbjogaW5mb1wiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgPC9saT4gLS0+XHJcbi8vICAgICAgICAgPC91bD5cclxuXHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInVrLW5hdmJhci1pdGVtXCI+XHJcbi8vICAgICAgICAgICAgIDwhLS0gPGE+XHJcbi8vICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay1pY29uIHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiIHVrLWljb249XCJpY29uOiBob21lXCI+PC9zcGFuPiA8L2E+IDwvZGl2PiAtLT5cclxuXHJcbi8vICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInVrLW5hdmJhci1pdGVtXCI+XHJcbi8vICAgICAgICAgICAgIDxmb3JtPlxyXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidWstaW5wdXQgdWstZm9ybS13aWR0aC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMb2FuIG51bWJlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVrLWJ1dHRvbiB1ay1idXR0b24tZGVmYXVsdFwiPkZpbmQ8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgPC9mb3JtPlxyXG4vLyAgICAgICAgIDwvZGl2PiAtLT5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA8L25hdj48bmF2IGNsYXNzPVwidWstbmF2YmFyLWNvbnRhaW5lciB1ay1tYXJnaW5cIiB1ay1uYXZiYXI+XHJcbi8vIDxkaXYgY2xhc3M9XCJ1ay1uYXZiYXItbGVmdCBcIj5cclxuLy8gICAgIDx1bCBjbGFzcz1cInVrLW5hdmJhci1uYXZcIj5cclxuLy8gICAgICAgICA8bGk+XHJcbi8vICAgICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay1pY29uIHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiIHVrLWljb249XCJpY29uOiBudXRcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgPGEgdWstdG9nZ2xlPVwidGFyZ2V0OiAjcHJvZmlsZS1mbGlwXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVrLWljb24gdWstbWFyZ2luLXNtYWxsLXJpZ2h0XCIgdWstaWNvbj1cImljb246IHVzZXJcIj48L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgPGEgdWstdG9nZ2xlPVwidGFyZ2V0OiAjaW50cm8tZmxpcFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay1pY29uIHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiIHVrLWljb249XCJpY29uOiBzdGFyXCI+PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8bGk+XHJcbi8vICAgICAgICAgICAgIDxhIHVrLXRvZ2dsZT1cInRhcmdldDogI3VzZXJzLWZsaXBcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWstaWNvbiB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIiB1ay1pY29uPVwiaWNvbjogY2FydFwiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDxiPnt7cmVxYS5sZW5ndGh9fTwvYj5cclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgIDwvbGk+XHJcblxyXG4vLyAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgPGEgKGNsaWNrKT1cImxvZ3MoKVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay1pY29uIHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiIHVrLWljb249XCJpY29uOiBob21lXCI+PC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8IS0tIDxsaT5cclxuLy8gICAgICAgICAgICAgPGEgdWstdG9vbHRpcD1cIlYwLjFcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWstaWNvbiB1ay1tYXJnaW4tc21hbGwtcmlnaHRcIiB1ay1pY29uPVwiaWNvbjogaW5mb1wiPjwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgIDwvbGk+IC0tPlxyXG4vLyAgICAgPC91bD5cclxuXHJcbi8vICAgICA8ZGl2IGNsYXNzPVwidWstbmF2YmFyLWl0ZW1cIj5cclxuLy8gICAgICAgICA8IS0tIDxhPlxyXG4vLyAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1ay1pY29uIHVrLW1hcmdpbi1zbWFsbC1yaWdodFwiIHVrLWljb249XCJpY29uOiBob21lXCI+PC9zcGFuPiA8L2E+IDwvZGl2PiAtLT5cclxuXHJcbi8vICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwidWstbmF2YmFyLWl0ZW1cIj5cclxuLy8gICAgICAgICA8Zm9ybT5cclxuLy8gICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidWstaW5wdXQgdWstZm9ybS13aWR0aC1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMb2FuIG51bWJlclwiPlxyXG4vLyAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWstYnV0dG9uIHVrLWJ1dHRvbi1kZWZhdWx0XCI+RmluZDwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDwvZm9ybT5cclxuLy8gICAgIDwvZGl2PiAtLT5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9uYXY+IiwiLmJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG50YWJsZSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbnRhYmxlIC50ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jdCB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogcGFkZGluZzogNXB4OyAqL1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG59XG5cbi51ay1vZmZjYW52YXMtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjb3JhbDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuaDMge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmtiZCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG50YWJsZSB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY29sLTIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/roman/roman.component.ts":
  /*!******************************************!*\
    !*** ./src/app/roman/roman.component.ts ***!
    \******************************************/

  /*! exports provided: RomanComponent */

  /***/
  function srcAppRomanRomanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RomanComponent", function () {
      return RomanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _gun_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../gun.service */
    "./src/app/gun.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RomanComponent =
    /*#__PURE__*/
    function () {
      function RomanComponent(gun, router) {
        _classCallCheck(this, RomanComponent);

        this.gun = gun;
        this.router = router;
        this.loader = false;
        this.lister = [];
        this.amount = 1000;
        this.tenure = 1;
        this.vat = 12;
      }

      _createClass(RomanComponent, [{
        key: "logs",
        value: function logs() {
          this.router.navigate(['/login']);
          window.localStorage.removeItem('username');
          window.localStorage.removeItem('_id');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.loader = true;
          this.interest = this.amount / 100 * this.vat;
          this.topay = this.amount + this.amount / 100 * this.vat;
          this.weekly = this.topay / this.tenure;
          this.gun.inst(window.localStorage.getItem('username')).subscribe(function (data) {
            _this3.userp = data['graphql']['user'];

            _this3.lister.push(_this3.userp);
          });
          this.gun.getonerequests({
            'username': window.localStorage.getItem('username')
          }).subscribe(function (data) {
            _this3.reqa = data;

            _this3.eat(' Requests pending', 1);

            _this3.loader = false;
          });
        }
      }, {
        key: "delrequest",
        value: function delrequest(i) {
          var _this4 = this;

          this.loader = true;
          this.gun.delrequest({
            '_id': i['_id'],
            'username': i['username']
          }).subscribe(function (data) {
            _this4.reqa = data;

            _this4.eat('Updated', 2);

            _this4.loader = false;
          });
        }
      }, {
        key: "getvat",
        value: function getvat(e, b) {
          var v;

          if (b == 'a') {
            v = this.tenure;
          } else {
            v = e.target.value;
          }

          if (v == 1) {
            this.vat = 18;
          } else if (v > 1 && v <= 3) {
            this.vat = 20;
          } else if (v > 3 && v <= 5) {
            this.vat = 22;
          } else if (v > 5 && v <= 7) {
            this.vat = 24;
          } else if (v > 7 && v <= 9) {
            this.vat = 26;
          } else if (v > 9 && v <= 12) {
            this.vat = 28;
          }

          this.interest = this.amount / 100 * this.vat;
          this.topay = this.amount + this.amount / 100 * this.vat;
          this.weekly = this.topay / this.tenure;
        }
      }, {
        key: "requests",
        value: function requests() {
          var _this5 = this;

          var data = {
            amount: this.amount,
            weekly: this.weekly,
            vat: this.interest,
            tenure: this.tenure,
            pic: this.userp['profile_pic_url_hd'],
            fullname: this.userp['full_name'],
            total: this.topay,
            username: window.localStorage.getItem('username'),
            date: new Date(),
            _pId: window.localStorage.getItem('_id')
          };
          this.loader = true;
          this.gun.reqboard(data).subscribe(function (data) {
            _this5.loader = false;

            if (data['status'] === 'true') {
              _this5.eat(data['msg'], 2);
            } else {
              _this5.eat(data['msg'], 1);
            }

            _this5.gun.getonerequests({
              'username': window.localStorage.getItem('username')
            }).subscribe(function (data) {
              _this5.reqa = data;
            });
          });
        }
      }, {
        key: "eat",
        value: function eat(msg, color) {
          this.msg = msg;
          var x = document.getElementById("snackbar");
          x.style.color = 'white';

          if (color === 1) {
            x.style.backgroundColor = "#9ccc65";
          } else if (color === 2) {
            x.style.backgroundColor = "#ffc107";
          } else {
            x.style.backgroundColor = "#ef5350";
          }

          x.className = "show";
          setTimeout(function () {
            x.className = x.className.replace("show", "");
          }, 5000);
        }
      }]);

      return RomanComponent;
    }();

    RomanComponent.ctorParameters = function () {
      return [{
        type: _gun_service__WEBPACK_IMPORTED_MODULE_2__["GunService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RomanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-roman',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./roman.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/roman/roman.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./roman.component.scss */
      "./src/app/roman/roman.component.scss")).default]
    })], RomanComponent);
    /***/
  },

  /***/
  "./src/app/sub/info/info.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/sub/info/info.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSubInfoInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zdWIvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sub/info/info.component.ts":
  /*!********************************************!*\
    !*** ./src/app/sub/info/info.component.ts ***!
    \********************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppSubInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InfoComponent =
    /*#__PURE__*/
    function () {
      function InfoComponent() {
        _classCallCheck(this, InfoComponent);
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoComponent;
    }();

    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sub/info/info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./info.component.scss */
      "./src/app/sub/info/info.component.scss")).default]
    })], InfoComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\Administrator\Documents\loanpro\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map