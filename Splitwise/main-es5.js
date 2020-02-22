(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
    /***/ "./$$_lazy_route_resource lazy recursive":
      /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function() {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-expense/add-expense.component.html":
      /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-expense/add-expense.component.html ***!
          \**********************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<!-- <p>\r\n    <mat-form-field appearance="fill">\r\n        <input matInput placeholder="Title" [(ngModel)]="expense.title" required>\r\n    </mat-form-field>\r\n</p>\r\n<p>\r\n    <mat-form-field appearance="fill">\r\n        <input matInput placeholder="Amount" [(ngModel)]="expense.amount" required>\r\n    </mat-form-field>\r\n\r\n</p>\r\n<button mat-raised-button color="primary" (click)="add()">Add/button> -->\r\n<header mat-dialog-title>Add an Expense</header>\r\n<mat-dialog-content>\r\n    <div class="with_field ">\r\n\r\n\r\n        <div class="chip-list">\r\n            <mat-form-field class="example-chip-list">\r\n                <mat-chip-list #chipList aria-label="email selection">\r\n                    <mat-chip *ngFor="let email of emails" [selectable]="selectable" [removable]="removable" (removed)="remove(email)">\r\n                        {{ email.name }}\r\n                        <mat-icon matChipRemove *ngIf="email.name != \'you\' && removable">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input placeholder="Add emails/names of people involved..." #friendInput [formControl]="friendCtrl" [matAutocomplete]="auto" [matChipInputFor]="chipList" [matChipInputSeparatorKeyCodes]="separatorKeysCodes" [matChipInputAddOnBlur]="addOnBlur" (matChipInputTokenEnd)="add($event)"\r\n                    />\r\n                </mat-chip-list>\r\n                <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">\r\n                    <mat-option *ngFor="let friend of filteredFriends | async" [value]="friend">\r\n                        {{ friend }}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <div class="main-fields">\r\n        <input type="text" class="description" [(ngModel)]="expense.title" placeholder="Enter a description" value="" />\r\n        <div class="cost_container">\r\n            <span class="currency_code">$</span>\r\n            <input type="text" [(ngModel)]="expense.amount" class="cost" placeholder="0.00" value="" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class="paidandsplit">\r\n        <span>\r\n        <mat-form-field>\r\n          <mat-label>Paid by:</mat-label>\r\n          <mat-select required [(ngModel)]="expense.paidBy">\r\n            <!-- <mat-option name="fieldName" value="you">You</mat-option> -->\r\n            <mat-option\r\n              *ngFor="let email of emails"\r\n              name="fieldName2"\r\n              [value]="email.name"\r\n            >\r\n              {{ email.name }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <span class="split-text"></span\r\n      ></span>\r\n\r\n        <mat-form-field>\r\n            <mat-label>And Split</mat-label>\r\n            <mat-select required [(ngModel)]="splitstatus">\r\n                <mat-option name="fieldName" value="equally">Equally</mat-option>\r\n                <mat-option name="fieldName2" value="unequally">\r\n                    Unequally\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n    <div *ngIf="splitstatus === \'equally\'; else elseBlock"></div>\r\n    <ng-template #elseBlock>\r\n        <div class="split-list row" *ngFor="let email of emails">\r\n            <label class="col-md-5">{{ email.name }}</label>\r\n            <input class="col-md-3" placeholder="split..." [(ngModel)]="email.split" />\r\n            <span class="col-md-2">$</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n</mat-dialog-content>\r\n<div class="footer">\r\n    <mat-dialog-actions>\r\n        <button class="add-btn" mat-raised-button color="primary" (click)="onAdd()">\r\n    Add\r\n  </button>\r\n        <button class="can-btn" mat-raised-button color="warn" (click)="close()">Cancel</button>\r\n    </mat-dialog-actions>\r\n</div>';
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
      /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<div class="navbar navbar-default">\r\n  <div class="container">\r\n    <div class="navbar-main row">\r\n      <div class="nav navbar-nav col-md-10">\r\n        <a routerLink="/profile"><h4 class="heading">SplitIT</h4></a>\r\n      </div>\r\n      <div class="nav navbar-nav navbar-right col-md-2">\r\n        <div *ngIf="!auth.isLoggedIn()"><a routerLink="/login">Sign in</a></div>\r\n        <div *ngIf="auth.isLoggedIn()">\r\n          <a routerLink="/profile">{{ auth.getUserDetails()?.name }}</a>\r\n        </div>\r\n        <div *ngIf="auth.isLoggedIn()">\r\n          <a (click)="auth.logout()">Logout</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>\r\n';
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-list/expenses-list.component.html":
      /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-list/expenses-list.component.html ***!
          \**************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<mat-list role="list" *ngFor="let expense of expensesList">\r\n  <mat-list-item role="listitem"\r\n    ><div class="container">\r\n      <div class="row">\r\n        <div class="col-3">\r\n          {{ expense.date }}\r\n        </div>\r\n        <div class="col-3">\r\n          {{ expense.title }}\r\n        </div>\r\n        <div class="col-2">Added By {{ expense.addedByName }}</div>\r\n        <div class="col-2">\r\n          {{ expense.paidByName }} paid {{ expense.amount }}\r\n          {{ expense.currency }}\r\n        </div>\r\n        <div class="col-2">\r\n          {{ expense.paidByName }} lent {{ expense.lent }}\r\n          {{ expense.currency }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n</mat-list>\r\n';
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
      /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<div class="container">\r\n  \r\n  <h1>Hello there</h1>\r\n\r\n  <p>Won\'t you please <a routerLink="/login">sign in</a> or <a routerLink="/register">register</a>?</p>\r\n\r\n</div>';
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
      /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<div class="container">\n\n  <div class="row">\n    \n    <div class="col-md-6">\n\n      <h1 class="form-signin-heading">Sign in</h1>\n      <p class="lead">Not a member? Please <a routerLink="/register">register</a> instead.</p>\n  \n      <form (submit)="login()">\n        <div class="form-group">\n          <label for="email">Email address</label>\n          <input type="email" class="form-control" name="email" placeholder="Enter email" [(ngModel)]="credentials.email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="credentials.password">\n        </div>\n        <button type="submit" class="btn btn-default">Sign in!</button>\n      </form>\n\n    </div>\n  </div>\n\n</div>\n';
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
      /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
          \**************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<link\r\n  rel="stylesheet"\r\n  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"\r\n/>\r\n<div class="container">\r\n  <div class="container">\r\n    <div id="content">\r\n      <div id="main-content">\r\n        <mat-tab-group>\r\n          <mat-tab label="Dashboard">\r\n            <mat-list class="dashboardlist">\r\n              <mat-list-item class="balanceData">\r\n                <div class="col-7"><h4>Dashboard</h4></div>\r\n                <div class="col-5">\r\n                  <button\r\n                    mat-raised-button\r\n                    color="primary"\r\n                    (click)="addExpense()"\r\n                  >\r\n                    Add an expense\r\n                  </button>\r\n                  <button mat-raised-button color="warn">Settle Expense</button>\r\n                </div>\r\n              </mat-list-item>\r\n              <mat-divider class="divider"></mat-divider>\r\n              <mat-list-item class="balanceData"\r\n                ><div class="col-md-4 rightBorder dashboardStatus">\r\n                  Total Balance <br />\r\n                  <span\r\n                    [ngClass]="\r\n                      details.dashboard.totalBalance < 0\r\n                        ? \'negativetotalBalance\'\r\n                        : \'positiveTotalBalance\'\r\n                    "\r\n                    >${{ details.dashboard.totalBalance }}</span\r\n                  >\r\n                </div>\r\n                <div class="col-md-4 rightBorder dashboardStatus">\r\n                  You owe <br /><span class="oweAmount"\r\n                    >${{ details.dashboard.owe.amount }}</span\r\n                  >\r\n                </div>\r\n                <div class="col-md-4 dashboardStatus">\r\n                  You are owed <br /><span class="getAmount"\r\n                    >${{ details.dashboard.get.amount }}</span\r\n                  >\r\n                </div></mat-list-item\r\n              >\r\n              <mat-divider></mat-divider>\r\n              <div class="row detailsRow">\r\n                <div class="col-md-5">\r\n                  <span class="titleOwe">YOU OWE</span>\r\n                  <div class="listStyle">\r\n                    <mat-list>\r\n                      <mat-list-item\r\n                        class="usersList"\r\n                        *ngFor="let oweUser of details.dashboard.owe.oweToUsers"\r\n                      >\r\n                        <p>\r\n                          <span class="usernamestyle">{{ oweUser.name }}</span\r\n                          ><br />\r\n                          <span class="youOweAmount">\r\n                            You owe ${{ oweUser.amount }}\r\n                          </span>\r\n                        </p>\r\n                        <mat-divider></mat-divider>\r\n                      </mat-list-item>\r\n                    </mat-list>\r\n                  </div>\r\n                </div>\r\n                <mat-divider class="divider"></mat-divider>\r\n                <div class="col-md-5">\r\n                  <span class="titleOwe">YOU ARE OWED</span>\r\n                  <div class="listStyle">\r\n                    <mat-list>\r\n                      <mat-list-item\r\n                        class="usersList"\r\n                        *ngFor="\r\n                          let getUser of details.dashboard.get.getFromUsers\r\n                        "\r\n                      >\r\n                        <p>\r\n                          <span class="usernamestyle">{{ getUser.name }}</span\r\n                          ><br />\r\n                          <span class="owesYouAmount">\r\n                            owes you ${{ getUser.amount }}</span\r\n                          >\r\n                        </p>\r\n                        <mat-divider></mat-divider>\r\n                      </mat-list-item>\r\n                    </mat-list>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <mat-list-item class="oweDetails"> </mat-list-item>\r\n            </mat-list>\r\n          </mat-tab>\r\n          <mat-tab label="All Expenses">\r\n            <app-expenses-list\r\n              [expensesList]="details.expenses"\r\n            ></app-expenses-list>\r\n          </mat-tab>\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              <span>Friends</span>\r\n            </ng-template>\r\n            <mat-tab-group>\r\n              <mat-tab *ngFor="let friend of details.friends">\r\n                <ng-template mat-tab-label>\r\n                  <i class="fa fa-address-book contactIcon"></i>\r\n                  <span>{{ friend.name }}</span>\r\n                </ng-template>\r\n                <app-expenses-list\r\n                  [expensesList]="friend.linkedExpenses"\r\n                ></app-expenses-list>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';
        /***/
      },
    /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
      /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
          \****************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '<div class="container">\n\n  <div class="row">\n    <div class="col-md-6">\n      <h1>Register</h1>\n      <p class="lead">Already a member? Please <a routerLink="/login">log in</a> instead.</p>\n      <form (submit)="register()">\n        <div class="form-group">\n          <label for="name">Full name</label>\n          <input type="text" class="form-control" name="name" placeholder="Enter your name" [(ngModel)]="credentials.name">\n        </div>\n        <div class="form-group">\n          <label for="email">Email address</label>\n          <input type="email" class="form-control" name="email" placeholder="Enter email" [(ngModel)]="credentials.email">\n        </div>\n        <div class="form-group">\n          <label for="password">Password</label>\n          <input type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="credentials.password">\n        </div>\n        <button type="submit" class="btn btn-default">Register!</button>\n      </form>\n    </div>\n  </div>\n\n</div>';
        /***/
      },
    /***/ "./node_modules/tslib/tslib.es6.js":
      /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
      /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__extends",
          function() {
            return __extends;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__assign",
          function() {
            return __assign;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__rest",
          function() {
            return __rest;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__decorate",
          function() {
            return __decorate;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__param",
          function() {
            return __param;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__metadata",
          function() {
            return __metadata;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__awaiter",
          function() {
            return __awaiter;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__generator",
          function() {
            return __generator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__exportStar",
          function() {
            return __exportStar;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__values",
          function() {
            return __values;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__read",
          function() {
            return __read;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__spread",
          function() {
            return __spread;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__spreadArrays",
          function() {
            return __spreadArrays;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__await",
          function() {
            return __await;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__asyncGenerator",
          function() {
            return __asyncGenerator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__asyncDelegator",
          function() {
            return __asyncDelegator;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__asyncValues",
          function() {
            return __asyncValues;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__makeTemplateObject",
          function() {
            return __makeTemplateObject;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__importStar",
          function() {
            return __importStar;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "__importDefault",
          function() {
            return __importDefault;
          }
        );
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
        var extendStatics = function(d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(d, b) {
                d.__proto__ = b;
              }) ||
            function(d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        }
        var __assign = function() {
          __assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (
              var i = 0, p = Object.getOwnPropertySymbols(s);
              i < p.length;
              i++
            ) {
              if (
                e.indexOf(p[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(s, p[i])
              )
                t[p[i]] = s[p[i]];
            }
          return t;
        }
        function __decorate(decorators, target, key, desc) {
          var c = arguments.length,
            r =
              c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
            d;
          if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
          )
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if ((d = decorators[i]))
                r =
                  (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                  r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __param(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        }
        function __metadata(metadataKey, metadataValue) {
          if (
            typeof Reflect === "object" &&
            typeof Reflect.metadata === "function"
          )
            return Reflect.metadata(metadataKey, metadataValue);
        }
        function __awaiter(thisArg, _arguments, P, generator) {
          return new (P || (P = Promise))(function(resolve, reject) {
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
              result.done
                ? resolve(result.value)
                : new P(function(resolve) {
                    resolve(result.value);
                  }).then(fulfilled, rejected);
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            );
          });
        }
        function __generator(thisArg, body) {
          var _ = {
              label: 0,
              sent: function() {
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
          return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === "function" &&
              (g[Symbol.iterator] = function() {
                return this;
              }),
            g
          );
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (
                  ((f = 1),
                  y &&
                    (t =
                      op[0] & 2
                        ? y["return"]
                        : op[0]
                        ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                        : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
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
                    if (
                      !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                      (op[0] === 6 || op[0] === 2)
                    ) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        function __exportStar(m, exports) {
          for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
        function __values(o) {
          var m = typeof Symbol === "function" && o[Symbol.iterator],
            i = 0;
          if (m) return m.call(o);
          return {
            next: function() {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
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
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error: error };
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
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        }
        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        }
        function __await(v) {
          return this instanceof __await
            ? ((this.v = v), this)
            : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return (
            (i = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (i[Symbol.asyncIterator] = function() {
              return this;
            }),
            i
          );
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
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
            r.value instanceof __await
              ? Promise.resolve(r.value.v).then(fulfill, reject)
              : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
          }
        }
        function __asyncDelegator(o) {
          var i, p;
          return (
            (i = {}),
            verb("next"),
            verb("throw", function(e) {
              throw e;
            }),
            verb("return"),
            (i[Symbol.iterator] = function() {
              return this;
            }),
            i
          );
          function verb(n, f) {
            i[n] = o[n]
              ? function(v) {
                  return (p = !p)
                    ? { value: __await(o[n](v)), done: n === "return" }
                    : f
                    ? f(v)
                    : v;
                }
              : f;
          }
        }
        function __asyncValues(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator],
            i;
          return m
            ? m.call(o)
            : ((o =
                typeof __values === "function"
                  ? __values(o)
                  : o[Symbol.iterator]()),
              (i = {}),
              verb("next"),
              verb("throw"),
              verb("return"),
              (i[Symbol.asyncIterator] = function() {
                return this;
              }),
              i);
          function verb(n) {
            i[n] =
              o[n] &&
              function(v) {
                return new Promise(function(resolve, reject) {
                  (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                });
              };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v) {
              resolve({ value: v, done: d });
            }, reject);
          }
        }
        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        }
        function __importStar(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          result.default = mod;
          return result;
        }
        function __importDefault(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
        }
        /***/
      },
    /***/ "./src/app/add-expense/add-expense.component.scss":
      /*!********************************************************!*\
          !*** ./src/app/add-expense/add-expense.component.scss ***!
          \********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          "header {\n  background: #5cc5a7;\n  color: #fff;\n  padding: 10px;\n  border-bottom: 1px solid #36977b;\n  text-shadow: 0 -1px 0 #318a71;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 0px;\n}\n\n.example-chip-list {\n  width: 100%;\n}\n\n.chip-list {\n  width: 100%;\n  margin-top: 14px;\n}\n\n.description::-webkit-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  text-align: center;\n}\n\n.description::-moz-placeholder {\n  /* Firefox, Chrome, Opera */\n  text-align: center;\n}\n\n.description::-ms-input-placeholder {\n  /* Firefox, Chrome, Opera */\n  text-align: center;\n}\n\n.description::placeholder {\n  /* Firefox, Chrome, Opera */\n  text-align: center;\n}\n\n.main-fields {\n  float: inherit;\n}\n\ninput.description {\n  font-size: 20px;\n  border-bottom: 1px dashed #ccc !important;\n  margin: 5px auto;\n  width: 40%;\n  text-align: center;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\ninput {\n  outline: none;\n  -webkit-appearance: none;\n  width: 100px;\n  border: none;\n}\n\n.paidandsplit {\n  margin-top: 30px;\n  /* margin: 0 auto; */\n  width: 80%;\n  margin-left: 84px;\n}\n\n.split-list {\n  margin: 0 auto;\n  width: 70%;\n  width: 50%;\n  text-align: center;\n}\n\n.split-list label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.eql-btn {\n  margin-left: 20px;\n}\n\n.split-text {\n  margin-left: 20px;\n}\n\n.split-form label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.split-form input {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 170px;\n}\n\n.dismiss {\n  float: right;\n  font-size: 18px;\n  color: red;\n  text-decoration: none;\n  background: #5cc5a7;\n}\n\n.cost_container {\n  margin: 0 auto;\n  width: 20%;\n}\n\n.cost_container input {\n  font-size: 36px;\n  text-align: center;\n  outline: none;\n  -webkit-appearance: none;\n  width: 80px;\n  border: none;\n}\n\n.with {\n  position: absolute;\n  left: 10px;\n  top: 11px;\n  margin-left: 220px;\n  align-content: center;\n}\n\n.with_field {\n  position: relative;\n  padding: 4px;\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.add-btn {\n  margin-right: 10px;\n  width: 80px;\n}\n\n.footer {\n  margin-top: 30px;\n  margin-left: 35%;\n}\n\n.cost {\n  font-size: 36px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWV4cGVuc2UvQzpcXFVzZXJzXFxrc2hhclxcRG9jdW1lbnRzXFwxc3QgU2VtZXN0ZXJcXFdlYiBkZXNpZ24gY291cnNlXFxmaW5hbC1wcm9qZWN0LWpzLXN1cGVyLWtpbmdzXFxVSVxcU3BsaXR3aXNlL3NyY1xcYXBwXFxhZGQtZXhwZW5zZVxcYWRkLWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkZC1leHBlbnNlL2FkZC1leHBlbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESEE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESEE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FESEE7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREFJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGQtZXhwZW5zZS9hZGQtZXhwZW5zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWNjNWE3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNjk3N2I7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzMxOGE3MTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGlwLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcclxuICAgIC8qIEZpcmVmb3gsIENocm9tZSwgT3BlcmEgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tZmllbGRzIHtcclxuICAgIGZsb2F0OiBpbmhlcml0O1xyXG59XHJcblxyXG5pbnB1dC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2MgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMzAlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucGFpZGFuZHNwbGl0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogODRweDtcclxufVxyXG5cclxuLnNwbGl0LWxpc3Qge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXFsLWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNwbGl0LXRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zcGxpdC1mb3JtIGxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweFxyXG59XHJcblxyXG4uc3BsaXQtZm9ybSBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTcwcHg7XHJcbn1cclxuXHJcbi5kaXNtaXNzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWNjNWE3O1xyXG59XHJcblxyXG4uY29zdF9jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2l0aCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIyMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ud2l0aF9maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG59XHJcblxyXG4uY29zdCB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjNWNjNWE3O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzNjk3N2I7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzE4YTcxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hpcC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5kZXNjcmlwdGlvbjo6cGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94LCBDaHJvbWUsIE9wZXJhICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1haW4tZmllbGRzIHtcbiAgZmxvYXQ6IGluaGVyaXQ7XG59XG5cbmlucHV0LmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNjY2MgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucGFpZGFuZHNwbGl0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLyogbWFyZ2luOiAwIGF1dG87ICovXG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiA4NHB4O1xufVxuXG4uc3BsaXQtbGlzdCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogNzAlO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3BsaXQtbGlzdCBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZXFsLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uc3BsaXQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uc3BsaXQtZm9ybSBsYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uc3BsaXQtZm9ybSBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tbGVmdDogMTcwcHg7XG59XG5cbi5kaXNtaXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzVjYzVhNztcbn1cblxuLmNvc3RfY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyMCU7XG59XG4uY29zdF9jb250YWluZXIgaW5wdXQge1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogODBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ud2l0aCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxMXB4O1xuICBtYXJnaW4tbGVmdDogMjIwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndpdGhfZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hZGQtYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogODBweDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG59XG5cbi5jb3N0IHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
        /***/
      },
    /***/ "./src/app/add-expense/add-expense.component.ts":
      /*!******************************************************!*\
          !*** ./src/app/add-expense/add-expense.component.ts ***!
          \******************************************************/
      /*! exports provided: AddExpenseComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AddExpenseComponent",
          function() {
            return AddExpenseComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js"
        );
        /* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js"
        );
        /* harmony import */ var _expense_expense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../expense/expense.service */ "./src/app/expense/expense.service.ts"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"
        );
        var AddExpenseComponent = /** @class */ (function() {
          function AddExpenseComponent(
            data,
            dialog,
            dialogRef,
            expenseService
          ) {
            var _this = this;
            this.data = data;
            this.dialog = dialog;
            this.dialogRef = dialogRef;
            this.expenseService = expenseService;
            this.splitstatus = "equally";
            this.visible = true;
            this.selectable = true;
            this.removable = true;
            this.addOnBlur = true;
            this.separatorKeysCodes = [
              _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"],
              _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]
            ];
            this.emails = [];
            this.friendCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__[
              "FormControl"
            ]();
            // expense: expense;
            this.expense = {
              addedBy: null,
              addedByName: null,
              title: null,
              amount: null,
              currency: null,
              date: null,
              paidBy: null,
              paidByName: null,
              split: new Array()
            };
            this.allfriendsArray = data.friends.map(function(v) {
              return v["name"];
            });
            this.filteredFriends = this.friendCtrl.valueChanges.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(
                null
              ),
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(
                function(friend) {
                  return friend
                    ? _this._filter(friend)
                    : _this.allfriendsArray.slice();
                }
              )
            );
          }
          AddExpenseComponent.prototype._filter = function(value) {
            var filterValue = value.toLowerCase();
            return this.allfriendsArray.filter(function(friend) {
              return friend.toLowerCase().indexOf(filterValue) === 0;
            });
          };
          AddExpenseComponent.prototype.ngOnInit = function() {
            this.emails.push({
              name: "you",
              email: this.data.userInfo.email,
              split: null
            });
          };
          AddExpenseComponent.prototype.add = function(event) {
            if (!this.matAutocomplete.isOpen) {
              var input = event.input;
              var value = event.value;
              // Add our fruit
              if ((value || "").trim()) {
                this.emails.push({
                  name: value.trim(),
                  email: this.getEmailFromName(value.trim()),
                  split: null
                });
              }
              // Reset the input value
              if (input) {
                input.value = "";
              }
            }
          };
          AddExpenseComponent.prototype.getEmailFromName = function(name) {
            return this.data.friends.find(function(v) {
              return v["name"] === name;
            }).email;
          };
          AddExpenseComponent.prototype.selected = function(event) {
            this.emails.push({
              name: event.option.viewValue,
              email: this.getEmailFromName(event.option.viewValue),
              split: null
            });
            this.friendInput.nativeElement.value = "";
            this.friendCtrl.setValue(null);
          };
          AddExpenseComponent.prototype.remove = function(email) {
            var index = this.emails.indexOf(email);
            if (index >= 0) {
              this.emails.splice(index, 1);
            }
          };
          AddExpenseComponent.prototype.onAdd = function() {
            var _this = this;
            this.TotalAmount = 0;
            if (this.expense.paidBy === "you") {
              this.expense.paidBy = this.data.userInfo.email;
              this.expense.paidByName = this.data.userInfo.email;
            } else {
              this.expense.paidByName = this.expense.paidBy;
              this.expense.paidBy = this.getEmailFromName(
                this.expense.paidByName
              );
            }
            this.expense.addedBy = this.data.userInfo.email;
            this.expense.addedByName = this.data.userInfo.name;
            this.expense.currency = "$";
            this.expense.date = Date.now().toString();
            //    ;
            //    this.expense.paidByName=this.data.userInfo.name;
            if (this.splitstatus === "equally") {
              this.emails.forEach(function(email) {
                if (email.name === "you") {
                  _this.expense.split.push({
                    owes: _this.expense.amount.valueOf() / _this.emails.length,
                    userEmail: _this.data.userInfo.email,
                    userName: _this.data.userInfo.email
                  });
                } else {
                  _this.expense.split.push({
                    owes: _this.expense.amount.valueOf() / _this.emails.length,
                    userEmail: email.email,
                    userName: email.name
                  });
                }
                // this.expense.split[i].owes=this.expense.amount.valueOf()/this.emails.length;
              });
            } else {
              this.emails.forEach(function(email) {
                if (email.name === "you") {
                  _this.expense.split.push({
                    owes: email.split,
                    userEmail: _this.data.userInfo.email,
                    userName: _this.data.userInfo.name
                  });
                } else {
                  _this.expense.split.push({
                    owes: email.split,
                    userEmail: email.email,
                    userName: email.name
                  });
                }
                _this.TotalAmount =
                  Number.parseInt(_this.TotalAmount) +
                  Number.parseInt(email.split);
                // this.expense.split[i].owes=this.expense.amount.valueOf()/this.emails.length;
              });
            }
            if (this.TotalAmount == this.expense.amount) {
              this.expenseService.Add(this.expense).subscribe(
                function() {},
                function(err) {
                  console.error(err);
                }
              );
              //this.expense.split.push({owes:200,userEmail:"kkk@gmail.com",userName:"kkk"});
              this.dialogRef.close();
            } else {
              alert(
                "The total of everyone's owed share (" +
                  this.TotalAmount +
                  ") is diffrent to the actual amount: " +
                  this.expense.amount
              );
            }
          };
          AddExpenseComponent.prototype.close = function() {
            this.dialogRef.close();
          };
          return AddExpenseComponent;
        })();
        AddExpenseComponent.ctorParameters = function() {
          return [
            {
              type: undefined,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                  args: [
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__[
                      "MAT_DIALOG_DATA"
                    ]
                  ]
                }
              ]
            },
            {
              type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
            },
            {
              type:
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
            },
            {
              type:
                _expense_expense_service__WEBPACK_IMPORTED_MODULE_4__[
                  "ExpenseService"
                ]
            }
          ];
        };
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"]
            )("friendInput", { static: false })
          ],
          AddExpenseComponent.prototype,
          "friendInput",
          void 0
        );
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"]
            )("auto", { static: false })
          ],
          AddExpenseComponent.prototype,
          "matAutocomplete",
          void 0
        );
        AddExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-add-expense",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./add-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-expense/add-expense.component.html"
                )
              ).default,
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./add-expense.component.scss */ "./src/app/add-expense/add-expense.component.scss"
                  )
                ).default
              ]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](
              0,
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(
                _angular_material__WEBPACK_IMPORTED_MODULE_2__[
                  "MAT_DIALOG_DATA"
                ]
              )
            )
          ],
          AddExpenseComponent
        );
        /***/
      },
    /***/ "./src/app/app.component.scss":
      /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          ".navbar-default {\n  background-image: none;\n  background-color: lightskyblue;\n}\n\n.heading {\n  font-size: x-large;\n  font-weight: bold;\n  color: black;\n}\n\n.navbar-main {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxrc2hhclxcRG9jdW1lbnRzXFwxc3QgU2VtZXN0ZXJcXFdlYiBkZXNpZ24gY291cnNlXFxmaW5hbC1wcm9qZWN0LWpzLXN1cGVyLWtpbmdzXFxVSVxcU3BsaXR3aXNlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5uYXZiYXItbWFpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiLm5hdmJhci1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdmJhci1tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
        /***/
      },
    /***/ "./src/app/app.component.ts":
      /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppComponent",
          function() {
            return AppComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./authentication.service */ "./src/app/authentication.service.ts"
        );
        var AppComponent = /** @class */ (function() {
          function AppComponent(auth) {
            this.auth = auth;
            this.title = "Splitwise";
          }
          return AppComponent;
        })();
        AppComponent.ctorParameters = function() {
          return [
            {
              type:
                _authentication_service__WEBPACK_IMPORTED_MODULE_2__[
                  "AuthenticationService"
                ]
            }
          ];
        };
        AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-root",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"
                )
              ).default,
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./app.component.scss */ "./src/app/app.component.scss"
                  )
                ).default
              ]
            })
          ],
          AppComponent
        );
        /***/
      },
    /***/ "./src/app/app.module.ts":
      /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AppModule",
          function() {
            return AppModule;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js"
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js"
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./app.component */ "./src/app/app.component.ts"
        );
        /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./profile/profile.component */ "./src/app/profile/profile.component.ts"
        );
        /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./login/login.component */ "./src/app/login/login.component.ts"
        );
        /* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./register/register.component */ "./src/app/register/register.component.ts"
        );
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./home/home.component */ "./src/app/home/home.component.ts"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./authentication.service */ "./src/app/authentication.service.ts"
        );
        /* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./auth-guard.service */ "./src/app/auth-guard.service.ts"
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js"
        );
        /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js"
        );
        /* harmony import */ var _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! ./add-expense/add-expense.component */ "./src/app/add-expense/add-expense.component.ts"
        );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js"
        );
        /* harmony import */ var _expenses_list_expenses_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! ./expenses-list/expenses-list.component */ "./src/app/expenses-list/expenses-list.component.ts"
        );
        var routes = [
          {
            path: "",
            component:
              _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
          },
          {
            path: "login",
            component:
              _login_login_component__WEBPACK_IMPORTED_MODULE_7__[
                "LoginComponent"
              ]
          },
          {
            path: "register",
            component:
              _register_register_component__WEBPACK_IMPORTED_MODULE_8__[
                "RegisterComponent"
              ]
          },
          {
            path: "profile",
            component:
              _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__[
                "ProfileComponent"
              ],
            canActivate: [
              _auth_guard_service__WEBPACK_IMPORTED_MODULE_13__[
                "AuthGuardService"
              ]
            ]
          }
        ];
        var AppModule = /** @class */ (function() {
          function AppModule() {}
          return AppModule;
        })();
        AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__[
                  "ProfileComponent"
                ],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__[
                  "LoginComponent"
                ],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__[
                  "RegisterComponent"
                ],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__[
                  "HomeComponent"
                ],
                _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_16__[
                  "AddExpenseComponent"
                ],
                _expenses_list_expenses_list_component__WEBPACK_IMPORTED_MODULE_18__[
                  "ExpensesListComponent"
                ]
              ],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                  "BrowserModule"
                ],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__[
                  "HttpClientModule"
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__[
                  "MatButtonModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatAutocompleteModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatListModule"
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__[
                  "RouterModule"
                ].forRoot(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatDialogModule"
                ],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__[
                  "MatTabsModule"
                ],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__[
                  "BrowserAnimationsModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatFormFieldModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatInputModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatChipsModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatIconModule"
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                  "ReactiveFormsModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatSelectModule"
                ],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                  "MatExpansionModule"
                ]
              ],
              providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_12__[
                  "AuthenticationService"
                ],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_13__[
                  "AuthGuardService"
                ],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__[
                  "ProfileComponent"
                ],
                {
                  provide:
                    _angular_material__WEBPACK_IMPORTED_MODULE_14__[
                      "MAT_DIALOG_DATA"
                    ],
                  useValue: {}
                }
              ],
              bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_16__[
                  "AddExpenseComponent"
                ]
              ],
              entryComponents: [
                _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_16__[
                  "AddExpenseComponent"
                ]
              ]
            })
          ],
          AppModule
        );
        /***/
      },
    /***/ "./src/app/auth-guard.service.ts":
      /*!***************************************!*\
          !*** ./src/app/auth-guard.service.ts ***!
          \***************************************/
      /*! exports provided: AuthGuardService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AuthGuardService",
          function() {
            return AuthGuardService;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./authentication.service */ "./src/app/authentication.service.ts"
        );
        var AuthGuardService = /** @class */ (function() {
          function AuthGuardService(auth, router) {
            this.auth = auth;
            this.router = router;
          }
          AuthGuardService.prototype.canActivate = function() {
            if (!this.auth.isLoggedIn()) {
              this.router.navigateByUrl("/");
              return false;
            }
            return true;
          };
          return AuthGuardService;
        })();
        AuthGuardService.ctorParameters = function() {
          return [
            {
              type:
                _authentication_service__WEBPACK_IMPORTED_MODULE_3__[
                  "AuthenticationService"
                ]
            },
            { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
          ];
        };
        AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()],
          AuthGuardService
        );
        /***/
      },
    /***/ "./src/app/authentication.service.ts":
      /*!*******************************************!*\
          !*** ./src/app/authentication.service.ts ***!
          \*******************************************/
      /*! exports provided: AuthenticationService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "AuthenticationService",
          function() {
            return AuthenticationService;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"
        );
        var AuthenticationService = /** @class */ (function() {
          function AuthenticationService(http, router) {
            this.http = http;
            this.router = router;
          }
          AuthenticationService.prototype.saveToken = function(token) {
            localStorage.setItem("mean-token", token);
            this.token = token;
          };
          AuthenticationService.prototype.getToken = function() {
            if (!this.token) {
              this.token = localStorage.getItem("mean-token");
            }
            return this.token;
          };
          AuthenticationService.prototype.getUserDetails = function() {
            var token = this.getToken();
            var payload;
            if (token) {
              payload = token.split(".")[1];
              payload = window.atob(payload);
              return JSON.parse(payload);
            } else {
              return null;
            }
          };
          AuthenticationService.prototype.isLoggedIn = function() {
            var user = this.getUserDetails();
            if (user) {
              return user.exp > Date.now() / 1000;
            } else {
              return false;
            }
          };
          AuthenticationService.prototype.request = function(
            method,
            type,
            user
          ) {
            var _this = this;
            var base;
            if (method === "post") {
              base = this.http.post("http://localhost:3000/api/" + type, user);
            } else {
              base = this.http.get("http://localhost:3000/api/" + type, {
                headers: { Authorization: "Bearer " + this.getToken() }
              });
            }
            var request = base.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
                function(data) {
                  if (data.token) {
                    _this.saveToken(data.token);
                  }
                  return data;
                }
              )
            );
            return request;
          };
          AuthenticationService.prototype.register = function(user) {
            return this.request("post", "register", user);
          };
          AuthenticationService.prototype.login = function(user) {
            return this.request("post", "login", user);
          };
          AuthenticationService.prototype.profile = function() {
            return this.request("get", "profile");
          };
          AuthenticationService.prototype.logout = function() {
            this.token = "";
            window.localStorage.removeItem("mean-token");
            this.router.navigateByUrl("/");
          };
          return AuthenticationService;
        })();
        AuthenticationService.ctorParameters = function() {
          return [
            {
              type:
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            },
            { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
          ];
        };
        AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()],
          AuthenticationService
        );
        /***/
      },
    /***/ "./src/app/expense/expense.service.ts":
      /*!********************************************!*\
          !*** ./src/app/expense/expense.service.ts ***!
          \********************************************/
      /*! exports provided: ExpenseService */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ExpenseService",
          function() {
            return ExpenseService;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js"
        );
        var ExpenseService = /** @class */ (function() {
          function ExpenseService(http) {
            this.http = http;
          }
          ExpenseService.prototype.Add = function(Expense) {
            var tasks$ = this.http.post(
              "http://localhost:3000/api/expense",
              Expense
            );
            return tasks$;
          };
          return ExpenseService;
        })();
        ExpenseService.ctorParameters = function() {
          return [
            {
              type:
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            }
          ];
        };
        ExpenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
              providedIn: "root"
            })
          ],
          ExpenseService
        );
        /***/
      },
    /***/ "./src/app/expenses-list/expenses-list.component.scss":
      /*!************************************************************!*\
          !*** ./src/app/expenses-list/expenses-list.component.scss ***!
          \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzLWxpc3QvZXhwZW5zZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
        /***/
      },
    /***/ "./src/app/expenses-list/expenses-list.component.ts":
      /*!**********************************************************!*\
          !*** ./src/app/expenses-list/expenses-list.component.ts ***!
          \**********************************************************/
      /*! exports provided: ExpensesListComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ExpensesListComponent",
          function() {
            return ExpensesListComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        var ExpensesListComponent = /** @class */ (function() {
          function ExpensesListComponent() {}
          ExpensesListComponent.prototype.ngOnInit = function() {};
          return ExpensesListComponent;
        })();
        tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()],
          ExpensesListComponent.prototype,
          "expensesList",
          void 0
        );
        ExpensesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[
          "__decorate"
        ](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              selector: "app-expenses-list",
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./expenses-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-list/expenses-list.component.html"
                )
              ).default,
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./expenses-list.component.scss */ "./src/app/expenses-list/expenses-list.component.scss"
                  )
                ).default
              ]
            })
          ],
          ExpensesListComponent
        );
        /***/
      },
    /***/ "./src/app/home/home.component.ts":
      /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
      /*! exports provided: HomeComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HomeComponent",
          function() {
            return HomeComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        var HomeComponent = /** @class */ (function() {
          function HomeComponent() {}
          return HomeComponent;
        })();
        HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"
                )
              ).default
            })
          ],
          HomeComponent
        );
        /***/
      },
    /***/ "./src/app/login/login.component.ts":
      /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
      /*! exports provided: LoginComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginComponent",
          function() {
            return LoginComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../authentication.service */ "./src/app/authentication.service.ts"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"
        );
        var LoginComponent = /** @class */ (function() {
          function LoginComponent(auth, router) {
            this.auth = auth;
            this.router = router;
            this.credentials = {
              email: "",
              password: ""
            };
          }
          LoginComponent.prototype.login = function() {
            var _this = this;
            this.auth.login(this.credentials).subscribe(
              function() {
                _this.router.navigateByUrl("/profile");
              },
              function(err) {
                console.error(err);
              }
            );
          };
          return LoginComponent;
        })();
        LoginComponent.ctorParameters = function() {
          return [
            {
              type:
                _authentication_service__WEBPACK_IMPORTED_MODULE_2__[
                  "AuthenticationService"
                ]
            },
            { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
          ];
        };
        LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"
                )
              ).default
            })
          ],
          LoginComponent
        );
        /***/
      },
    /***/ "./src/app/profile/profile.component.scss":
      /*!************************************************!*\
          !*** ./src/app/profile/profile.component.scss ***!
          \************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] =
          '.mat-list-base {\n  border: 1px solid lightgray;\n}\n\n:host > .container {\n  max-width: 1264px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  background: none;\n}\n\n:host ::ng-deep .mat-tab-group {\n  flex-direction: row;\n}\n\n:host ::ng-deep .mat-tab-header {\n  border-bottom: none;\n}\n\n:host ::ng-deep .mat-tab-header-pagination {\n  display: none !important;\n}\n\n:host ::ng-deep .mat-tab-labels {\n  flex-direction: column;\n}\n\n:host ::ng-deep .mat-ink-bar {\n  height: 100%;\n  left: 98% !important;\n}\n\n:host ::ng-deep .mat-tab-body-wrapper {\n  flex: 1 1 auto;\n}\n\n:host ::ng-deep .mat-tab-label {\n  font-size: medium;\n}\n\n:host ::ng-deep .mat-tab-label-active {\n  color: #00adee;\n  font-weight: bold;\n}\n\n.dashboardlist {\n  padding-top: 0px;\n}\n\n.oweAmount,\n.negativetotalBalance,\n.youOweAmount {\n  color: red;\n}\n\n.titleOwe {\n  font-weight: bold;\n}\n\n.getAmount,\n.positiveTotalBalance,\n.owesYouAmount {\n  color: green;\n}\n\n.usersList {\n  height: 60px !important;\n}\n\n.usernamestyle {\n  font-size: large;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  flex: 1 0 auto;\n  margin: 0 auto;\n  text-align: left;\n}\n\n#content {\n  box-sizing: content-box;\n  margin: 0 auto;\n  padding: 15px;\n  width: 1264px;\n  background-color: #ffffff;\n}\n\n.rightBorder {\n  border-right: 1px solid;\n}\n\n.dashboardStatus {\n  text-align: center;\n}\n\n.divider {\n  border: 1px solid black;\n  background-color: black;\n}\n\n.detailsRow {\n  padding-top: 20px;\n  padding-left: 100px;\n  margin: 0 auto;\n}\n\n.balanceData {\n  background-color: #ddd;\n}\n\n.contactIcon {\n  font-size: 24px;\n  padding: 10px;\n}\n\nmat-list-item.oweDetails.mat-list-item {\n  height: 500px;\n}\n\n#content {\n  max-width: 1000px;\n  width: 100%;\n  background-color: #ffffff;\n  padding: 24px;\n  box-sizing: border-box;\n}\n\n#content::before, #content::after,\n#main-content::before,\n#main-content::after {\n  content: "";\n  display: table;\n}\n\n#content::after,\n#main-content::after {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXGtzaGFyXFxEb2N1bWVudHNcXDFzdCBTZW1lc3RlclxcV2ViIGRlc2lnbiBjb3Vyc2VcXGZpbmFsLXByb2plY3QtanMtc3VwZXIta2luZ3NcXFVJXFxTcGxpdHdpc2Uvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FER0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHSTtFQUNFLG1CQUFBO0FDRE47O0FER0k7RUFDRSxtQkFBQTtBQ0ROOztBREdJO0VBQ0Usd0JBQUE7QUNETjs7QURHSTtFQUNFLHNCQUFBO0FDRE47O0FER0k7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUNETjs7QURHSTtFQUNFLGNBQUE7QUNETjs7QURHSTtFQUNFLGlCQUFBO0FDRE47O0FER0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNETjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FESUE7OztFQUdFLFVBQUE7QUNERjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FERUE7OztFQUdFLFlBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0FDTUY7O0FESEE7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ09GOztBRExBO0VBQ0Usc0JBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDU0Y7O0FESkE7RUFDRSxhQUFBO0FDT0Y7O0FETEE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ1FGOztBREhFOzs7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQ09KOztBRExFOztFQUNFLFdBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1iYXNlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICA+IC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjY0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICAubWF0LXRhYi1ncm91cCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYi1sYWJlbHMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLm1hdC1pbmstYmFyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZWZ0OiA5OCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWItbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIH1cclxuICAgIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjMDBhZGVlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRhc2hib2FyZGxpc3Qge1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLm93ZUFtb3VudCxcclxuLm5lZ2F0aXZldG90YWxCYWxhbmNlLFxyXG4ueW91T3dlQW1vdW50IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi50aXRsZU93ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmdldEFtb3VudCxcclxuLnBvc2l0aXZlVG90YWxCYWxhbmNlLFxyXG4ub3dlc1lvdUFtb3VudCB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi51c2Vyc0xpc3Qge1xyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybmFtZXN0eWxlIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTI2NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnJpZ2h0Qm9yZGVyIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxufVxyXG4uZGFzaGJvYXJkU3RhdHVzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uZGV0YWlsc1JvdyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uYmFsYW5jZURhdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuLmNvbnRhY3RJY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubGlzdFN0eWxlIHtcclxuICAvLyBib3R0b206IDE1MHB4O1xyXG59XHJcbm1hdC1saXN0LWl0ZW0ub3dlRGV0YWlscy5tYXQtbGlzdC1pdGVtIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiNjb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuI2NvbnRlbnQsXHJcbiNtYWluLWNvbnRlbnQge1xyXG4gICY6OmJlZm9yZSxcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG4iLCIubWF0LWxpc3QtYmFzZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuOmhvc3QgPiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiA5OCUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDBhZGVlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRhc2hib2FyZGxpc3Qge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4ub3dlQW1vdW50LFxuLm5lZ2F0aXZldG90YWxCYWxhbmNlLFxuLnlvdU93ZUFtb3VudCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aXRsZU93ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ2V0QW1vdW50LFxuLnBvc2l0aXZlVG90YWxCYWxhbmNlLFxuLm93ZXNZb3VBbW91bnQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi51c2Vyc0xpc3Qge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLnVzZXJuYW1lc3R5bGUge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMSAwIGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY29udGVudCB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEyNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnJpZ2h0Qm9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG59XG5cbi5kYXNoYm9hcmRTdGF0dXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGV0YWlsc1JvdyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJhbGFuY2VEYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLmNvbnRhY3RJY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5tYXQtbGlzdC1pdGVtLm93ZURldGFpbHMubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbiNjb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY29udGVudDo6YmVmb3JlLCAjY29udGVudDo6YWZ0ZXIsXG4jbWFpbi1jb250ZW50OjpiZWZvcmUsXG4jbWFpbi1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuI2NvbnRlbnQ6OmFmdGVyLFxuI21haW4tY29udGVudDo6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn0iXX0= */';
        /***/
      },
    /***/ "./src/app/profile/profile.component.ts":
      /*!**********************************************!*\
          !*** ./src/app/profile/profile.component.ts ***!
          \**********************************************/
      /*! exports provided: ProfileComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProfileComponent",
          function() {
            return ProfileComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../authentication.service */ "./src/app/authentication.service.ts"
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js"
        );
        /* harmony import */ var _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../add-expense/add-expense.component */ "./src/app/add-expense/add-expense.component.ts"
        );
        /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js"
        );
        var ProfileComponent = /** @class */ (function() {
          function ProfileComponent(auth, dialog) {
            this.auth = auth;
            this.dialog = dialog;
          }
          ProfileComponent.prototype.ngOnInit = function() {
            var _this = this;
            this.auth.profile().subscribe(
              function(user) {
                var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__[
                  "DatePipe"
                ]("en-US"); // Use your own locale
                user.expenses.forEach(function(expense) {
                  var myFormattedDate = pipe.transform(expense.date, "medium");
                  expense.date = myFormattedDate;
                });
                console.log(user);
                _this.details = user;
              },
              function(err) {
                console.error(err);
              }
            );
          };
          ProfileComponent.prototype.addExpense = function() {
            var _this = this;
            var dialogRef = this.dialog.open(
              _add_expense_add_expense_component__WEBPACK_IMPORTED_MODULE_4__[
                "AddExpenseComponent"
              ],
              {
                height: "500px",
                width: "550px",
                data: this.details
              }
            );
            dialogRef.afterClosed().subscribe(function() {
              return _this.ngOnInit();
            });
          };
          return ProfileComponent;
        })();
        ProfileComponent.ctorParameters = function() {
          return [
            {
              type:
                _authentication_service__WEBPACK_IMPORTED_MODULE_2__[
                  "AuthenticationService"
                ]
            },
            {
              type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
            }
          ];
        };
        ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"
                )
              ).default,
              styles: [
                tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                  __webpack_require__(
                    /*! ./profile.component.scss */ "./src/app/profile/profile.component.scss"
                  )
                ).default
              ]
            })
          ],
          ProfileComponent
        );
        /***/
      },
    /***/ "./src/app/register/register.component.ts":
      /*!************************************************!*\
          !*** ./src/app/register/register.component.ts ***!
          \************************************************/
      /*! exports provided: RegisterComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "RegisterComponent",
          function() {
            return RegisterComponent;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../authentication.service */ "./src/app/authentication.service.ts"
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js"
        );
        var RegisterComponent = /** @class */ (function() {
          function RegisterComponent(auth, router) {
            this.auth = auth;
            this.router = router;
            this.credentials = {
              email: "",
              name: "",
              password: ""
            };
          }
          RegisterComponent.prototype.register = function() {
            var _this = this;
            this.auth.register(this.credentials).subscribe(
              function() {
                _this.router.navigateByUrl("/profile");
              },
              function(err) {
                console.error(err);
              }
            );
          };
          return RegisterComponent;
        })();
        RegisterComponent.ctorParameters = function() {
          return [
            {
              type:
                _authentication_service__WEBPACK_IMPORTED_MODULE_2__[
                  "AuthenticationService"
                ]
            },
            { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
          ];
        };
        RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"](
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
              template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](
                __webpack_require__(
                  /*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"
                )
              ).default
            })
          ],
          RegisterComponent
        );
        /***/
      },
    /***/ "./src/environments/environment.ts":
      /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "environment",
          function() {
            return environment;
          }
        );
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
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
        /***/
      },
    /***/ "./src/main.ts":
      /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ "./node_modules/tslib/tslib.es6.js"
        );
        /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! hammerjs */ "./node_modules/hammerjs/hammer.js"
        );
        /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          hammerjs__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js"
        );
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js"
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./app/app.module */ "./src/app/app.module.ts"
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./environments/environment */ "./src/environments/environment.ts"
        );
        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"]
          )();
        }
        Object(
          _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__[
            "platformBrowserDynamic"
          ]
        )()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]
          )
          .catch(function(err) {
            return console.error(err);
          });
        /***/
      },
    /***/ 0:
      /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! C:\Users\kshar\Documents\1st Semester\Web design course\final-project-js-super-kings\UI\Splitwise\src\main.ts */ "./src/main.ts"
        );
        /***/
      }
  },
  [[0, "runtime", "vendor"]]
]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
