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
var UpdateRollNoComponent = /** @class */ (function () {
    function UpdateRollNoComponent(_router, _fb, _dataService, _studentService, alertService, chRef) {
        this._router = _router;
        this._fb = _fb;
        this._dataService = _dataService;
        this._studentService = _studentService;
        this.alertService = alertService;
        this.chRef = chRef;
        this.studentForm = this._fb.group({
            Course: [''],
            Batch: ['']
        });
        this.getCourse();
        this.getBatch();
    }
    UpdateRollNoComponent.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    UpdateRollNoComponent.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    UpdateRollNoComponent.prototype.OnCourseSelection = function ($event) {
        var courseName = this.studentForm.controls["Course"].value;
        this.IsCourseSelected = false;
        if (courseName) {
            var courseID = this.courseList.filter(function (c) { return c.name == courseName && c != null; });
            console.log(courseID);
            if (courseID) {
                this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID[0].id && x !== null; });
            }
            this.IsCourseSelected = true;
        }
        this.studentForm.controls["Batch"].setValue("");
    };
    UpdateRollNoComponent.prototype.OnBatchChange = function ($event) {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        if (batchSelectedValue) {
            this.getStudents(CourseSelectedValue, batchSelectedValue, '');
        }
    };
    UpdateRollNoComponent.prototype.getStudents = function (course, batch, date) {
        var _this = this;
        this._studentService.filterStudent(course, batch, date)
            .subscribe(function (data) {
            _this.dList = data;
        });
    };
    UpdateRollNoComponent.prototype.SaveData = function () {
        var dictRollNo = [];
        $('table tr input[type=text]').each(function () {
            var str = $(this).val();
            var tRowId = this.closest('tr').children.item(0).innerHTML;
            dictRollNo.push({
                id: tRowId,
                rollNo: str
            });
        });
        this.updateList = dictRollNo;
        console.log(this.updateList);
        this.UpdateRollNo(this.updateList);
    };
    UpdateRollNoComponent.prototype.UpdateRollNo = function (studentData) {
        var _this = this;
        this._studentService.UpdateStudentRollNo(studentData)
            .subscribe(function (data) {
            _this._router.navigate(['/student-rollno']);
        });
    };
    UpdateRollNoComponent = __decorate([
        core_1.Component({
            selector: 'Student-UpdateRollNo',
            templateUrl: './UpdateRollNo.component.html'
        })
    ], UpdateRollNoComponent);
    return UpdateRollNoComponent;
}());
exports.UpdateRollNoComponent = UpdateRollNoComponent;
//# sourceMappingURL=UpdateRollNo.component.js.map