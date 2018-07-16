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
var createSyllabus = /** @class */ (function () {
    function createSyllabus(_fb, _avRoute, _syllabusService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._syllabusService = _syllabusService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.syllabusForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]],
            Description: ['', [forms_1.Validators.required]],
            Code: ['', [forms_1.Validators.required]],
        });
    }
    createSyllabus.prototype.save = function () {
        var _this = this;
        if (!this.syllabusForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._syllabusService.saveSyllabus(this.syllabusForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/Syllabus']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createSyllabus.prototype.cancel = function () {
        this._router.navigate(['/Syllabus']);
    };
    Object.defineProperty(createSyllabus.prototype, "Name", {
        get: function () { return this.syllabusForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSyllabus.prototype, "Description", {
        get: function () { return this.syllabusForm.get('Description'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSyllabus.prototype, "Code", {
        get: function () { return this.syllabusForm.get('Code'); },
        enumerable: true,
        configurable: true
    });
    createSyllabus = __decorate([
        core_1.Component({
            selector: 'createSyllabus',
            templateUrl: './AddSyllabus.component.html'
        })
    ], createSyllabus);
    return createSyllabus;
}());
exports.createSyllabus = createSyllabus;
//# sourceMappingURL=AddSyllabus.component.js.map