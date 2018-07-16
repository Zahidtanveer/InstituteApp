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
var editSyllabus = /** @class */ (function () {
    function editSyllabus(_fb, _avRoute, _syllabusService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._syllabusService = _syllabusService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.syllabusForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            description: ['', [forms_1.Validators.required]],
            code: ['', [forms_1.Validators.required]],
            courses: ['']
        });
    }
    editSyllabus.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._syllabusService.getSyllabusById(this.id)
                .subscribe(function (resp) { return _this.syllabusForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editSyllabus.prototype.save = function () {
        var _this = this;
        if (!this.syllabusForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._syllabusService.updateSyllabus(this.syllabusForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/Syllabus']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editSyllabus.prototype.cancel = function () {
        this._router.navigate(['/Syllabus']);
    };
    Object.defineProperty(editSyllabus.prototype, "name", {
        get: function () { return this.syllabusForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSyllabus.prototype, "description", {
        get: function () { return this.syllabusForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSyllabus.prototype, "code", {
        get: function () { return this.syllabusForm.get('code'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editSyllabus.prototype, "courses", {
        get: function () { return this.syllabusForm.get('courses'); },
        enumerable: true,
        configurable: true
    });
    editSyllabus = __decorate([
        core_1.Component({
            selector: 'editSyllabus',
            templateUrl: './EditSyllabus.component.html'
        })
    ], editSyllabus);
    return editSyllabus;
}());
exports.editSyllabus = editSyllabus;
//# sourceMappingURL=EditSyllabus.Component.js.map