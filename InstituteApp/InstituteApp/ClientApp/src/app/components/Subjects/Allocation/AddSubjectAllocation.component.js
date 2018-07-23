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
var createSubjectAllocation = /** @class */ (function () {
    function createSubjectAllocation(_fb, _router, _dataService, _subjectAllocationService, _employeeService) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._subjectAllocationService = _subjectAllocationService;
        this._employeeService = _employeeService;
        this.title = "Create";
        this.subjectForm = this._fb.group({
            id: 0,
            DepartmentId: ['', forms_1.Validators.required],
            TeacherId: ['', forms_1.Validators.required],
            CourseId: ['', [forms_1.Validators.required]],
            BatchId: ['', [forms_1.Validators.required]],
            SubjectId: ['', [forms_1.Validators.required]]
        });
        this.getDepartment();
        this.getTeachers();
        this.getCourse();
        this.getBatch();
        this.getSubject();
    }
    createSubjectAllocation.prototype.getTeachers = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (data) { _this.teacherList = data; });
    };
    createSubjectAllocation.prototype.getDepartment = function () {
        var _this = this;
        this._dataService.getDepartment()
            .subscribe(function (data) { _this.departmentList = data; });
    };
    createSubjectAllocation.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    createSubjectAllocation.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    createSubjectAllocation.prototype.getSubject = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    createSubjectAllocation.prototype.OnDepartmentSelection = function ($event) {
        var departmentID = this.subjectForm.controls["DepartmentId"].value;
        if (departmentID) {
            var department = this.departmentList.filter(function (x) { return x.id == departmentID; });
            if (department) {
                this.subteacherList = this.teacherList.filter(function (x) { return x.department == department[0].name && x != null; });
                console.log(this.subteacherList);
            }
        }
    };
    createSubjectAllocation.prototype.OnCourseSelection = function ($event) {
        var courseID = this.subjectForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    createSubjectAllocation.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._subjectAllocationService.saveSubjectAllocation(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/subjectallocation']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createSubjectAllocation.prototype.cancel = function () {
        this._router.navigate(['/subjectallocation']);
    };
    Object.defineProperty(createSubjectAllocation.prototype, "DepartmentId", {
        get: function () { return this.subjectForm.get('DepartmentId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSubjectAllocation.prototype, "TeacherId", {
        get: function () { return this.subjectForm.get("TeacherId"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSubjectAllocation.prototype, "CourseId", {
        get: function () { return this.subjectForm.get('CourseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSubjectAllocation.prototype, "BatchId", {
        get: function () { return this.subjectForm.get('BatchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSubjectAllocation.prototype, "SubjectId", {
        get: function () { return this.subjectForm.get('SubjectId'); },
        enumerable: true,
        configurable: true
    });
    createSubjectAllocation = __decorate([
        core_1.Component({
            selector: 'createSubjectAllocation',
            templateUrl: './AddSubjectAllocation.component.html'
        })
    ], createSubjectAllocation);
    return createSubjectAllocation;
}());
exports.createSubjectAllocation = createSubjectAllocation;
//# sourceMappingURL=AddSubjectAllocation.component.js.map