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
var alert_service_1 = require("../../services/alert.service");
var $ = require("jquery");
require("datatables.net");
require("datatables.net-bs4");
var SyllabusComponent = /** @class */ (function () {
    function SyllabusComponent(http, baseUrl, _syllabusService, alertService, chRef) {
        var _this = this;
        this._syllabusService = _syllabusService;
        this.alertService = alertService;
        this.chRef = chRef;
        http.get(baseUrl + 'api/Syllabus/Index').subscribe(function (result) {
            _this.dList = result.json();
            _this.chRef.detectChanges();
            var table = $('#dttable');
            _this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, function (error) { return console.error(error); });
        this.getSyllabuss;
    }
    SyllabusComponent.prototype.getSyllabuss = function () {
        var _this = this;
        this._syllabusService.getSyllabus()
            .subscribe(function (data) { _this.dList = data; });
    };
    SyllabusComponent.prototype.delete = function (syllabusID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Syllabus with Id:' + syllabusID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(syllabusID); });
    };
    SyllabusComponent.prototype.deletehelper = function (syllabusID) {
        var _this = this;
        this._syllabusService.deleteSyllabus(syllabusID).subscribe(function (data) {
            _this.getSyllabuss();
        }, function (error) { return console.error(error); });
    };
    SyllabusComponent = __decorate([
        core_1.Component({
            selector: 'fetch-Syllabus',
            templateUrl: './Syllabus.component.html'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], SyllabusComponent);
    return SyllabusComponent;
}());
exports.SyllabusComponent = SyllabusComponent;
//# sourceMappingURL=Syllabus.component.js.map