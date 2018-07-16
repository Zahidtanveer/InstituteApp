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
var createStudentCategory = /** @class */ (function () {
    function createStudentCategory(_fb, _avRoute, _studentCategoryService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._studentCategoryService = _studentCategoryService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.studentCategoryForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]]
        });
    }
    createStudentCategory.prototype.save = function () {
        var _this = this;
        if (!this.studentCategoryForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._studentCategoryService.saveStudentCategory(this.studentCategoryForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/studentcategory']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createStudentCategory.prototype.cancel = function () {
        this._router.navigate(['/studentcategory']);
    };
    Object.defineProperty(createStudentCategory.prototype, "Name", {
        get: function () { return this.studentCategoryForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    createStudentCategory = __decorate([
        core_1.Component({
            selector: 'createStudentCategory',
            templateUrl: './AddStudentCategory.component.html'
        })
    ], createStudentCategory);
    return createStudentCategory;
}());
exports.createStudentCategory = createStudentCategory;
//# sourceMappingURL=AddStudentCategory.component.js.map