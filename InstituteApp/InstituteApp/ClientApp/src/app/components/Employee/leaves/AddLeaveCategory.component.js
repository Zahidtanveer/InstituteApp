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
var createLeaveCategory = /** @class */ (function () {
    function createLeaveCategory(_fb, _avRoute, _leaveCategoryService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._leaveCategoryService = _leaveCategoryService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.leaveCategoryForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]]
        });
    }
    createLeaveCategory.prototype.save = function () {
        var _this = this;
        if (!this.leaveCategoryForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._leaveCategoryService.saveLeaveCategory(this.leaveCategoryForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/leavecategory']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createLeaveCategory.prototype.cancel = function () {
        this._router.navigate(['/leavecategory']);
    };
    Object.defineProperty(createLeaveCategory.prototype, "Name", {
        get: function () { return this.leaveCategoryForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    createLeaveCategory = __decorate([
        core_1.Component({
            selector: 'createLeaveCategory',
            templateUrl: './AddLeaveCategory.component.html'
        })
    ], createLeaveCategory);
    return createLeaveCategory;
}());
exports.createLeaveCategory = createLeaveCategory;
//# sourceMappingURL=AddLeaveCategory.component.js.map