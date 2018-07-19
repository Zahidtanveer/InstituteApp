"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
require("datatables.net");
require("datatables.net-bs4");
var PrintEmployeeComponent = /** @class */ (function () {
    function PrintEmployeeComponent(_fb, http, _dataService, _employeeService, alertService, chRef) {
        this._fb = _fb;
        this._dataService = _dataService;
        this._employeeService = _employeeService;
        this.alertService = alertService;
        this.chRef = chRef;
        this.employeeForm = this._fb.group({
            IsDepOrDes: [''],
            Department: [''],
            Designation: ['']
        });
        this.getDepartment();
        this.getDesignation();
    }
    PrintEmployeeComponent.prototype.getDepartment = function () {
        var _this = this;
        this._dataService.getDepartment()
            .subscribe(function (data) { _this.departmentList = data; });
    };
    PrintEmployeeComponent.prototype.getDesignation = function () {
        var _this = this;
        this._dataService.getDesignation()
            .subscribe(function (data) { _this.designationList = data; });
    };
    PrintEmployeeComponent.prototype.OnSelectValue = function ($event) {
        var SelectedValue = this.employeeForm.controls["IsDepOrDes"].value;
        console.log(SelectedValue);
        if (SelectedValue == "DepartmentWise") {
            this.IsDepartmentWise = true;
            this.IsDesignationWise = false;
        }
        else if (SelectedValue == "DesignationWise") {
            this.IsDesignationWise = true;
            this.IsDepartmentWise = false;
        }
        else if (SelectedValue == null) {
            this.IsDesignationWise = false;
            this.IsDepartmentWise = false;
        }
    };
    PrintEmployeeComponent.prototype.OnDepartmentSelection = function ($event) {
        var depSelectedValue = this.employeeForm.controls["Department"].value;
        this.RefreshTable();
        this.getEmployees(depSelectedValue, '', 0);
    };
    PrintEmployeeComponent.prototype.OnDesignationSelection = function ($event) {
        var desSelectedValue = this.employeeForm.controls["Designation"].value;
        this.RefreshTable();
        this.getEmployees('', desSelectedValue, 0);
    };
    PrintEmployeeComponent.prototype.getEmployees = function (department, designation, Id) {
        var _this = this;
        this._employeeService.filterEmployee(department, designation, Id).subscribe(function (data) {
            _this.dList = data;
            _this.print();
        }, function (error) { return console.error(error); });
    };
    PrintEmployeeComponent.prototype.print = function () {
        this.chRef.detectChanges();
        var table = $('#dttable');
        this.dataTable = table.DataTable({
            paging: false,
            dom: 'Bfrtip',
            buttons: [{
                    extend: 'print',
                    text: '<i class="fa fa-print" aria-hidden="true"></i> Print',
                    title: 'List of Employees ',
                    titleAttr: 'Print'
                }
            ]
        });
    };
    PrintEmployeeComponent.prototype.RefreshTable = function () {
        var table = $('#dttable');
        table.DataTable().destroy();
    };
    Object.defineProperty(PrintEmployeeComponent.prototype, "IsDepOrDes", {
        get: function () { return this.employeeForm.get('IsDepOrDes'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintEmployeeComponent.prototype, "Department", {
        get: function () { return this.employeeForm.get('Department'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintEmployeeComponent.prototype, "Designation", {
        get: function () { return this.employeeForm.get('Designation'); },
        enumerable: true,
        configurable: true
    });
    PrintEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'print-Employee',
            templateUrl: './printEmployee.component.html'
        })
    ], PrintEmployeeComponent);
    return PrintEmployeeComponent;
}());
exports.PrintEmployeeComponent = PrintEmployeeComponent;
//# sourceMappingURL=printEmployee.component.js.map