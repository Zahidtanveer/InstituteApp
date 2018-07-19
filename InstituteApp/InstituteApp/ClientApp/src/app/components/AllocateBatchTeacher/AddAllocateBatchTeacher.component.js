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
var alert_service_1 = require("../../services/alert.service");
var createAllocateBatchTeacher = /** @class */ (function () {
    function createAllocateBatchTeacher(_fb, _avRoute, _allocateBatchTeacherService, _batchService, _courseService, _router, _alertService, _employeeService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._allocateBatchTeacherService = _allocateBatchTeacherService;
        this._batchService = _batchService;
        this._courseService = _courseService;
        this._router = _router;
        this._alertService = _alertService;
        this._employeeService = _employeeService;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.allocateBatchTeacherForm = this._fb.group({
            id: 0,
            BatchId: ['', [forms_1.Validators.required]],
            CourseId: ['', [forms_1.Validators.required]],
            TeacherId: ['', [forms_1.Validators.required]],
        });
        this.getCourses();
        this.getBatchs();
        this.getEmployees();
    }
    createAllocateBatchTeacher.prototype.OnCourseSelection = function ($event) {
        var courseSelectedValue = this.allocateBatchTeacherForm.controls["CourseId"].value;
        if (courseSelectedValue) {
            this.subbatchList = this.batchList.filter(function (x) { return x.courseId == courseSelectedValue && x !== null; });
        }
    };
    createAllocateBatchTeacher.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (data) { _this.employeeList = data; });
    };
    createAllocateBatchTeacher.prototype.getCourses = function () {
        var _this = this;
        this._courseService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    createAllocateBatchTeacher.prototype.getBatchs = function () {
        var _this = this;
        this._batchService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    createAllocateBatchTeacher.prototype.save = function () {
        var _this = this;
        if (!this.allocateBatchTeacherForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._allocateBatchTeacherService.saveAllocateBatchTeacher(this.allocateBatchTeacherForm.value)
                .subscribe(function (data) {
                setTimeout(function () {
                    _this._alertService.showMessage("Success", "New Entry Addedd Successfully !", alert_service_1.MessageSeverity.success);
                }, 500);
                _this._router.navigate(['/batchteacherallocation']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createAllocateBatchTeacher.prototype.cancel = function () {
        this._router.navigate(['/batchteacherallocation']);
    };
    Object.defineProperty(createAllocateBatchTeacher.prototype, "CourseId", {
        get: function () { return this.allocateBatchTeacherForm.get('CourseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAllocateBatchTeacher.prototype, "BatchId", {
        get: function () { return this.allocateBatchTeacherForm.get('BatchId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAllocateBatchTeacher.prototype, "TeacherId", {
        get: function () { return this.allocateBatchTeacherForm.get('TeacherId'); },
        enumerable: true,
        configurable: true
    });
    createAllocateBatchTeacher = __decorate([
        core_1.Component({
            selector: 'createAllocateBatchTeacher',
            templateUrl: './AddAllocateBatchTeacher.component.html'
        })
    ], createAllocateBatchTeacher);
    return createAllocateBatchTeacher;
}());
exports.createAllocateBatchTeacher = createAllocateBatchTeacher;
//# sourceMappingURL=AddAllocateBatchTeacher.component.js.map