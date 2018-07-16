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
var editCaste = /** @class */ (function () {
    function editCaste(_fb, _avRoute, _casteService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._casteService = _casteService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.casteForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            createdBy: [''],
            updatedBy: [''],
            createdDate: [''],
            updatedDate: ['']
        });
    }
    editCaste.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._casteService.getCasteById(this.id)
                .subscribe(function (resp) { return _this.casteForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editCaste.prototype.save = function () {
        var _this = this;
        if (!this.casteForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._casteService.updateCaste(this.casteForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/catse-and-religion']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editCaste.prototype.cancel = function () {
        this._router.navigate(['/catse-and-religion']);
    };
    Object.defineProperty(editCaste.prototype, "name", {
        get: function () { return this.casteForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCaste.prototype, "createdBy", {
        get: function () { return this.casteForm.get('createdBy'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCaste.prototype, "updatedBy", {
        get: function () { return this.casteForm.get('updatedBy'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCaste.prototype, "createdDate", {
        get: function () { return this.casteForm.get('createdDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editCaste.prototype, "updatedDate", {
        get: function () { return this.casteForm.get('updatedDate'); },
        enumerable: true,
        configurable: true
    });
    editCaste = __decorate([
        core_1.Component({
            selector: 'editCaste',
            templateUrl: './EditCaste.component.html'
        })
    ], editCaste);
    return editCaste;
}());
exports.editCaste = editCaste;
//# sourceMappingURL=EditCaste.component.js.map