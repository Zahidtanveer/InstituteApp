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
var createEmployee = /** @class */ (function () {
    function createEmployee(_fb, _avRoute, _employeeService, _dataService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._employeeService = _employeeService;
        this._dataService = _dataService;
        this._router = _router;
        this.title = "Create";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.employeeForm = this._fb.group({
            id: 0,
            EmployeeCode: ['', [forms_1.Validators.required]],
            JoiningDate: ['', [forms_1.Validators.required]],
            Department: ['', [forms_1.Validators.required]],
            Designation: ['', [forms_1.Validators.required]],
            Qualification: ['', [forms_1.Validators.required]],
            TotalExperience: ['', [forms_1.Validators.required]],
            personalDetails_FirstName: ['', [forms_1.Validators.required]],
            personalDetails_MiddleName: [''],
            personalDetails_LastName: ['', [forms_1.Validators.required]],
            personalDetails_DateOfBirth: ['', [forms_1.Validators.required]],
            personalDetails_Gender: ['', [forms_1.Validators.required]],
            personalDetails_CNIC: [''],
            personalDetails_EmployeeId: [''],
            contactDetails_PresentAddress: ['', [forms_1.Validators.required]],
            contactDetails_PermanentAddress: [''],
            contactDetails_City: ['', [forms_1.Validators.required]],
            contactDetails_PostalCode: ['', [forms_1.Validators.required]],
            contactDetails_Country: ['', [forms_1.Validators.required]],
            contactDetails_State: ['', [forms_1.Validators.required]],
            contactDetails_Phone: ['', [forms_1.Validators.required]],
            contactDetails_Mobile: ['', [forms_1.Validators.required]],
            contactDetails_Email: ['', [forms_1.Validators.required]]
        });
        this.getDepartment();
        this.getDesignation();
        this.getUserTypes();
        this.getState();
        this.getCountry();
    }
    createEmployee.prototype.ngOnInit = function () {
    };
    createEmployee.prototype.getCountry = function () {
        var _this = this;
        this._dataService.getCountries()
            .subscribe(function (data) { _this.countryList = data; });
    };
    createEmployee.prototype.getState = function () {
        var _this = this;
        this._dataService.getStates()
            .subscribe(function (data) { _this.stateList = data; });
    };
    createEmployee.prototype.getUserTypes = function () {
        var _this = this;
        this._dataService.getUserTypes()
            .subscribe(function (data) { _this.userTypes = data; });
    };
    createEmployee.prototype.getDepartment = function () {
        var _this = this;
        this._dataService.getDepartment()
            .subscribe(function (data) { _this.departmentList = data; });
    };
    createEmployee.prototype.getDesignation = function () {
        var _this = this;
        this._dataService.getDesignation()
            .subscribe(function (data) { _this.designationList = data; });
    };
    createEmployee.prototype.OnCountrySelection = function ($event) {
        var countryID = this.employeeForm.controls["contactDetails_Country"].value;
        console.log(countryID);
        this.subStateList = this.stateList.filter(function (x) { return x.countryId == countryID && x !== null; });
        console.log(this.subStateList);
    };
    createEmployee.prototype.save = function () {
        var _this = this;
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/employee']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    createEmployee.prototype.cancel = function () {
        this._router.navigate(['/employee']);
    };
    Object.defineProperty(createEmployee.prototype, "EmployeeCode", {
        get: function () { return this.employeeForm.get('EmployeeCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "JoiningDate", {
        get: function () { return this.employeeForm.get('JoiningDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "Qualification", {
        get: function () { return this.employeeForm.get('Qualification'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "Department", {
        get: function () { return this.employeeForm.get('Department'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "Designation", {
        get: function () { return this.employeeForm.get('Designation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "TotalExperience", {
        get: function () { return this.employeeForm.get('TotalExperience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_FirstName", {
        get: function () { return this.employeeForm.get('personalDetails_FirstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_MiddleName", {
        get: function () { return this.employeeForm.get('personalDetails_MiddleName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_LastName", {
        get: function () { return this.employeeForm.get('personalDetails_LastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_DateOfBirth", {
        get: function () { return this.employeeForm.get('personalDetails_DateOfBirth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_Gender", {
        get: function () { return this.employeeForm.get('personalDetails_Gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_CNIC", {
        get: function () { return this.employeeForm.get('personalDetails_CNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "personalDetails_EmployeeId", {
        get: function () { return this.employeeForm.get('personalDetails_EmployeeId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_PresentAddress", {
        get: function () { return this.employeeForm.get('contactDetails_PresentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_PermanentAddress", {
        get: function () { return this.employeeForm.get('contactDetails_PermanentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_City", {
        get: function () { return this.employeeForm.get('contactDetails_City'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_PostalCode", {
        get: function () { return this.employeeForm.get('contactDetails_PostalCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_Country", {
        get: function () { return this.employeeForm.get('contactDetails_Country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_State", {
        get: function () { return this.employeeForm.get('contactDetails_State'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_Phone", {
        get: function () { return this.employeeForm.get('contactDetails_Phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_Mobile", {
        get: function () { return this.employeeForm.get('contactDetails_Mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_Email", {
        get: function () { return this.employeeForm.get('contactDetails_Email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createEmployee.prototype, "contactDetails_EmployeeId", {
        get: function () { return this.employeeForm.get('contactDetails_EmployeeId'); },
        enumerable: true,
        configurable: true
    });
    createEmployee = __decorate([
        core_1.Component({
            selector: 'createEmployee',
            templateUrl: './AddEmployee.component.html'
        })
    ], createEmployee);
    return createEmployee;
}());
exports.createEmployee = createEmployee;
//# sourceMappingURL=AddEmployee.component.js.map