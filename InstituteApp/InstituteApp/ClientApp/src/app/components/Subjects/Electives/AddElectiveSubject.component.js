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
var createElectiveSubject = /** @class */ (function () {
    function createElectiveSubject(_fb, _router, _dataService, _electiveSubjectService, _studentService) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._electiveSubjectService = _electiveSubjectService;
        this._studentService = _studentService;
        this.title = "Create";
        this.subjectForm = this._fb.group({
            id: 0,
            CourseId: ['', [forms_1.Validators.required]],
            BatchId: ['', [forms_1.Validators.required]],
            SubjectId: ['', [forms_1.Validators.required]],
            StudentId: ['', forms_1.Validators.required],
        });
        this.getCourse();
        this.getBatch();
        this.getSubject();
        this.getStudent();
    }
    createElectiveSubject.prototype.getStudent = function () {
        var _this = this;
        this._studentService.getStudent()
            .subscribe(function (data) { _this.studentList = data; });
    };
    createElectiveSubject.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    createElectiveSubject.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    createElectiveSubject.prototype.getSubject = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    createElectiveSubject.prototype.OnCourseSelection = function ($event) {
        var courseID = this.subjectForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    createElectiveSubject.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._electiveSubjectService.saveElectiveSubject(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/electivesubject']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createElectiveSubject.prototype.cancel = function () {
        this._router.navigate(['/electivesubject']);
    };
    Object.defineProperty(createElectiveSubject.prototype, "CourseId", {
        get: function () { return this.subjectForm.get('CourseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createElectiveSubject.prototype, "BatchId", {
        get: function () { return this.subjectForm.get('BatchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createElectiveSubject.prototype, "SubjectId", {
        get: function () { return this.subjectForm.get('SubjectId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createElectiveSubject.prototype, "StudentId", {
        get: function () { return this.subjectForm.get("StudentId"); },
        enumerable: true,
        configurable: true
    });
    createElectiveSubject = __decorate([
        core_1.Component({
            selector: 'createElectiveSubject',
            templateUrl: './AddElectiveSubject.component.html'
        })
    ], createElectiveSubject);
    return createElectiveSubject;
}());
exports.createElectiveSubject = createElectiveSubject;
//# sourceMappingURL=AddElectiveSubject.component.js.map