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
var editElectiveSubject = /** @class */ (function () {
    function editElectiveSubject(_fb, _router, _dataService, _electiveSubjectService, _studentService, _avRoute) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._electiveSubjectService = _electiveSubjectService;
        this._studentService = _studentService;
        this._avRoute = _avRoute;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.subjectForm = this._fb.group({
            id: 0,
            courseId: ['', [forms_1.Validators.required]],
            batchId: ['', [forms_1.Validators.required]],
            subjectId: ['', [forms_1.Validators.required]],
            studentId: ['', forms_1.Validators.required],
            course: [''],
            batch: [''],
            subject: [''],
            student: [''],
        });
        this.getCourse();
        this.getBatch();
        this.getSubject();
        this.getStudent();
    }
    editElectiveSubject.prototype.getStudent = function () {
        var _this = this;
        this._studentService.getStudent()
            .subscribe(function (data) { _this.studentList = data; });
    };
    editElectiveSubject.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    editElectiveSubject.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    editElectiveSubject.prototype.getSubject = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    editElectiveSubject.prototype.OnCourseSelection = function ($event) {
        var courseID = this.subjectForm.controls["courseId"].value;
        if (courseID) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    editElectiveSubject.prototype.OnBatchSelection = function ($event) {
        var courseSelectedValue = this.subjectForm.controls["courseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseSelectedValue && x !== null; });
            this.IsCourseSelected = true;
        }
    };
    editElectiveSubject.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this._electiveSubjectService.getElectiveSubjectById(this.id)
                .subscribe(function (resp) { return _this.subjectForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editElectiveSubject.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._electiveSubjectService.updateElectiveSubject(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/electivesubject']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editElectiveSubject.prototype.cancel = function () {
        this._router.navigate(['/electivesubject']);
    };
    Object.defineProperty(editElectiveSubject.prototype, "courseId", {
        get: function () { return this.subjectForm.get('courseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "batchId", {
        get: function () { return this.subjectForm.get('batchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "subjectId", {
        get: function () { return this.subjectForm.get('subjectId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "studentId", {
        get: function () { return this.subjectForm.get("studentId"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "course", {
        get: function () { return this.subjectForm.get('course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "batch", {
        get: function () { return this.subjectForm.get('batch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "subject", {
        get: function () { return this.subjectForm.get('subject'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editElectiveSubject.prototype, "student", {
        get: function () { return this.subjectForm.get("student"); },
        enumerable: true,
        configurable: true
    });
    editElectiveSubject = __decorate([
        core_1.Component({
            selector: 'editElectiveSubject',
            templateUrl: './EditElectiveSubject.component.html'
        })
    ], editElectiveSubject);
    return editElectiveSubject;
}());
exports.editElectiveSubject = editElectiveSubject;
//# sourceMappingURL=EditElectiveSubject.component.js.map