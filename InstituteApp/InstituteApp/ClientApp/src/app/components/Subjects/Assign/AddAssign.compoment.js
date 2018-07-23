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
var createAssignSubject = /** @class */ (function () {
    function createAssignSubject(_fb, _router, _dataService, _assignSubjectService) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._assignSubjectService = _assignSubjectService;
        this.title = "Create";
        this.subjectForm = this._fb.group({
            id: 0,
            CourseId: ['', [forms_1.Validators.required]],
            BatchId: ['', [forms_1.Validators.required]],
            SubjectId: ['', [forms_1.Validators.required]],
        });
        this.getCourse();
        this.getBatch();
        this.getSubject();
    }
    createAssignSubject.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    createAssignSubject.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    createAssignSubject.prototype.getSubject = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    createAssignSubject.prototype.OnCourseSelection = function ($event) {
        var courseID = this.subjectForm.controls["CourseId"].value;
        if (courseID) {
            this.subBatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    createAssignSubject.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._assignSubjectService.saveAssignSubject(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/assginsubject']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createAssignSubject.prototype.cancel = function () {
        this._router.navigate(['/assginsubject']);
    };
    Object.defineProperty(createAssignSubject.prototype, "CourseId", {
        get: function () { return this.subjectForm.get('CourseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAssignSubject.prototype, "BatchId", {
        get: function () { return this.subjectForm.get('BatchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAssignSubject.prototype, "SubjectId", {
        get: function () { return this.subjectForm.get('SubjectId'); },
        enumerable: true,
        configurable: true
    });
    createAssignSubject = __decorate([
        core_1.Component({
            selector: 'createAssignSubject',
            templateUrl: './AddAssign.component.html'
        })
    ], createAssignSubject);
    return createAssignSubject;
}());
exports.createAssignSubject = createAssignSubject;
//# sourceMappingURL=AddAssign.compoment.js.map