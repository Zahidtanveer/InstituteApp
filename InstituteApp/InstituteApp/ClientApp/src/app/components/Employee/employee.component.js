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
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(http, baseUrl, _EmployeeService, alertService, chRef) {
        var _this = this;
        this._EmployeeService = _EmployeeService;
        this.alertService = alertService;
        this.chRef = chRef;
        http.get(baseUrl + 'api/Employee/Index').subscribe(function (result) {
            _this.dList = result.json();
            _this.chRef.detectChanges();
            var table = $('#dttable');
            _this.dataTable = table.DataTable({
                "displayLength": 5,
                ordering: false,
                "pagingType": "full_numbers",
            });
        }, function (error) { return console.error(error); });
        this.getEmployees;
    }
    EmployeeComponent.prototype.getEmployees = function () {
        var _this = this;
        this._EmployeeService.getEmployee()
            .subscribe(function (data) { _this.dList = data; });
    };
    EmployeeComponent.prototype.delete = function (employeeID) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete this Employee with Id:' + employeeID, alert_service_1.DialogType.confirm, function () { return _this.deletehelper(employeeID); });
    };
    EmployeeComponent.prototype.deletehelper = function (employeeID) {
        var _this = this;
        this._EmployeeService.deleteEmployee(employeeID).subscribe(function (data) {
            _this.getEmployees();
        }, function (error) { return console.error(error); });
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'fetch-Employee',
            templateUrl: './Employee.component.html'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map