"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("datatables.net");
require("datatables.net-bs4");
var StudentIDCardComponent = /** @class */ (function () {
    function StudentIDCardComponent(_fb, http, _studentService, alertService, chRef, _dataService) {
        this._fb = _fb;
        this._studentService = _studentService;
        this.alertService = alertService;
        this.chRef = chRef;
        this._dataService = _dataService;
        this.studentForm = this._fb.group({
            Course: [''],
            Batch: ['']
        });
        this.getCourse();
        this.getBatch();
    }
    StudentIDCardComponent.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    StudentIDCardComponent.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    StudentIDCardComponent.prototype.OnCourseSelection = function ($event) {
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
        this.getStudents('', '', '');
    };
    StudentIDCardComponent.prototype.OnBatchChange = function ($event) {
        var CourseSelectedValue = this.studentForm.controls["Course"].value;
        var batchSelectedValue = this.studentForm.controls["Batch"].value;
        this.getStudents(CourseSelectedValue, batchSelectedValue, '');
    };
    StudentIDCardComponent.prototype.getStudents = function (course, batch, date) {
        var _this = this;
        this._studentService.filterStudent(course, batch, date)
            .subscribe(function (data) { _this.dList = data; });
    };
    StudentIDCardComponent.prototype.PrintIDCard = function () {
    };
    Object.defineProperty(StudentIDCardComponent.prototype, "Course", {
        get: function () { return this.studentForm.get('Course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudentIDCardComponent.prototype, "Batch", {
        get: function () { return this.studentForm.get('Batch'); },
        enumerable: true,
        configurable: true
    });
    StudentIDCardComponent = __decorate([
        core_1.Component({
            selector: 'Student-IDCard',
            templateUrl: './studentIDCard.component.html'
        })
    ], StudentIDCardComponent);
    return StudentIDCardComponent;
}());
exports.StudentIDCardComponent = StudentIDCardComponent;
//# sourceMappingURL=studentIDCard.component.js.map