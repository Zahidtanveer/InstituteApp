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
var $ = require("jquery");
require("datatables.net");
require("datatables.net-bs4");
var EmployeeAttendanceComponent = /** @class */ (function () {
    function EmployeeAttendanceComponent(http, baseUrl, _employeeAttendanceService, alertService, chRef) {
        var _this = this;
        this._employeeAttendanceService = _employeeAttendanceService;
        this.alertService = alertService;
        this.chRef = chRef;
        http.get(baseUrl + 'api/EmployeeAttendance/Index').subscribe(function (result) {
            _this.dList = result.json();
            _this.chRef.detectChanges();
            var table = $('#dttable');
            _this.dataTable = table.DataTable({
                "displayLength": 10,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, function (error) { return console.error(error); });
        this.getEmployeeAttendances;
    }
    EmployeeAttendanceComponent.prototype.getEmployeeAttendances = function () {
        var _this = this;
        this._employeeAttendanceService.getEmployeeAttendance()
            .subscribe(function (data) { _this.dList = data; });
    };
    EmployeeAttendanceComponent.prototype.SaveData = function () {
    };
    EmployeeAttendanceComponent = __decorate([
        core_1.Component({
            selector: 'fetch-EmployeeAttendance',
            templateUrl: './attendance.component.html'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], EmployeeAttendanceComponent);
    return EmployeeAttendanceComponent;
}());
exports.EmployeeAttendanceComponent = EmployeeAttendanceComponent;
//# sourceMappingURL=attendance.component.js.map