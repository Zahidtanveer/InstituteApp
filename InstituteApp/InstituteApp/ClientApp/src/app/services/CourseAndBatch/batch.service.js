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
var BatchService = /** @class */ (function () {
    function BatchService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    BatchService.prototype.getBatch = function () {
        return this._http.get(this.myAppUrl + 'api/Batch/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BatchService.prototype.getBatchById = function (id) {
        return this._http.get(this.myAppUrl + "api/Batch/Details/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BatchService.prototype.saveBatch = function (batch) {
        return this._http.post(this.myAppUrl + 'api/Batch/Create', batch)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BatchService.prototype.updateBatch = function (batch) {
        return this._http.put(this.myAppUrl + 'api/Batch/Edit', batch)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BatchService.prototype.deleteBatch = function (id) {
        return this._http.delete(this.myAppUrl + "api/Batch/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BatchService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    BatchService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL'))
    ], BatchService);
    return BatchService;
}());
exports.BatchService = BatchService;
//# sourceMappingURL=batch.service.js.map