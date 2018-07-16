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
var editAllocateBatchTeacher = /** @class */ (function () {
    function editAllocateBatchTeacher(_fb, _avRoute, _allocateBatchTeacherService, _batchService, _courseService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._allocateBatchTeacherService = _allocateBatchTeacherService;
        this._batchService = _batchService;
        this._courseService = _courseService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.allocateBatchTeacherForm = this._fb.group({
            id: 0,
            batchId: ['', [forms_1.Validators.required]],
            courseId: ['', [forms_1.Validators.required]],
            teacherId: ['', [forms_1.Validators.required]],
            course: [''],
            batches: ['']
        });
        this.getCourses();
        this.getBatchs();
    }
    editAllocateBatchTeacher.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._allocateBatchTeacherService.getAllocateBatchTeacherById(this.id)
                .subscribe(function (resp) { return _this.allocateBatchTeacherForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editAllocateBatchTeacher.prototype.getCourses = function () {
        var _this = this;
        this._courseService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    editAllocateBatchTeacher.prototype.getBatchs = function () {
        var _this = this;
        this._batchService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    editAllocateBatchTeacher.prototype.save = function () {
        var _this = this;
        if (!this.allocateBatchTeacherForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._allocateBatchTeacherService.updateAllocateBatchTeacher(this.allocateBatchTeacherForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/batchteacherallocation']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editAllocateBatchTeacher.prototype.cancel = function () {
        this._router.navigate(['/batchteacherallocation']);
    };
    Object.defineProperty(editAllocateBatchTeacher.prototype, "courseId", {
        get: function () { return this.allocateBatchTeacherForm.get('courseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAllocateBatchTeacher.prototype, "batchId", {
        get: function () { return this.allocateBatchTeacherForm.get('batchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAllocateBatchTeacher.prototype, "teacherId", {
        get: function () { return this.allocateBatchTeacherForm.get('teacherId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAllocateBatchTeacher.prototype, "course", {
        get: function () { return this.allocateBatchTeacherForm.get('course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAllocateBatchTeacher.prototype, "batches", {
        get: function () { return this.allocateBatchTeacherForm.get('batches'); },
        enumerable: true,
        configurable: true
    });
    editAllocateBatchTeacher = __decorate([
        core_1.Component({
            selector: 'editAllocateBatchTeacher',
            templateUrl: './EditAllocateBatchTeacher.component.html'
        })
    ], editAllocateBatchTeacher);
    return editAllocateBatchTeacher;
}());
exports.editAllocateBatchTeacher = editAllocateBatchTeacher;
//# sourceMappingURL=EditAllocateBatchTeacher.component.js.map