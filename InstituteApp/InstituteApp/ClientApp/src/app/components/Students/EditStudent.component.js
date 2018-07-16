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
var editStudent = /** @class */ (function () {
    function editStudent(_fb, _avRoute, _router, _studentService, _dataService) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._router = _router;
        this._studentService = _studentService;
        this._dataService = _dataService;
        this.title = "";
        if (this._avRoute.snapshot.params["Id"]) {
            this.id = this._avRoute.snapshot.params["Id"];
        }
        this.studentForm = this._fb.group({
            id: 0,
            //Official Detail
            acadamicYear: ['', [forms_1.Validators.required]],
            registerNumber: [''],
            joiningDate: [''],
            course: [''],
            batch: [''],
            rollNo: [''],
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
            contactDetails_PresentAddress: [''],
            contactDetails_PermanentAddress: [''],
            contactDetails_City: [''],
            contactDetails_PostalCode: [''],
            contactDetails_Country: [''],
            contactDetails_State: [''],
            contactDetails_Phone: [''],
            contactDetails_Mobile: [''],
            contactDetails_Email: [''],
            fatherName: [''],
            fatherJob: [''],
            fatherMobile: [''],
            fatherCNIC: [''],
            motherName: [''],
            motherJob: [''],
            motherMobile: [''],
            motherCNIC: [''],
            guardianID: [''],
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
            schoolName: [''],
            schoolAddress: [''],
            qualification: ['']
        });
        //Bind DropDownLists
        this.getState();
        this.getCountry();
        this.getCaste();
        this.getReligion();
        this.getBatch();
        this.getCourse();
    }
    editStudent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id > 0) {
            this.title = "Edit";
            this._studentService.getStudentById(this.id)
                .subscribe(function (resp) { return _this.studentForm.setValue(resp); }, function (error) { return _this.errorMessage = error; });
        }
    };
    editStudent.prototype.getCountry = function () {
        var _this = this;
        this._dataService.getCountries()
            .subscribe(function (data) { _this.countryList = data; });
    };
    editStudent.prototype.getState = function () {
        var _this = this;
        this._dataService.getStates()
            .subscribe(function (data) { _this.stateList = data; });
    };
    editStudent.prototype.getCaste = function () {
        var _this = this;
        this._dataService.getCaste()
            .subscribe(function (data) { _this.casteList = data; });
    };
    editStudent.prototype.getReligion = function () {
        var _this = this;
        this._dataService.getReligion()
            .subscribe(function (data) { _this.religionList = data; });
    };
    editStudent.prototype.getBatch = function () {
        var _this = this;
        this._dataService.getBatch()
            .subscribe(function (data) { _this.batchList = data; });
    };
    editStudent.prototype.getCourse = function () {
        var _this = this;
        this._dataService.getCourse()
            .subscribe(function (data) { _this.courseList = data; });
    };
    editStudent.prototype.OnCountrySelectionc = function ($event) {
        var countryID = this.studentForm.controls["contactDetails_Country"].value;
        this.csubStateList = this.stateList.filter(function (x) { return x.countryId == countryID && x !== null; });
    };
    editStudent.prototype.OnCountrySelectiong = function ($event) {
        var countryID = this.studentForm.controls["g_contactDetails_Country"].value;
        console.log(countryID);
        this.gsubStateList = this.stateList.filter(function (x) { return x.countryId == countryID && x !== null; });
    };
    editStudent.prototype.save = function () {
        var _this = this;
        if (!this.studentForm.valid) {
            return;
        }
        if (this.title == "Edit") {
            this._studentService.updateStudent(this.studentForm.value)
                .subscribe(function (data) {
                _this._router.navigate(['/students']);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    editStudent.prototype.cancel = function () {
        this._router.navigate(['/students']);
    };
    Object.defineProperty(editStudent.prototype, "acadamicYear", {
        //Official Detail
        get: function () { return this.studentForm.get('acadamicYear'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "registerNumber", {
        get: function () { return this.studentForm.get('registerNumber'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "joiningDate", {
        get: function () { return this.studentForm.get('joiningDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "course", {
        get: function () { return this.studentForm.get('course'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "batch", {
        get: function () { return this.studentForm.get('batch'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "rollNo", {
        get: function () { return this.studentForm.get('rollNo'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_FirstName", {
        get: function () { return this.studentForm.get('personalDetails_FirstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_MiddleName", {
        get: function () { return this.studentForm.get('personalDetails_MiddleName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_LastName", {
        get: function () { return this.studentForm.get('personalDetails_LastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_DateOfBirth", {
        get: function () { return this.studentForm.get('personalDetails_DateOfBirth'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_Gender", {
        get: function () { return this.studentForm.get('personalDetails_Gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_CNIC", {
        get: function () { return this.studentForm.get('personalDetails_CNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_Category", {
        get: function () { return this.studentForm.get('personalDetails_Category'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_BirthPlace", {
        get: function () { return this.studentForm.get('personalDetails_BirthPlace'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_Nationality", {
        get: function () { return this.studentForm.get('personalDetails_Nationality'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_BloodGroup", {
        get: function () { return this.studentForm.get('personalDetails_BloodGroup'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_Religion", {
        get: function () { return this.studentForm.get('personalDetails_Religion'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_Caste", {
        get: function () { return this.studentForm.get('personalDetails_Caste'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "personalDetails_MotherTongue", {
        get: function () { return this.studentForm.get('personalDetails_MotherTongue'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_PresentAddress", {
        get: function () { return this.studentForm.get('contactDetails_PresentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_PermanentAddress", {
        get: function () { return this.studentForm.get('contactDetails_PermanentAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_City", {
        get: function () { return this.studentForm.get('contactDetails_City'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_PostalCode", {
        get: function () { return this.studentForm.get('contactDetails_PostalCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_Country", {
        get: function () { return this.studentForm.get('contactDetails_Country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_State", {
        get: function () { return this.studentForm.get('contactDetails_State'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_Phone", {
        get: function () { return this.studentForm.get('contactDetails_Phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_Mobile", {
        get: function () { return this.studentForm.get('contactDetails_Mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "contactDetails_Email", {
        get: function () { return this.studentForm.get('contactDetails_Email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "fatherName", {
        get: function () { return this.studentForm.get('fatherName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "fatherJob", {
        get: function () { return this.studentForm.get('fatherJob'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "fatherMobile", {
        get: function () { return this.studentForm.get('fatherMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "fatherCNIC", {
        get: function () { return this.studentForm.get('fatherCNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "motherName", {
        get: function () { return this.studentForm.get('motherName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "motherJob", {
        get: function () { return this.studentForm.get('motherJob'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "motherMobile", {
        get: function () { return this.studentForm.get('motherMobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "motherCNIC", {
        get: function () { return this.studentForm.get('motherCNIC'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "guardianID", {
        get: function () { return this.studentForm.get('guardianID'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_Name", {
        get: function () { return this.studentForm.get('g_Name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_Relation", {
        get: function () { return this.studentForm.get('g_Relation'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_Education", {
        get: function () { return this.studentForm.get('g_Education'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_Income", {
        get: function () { return this.studentForm.get('g_Income'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_Occuption", {
        get: function () { return this.studentForm.get('g_Occuption'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_Address", {
        get: function () { return this.studentForm.get('g_contactDetails_Address'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_City", {
        get: function () { return this.studentForm.get('g_contactDetails_City'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_PostalCode", {
        get: function () { return this.studentForm.get('g_contactDetails_PostalCode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_Country", {
        get: function () { return this.studentForm.get('g_contactDetails_Country'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_State", {
        get: function () { return this.studentForm.get('g_contactDetails_State'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_Phone", {
        get: function () { return this.studentForm.get('g_contactDetails_Phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_Mobile", {
        get: function () { return this.studentForm.get('g_contactDetails_Mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "g_contactDetails_Email", {
        get: function () { return this.studentForm.get('g_contactDetails_Email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "schoolName", {
        get: function () { return this.studentForm.get('schoolName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "schoolAddress", {
        get: function () { return this.studentForm.get('schoolAddress'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(editStudent.prototype, "qualification", {
        get: function () { return this.studentForm.get('qualification'); },
        enumerable: true,
        configurable: true
    });
    editStudent = __decorate([
        core_1.Component({
            selector: 'editStudent',
            templateUrl: './EditStudent.component.html'
        })
    ], editStudent);
    return editStudent;
}());
exports.editStudent = editStudent;
//# sourceMappingURL=EditStudent.component.js.map