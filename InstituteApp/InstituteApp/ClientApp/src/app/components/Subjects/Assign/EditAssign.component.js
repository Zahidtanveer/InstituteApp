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
var editAssignSubject = /** @class */ (function () {
    function editAssignSubject(_fb, _router, _dataService, _assignSubjectService, _avRoute) {
        this._fb = _fb;
        this._router = _router;
        this._dataService = _dataService;
        this._assignSubjectService = _assignSubjectService;
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
            course: [''],
            batch: [''],
            subject: ['']
        });
        this.getCourse();
        this.getBatch();
        this.getSubject();
    }
    editAssignSubject.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    editAssignSubject.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    editAssignSubject.prototype.getSubject = function () {
        var _this = this;
        this._dataService.getSubject()
            .subscribe(function (data) { _this.subjectList = data; });
    };
    editAssignSubject.prototype.OnCourseSelection = function ($event) {
        var courseID = this.subjectForm.controls["courseId"].value;
        if (courseID) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseID && x != null; });
        }
    };
    editAssignSubject.prototype.OnBatchSelection = function ($event) {
        var courseSelectedValue = this.subjectForm.controls["courseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseSelectedValue && x !== null; });
            this.IsCourseSelected = true;
        }
    };
    editAssignSubject.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this._assignSubjectService.getAssignSubjectById(this.id)
                .subscribe(function (resp) { return _this.subjectForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editAssignSubject.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._assignSubjectService.updateAssignSubject(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/assginsubject']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editAssignSubject.prototype.cancel = function () {
        this._router.navigate(['/assginsubject']);
    };
    Object.defineProperty(editAssignSubject.prototype, "courseId", {
        get: function () { return this.subjectForm.get('courseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAssignSubject.prototype, "course", {
        get: function () { return this.subjectForm.get('course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAssignSubject.prototype, "batch", {
        get: function () { return this.subjectForm.get('batch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAssignSubject.prototype, "batchId", {
        get: function () { return this.subjectForm.get('batchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAssignSubject.prototype, "subject", {
        get: function () { return this.subjectForm.get('subject'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAssignSubject.prototype, "subjectId", {
        get: function () { return this.subjectForm.get('subjectId'); },
        enumerable: true,
        configurable: true
    });
    editAssignSubject = __decorate([
        core_1.Component({
            selector: 'editAssignSubject',
            templateUrl: './EditAssign.component.html'
        })
    ], editAssignSubject);
    return editAssignSubject;
}());
exports.editAssignSubject = editAssignSubject;
//# sourceMappingURL=EditAssign.component.js.map