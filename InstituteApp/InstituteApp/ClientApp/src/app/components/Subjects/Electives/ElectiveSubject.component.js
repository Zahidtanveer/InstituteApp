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
var ElectiveSubjectComponent = /** @class */ (function () {
    function ElectiveSubjectComponent(_router, _electiveSubjectService, alertService) {
        this._router = _router;
        this._electiveSubjectService = _electiveSubjectService;
        this.alertService = alertService;
        this.getElectiveSubject();
    }
    ElectiveSubjectComponent.prototype.getElectiveSubject = function () {
        var _this = this;
        this._electiveSubjectService.getElectiveSubject()
            .subscribe(function (data) { _this.dList = data; });
        console.log(this.dList);
    };
    ElectiveSubjectComponent.prototype.delete = function (SubjectID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Subject with Id:' + SubjectID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(SubjectID); });
    };
    ElectiveSubjectComponent.prototype.deletehelper = function (SubjectID) {
        var _this = this;
        this._electiveSubjectService.deleteElectiveSubject(SubjectID).subscribe(function (data) {
            _this.getElectiveSubject();
        }, function (error) { return console.error(error); });
    };
    ElectiveSubjectComponent = __decorate([
        core_1.Component({
            selector: 'ElectiveSubject',
            templateUrl: './ElectiveSubject.component.html'
        })
    ], ElectiveSubjectComponent);
    return ElectiveSubjectComponent;
}());
exports.ElectiveSubjectComponent = ElectiveSubjectComponent;
//# sourceMappingURL=ElectiveSubject.component.js.map