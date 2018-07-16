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
var createStudent = /** @class */ (function () {
    function createStudent(_fb, _avRoute, _router, _studentService, _dataService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._router = _router;
        this._studentService = _studentService;
        this._dataService = _dataService;
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.studentForm = this._fb.group({
            id: 0,
            //Official Detail
            AcadamicYear: ['', [forms_1.Validators.required]],
            RegisterNumber: [''],
            JoiningDate: [''],
            Course: [''],
            Batch: [''],
            RollNo: [''],
            personalDetails_FirstName: [''],
            personalDetails_MiddleName: [''],
            personalDetails_LastName: [''],
            personalDetails_DateOfBirth: [''],
            personalDetails_Gender: [''],
            personalDetails_CNIC: [''],
            personalDetails_MotherTongue: [''],
            personalDetails_Category: [''],
            personalDetails_BirthPlace: [''],
            personalDetails_Nationality: [''],
            personalDetails_BloodGroup: [''],
            personalDetails_Religion: [''],
            personalDetails_Caste: [''],
            contactDetails_PresentAddress: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(15), forms_1.Validators.maxLength(500)])],
            contactDetails_PermanentAddress: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(15), forms_1.Validators.maxLength(500)])],
            contactDetails_City: [''],
            contactDetails_PostalCode: [''],
            contactDetails_Country: [''],
            contactDetails_State: [''],
            contactDetails_Phone: [''],
            contactDetails_Mobile: [''],
            contactDetails_Email: [''],
            FatherName: [''],
            FatherJob: [''],
            FatherMobile: [''],
            FatherCNIC: [''],
            MotherName: [''],
            MotherJob: [''],
            MotherMobile: [''],
            MotherCNIC: [''],
            g_Name: ['', [forms_1.Validators.required]],
            g_Relation: [''],
            g_Education: [''],
            g_Occuption: ['', [forms_1.Validators.required]],
            g_Income: [''],
            g_contactDetails_Address: [''],
            g_contactDetails_City: [''],
            g_contactDetails_PostalCode: [''],
            g_contactDetails_Country: [''],
            g_contactDetails_State: [''],
            g_contactDetails_Phone: [''],
            g_contactDetails_Mobile: [''],
            g_contactDetails_Email: [''],
            SchoolName: [''],
            SchoolAddress: [''],
            Qualification: ['']
        });
        //Bind DropDownLists
        this.getState();
        this.getCountry();
        this.getCaste();
        this.getReligion();
        this.getBatch();
        this.getCourse();
    }
    createStudent.prototype.getCountry = function () {
        var _this = this;
        this._dataService.getCountries()
            .subscribe(function (data) { _this.countryList = data; });
    };
    createStudent.prototype.getState = function () {
        var _this = this;
        this._dataService.getStates()
            .subscribe(function (data) { _this.stateList = data; });
    };
    createStudent.prototype.getCaste = function () {
        var _this = this;
        this._dataService.getCaste()
            .subscribe(function (data) { _this.casteList = data; });
    };
    createStudent.prototype.getReligion = function () {
        var _this = this;
        this._dataService.getReligion()
            .subscribe(function (data) { _this.religionList = data; });
    };
    createStudent.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    createStudent.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    createStudent.prototype.OnCountrySelectionc = function ($event) {
        var countryID = this.studentForm.controls["contactDetails_Country"].value;
        this.csubStateList = this.stateList.filter(function (x) { return x.countryId == countryID && x !== null; });
    };
    createStudent.prototype.OnCountrySelectiong = function ($event) {
        var countryID = this.studentForm.controls["g_contactDetails_Country"].value;
        console.log(countryID);
        this.gsubStateList = this.stateList.filter(function (x) { return x.countryId == countryID && x !== null; });
    };
    createStudent.prototype.save = function () {
        var _this = this;
        if (!this.studentForm.valid) {
            return;
        }
        if (this.title == "Create") {
        }
        this._studentService.saveStudent(this.studentForm.value)
            .subscribe(function (data) {
            _this._router.navigate(['/students']);
        }, function (error) { return _this.errorMessage = error; });
    };
    createStudent.prototype.cancel = function () {
        this._router.navigate(['/students']);
    };
    Object.defineProperty(createStudent.prototype, "AcadamicYear", {
        //Official Detail
        get: function () { return this.studentForm.get('AcadamicYear'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "RegisterNumber", {
        get: function () { return this.studentForm.get('RegisterNumber'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "JoiningDate", {
        get: function () { return this.studentForm.get('JoiningDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "Course", {
        get: function () { return this.studentForm.get('Course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "Batch", {
        get: function () { return this.studentForm.get('Batch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "RollNo", {
        get: function () { return this.studentForm.get('RollNo'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_FirstName", {
        get: function () { return this.studentForm.get('personalDetails_FirstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_MiddleName", {
        get: function () { return this.studentForm.get('personalDetails_MiddleName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_LastName", {
        get: function () { return this.studentForm.get('personalDetails_LastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_DateOfBirth", {
        get: function () { return this.studentForm.get('personalDetails_DateOfBirth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_Gender", {
        get: function () { return this.studentForm.get('personalDetails_Gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_CNIC", {
        get: function () { return this.studentForm.get('personalDetails_CNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_Category", {
        get: function () { return this.studentForm.get('personalDetails_Category'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_BirthPlace", {
        get: function () { return this.studentForm.get('personalDetails_BirthPlace'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_Nationality", {
        get: function () { return this.studentForm.get('personalDetails_Nationality'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_BloodGroup", {
        get: function () { return this.studentForm.get('personalDetails_BloodGroup'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_Religion", {
        get: function () { return this.studentForm.get('personalDetails_Religion'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_Caste", {
        get: function () { return this.studentForm.get('personalDetails_Caste'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "personalDetails_MotherTongue", {
        get: function () { return this.studentForm.get('personalDetails_MotherTongue'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_PresentAddress", {
        get: function () { return this.studentForm.get('contactDetails_PresentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_PermanentAddress", {
        get: function () { return this.studentForm.get('contactDetails_PermanentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_City", {
        get: function () { return this.studentForm.get('contactDetails_City'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_PostalCode", {
        get: function () { return this.studentForm.get('contactDetails_PostalCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_Country", {
        get: function () { return this.studentForm.get('contactDetails_Country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_State", {
        get: function () { return this.studentForm.get('contactDetails_State'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_Phone", {
        get: function () { return this.studentForm.get('contactDetails_Phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_Mobile", {
        get: function () { return this.studentForm.get('contactDetails_Mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "contactDetails_Email", {
        get: function () { return this.studentForm.get('contactDetails_Email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "FatherName", {
        get: function () { return this.studentForm.get('FatherName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "FatherJob", {
        get: function () { return this.studentForm.get('FatherJob'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "FatherMobile", {
        get: function () { return this.studentForm.get('FatherMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "FatherCNIC", {
        get: function () { return this.studentForm.get('FatherCNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "MotherName", {
        get: function () { return this.studentForm.get('MotherName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "MotherJob", {
        get: function () { return this.studentForm.get('MotherJob'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "MotherMobile", {
        get: function () { return this.studentForm.get('MotherMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "MotherCNIC", {
        get: function () { return this.studentForm.get('MotherCNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_Name", {
        get: function () { return this.studentForm.get('g_Name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_Relation", {
        get: function () { return this.studentForm.get('g_Relation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_Education", {
        get: function () { return this.studentForm.get('g_Education'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_Income", {
        get: function () { return this.studentForm.get('g_Income'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_Occuption", {
        get: function () { return this.studentForm.get('g_Occuption'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_Address", {
        get: function () { return this.studentForm.get('g_contactDetails_Address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_City", {
        get: function () { return this.studentForm.get('g_contactDetails_City'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_PostalCode", {
        get: function () { return this.studentForm.get('g_contactDetails_PostalCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_Country", {
        get: function () { return this.studentForm.get('g_contactDetails_Country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_State", {
        get: function () { return this.studentForm.get('g_contactDetails_State'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_Phone", {
        get: function () { return this.studentForm.get('g_contactDetails_Phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_Mobile", {
        get: function () { return this.studentForm.get('g_contactDetails_Mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "g_contactDetails_Email", {
        get: function () { return this.studentForm.get('g_contactDetails_Email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "SchoolName", {
        get: function () { return this.studentForm.get('SchoolName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "SchoolAddress", {
        get: function () { return this.studentForm.get('SchoolAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(createStudent.prototype, "Qualification", {
        get: function () { return this.studentForm.get('Qualification'); },
        enumerable: true,
        configurable: true
    });
    createStudent = __decorate([
        core_1.Component({
            selector: 'createStudent',
            templateUrl: './AddStudent.component.html'
        })
    ], createStudent);
    return createStudent;
}());
exports.createStudent = createStudent;
//# sourceMappingURL=AddStudent.component.js.map