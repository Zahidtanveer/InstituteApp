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
var editAcadamic = /** @class */ (function () {
    function editAcadamic(_fb, _avRoute, _acadamicService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._acadamicService = _acadamicService;
        this._router = _router;
        this.title = "";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.acadamicForm = this._fb.group({
            id: 0,
            startYear: ['', [forms_1.Validators.required]],
            startMonth: ['', [forms_1.Validators.required]],
            endYear: ['', [forms_1.Validators.required]],
            endMonth: ['', [forms_1.Validators.required]],
            isActive: ['', [forms_1.Validators.required]],
            createdBy: [''],
            updatedBy: [''],
            createdDate: [''],
            updatedDate: ['']
        });
    }
    editAcadamic.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._acadamicService.getAcadamicById(this.id)
                .subscribe(function (resp) { return _this.acadamicForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editAcadamic.prototype.save = function () {
        var _this = this;
        if (!this.acadamicForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._acadamicService.updateAcadamic(this.acadamicForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/acadamic']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editAcadamic.prototype.cancel = function () {
        this._router.navigate(['/acadamic']);
    };
    Object.defineProperty(editAcadamic.prototype, "startYear", {
        get: function () { return this.acadamicForm.get('startYear'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "startMonth", {
        get: function () { return this.acadamicForm.get('startMonth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "endYear", {
        get: function () { return this.acadamicForm.get('endYear'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "endMonth", {
        get: function () { return this.acadamicForm.get('endMonth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "isActive", {
        get: function () { return this.acadamicForm.get('isActive'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "createdBy", {
        get: function () { return this.acadamicForm.get('createdBy'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "updatedBy", {
        get: function () { return this.acadamicForm.get('updatedBy'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "createdDate", {
        get: function () { return this.acadamicForm.get('createdDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editAcadamic.prototype, "updatedDate", {
        get: function () { return this.acadamicForm.get('updatedDate'); },
        enumerable: true,
        configurable: true
    });
    editAcadamic = __decorate([
        core_1.Component({
            selector: 'editAcadamic',
            templateUrl: './EditAcadamic.component.html'
        })
    ], editAcadamic);
    return editAcadamic;
}());
exports.editAcadamic = editAcadamic;
//# sourceMappingURL=EditAcadamic.component.js.map