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
var EmployeeAttendanceComponent = /** @class */ (function () {
    function EmployeeAttendanceComponent(_fb, _router, _employeeAttendanceService, alertService, chRef, _dataService) {
        this._fb = _fb;
        this._router = _router;
        this._employeeAttendanceService = _employeeAttendanceService;
        this.alertService = alertService;
        this.chRef = chRef;
        this._dataService = _dataService;
        this.IsDepartmentSelected = false;
        this.employeeForm = this._fb.group({
            Department: [''],
            Date: ['']
        });
        this.getDepartment();
    }
    EmployeeAttendanceComponent.prototype.getDepartment = function () {
        var _this = this;
        this._dataService.getDepartment()
            .subscribe(function (data) { _this.departmentList = data; });
    };
    EmployeeAttendanceComponent.prototype.OnDepartmentSelection = function ($event) {
        this.IsDepartmentSelected = true;
        var date = this.employeeForm.controls["Date"].value;
        if (date) {
            this.RefreshTable();
            this.getData();
        }
    };
    EmployeeAttendanceComponent.prototype.OnDateChange = function ($event) {
        this.RefreshTable();
        this.getData();
        $('.checkAll').prop('checked', false);
    };
    EmployeeAttendanceComponent.prototype.getData = function () {
        var department = this.employeeForm.controls["Department"].value;
        var date = this.employeeForm.controls["Date"].value;
        if (department && date) {
            this.getEmployeeAttendances(department, date);
        }
    };
    EmployeeAttendanceComponent.prototype.getEmployeeAttendances = function (department, date) {
        var _this = this;
        this._employeeAttendanceService.getEmployeeAttendance(department, date)
            .subscribe(function (data) {
            _this.dList = data;
            _this.ApplyDataTable();
        });
    };
    EmployeeAttendanceComponent.prototype.SaveData = function () {
        var dictAttendance = [];
        // General/modular function for status logging
        var checkboxChecker = function () {
            $('table tr').each(function (i) {
                // Only check rows that contain a checkbox
                var $chkbox = $(this).find('.isPresent');
                if ($chkbox.length) {
                    var status = $chkbox.prop('checked');
                    console.log('Table row ' + i + ' contains a checkbox with a checked status of: ' + status);
                    var tRowId = this.closest('tr').children.item(0).innerHTML;
                    dictAttendance.push({
                        key: tRowId,
                        value: status
                    });
                }
            });
        };
        // Check checkboxes status on DOMready
        checkboxChecker();
        console.log(dictAttendance);
        this.updateList = dictAttendance;
        console.log("Assign....");
        console.log(this.updateList);
        //Post Data
        if (this.updateList) {
            this.MarkEmployeeAttendances(this.updateList);
            $('.checkAll').prop('checked', false);
        }
    };
    //Check or Uncheck all row
    EmployeeAttendanceComponent.prototype.CheckAll = function () {
        $(".checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
        });
    };
    EmployeeAttendanceComponent.prototype.ApplyDataTable = function () {
        this.chRef.detectChanges();
        var table = $('#dttable');
        this.dataTable = table.DataTable({
            "paging": false,
            "ordering": false,
            "searching": false,
            "bInfo": false
        });
    };
    EmployeeAttendanceComponent.prototype.RefreshTable = function () {
        var table = $('#dttable');
        table.DataTable().destroy();
    };
    //Mark Attendance Method
    EmployeeAttendanceComponent.prototype.MarkEmployeeAttendances = function (employeeData) {
        var _this = this;
        this._employeeAttendanceService.saveEmployeeAttendance(employeeData)
            .subscribe(function (data) {
            _this._router.navigate(['/employeeattendace']);
        });
    };
    Object.defineProperty(EmployeeAttendanceComponent.prototype, "Date", {
        get: function () { return this.employeeForm.get('Date'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeAttendanceComponent.prototype, "Department", {
        get: function () { return this.employeeForm.get('Department'); },
        enumerable: true,
        configurable: true
    });
    EmployeeAttendanceComponent = __decorate([
        core_1.Component({
            selector: 'fetch-EmployeeAttendance',
            templateUrl: './attendance.component.html'
        })
    ], EmployeeAttendanceComponent);
    return EmployeeAttendanceComponent;
}());
exports.EmployeeAttendanceComponent = EmployeeAttendanceComponent;
//# sourceMappingURL=attendance.component.js.map