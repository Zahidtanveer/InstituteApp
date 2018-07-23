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
var AssignSubjectComponent = /** @class */ (function () {
    function AssignSubjectComponent(_router, _assignSubjectService, alertService) {
        this._router = _router;
        this._assignSubjectService = _assignSubjectService;
        this.alertService = alertService;
        this.getAssignSubjects();
    }
    AssignSubjectComponent.prototype.getAssignSubjects = function () {
        var _this = this;
        this._assignSubjectService.getAssignSubject()
            .subscribe(function (data) { _this.dList = data; });
    };
    AssignSubjectComponent.prototype.delete = function (SubjectID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(SubjectID); });
    };
    AssignSubjectComponent.prototype.deletehelper = function (SubjectID) {
        var _this = this;
        this._assignSubjectService.deleteAssignSubject(SubjectID).subscribe(function (data) {
            _this.getAssignSubjects();
        }, function (error) { return console.error(error); });
    };
    AssignSubjectComponent = __decorate([
        core_1.Component({
            selector: 'fetch-Subject',
            templateUrl: './AssignSubject.component.html'
        })
    ], AssignSubjectComponent);
    return AssignSubjectComponent;
}());
exports.AssignSubjectComponent = AssignSubjectComponent;
//# sourceMappingURL=AssignSubject.component.js.map