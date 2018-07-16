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
var AcadamicComponent = /** @class */ (function () {
    function AcadamicComponent(http, baseUrl, _acadamicService, alertService, chRef) {
        var _this = this;
        this._acadamicService = _acadamicService;
        this.alertService = alertService;
        this.chRef = chRef;
        http.get(baseUrl + 'api/Acadamic/Index').subscribe(function (result) {
            _this.dList = result.json();
            _this.chRef.detectChanges();
            var table = $('table');
            _this.dataTable = table.DataTable({
                "displayLength": 5
            });
        }, function (error) { return console.error(error); });
        this.getAcadamics();
    }
    AcadamicComponent.prototype.getAcadamics = function () {
        var _this = this;
        this._acadamicService.getAcadamic()
            .subscribe(function (data) { _this.dList = data; });
    };
    AcadamicComponent.prototype.delete = function (acadamicID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Institute with Id:' + acadamicID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(acadamicID); });
        //var ans = confirm("Do you want to delete Institute with Id: " + acadamicID);
        //if (ans) {
        //    this._acadamicService.deleteAcadamic(acadamicID).subscribe((data) => {
        //        this.getAcadamics();
        //    }, error => console.error(error))
        //}
    };
    AcadamicComponent.prototype.deletehelper = function (acadamicID) {
        var _this = this;
        this._acadamicService.deleteAcadamic(acadamicID).subscribe(function (data) {
            _this.getAcadamics();
        }, function (error) { return console.error(error); });
    };
    AcadamicComponent = __decorate([
        core_1.Component({
            selector: 'fetch-acadamic',
            templateUrl: './acadamic.component.html'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], AcadamicComponent);
    return AcadamicComponent;
}());
exports.AcadamicComponent = AcadamicComponent;
//# sourceMappingURL=acadamic.component.js.map