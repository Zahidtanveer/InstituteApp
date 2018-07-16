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
var createLeave = /** @class */ (function () {
    function createLeave(_fb, _avRoute, _leaveService, _router, _leaveCategoryService, _dataService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._leaveService = _leaveService;
        this._router = _router;
        this._leaveCategoryService = _leaveCategoryService;
        this._dataService = _dataService;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.leaveForm = this._fb.group({
            id: 0,
            DesignationName: ['', [forms_1.Validators.required]],
            LeaveCount: ['', [forms_1.Validators.required]],
            LeaveCategoryId: ['', [forms_1.Validators.required]]
        });
        this.getLeaveCategory();
        this.getDesignation();
    }
    createLeave.prototype.getLeaveCategory = function () {
        var _this = this;
        this._leaveCategoryService.getLeaveCategory()
            .subscribe(function (data) { _this.leaveCategoryList = data; });
    };
    createLeave.prototype.getDesignation = function () {
        var _this = this;
        this._dataService.getDesignation()
            .subscribe(function (data) { _this.designationList = data; });
    };
    createLeave.prototype.save = function () {
        var _this = this;
        if (!this.leaveForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._leaveService.saveLeaveDetail(this.leaveForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/leave']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createLeave.prototype.cancel = function () {
        this._router.navigate(['/leave']);
    };
    Object.defineProperty(createLeave.prototype, "DesignationName", {
        get: function () { return this.leaveForm.get('DesignationName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createLeave.prototype, "LeaveCategoryId", {
        get: function () { return this.leaveForm.get('LeaveCategoryId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createLeave.prototype, "LeaveCount", {
        get: function () { return this.leaveForm.get('LeaveCount'); },
        enumerable: true,
        configurable: true
    });
    createLeave = __decorate([
        core_1.Component({
            selector: 'createLeave',
            templateUrl: './AddLeave.component.html'
        })
    ], createLeave);
    return createLeave;
}());
exports.createLeave = createLeave;
//# sourceMappingURL=AddLeave.component.js.map