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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var DataService = /** @class */ (function () {
    function DataService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    DataService.prototype.getBatch = function () {
        return this._http.get(this.myAppUrl + 'api/Batch/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getCourse = function () {
        return this._http.get(this.myAppUrl + 'api/Course/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getCaste = function () {
        return this._http.get(this.myAppUrl + 'api/Caste/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getReligion = function () {
        return this._http.get(this.myAppUrl + 'api/Religion/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getCountries = function () {
        return this._http.get(this.myAppUrl + 'api/Home/GetCountries')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getStates = function () {
        return this._http.get(this.myAppUrl + 'api/Home/GetStates')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getUserTypes = function () {
        return this._http.get(this.myAppUrl + 'api/Home/GetUserTypes')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getDesignation = function () {
        return this._http.get(this.myAppUrl + 'api/Designation/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.getDepartment = function () {
        return this._http.get(this.myAppUrl + 'api/Department/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    DataService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL'))
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map