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
var createSubjects = /** @class */ (function () {
    function createSubjects(_fb, _router, _subjectService) {
        this._fb = _fb;
        this._router = _router;
        this._subjectService = _subjectService;
        this.title = "Create";
        this.subjectForm = this._fb.group({
            id: 0,
            Name: ['', [forms_1.Validators.required]],
            Code: ['', [forms_1.Validators.required]],
            Description: [''],
        });
    }
    createSubjects.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._subjectService.saveSubject(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/subjects']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createSubjects.prototype.cancel = function () {
        this._router.navigate(['/subjects']);
    };
    Object.defineProperty(createSubjects.prototype, "Name", {
        get: function () { return this.subjectForm.get('Name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSubjects.prototype, "Code", {
        get: function () { return this.subjectForm.get('Code'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createSubjects.prototype, "Description", {
        get: function () { return this.subjectForm.get('Description'); },
        enumerable: true,
        configurable: true
    });
    createSubjects = __decorate([
        core_1.Component({
            selector: 'createSubjects',
            templateUrl: './AddSubjects.component.html'
        })
    ], createSubjects);
    return createSubjects;
}());
exports.createSubjects = createSubjects;
//# sourceMappingURL=AddSubjects.component.js.map