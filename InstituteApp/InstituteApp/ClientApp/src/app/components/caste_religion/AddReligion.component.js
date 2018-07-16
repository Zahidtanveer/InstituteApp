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
var createReligion = /** @class */ (function () {
    function createReligion(_fb, _avRoute, _religionService, _router, _alertService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._religionService = _religionService;
        this._router = _router;
        this._alertService = _alertService;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.religionForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]]
        });
    }
    createReligion.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._religionService.getReligionById(this.id)
                .subscribe(function (resp) { return _this.religionForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    createReligion.prototype.save = function () {
        var _this = this;
        if (!this.religionForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._religionService.saveReligion(this.religionForm.value)
                .subscribe(function (data) {
                setTimeout(function () {
                    _this._alertService.showMessage("New Entry", "Addedd Successfully !", alert_service_1.MessageSeverity.success);
                }, 500);
                _this._router.navigate(['/catse-and-religion']);
            }, function (error) { return _this.errorMessage = error; });
        }
        else if (this.title == "Edit") {
            this._religionService.updateReligion(this.religionForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/catse-and-religion']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createReligion.prototype.cancel = function () {
        this._router.navigate(['/catse-and-religion']);
    };
    Object.defineProperty(createReligion.prototype, "Name", {
        get: function () { return this.religionForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    createReligion = __decorate([
        core_1.Component({
            selector: 'createReligion',
            templateUrl: './AddReligion.component.html'
        })
    ], createReligion);
    return createReligion;
}());
exports.createReligion = createReligion;
//# sourceMappingURL=AddReligion.component.js.map