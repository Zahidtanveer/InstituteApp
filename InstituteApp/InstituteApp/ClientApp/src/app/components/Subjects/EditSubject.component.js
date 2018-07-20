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
var editSubject = /** @class */ (function () {
    function editSubject(_fb, _router, _subjectService, _avRoute) {
        this._fb = _fb;
        this._router = _router;
        this._subjectService = _subjectService;
        this._avRoute = _avRoute;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.subjectForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            code: ['', [forms_1.Validators.required]],
            description: [''],
            assignedSubjects: ['']
        });
    }
    editSubject.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this._subjectService.getSubjectById(this.id)
                .subscribe(function (resp) { return _this.subjectForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editSubject.prototype.save = function () {
        var _this = this;
        if (!this.subjectForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._subjectService.updateSubject(this.subjectForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/subjects']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editSubject.prototype.cancel = function () {
        this._router.navigate(['/subjects']);
    };
    Object.defineProperty(editSubject.prototype, "name", {
        get: function () { return this.subjectForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubject.prototype, "code", {
        get: function () { return this.subjectForm.get('code'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSubject.prototype, "description", {
        get: function () { return this.subjectForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    editSubject = __decorate([
        core_1.Component({
            selector: 'editSubjects',
            templateUrl: './EditSubject.component.html'
        })
    ], editSubject);
    return editSubject;
}());
exports.editSubject = editSubject;
//# sourceMappingURL=EditSubject.component.js.map