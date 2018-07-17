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
    function StudentAttendanceComponent(_fb, _router, http, baseUrl, _studentAttendanceService, alertService, chRef, _dataService) {
        this._fb = _fb;
        this._router = _router;
        this._studentAttendanceService = _studentAttendanceService;
        this.alertService = alertService;
        this.chRef = chRef;
        this._dataService = _dataService;
        this.IsInitialized = false;
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
        this.IsCourseSelected = false;
        var courseID = this.studentForm.controls["Course"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x !== null; });
            this.IsCourseSelected = true;
        }
    };
    StudentAttendanceComponent.prototype.OnBatchChange = function ($event) {
        this.IsBatchSelected = false;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        if (batchSelectedValue) {
            this.IsBatchSelected = true;
        }
        this.Data();
        $('.checkAll').prop('checked', false);
    };
    StudentAttendanceComponent.prototype.OnDateChange = function ($event) {
        this.Data();
        $('.checkAll').prop('checked', false);
    };
    StudentAttendanceComponent.prototype.Data = function () {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        var DateSelectedValue = this.studentForm.controls["Date"].value;
        this.getStudentAttendances(batchSelectedValue, CourseSelectedValue, DateSelectedValue);
    };
    StudentAttendanceComponent.prototype.ApplyDataTable = function () {
        this.chRef.detectChanges();
        var table = $('#dttable');
        this.dataTable = table.DataTable({
            "paging": false,
            "ordering": false,
            "searching": false,
            "bInfo": false
        });
    };
    //Save Data of Attendance to Database
    StudentAttendanceComponent.prototype.SaveData = function () {
        if (this.IsInitialized == false) {
            this.ApplyDataTable();
            this.IsInitialized = true;
        }
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
            this.MarkStudentAttendances(this.updateList);
            $('.checkAll').prop('checked', false);
        }
    };
    //Check or Uncheck all row
    StudentAttendanceComponent.prototype.CheckAll = function () {
        $(".checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
        });
    };
    //Mark Attendance Method
    StudentAttendanceComponent.prototype.MarkStudentAttendances = function (studentData) {
        var _this = this;
        this._studentAttendanceService.saveStudentAttendance(studentData)
            .subscribe(function (data) {
            _this._router.navigate(['/studentattendance']);
        });
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
        __param(3, core_1.Inject('BASE_URL'))
    ], StudentAttendanceComponent);
    return StudentAttendanceComponent;
}());
exports.StudentAttendanceComponent = StudentAttendanceComponent;
//# sourceMappingURL=StudentAttendance.component.js.map