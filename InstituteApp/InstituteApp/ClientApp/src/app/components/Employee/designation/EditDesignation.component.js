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
var editDesignation = /** @class */ (function () {
    function editDesignation(_fb, _avRoute, _designationService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._designationService = _designationService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.designationForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]]
        });
    }
    editDesignation.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._designationService.getDesignationById(this.id)
                .subscribe(function (resp) { return _this.designationForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editDesignation.prototype.save = function () {
        var _this = this;
        if (!this.designationForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._designationService.updateDesignation(this.designationForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/designation']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editDesignation.prototype.cancel = function () {
        this._router.navigate(['/designation']);
    };
    Object.defineProperty(editDesignation.prototype, "name", {
        get: function () { return this.designationForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    editDesignation = __decorate([
        core_1.Component({
            selector: 'editDesignation',
            templateUrl: './EditDesignation.component.html'
        })
    ], editDesignation);
    return editDesignation;
}());
exports.editDesignation = editDesignation;
//# sourceMappingURL=EditDesignation.component.js.map