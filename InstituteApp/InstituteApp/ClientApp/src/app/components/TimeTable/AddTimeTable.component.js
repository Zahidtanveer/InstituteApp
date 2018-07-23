"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var createTimeTable = /** @class */ (function () {
    function createTimeTable(_fb, _router, _dataService, _employeeService) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._employeeService = _employeeService;
        this.title = "Create";
        this.timeTableForm = this._fb.group({
            id: 0,
            CourseId: ['', [forms_1.Validators.required]],
            BatchId: ['', [forms_1.Validators.required]],
            Name: ['', [forms_1.Validators.required]],
            WeekDays: ['', [forms_1.Validators.required]]
        });
        this.getCourse();
        this.getBatch();
    }
    createTimeTable.prototype.getTeachers = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (data) { _this.teacherList = data; });
    };
    createTimeTable.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    createTimeTable.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    createTimeTable.prototype.onModalHidden = function () {
    };
    createTimeTable.prototype.OnCourseSelection = function ($event) {
        var courseID = this.timeTableForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    createTimeTable.prototype.SetWeekDays = function () {
        this.weekDayModal.show();
    };
    createTimeTable.prototype.save = function () {
        if (!this.timeTableForm.valid) {
            return;
        }
        if (this.title == "Create") {
            //this._subjectAllocationService.saveSubjectAllocation(this.timeTableForm.value)
            //    .subscribe((data) => {
            //        this._router.navigate(['/timeTable']);
            //    }, error => this.errorMessage = error)
        }
    };
    createTimeTable.prototype.cancel = function () {
        this._router.navigate(['/timeTable']);
    };
    Object.defineProperty(createTimeTable.prototype, "CourseId", {
        get: function () { return this.timeTableForm.get('CourseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createTimeTable.prototype, "BatchId", {
        get: function () { return this.timeTableForm.get('BatchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createTimeTable.prototype, "Name", {
        get: function () { return this.timeTableForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createTimeTable.prototype, "WeekDays", {
        get: function () { return this.timeTableForm.get('WeekDays'); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('weekDayModal')
    ], createTimeTable.prototype, "weekDayModal", void 0);
    createTimeTable = __decorate([
        core_1.Component({
            selector: 'createTimeTable',
            templateUrl: './AddTimeTable.component.html'
        })
    ], createTimeTable);
    return createTimeTable;
}());
exports.createTimeTable = createTimeTable;
//# sourceMappingURL=AddTimeTable.component.js.map