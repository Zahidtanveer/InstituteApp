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
var editReligion = /** @class */ (function () {
    function editReligion(_fb, _avRoute, _religionService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._religionService = _religionService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.religionForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            createdBy: [''],
            updatedBy: [''],
            createdDate: [''],
            updatedDate: ['']
        });
    }
    editReligion.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._religionService.getReligionById(this.id)
                .subscribe(function (resp) { return _this.religionForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editReligion.prototype.save = function () {
        var _this = this;
        if (!this.religionForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._religionService.updateReligion(this.religionForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/catse-and-religion']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editReligion.prototype.cancel = function () {
        this._router.navigate(['/catse-and-religion']);
    };
    Object.defineProperty(editReligion.prototype, "name", {
        get: function () { return this.religionForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editReligion.prototype, "createdBy", {
        get: function () { return this.religionForm.get('createdBy'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editReligion.prototype, "updatedBy", {
        get: function () { return this.religionForm.get('updatedBy'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editReligion.prototype, "createdDate", {
        get: function () { return this.religionForm.get('createdDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editReligion.prototype, "updatedDate", {
        get: function () { return this.religionForm.get('updatedDate'); },
        enumerable: true,
        configurable: true
    });
    editReligion = __decorate([
        core_1.Component({
            selector: 'editReligion',
            templateUrl: './EditReligion.component.html'
        })
    ], editReligion);
    return editReligion;
}());
exports.editReligion = editReligion;
//# sourceMappingURL=EditReligion.component.js.map