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
var editBatch = /** @class */ (function () {
    function editBatch(_fb, _avRoute, _batchService, _courseService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._batchService = _batchService;
        this._courseService = _courseService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.batchForm = this._fb.group({
            id: 0,
            name: ['', [forms_1.Validators.required]],
            courseId: ['', [forms_1.Validators.required]],
            satrtDate: ['', [forms_1.Validators.required]],
            endDate: ['', [forms_1.Validators.required]],
            maxNumberOfStudent: ['', [forms_1.Validators.required]],
            course: [''],
            batchTeachers: ['']
        });
        this.getCourses();
    }
    editBatch.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._batchService.getBatchById(this.id)
                .subscribe(function (resp) { return _this.batchForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
        //console.log(this.batchForm.controls['satrtDate'].value);
        //var startDate = Utilities.parseDate(this.batchForm.controls['satrtDate'].value);
        //var endDate = Utilities.parseDate(this.batchForm.controls['endDate'].value);
        //console.log("Start :" + startDate + "| End :" + endDate);
    };
    editBatch.prototype.ngAfterViewInit = function () {
    };
    editBatch.prototype.getCourses = function () {
        var _this = this;
        this._courseService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    editBatch.prototype.save = function () {
        var _this = this;
        if (!this.batchForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._batchService.updateBatch(this.batchForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/Batch']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editBatch.prototype.cancel = function () {
        this._router.navigate(['/Batch']);
    };
    Object.defineProperty(editBatch.prototype, "courseId", {
        get: function () { return this.batchForm.get('courseId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editBatch.prototype, "name", {
        get: function () { return this.batchForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editBatch.prototype, "satrtDate", {
        get: function () { return this.batchForm.get('satrtDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editBatch.prototype, "endDate", {
        get: function () { return this.batchForm.get('endDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editBatch.prototype, "maxNumberOfStudent", {
        get: function () { return this.batchForm.get('maxNumberOfStudent'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editBatch.prototype, "course", {
        get: function () { return this.batchForm.get('course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editBatch.prototype, "batchTeachers", {
        get: function () { return this.batchForm.get('batchTeachers'); },
        enumerable: true,
        configurable: true
    });
    editBatch = __decorate([
        core_1.Component({
            selector: 'editBatch',
            templateUrl: './EditBatch.component.html'
        })
    ], editBatch);
    return editBatch;
}());
exports.editBatch = editBatch;
//# sourceMappingURL=EditBatch.component.js.map