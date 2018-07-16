"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var core_1 = require("@angular/core");
var LeaveService = /** @class */ (function () {
    function LeaveService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    LeaveService.prototype.getLeave = function () {
        return this._http.get(this.myAppUrl + 'api/Leave/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LeaveService.prototype.getLeaveById = function (id) {
        return this._http.get(this.myAppUrl + "api/Leave/Details/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LeaveService.prototype.saveLeave = function (leaveApp) {
        return this._http.post(this.myAppUrl + 'api/Leave/Create', leaveApp)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LeaveService.prototype.saveLeaveDetail = function (leave) {
        return this._http.post(this.myAppUrl + 'api/Leave/AddDetails', leave)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LeaveService.prototype.updateLeave = function (leave) {
        return this._http.put(this.myAppUrl + 'api/Leave/Edit', leave)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LeaveService.prototype.deleteLeave = function (id) {
        return this._http.delete(this.myAppUrl + "api/Leave/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LeaveService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    LeaveService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL'))
    ], LeaveService);
    return LeaveService;
}());
exports.LeaveService = LeaveService;
//# sourceMappingURL=service.leave.js.map