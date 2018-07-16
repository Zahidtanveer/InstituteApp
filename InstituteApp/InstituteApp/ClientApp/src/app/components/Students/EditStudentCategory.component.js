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
var editStudentCategory = /** @class */ (function () {
    function editStudentCategory(_fb, _avRoute, _studentCategoryService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._studentCategoryService = _studentCategoryService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.studentCategoryForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            students: ['']
        });
    }
    editStudentCategory.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._studentCategoryService.getStudentCategoryById(this.id)
                .subscribe(function (resp) { return _this.studentCategoryForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editStudentCategory.prototype.save = function () {
        var _this = this;
        if (!this.studentCategoryForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._studentCategoryService.updateStudentCategory(this.studentCategoryForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/studentcategory']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editStudentCategory.prototype.cancel = function () {
        this._router.navigate(['/studentcategory']);
    };
    Object.defineProperty(editStudentCategory.prototype, "name", {
        get: function () { return this.studentCategoryForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudentCategory.prototype, "students", {
        get: function () { return this.studentCategoryForm.get('students'); },
        enumerable: true,
        configurable: true
    });
    editStudentCategory = __decorate([
        core_1.Component({
            selector: 'editStudentCategory',
            templateUrl: './EditStudentCategory.component.html'
        })
    ], editStudentCategory);
    return editStudentCategory;
}());
exports.editStudentCategory = editStudentCategory;
//# sourceMappingURL=EditStudentCategory.component.js.map