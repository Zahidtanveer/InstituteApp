"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var alert_service_1 = require("../../../services/alert.service");
var core_1 = require("@angular/core");
var SubjectAllocationComponent = /** @class */ (function () {
    function SubjectAllocationComponent(_router, _subjectAllocationService, alertService) {
        this._router = _router;
        this._subjectAllocationService = _subjectAllocationService;
        this.alertService = alertService;
        this.getSubjectAllocation();
    }
    SubjectAllocationComponent.prototype.getSubjectAllocation = function () {
        var _this = this;
        this._subjectAllocationService.getSubjectAllocation()
            .subscribe(function (data) { _this.dList = data; });
        console.log(this.dList);
    };
    SubjectAllocationComponent.prototype.delete = function (SubjectID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(SubjectID); });
    };
    SubjectAllocationComponent.prototype.deletehelper = function (SubjectID) {
        var _this = this;
        this._subjectAllocationService.deleteSubjectAllocation(SubjectID).subscribe(function (data) {
            _this.getSubjectAllocation();
        }, function (error) { return console.error(error); });
    };
    SubjectAllocationComponent = __decorate([
        core_1.Component({
            selector: 'SubjectAllocation',
            templateUrl: './SubjectAllocation.component.html'
        })
    ], SubjectAllocationComponent);
    return SubjectAllocationComponent;
}());
exports.SubjectAllocationComponent = SubjectAllocationComponent;
//# sourceMappingURL=SubjectAllocation.component.js.map