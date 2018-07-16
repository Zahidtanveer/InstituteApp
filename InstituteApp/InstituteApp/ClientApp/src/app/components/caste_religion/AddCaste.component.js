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
var alert_service_1 = require("../../services/alert.service");
var createCaste = /** @class */ (function () {
    function createCaste(_fb, _avRoute, _casteService, _router, _alertService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._casteService = _casteService;
        this._router = _router;
        this._alertService = _alertService;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.casteForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]]
        });
    }
    createCaste.prototype.ngOnInit = function () {
    };
    createCaste.prototype.save = function () {
        var _this = this;
        if (!this.casteForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._casteService.saveCaste(this.casteForm.value)
                .subscribe(function (data) {
                setTimeout(function () {
                    _this._alertService.showMessage("New Entry", "Addedd Successfully !", alert_service_1.MessageSeverity.success);
                }, 500);
                _this._router.navigate(['/catse-and-religion']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createCaste.prototype.cancel = function () {
        this._router.navigate(['/catse-and-religion']);
    };
    Object.defineProperty(createCaste.prototype, "Name", {
        get: function () { return this.casteForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    createCaste = __decorate([
        core_1.Component({
            selector: 'createCaste',
            templateUrl: './AddCaste.component.html'
        })
    ], createCaste);
    return createCaste;
}());
exports.createCaste = createCaste;
//# sourceMappingURL=AddCaste.component.js.map