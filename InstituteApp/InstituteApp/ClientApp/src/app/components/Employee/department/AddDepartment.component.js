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
var createDepartment = /** @class */ (function () {
    function createDepartment(_fb, _avRoute, _departmentService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._departmentService = _departmentService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.departmentForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]],
            Code: ['', [forms_1.Validators.required]]
        });
    }
    createDepartment.prototype.save = function () {
        var _this = this;
        if (!this.departmentForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._departmentService.saveDepartment(this.departmentForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/department']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createDepartment.prototype.cancel = function () {
        this._router.navigate(['/department']);
    };
    Object.defineProperty(createDepartment.prototype, "Name", {
        get: function () { return this.departmentForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createDepartment.prototype, "Code", {
        get: function () { return this.departmentForm.get('Code'); },
        enumerable: true,
        configurable: true
    });
    createDepartment = __decorate([
        core_1.Component({
            selector: 'createDepartment',
            templateUrl: './AddDepartment.component.html'
        })
    ], createDepartment);
    return createDepartment;
}());
exports.createDepartment = createDepartment;
//# sourceMappingURL=AddDepartment.component.js.map