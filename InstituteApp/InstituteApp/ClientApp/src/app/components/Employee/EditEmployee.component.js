"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var editEmployee = /** @class */ (function () {
    function editEmployee(_fb, _avRoute, _employeeService, _dataService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._employeeService = _employeeService;
        this._dataService = _dataService;
        this._router = _router;
        this.title = "Edit";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.employeeForm = this._fb.group({
            id: 0,
            employeeCode: [''],
            joiningDate: [''],
            qualification: [''],
            department: [''],
            designation: [''],
            totalExperience: [''],
            personalDetails_FirstName: [''],
            personalDetails_MiddleName: [''],
            personalDetails_LastName: [''],
            personalDetails_DateOfBirth: [''],
            personalDetails_Gender: [''],
            personalDetails_CNIC: [''],
            personalDetails_EmployeeId: [''],
            contactDetails_PresentAddress: [''],
            contactDetails_PermanentAddress: [''],
            contactDetails_City: [''],
            contactDetails_PostalCode: [''],
            contactDetails_Country: [''],
            contactDetails_State: [''],
            contactDetails_Phone: [''],
            contactDetails_Mobile: [''],
            contactDetails_Email: ['']
        });
        this.getDepartment();
        this.getDesignation();
        this.getUserTypes();
        this.getState();
        this.getCountry();
    }
    editEmployee.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this._employeeService.getEmployeeById(this.id)
                .subscribe(function (resp) { return _this.employeeForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editEmployee.prototype.getCountry = function () {
        var _this = this;
        this._dataService.getCountries()
            .subscribe(function (data) { _this.countryList = data; });
    };
    editEmployee.prototype.getState = function () {
        var _this = this;
        this._dataService.getStates()
            .subscribe(function (data) { _this.stateList = data; });
    };
    editEmployee.prototype.getUserTypes = function () {
        var _this = this;
        this._dataService.getUserTypes()
            .subscribe(function (data) { _this.userTypes = data; });
    };
    editEmployee.prototype.getDepartment = function () {
        var _this = this;
        this._dataService.getDepartment()
            .subscribe(function (data) { _this.departmentList = data; });
    };
    editEmployee.prototype.getDesignation = function () {
        var _this = this;
        this._dataService.getDesignation()
            .subscribe(function (data) { _this.designationList = data; });
    };
    editEmployee.prototype.OnCountrySelection = function ($event) {
        this.BindStates();
    };
    editEmployee.prototype.BindStates = function () {
        var countryID = this.employeeForm.controls["contactDetails_Country"].value;
        console.log(countryID);
        console.log(this.stateList);
        this.subStateList = this.stateList.filter(function (x) { return x.countryId == countryID && x !== null; });
    };
    editEmployee.prototype.save = function () {
        var _this = this;
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/employee']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editEmployee.prototype.cancel = function () {
        this._router.navigate(['/employee']);
    };
    Object.defineProperty(editEmployee.prototype, "employeeCode", {
        get: function () { return this.employeeForm.get('EmployeeCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "joiningDate", {
        get: function () { return this.employeeForm.get('JoiningDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "qualification", {
        get: function () { return this.employeeForm.get('Qualification'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "department", {
        get: function () { return this.employeeForm.get('Department'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "designation", {
        get: function () { return this.employeeForm.get('Designation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "totalExperience", {
        get: function () { return this.employeeForm.get('TotalExperience'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "personalDetails_FirstName", {
        get: function () { return this.employeeForm.get('personalDetails_FirstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "personalDetails_MiddleName", {
        get: function () { return this.employeeForm.get('personalDetails_MiddleName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "personalDetails_LastName", {
        get: function () { return this.employeeForm.get('personalDetails_LastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "personalDetails_DateOfBirth", {
        get: function () { return this.employeeForm.get(' personalDetails_DateOfBirth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "personalDetails_Gender", {
        get: function () { return this.employeeForm.get('personalDetails_Gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "personalDetails_CNIC", {
        get: function () { return this.employeeForm.get('personalDetails_CNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_PresentAddress", {
        get: function () { return this.employeeForm.get('contactDetails_PresentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_PermanentAddress", {
        get: function () { return this.employeeForm.get('contactDetails_PermanentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_City", {
        get: function () { return this.employeeForm.get('contactDetails_City'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_PostalCode", {
        get: function () { return this.employeeForm.get('contactDetails_PostalCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_Country", {
        get: function () { return this.employeeForm.get('contactDetails_Country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_State", {
        get: function () { return this.employeeForm.get('contactDetails_State'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_Phone", {
        get: function () { return this.employeeForm.get('contactDetails_Phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_Mobile", {
        get: function () { return this.employeeForm.get('contactDetails_Mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editEmployee.prototype, "contactDetails_Email", {
        get: function () { return this.employeeForm.get('contactDetails_Email'); },
        enumerable: true,
        configurable: true
    });
    editEmployee = __decorate([
        core_1.Component({
            selector: 'EditEmployee',
            templateUrl: './EditEmployee.component.html'
        })
    ], editEmployee);
    return editEmployee;
}());
exports.editEmployee = editEmployee;
//# sourceMappingURL=EditEmployee.component.js.map