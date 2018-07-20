"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alert_service_1 = require("../../services/alert.service");
var SubjectComponent = /** @class */ (function () {
    function SubjectComponent(_router, _subjectService, alertService) {
        this._router = _router;
        this._subjectService = _subjectService;
        this.alertService = alertService;
        this.getSubjects();
    }
    SubjectComponent.prototype.getSubjects = function () {
        var _this = this;
        this._subjectService.getSubject()
            .subscribe(function (data) { _this.dList = data; });
    };
    SubjectComponent.prototype.delete = function (SubjectID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(SubjectID); });
    };
    SubjectComponent.prototype.deletehelper = function (SubjectID) {
        var _this = this;
        this._subjectService.deleteSubject(SubjectID).subscribe(function (data) {
            _this.getSubjects();
        }, function (error) { return console.error(error); });
    };
    SubjectComponent = __decorate([
        core_1.Component({
            selector: 'fetch-Subject',
            templateUrl: './subjects.component.html'
        })
    ], SubjectComponent);
    return SubjectComponent;
}());
exports.SubjectComponent = SubjectComponent;
//# sourceMappingURL=subjects.component.js.map