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
var editLeaveCategory = /** @class */ (function () {
    function editLeaveCategory(_fb, _avRoute, _leaveCategoryService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._leaveCategoryService = _leaveCategoryService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.leaveCategoryForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            leave: ['']
        });
    }
    editLeaveCategory.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._leaveCategoryService.getLeaveCategoryById(this.id)
                .subscribe(function (resp) { return _this.leaveCategoryForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editLeaveCategory.prototype.save = function () {
        var _this = this;
        if (!this.leaveCategoryForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._leaveCategoryService.updateLeaveCategory(this.leaveCategoryForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/LeaveCategory']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editLeaveCategory.prototype.cancel = function () {
        this._router.navigate(['/LeaveCategory']);
    };
    Object.defineProperty(editLeaveCategory.prototype, "name", {
        get: function () { return this.leaveCategoryForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editLeaveCategory.prototype, "leave", {
        get: function () { return this.leaveCategoryForm.get('leave'); },
        enumerable: true,
        configurable: true
    });
    editLeaveCategory = __decorate([
        core_1.Component({
            selector: 'editLeaveCategory',
            templateUrl: './EditLeaveCategory.component.html'
        })
    ], editLeaveCategory);
    return editLeaveCategory;
}());
exports.editLeaveCategory = editLeaveCategory;
//# sourceMappingURL=EditLeaveCategory.component.js.map