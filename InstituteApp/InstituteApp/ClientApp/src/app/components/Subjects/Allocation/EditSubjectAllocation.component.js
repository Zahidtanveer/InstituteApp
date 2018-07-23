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
var editSubjectAllocation = /** @class */ (function () {
    function editSubjectAllocation(_fb, _router, _dataService, _subjectAllocationService, _employeeService, _avRoute) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._subjectAllocationService = _subjectAllocationService;
        this._employeeService = _employeeService;
        this._avRoute = _avRoute;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.subjectForm = this._fb.group({
            id: 0,
            departmentId: ['', forms_1.Validators.required],
            teacherId: ['', forms_1.Validators.required],
            courseId: ['', [forms_1.Validators.required]],
            batchId: ['', [forms_1.Validators.required]],
            subjectId: ['', [forms_1.Validators.required]],
            department: [''],
            employee: [''],
            course: [''],
            batch: [''],
            subject: ['']
        });
        this.getDepartment();
        this.getTeachers();
        this.getCourse();
        this.getBatch();
        this.getSubject();
    }
    editSubjectAllocation.prototype.getTeachers = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (data) { _this.teacherList = data; });
    };
    editSubjectAllocation.prototype.getDepartment = function () {
        var _this = this;
        this._dataService.getDepartment()
            .subscribe(function (data) { _this.departmentList = data; });
    };
    editSubjectAllocation.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    editSubjectAllocation.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    editSubjectAllocation.prototype.getSubject = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    editSubjectAllocation.prototype.OnDepartmentSelection = function ($event) {
        var departmentID = this.subjectForm.controls["departmentId"].value;
        if (departmentID) {
            var department = this.departmentList.filter(function (x) { return x.id == departmentID; });
            if (department) {
                this.subteacherList = this.teacherList.filter(function (x) { return x.department == department[0].name && x != null; });
                console.log(this.subteacherList);
            }
        }
    };
    editSubjectAllocation.prototype.OnTeacherSelection = function ($event) {
        var departmentID = this.subjectForm.controls["departmentId"].value;
        if (departmentID) {
            var department = this.departmentList.filter(function (x) { return x.id == departmentID; });
            if (department) {
                this.subteacherList = this.teacherList.filter(function (x) { return x.department == department[0].name && x != null; });
                this.IsDepartmentSelected = true;
            }
        }
    };
    editSubjectAllocation.prototype.OnCourseSelection = function ($event) {
        var courseID = this.subjectForm.controls["courseId"].value;
        if (courseID) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    editSubjectAllocation.prototype.OnBatchSelection = function ($event) {
        var courseSelectedValue = this.subjectForm.controls["courseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseSelectedValue && x !== null; });
            this.IsCourseSelected = true;
        }
    };
    editSubjectAllocation.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this._subjectAllocationService.getSubjectAllocationById(this.id)
                .subscribe(function (resp) { return _this.subjectForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editSubjectAllocation.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._subjectAllocationService.updateSubjectAllocation(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/subjectallocation']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editSubjectAllocation.prototype.cancel = function () {
        this._router.navigate(['/subjectallocation']);
    };
    Object.defineProperty(editSubjectAllocation.prototype, "departmentId", {
        get: function () { return this.subjectForm.get('departmentId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "teacherId", {
        get: function () { return this.subjectForm.get("teacherId"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "courseId", {
        get: function () { return this.subjectForm.get('courseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "batchId", {
        get: function () { return this.subjectForm.get('batchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "subjectId", {
        get: function () { return this.subjectForm.get('subjectId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "department", {
        get: function () { return this.subjectForm.get('department'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "employee", {
        get: function () { return this.subjectForm.get("employee"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "course", {
        get: function () { return this.subjectForm.get('course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "batch", {
        get: function () { return this.subjectForm.get('batch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubjectAllocation.prototype, "subject", {
        get: function () { return this.subjectForm.get('subject'); },
        enumerable: true,
        configurable: true
    });
    editSubjectAllocation = __decorate([
        core_1.Component({
            selector: 'editSubjectAllocation',
            templateUrl: './EditSubjectAllocation.component.html'
        })
    ], editSubjectAllocation);
    return editSubjectAllocation;
}());
exports.editSubjectAllocation = editSubjectAllocation;
//# sourceMappingURL=EditSubjectAllocation.component.js.map