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
var createDesignation = /** @class */ (function () {
    function createDesignation(_fb, _avRoute, _designationService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._designationService = _designationService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.designationForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]]
        });
    }
    createDesignation.prototype.save = function () {
        var _this = this;
        if (!this.designationForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._designationService.saveDesignation(this.designationForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/designation']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createDesignation.prototype.cancel = function () {
        this._router.navigate(['/designation']);
    };
    Object.defineProperty(createDesignation.prototype, "Name", {
        get: function () { return this.designationForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    createDesignation = __decorate([
        core_1.Component({
            selector: 'createDesignation',
            templateUrl: './AddDesignation.component.html'
        })
    ], createDesignation);
    return createDesignation;
}());
exports.createDesignation = createDesignation;
//# sourceMappingURL=AddDesignation.component.js.map