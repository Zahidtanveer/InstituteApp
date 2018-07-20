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
var createAcadamic = /** @class */ (function () {
    function createAcadamic(_fb, _avRoute, _acadamicService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._acadamicService = _acadamicService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.acadamicForm = this._fb.group({
            id: 0,
            StartYear: ['', [forms_1.Validators.required]],
            StartMonth: ['', [forms_1.Validators.required]],
            EndYear: ['', [forms_1.Validators.required]],
            EndMonth: ['', [forms_1.Validators.required]],
            IsActive: ['', [forms_1.Validators.required]]
        });
    }
    createAcadamic.prototype.ngOnInit = function () {
    };
    createAcadamic.prototype.save = function () {
        var _this = this;
        if (!this.acadamicForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._acadamicService.saveAcadamic(this.acadamicForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/acadamic']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createAcadamic.prototype.cancel = function () {
        this._router.navigate(['/acadamic']);
    };
    Object.defineProperty(createAcadamic.prototype, "StartYear", {
        get: function () { return this.acadamicForm.get('StartYear'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAcadamic.prototype, "StartMonth", {
        get: function () { return this.acadamicForm.get('StartMonth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAcadamic.prototype, "EndYear", {
        get: function () { return this.acadamicForm.get('EndYear'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAcadamic.prototype, "EndMonth", {
        get: function () { return this.acadamicForm.get('EndMonth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createAcadamic.prototype, "IsActive", {
        get: function () { return this.acadamicForm.get('IsActive'); },
        enumerable: true,
        configurable: true
    });
    createAcadamic = __decorate([
        core_1.Component({
            selector: 'createAcadamic',
            templateUrl: './AddAcadamic.component.html'
        })
    ], createAcadamic);
    return createAcadamic;
}());
exports.createAcadamic = createAcadamic;
//# sourceMappingURL=AddAcadamic.component.js.map