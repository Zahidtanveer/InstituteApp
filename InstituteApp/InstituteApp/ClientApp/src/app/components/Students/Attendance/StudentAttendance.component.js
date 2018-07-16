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
var StudentAttendanceComponent = /** @class */ (function () {
    function StudentAttendanceComponent(_fb, http, baseUrl, _studentAttendanceService, alertService, chRef, _dataService) {
        this._fb = _fb;
        this._studentAttendanceService = _studentAttendanceService;
        this.alertService = alertService;
        this.chRef = chRef;
        this._dataService = _dataService;
        this.IsInitialized = false;
        this.IsBatchSelected = false;
        this.studentForm = this._fb.group({
            Course: [''],
            Batch: [''],
            Date: ['']
        });
        this.getCourse();
        this.getBatch();
    }
    StudentAttendanceComponent.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    StudentAttendanceComponent.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    StudentAttendanceComponent.prototype.getStudentAttendances = function (batch, course, date) {
        var _this = this;
        this._studentAttendanceService.getStudentAttendance(batch, course, date)
            .subscribe(function (data) { _this.dList = data; });
    };
    StudentAttendanceComponent.prototype.OnCourseSelection = function ($event) {
        var courseID = this.studentForm.controls["Course"].value;
        this.IsCourseSelected = false;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x !== null; });
            this.IsCourseSelected = true;
        }
    };
    StudentAttendanceComponent.prototype.OnBatchChange = function ($event) {
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        if (batchSelectedValue) {
            this.IsBatchSelected = true;
        }
    };
    StudentAttendanceComponent.prototype.OnDateChange = function ($event) {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        var DateSelectedValue = this.studentForm.controls["Date"].value;
        this.getStudentAttendances(batchSelectedValue, CourseSelectedValue, DateSelectedValue);
        if (this.IsInitialized == false) {
            this.filter();
            this.IsInitialized = true;
        }
    };
    StudentAttendanceComponent.prototype.filter = function () {
        this.chRef.detectChanges();
        var table = $('#dttable');
        this.dataTable = table.DataTable({
            "displayLength": 5,
            ordering: false,
            "pagingType": "full_numbers",
        });
    };
    StudentAttendanceComponent.prototype.SaveData = function () {
        var RowData = this.dataTable.rows().data().length;
        alert(RowData);
    };
    Object.defineProperty(StudentAttendanceComponent.prototype, "Course", {
        get: function () { return this.studentForm.get('Course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentAttendanceComponent.prototype, "Batch", {
        get: function () { return this.studentForm.get('Batch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentAttendanceComponent.prototype, "Date", {
        get: function () { return this.studentForm.get('Date'); },
        enumerable: true,
        configurable: true
    });
    StudentAttendanceComponent = __decorate([
        core_1.Component({
            selector: 'fetch-StudentAttendance',
            templateUrl: './StudentAttendance.component.html'
        }),
        __param(2, core_1.Inject('BASE_URL'))
    ], StudentAttendanceComponent);
    return StudentAttendanceComponent;
}());
exports.StudentAttendanceComponent = StudentAttendanceComponent;
//# sourceMappingURL=StudentAttendance.component.js.map