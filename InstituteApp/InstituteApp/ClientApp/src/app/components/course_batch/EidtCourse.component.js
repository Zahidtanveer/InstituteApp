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
var editCourse = /** @class */ (function () {
    function editCourse(_fb, _syllabusService, _avRoute, _courseService, _router) {
        this._fb = _fb;
        this._syllabusService = _syllabusService;
        this._avRoute = _avRoute;
        this._courseService = _courseService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.courseForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            dscription: ['', [forms_1.Validators.required]],
            code: ['', [forms_1.Validators.required]],
            maxAttandencePercentage: ['', [forms_1.Validators.required]],
            totalWorkingDays: ['', [forms_1.Validators.required]],
            syllabusName: ['', [forms_1.Validators.required]],
            attendanceType: ['', [forms_1.Validators.required]],
            batches: [''],
            syllabus: [''],
            batchTeacher: ['']
        });
        this.getSyllabuss();
    }
    editCourse.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._courseService.getCourseById(this.id)
                .subscribe(function (resp) { return _this.courseForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editCourse.prototype.getSyllabuss = function () {
        var _this = this;
        this._syllabusService.getSyllabus()
            .subscribe(function (data) { _this.syllabusList = data; });
    };
    editCourse.prototype.save = function () {
        var _this = this;
        if (!this.courseForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._courseService.updateCourse(this.courseForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/course']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editCourse.prototype.cancel = function () {
        this._router.navigate(['/course']);
    };
    Object.defineProperty(editCourse.prototype, "name", {
        get: function () { return this.courseForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "dscription", {
        get: function () { return this.courseForm.get('dscription'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "code", {
        get: function () { return this.courseForm.get('code'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "maxAttandencePercentage", {
        get: function () { return this.courseForm.get('maxAttandencePercentage'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "totalWorkingDays", {
        get: function () { return this.courseForm.get('totalWorkingDays'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "syllabusName", {
        get: function () { return this.courseForm.get('syllabusName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "attendanceType", {
        get: function () { return this.courseForm.get('attendanceType'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "batches", {
        get: function () { return this.courseForm.get('batches'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "syllabus", {
        get: function () { return this.courseForm.get('syllabus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCourse.prototype, "batchTeacher", {
        get: function () { return this.courseForm.get('batchTeacher'); },
        enumerable: true,
        configurable: true
    });
    editCourse = __decorate([
        core_1.Component({
            selector: 'editCourse',
            templateUrl: './EditCourse.component.html'
        })
    ], editCourse);
    return editCourse;
}());
exports.editCourse = editCourse;
//# sourceMappingURL=EidtCourse.component.js.map