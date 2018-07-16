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
var createLeaveApplication = /** @class */ (function () {
    function createLeaveApplication(_fb, _avRoute, _leaveService, _router, _employeeService, _leaveCategoryService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._leaveService = _leaveService;
        this._router = _router;
        this._employeeService = _employeeService;
        this._leaveCategoryService = _leaveCategoryService;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.leaveAppForm = this._fb.group({
            EmployeeId: ['', [forms_1.Validators.required]],
            LeaveCategoryId: ['', [forms_1.Validators.required]],
            FromDate: ['', [forms_1.Validators.required]],
            ToDate: ['', [forms_1.Validators.required]],
            Reason: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.getLeaveCategory();
        this.getEmployees();
    }
    createLeaveApplication.prototype.getLeaveCategory = function () {
        var _this = this;
        this._leaveCategoryService.getLeaveCategory()
            .subscribe(function (data) { _this.leaveCategoryList = data; });
    };
    createLeaveApplication.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployee()
            .subscribe(function (data) { _this.employeeList = data; });
    };
    createLeaveApplication.prototype.save = function () {
        var _this = this;
        if (!this.leaveAppForm.valid) {
            return;
        }
        if (this.title == "Create") {
            console.log(this.leaveAppForm.value);
            this._leaveService.saveLeave(this.leaveAppForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/leave']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createLeaveApplication.prototype.cancel = function () {
        this._router.navigate(['/leave']);
    };
    Object.defineProperty(createLeaveApplication.prototype, "EmployeeId", {
        get: function () { return this.leaveAppForm.get('EmployeeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createLeaveApplication.prototype, "LeaveCategoryId", {
        get: function () { return this.leaveAppForm.get('LeaveCategoryId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createLeaveApplication.prototype, "FromDate", {
        get: function () { return this.leaveAppForm.get('FromDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createLeaveApplication.prototype, "ToDate", {
        get: function () { return this.leaveAppForm.get('ToDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createLeaveApplication.prototype, "Reason", {
        get: function () { return this.leaveAppForm.get('Reason'); },
        enumerable: true,
        configurable: true
    });
    createLeaveApplication = __decorate([
        core_1.Component({
            selector: 'createLeaveApplication',
            templateUrl: './leaveApplication.component.html'
        })
    ], createLeaveApplication);
    return createLeaveApplication;
}());
exports.createLeaveApplication = createLeaveApplication;
//# sourceMappingURL=leaveApplication.component.js.map