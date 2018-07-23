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
var SubjectAllocationService = /** @class */ (function () {
    function SubjectAllocationService(_http, baseUrl) {
        this._http = _http;
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    SubjectAllocationService.prototype.getSubjectAllocation = function () {
        return this._http.get(this.myAppUrl + 'api/SubjectAllocation/Index')
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    SubjectAllocationService.prototype.getSubjectAllocationById = function (id) {
        return this._http.get(this.myAppUrl + "api/SubjectAllocation/Details/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    SubjectAllocationService.prototype.saveSubjectAllocation = function (SubjectAllocation) {
        return this._http.post(this.myAppUrl + 'api/SubjectAllocation/Create', SubjectAllocation)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    SubjectAllocationService.prototype.updateSubjectAllocation = function (SubjectAllocation) {
        return this._http.put(this.myAppUrl + 'api/SubjectAllocation/Edit', SubjectAllocation)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    SubjectAllocationService.prototype.deleteSubjectAllocation = function (id) {
        return this._http.delete(this.myAppUrl + "api/SubjectAllocation/Delete/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    SubjectAllocationService.prototype.errorHandler = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    SubjectAllocationService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL'))
    ], SubjectAllocationService);
    return SubjectAllocationService;
}());
exports.SubjectAllocationService = SubjectAllocationService;
//# sourceMappingURL=SubjectAllocation.service.js.map